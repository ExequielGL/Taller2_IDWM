<?php

namespace App\Http\Controllers\auth;

use App\Models\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('username', 'password');

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
        // Obtener el usuario autenticado
        $admin = auth()->user();

        // Retornar el token junto con el nombre del usuario
        return response()->json([
            'token' => $token,
            'username' => $admin->username,
        ]);
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