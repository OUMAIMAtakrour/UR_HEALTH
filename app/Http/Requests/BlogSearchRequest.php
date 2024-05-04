<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogSearchRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'query' => 'required|string', // Validation rule for the search query parameter
        ];
    }
}
