import Header from '../components/Header.js'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center bg-ebony-clay h-screen space-y-4">
        <div>
          <h1 className="text-regent-grey text-lg text-center font-semibold">
            This board is empty. Create a new <br />
            column to get started.
          </h1>
        </div>
        <div className="flex justify-center">
          <button className="text-white flex flex-rown items-center bg-Iris px-4 py-3 rounded-full">
            <div className="pr-2">
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFF"
                  d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
                />
              </svg>
            </div>
            Add New Column
          </button>
        </div>
      </div>
    </div>
  )
}
