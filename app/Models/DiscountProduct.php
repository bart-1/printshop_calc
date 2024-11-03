<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DiscountProduct extends Model
{

 protected $fillable = ['name'];

 public function roles()
 {
  return $this->belongsToMany(User::class, 'discount_user', 'user_id');
 }

}
