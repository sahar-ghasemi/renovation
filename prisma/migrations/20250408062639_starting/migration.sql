-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qoutations" (
    "id" SERIAL NOT NULL,
    "customerId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Pending',

    CONSTRAINT "qoutations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stones" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "width_mm" INTEGER NOT NULL,
    "length_mm" INTEGER NOT NULL,
    "thickness_mm" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "availability" TEXT NOT NULL DEFAULT 'Available',

    CONSTRAINT "stones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stone_polishes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price_per_meter" DOUBLE PRECISION NOT NULL,
    "image_url" TEXT,
    "description" TEXT,

    CONSTRAINT "stone_polishes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotation_stones" (
    "id" SERIAL NOT NULL,
    "quotation_id" INTEGER NOT NULL,
    "stone_polish_id" INTEGER NOT NULL,
    "stone_id" INTEGER NOT NULL,
    "width_mm" INTEGER NOT NULL,
    "length_mm" INTEGER NOT NULL,

    CONSTRAINT "quotation_stones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cutouts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price_per_meter" DOUBLE PRECISION NOT NULL,
    "image_url" TEXT,
    "description" TEXT,

    CONSTRAINT "cutouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotation_cutouts" (
    "id" SERIAL NOT NULL,
    "quotation_id" INTEGER NOT NULL,
    "cutout_id" INTEGER NOT NULL,
    "width_mm" INTEGER NOT NULL,
    "length_mm" INTEGER NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "quotation_cutouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_us" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',

    CONSTRAINT "contact_us_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "qoutations" ADD CONSTRAINT "qoutations_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_stones" ADD CONSTRAINT "quotation_stones_quotation_id_fkey" FOREIGN KEY ("quotation_id") REFERENCES "qoutations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_stones" ADD CONSTRAINT "quotation_stones_stone_polish_id_fkey" FOREIGN KEY ("stone_polish_id") REFERENCES "stone_polishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_stones" ADD CONSTRAINT "quotation_stones_stone_id_fkey" FOREIGN KEY ("stone_id") REFERENCES "stones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_cutouts" ADD CONSTRAINT "quotation_cutouts_quotation_id_fkey" FOREIGN KEY ("quotation_id") REFERENCES "qoutations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_cutouts" ADD CONSTRAINT "quotation_cutouts_cutout_id_fkey" FOREIGN KEY ("cutout_id") REFERENCES "cutouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
