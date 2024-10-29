<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

 const ROLE_ADMIN    = 1;
 const ROLE_OPERATOR = 2;
 const ROLE_USER     = 3;

 use HasFactory;

 protected $fillable = ['name'];

 public function permissions()
 {
  return $this->belongsToMany(Permission::class);
 }

}
