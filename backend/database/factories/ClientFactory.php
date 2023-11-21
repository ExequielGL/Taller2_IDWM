<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $rutNumber = random_int(10000000, 99999999); // Número aleatorio de 8 dígitos
        $verifierDigit = random_int(0, 9); // Dígito verificador aleatorio

        $formattedRut = number_format($rutNumber, 0, '', '.') . '-' . $verifierDigit;

        return [
            'rut_or_dni' => $formattedRut,
            'name' => fake()->name(),
            'last_name' => fake()->lastname(),
            'email' => fake()->unique()->safeEmail(),
            'points' => 0
        ];

    }
}
