

const Filter = () => {
    return (
        <>
            <form>
                <div className="flex align-middle justify-center p-10 bg-white">
                    <input type="email" id="email" className="w-4/5 mr-4 bg-gray-50 caret-pink-500 text-gray-900 text-sm rounded-lg block  p-4 border-2 " placeholder="name@flowbite.com" required />
                    <button type="button" className="flex align-middle items-center  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-28 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> Filter</button>
                </div>
            </form>
        </>
    )
}

export default Filter;