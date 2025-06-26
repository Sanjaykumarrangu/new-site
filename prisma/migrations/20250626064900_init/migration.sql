/*
  Warnings:

  - You are about to drop the column `country` on the `Visitor` table. All the data in the column will be lost.
  - You are about to drop the column `ip` on the `Visitor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Visitor_ip_key";

-- AlterTable
ALTER TABLE "Visitor" DROP COLUMN "country",
DROP COLUMN "ip";
