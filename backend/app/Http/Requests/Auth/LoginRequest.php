<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'email'],
            'password' => ['required'],
        ];
    }

    public function messages()
    {
        return[
            'email.require' => 'El campo correo electrónico es obligatorio.',
            'email.email' => 'El campo correo electrónico debe tener formato email@dominio.com.',
            'email.unique' => 'El campo correo electrónico debe ser único.',
            'password.require' => 'El campo contraseña es obligatorio.',
            'password.min' => 'El campo contraseña debe ser mayor a 3 caracteres.',
            'password.max' => 'El campo contraseña debe ser menor a 20 caracteres.',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'errors' => $validator->errors(),
        ], 422));
    }
}