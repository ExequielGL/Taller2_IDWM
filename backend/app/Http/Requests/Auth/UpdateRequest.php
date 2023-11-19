<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateRequest extends FormRequest
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
            'name' => ['min:3', 'max:255'],
            'last_name' => ['min:3', 'max:255'],
            'email' => ['email', 'unique:clients'],
            'points' => ['numeric', 'min:0']
        ];
    }

    public function messages()
    {
        return[
            'name.min' => 'El campo nombre debe ser mayor a 3 caracteres.',
            'name.max' => 'El campo nombre debe ser menor a 255 caracteres.',
            'last_name.min' => 'El campo apellido debe ser mayor a 3 caracteres.',
            'last_name.max' => 'El campo apellido debe ser menor a 255 caracteres.',
            'email.email' => 'El campo correo electrónico debe tener formato email@dominio.com.',
            'email.unique' => 'El campo correo electrónico debe ser único.',
            'points.numeric' => 'El campo puntos debe ser numérico',
            'points.min' => 'El campo puntos debe ser mayor a 0'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'errors' => $validator->errors(),
        ], 422));
    }
}