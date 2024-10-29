<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  $allRoles = Role::all()->keyBy('id');

  $permissions = [
   'elevate_users'   => [Role::ROLE_ADMIN],
   'manage_users'    => [Role::ROLE_OPERATOR, Role::ROLE_ADMIN],
   'manage_prices'   => [Role::ROLE_OPERATOR, Role::ROLE_ADMIN],
   'manage_products' => [Role::ROLE_USER, Role::ROLE_ADMIN],
   'set_discount'    => [Role::ROLE_USER, Role::ROLE_ADMIN],
  ];

  foreach ($permissions as $key => $roles) {
   $permission = Permission::create(['name' => $key]);
   foreach ($roles as $role) {
    $allRoles[$role]->permissions()->attach($permission->id);
   }
  }



 }
}
