<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Models\Doctor;
use App\Models\Patient;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function signup(SignupRequest $request)
    {

        $data = $request->validated();

        $role = $data['role'] ?? 'patient';

        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'role' => $role,
            'password' => bcrypt($data['password'])
        ]);

        if ($role === 'patient') {
            Patient::create([
                'user_id' => $user->id,
              
            ]);
        } elseif ($role === 'admin') {
            Admin::create([
                'user_id' => $user->id,
               
            ]);
        } elseif ($role === 'doctor') {
            Doctor::create([
                'user_id' => $user->id,
               
            ]);
        }
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'The Provided credentials are not correct'
            ], 422);
        }
        /** @var \App\Models\User $user */

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    
    public function logout(Request $request)
    {
        /** @var User $user */
        $user = Auth::user();
        // Revoke the token that was used to authenticate the current request...
        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }

}
