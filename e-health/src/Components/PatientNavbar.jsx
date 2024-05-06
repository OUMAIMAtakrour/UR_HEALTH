import { Link } from "react-router-dom";

export default function Example() {
    return (
        <div>
            <ul className="flex py-2 justify-end gap-4 my-6">
                <li>
                  
                    <Link
                        to={"/login"}
                        className="block px-4 py-2 text-sm font-semibold text-gray-400 shadow-lg border-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded"
                    >
                        Sign in
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/signup"}
                        className="block px-4 py-2 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    );
}
