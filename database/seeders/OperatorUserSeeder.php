<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OperatorUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
 'name'              => 'eps',
 'email'             => 'kolor@epsdruk.pl',
 'password'          => bcrypt('druk162239'),
 'email_verified_at' => now(),
 'role_id'           => 2, // Operator
]);

    }
}
