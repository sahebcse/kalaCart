import React from 'react'
import {Link} from 'react-router-dom'

export default function AdminPanel() {
    return (
        <div>
            <div className="grid grid-cols-7">
                <div></div>
                <div className="col-span-5">
                    <div className="grid grid-cols-3">
                    <div> <Link to='/admin/project'>
                        <div class="p-6 max-w-sm mx-auto bg-red-600 rounded-xl hover:bg-black shadow-md flex items-center space-x-4">
                        
                        <div class="flex-shrink-0">
                            <img class="h-12 w-12" src={require('./assets/paper.jpg').default} />
                        </div>
                        <div>
                            <div class="text-xl font-medium text-white">Project Panel</div>
                            <p class="text-gray-200">You have a new message!</p>
                        </div>
                        </div>
                        </Link></div>
                    <div><Link to='/admin/blog'>
                        <div class="p-6 max-w-sm mx-auto bg-green-600 rounded-xl  shadow-md hover:bg-black flex items-center space-x-4">
                        
                        <div class="flex-shrink-0">
                            <img class="h-12 w-12" src={require('./assets/paper.jpg').default} />
                        </div>
                        <div>
                            <div class="text-xl font-medium text-white">Blog Panel</div>
                            <p class="text-gray-200">You have a new message!</p>
                        </div>
                        </div>
                        </Link></div>
                    <div><Link to='/admin/painting'>
                        <div class="p-6 max-w-sm mx-auto bg-blue-600 rounded-xl shadow-md  hover:bg-black flex items-center space-x-4">
                        <div class="flex-shrink-0">
                            <img class="h-12 w-12" src={require('./assets/paper.jpg').default} />
                        </div>
                        <div>
                            <div class="text-xl font-medium text-white">Painting Panel</div>
                            <p class="text-gray-200">You have a new message!</p>
                        </div>
                        </div>
                        </Link></div>
                    
                    </div>
                </div>
                <div></div>
            </div>
            </div>
    
    )
}
