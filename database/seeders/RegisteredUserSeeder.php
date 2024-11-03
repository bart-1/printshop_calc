<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RegisteredUserSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  DB::table('users')->insert([
   'name'                   => "bfagencja",
   'email'                  => "bf@test.pl",
   'password'               => Hash::make('test'),
    'role_id'           => 3, // User
   'discount'               => 10]);
 }
}
