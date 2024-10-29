<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
 /**
  * Seed the application's database.
  */
 public function run(): void
 {
  $this->call(RoleSeeder::class);
  $this->call(PermissionSeeder::class);
  $this->call(AdminUserSeeder::class);
  $this->call(OperatorUserSeeder::class);
  $this->call(RegisteredUserSeeder::class);
  $this->call(BcPricesSeeder::class);
  $this->call(A4PrintAndPapersPricesSeeder::class);
  $this->call(FoldStapleLaminBinderyMinPricesSeeder::class);
  $this->call(LargeFormatPricesSeeder::class);
  $this->call(DimesionsAndMultipliersSeeder::class);
  $this->call(PlotterCutPricesSeeder::class);

 }
}
