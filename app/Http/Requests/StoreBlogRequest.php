<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\User;

class StoreBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true;
    }

    // protected function prepareForValidation()
    // {
    //     $this->merge([
    //         'user_id' => $this->user()->id
    //     ]);
    // }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'exists:users,id',
            'title' => 'required|string|max:100',
            'content' => 'required|string',
            'image' => 'nullable|file|mimes:jpg,jpeg,png,gif|max:2048',

        ];
    }
}
