<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\UpdateRequest;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::all();
        return response()->json([
            'clients' => $clients
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RegisterRequest $request)
    {
        try{
            DB::beginTransaction();
            $fields=$request->validate([
                'rut_or_dni'=>'required',
                'name'=>'required',
                'last_name'=>'required',
                'email'=>'required|email',
                'points' => 'integer'
            ]);

            $client=Client::create([
                'rut_or_dni'=>$fields['rut_or_dni'],
                'name'=>$fields['name'],
                'last_name'=>$fields['last_name'],
                'email'=>$fields['email'],
                'points' =>$fields['points']
            ]);
            DB::commit();
            return response()->json([
                'message' => 'Cliente creado exitosamente',
                'status' => 200
            ],200);
        }catch (Exception $e){
            DB::rollBack();
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $client = Client::findOrFail($id);
            return response()->json([
                'status' => 'success',
                'client' => $client], 200);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => $exception->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, string $id)
    {
        try {

            $client = Client::findOrFail($id);
            
            DB::beginTransaction();
            $fields = $request->validate([
                'name' => 'sometimes|string|min:3|max:255',
                'last_name' => 'sometimes|string|min:3|max:255',
                'email' => 'sometimes|string|email|unique:clients',
                'points' => 'sometimes|numeric|min:0',
            ]);

            $client->update($fields);
            DB::commit();
            return response()->json([
                'status' => 'success',
                'client' => $client], 200);

        } catch (Exception $e){
            DB::rollBack();
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {   
        try{
            $client = Client::findOrFail($id);
            DB::beginTransaction();
            $client->delete();
            DB::commit();
            return response()->json([
                'message' => 'Deleted success',
                'status' => 200
            ],200);
        }catch (\Exception $exception){
            DB::rollBack();
            throw new \Exception($exception->getMessage());
        }
    }
}
