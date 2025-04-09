-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotations" (
    "id" SERIAL NOT NULL,
    "customer_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "final_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "quotations_pkey" PRIMARY KEY ("id")
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
    "stone_polish_id" INTEGER NOT NULL DEFAULT 0,
    "stone_id" INTEGER NOT NULL DEFAULT 0,
    "width_mm" INTEGER NOT NULL,
    "length_mm" INTEGER NOT NULL,
    "stone_name" TEXT NOT NULL,
    "polish_name" TEXT NOT NULL,

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
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_stones" ADD CONSTRAINT "quotation_stones_quotation_id_fkey" FOREIGN KEY ("quotation_id") REFERENCES "quotations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_stones" ADD CONSTRAINT "quotation_stones_stone_polish_id_fkey" FOREIGN KEY ("stone_polish_id") REFERENCES "stone_polishes"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_stones" ADD CONSTRAINT "quotation_stones_stone_id_fkey" FOREIGN KEY ("stone_id") REFERENCES "stones"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_cutouts" ADD CONSTRAINT "quotation_cutouts_quotation_id_fkey" FOREIGN KEY ("quotation_id") REFERENCES "quotations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_cutouts" ADD CONSTRAINT "quotation_cutouts_cutout_id_fkey" FOREIGN KEY ("cutout_id") REFERENCES "cutouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
