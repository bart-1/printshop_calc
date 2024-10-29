<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  User::create([
   'name'              => 'admin',
   'email'             => 'studio@dziwnykot.pl',
   'password'          => bcrypt('7723'),
   'email_verified_at' => now(),
   'role_id'           => 1, // Administrator
  ]);

 }
}
