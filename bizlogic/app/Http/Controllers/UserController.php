<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    function login(Request $req)
    {
        $user = User::where('userName', $req->userName)->first();

        if (!$user || !Hash::check($req->password, $user->password)) {
            return ["status" => "Invalid username or password"];
        } else {
            return ["status" => "Login Success"];
        }
    }

    function userList()
    {
        return User::all();
    }
}
