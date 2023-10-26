<?php

namespace App\Http\Controllers\auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    public function register(RegisterRequest $request)
    {

        // Creamos el usuario
        $user = User::create([
            'name' => $request->name,
            'last_name' => $request->name,
            'email' => $request->email,
            'password' => $request->password
        ]);

        // Generamos el token
        $token = JWTAuth::fromUser($user);

        return response()->json([
            'user' => $user, 
            'token' => $token,
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            
            if(!$token = JWTAuth::attempt($credentials))
            {
                return response()->json([
                    'message' => 'Las credenciales ingresadas son incorrectas.'
                ]);
            }

        } catch (JWTException $e) {
            return response()->json([
                'error' => 'token no creado'
            ], 500);
        }

        return response()->json(compact('token'));
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}