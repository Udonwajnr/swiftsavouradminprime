import React from 'react'

const CategoryTable = () => {
  return (
    <div className="lg:overflow-x-scroll">
            <table className="auto w-full table-fixed mt-3">
                <thead>
                    <tr className="xl:text-xs text-sm">
                    <th className="border border-slate-700  lg:w-16">No.</th>
                    <th className="border border-slate-700  lg:w-36">Episode uuid</th>
                        <th className="border border-slate-700 lg:w-36">Title</th>
                        <th className="border border-slate-700 lg:w-32">Year</th>
                        <th className="border border-slate-700 text-center lg:w-32">SeasonId</th>
                        <th className="border border-slate-700 text-center lg:w-32">Season Title</th>
                        <th className="border border-slate-700 text-center lg:w-32">Genre</th>
                        <th className="border border-slate-700 text-center lg:w-32">Language</th>
                        <th className="border border-slate-700 text-center lg:w-52">Description</th>
                        <th className="border border-slate-700 text-center lg:w-32">Image</th>
                        <th className="border border-slate-700 text-center lg:w-32">Poster Image</th>
                        <th className="border border-slate-700 text-center lg:w-32">Trailer Url</th>
                        <th className="border border-slate-700 text-center lg:w-32">Length Of Vide0</th>
                        <th className="border border-slate-700 text-center lg:w-32">File Link</th>
                        <th className="border border-slate-700 text-center lg:w-32">Subtitle Link</th>
                        <th className="border border-slate-700 text-center lg:w-32">Actors</th>
                        <th className="border border-slate-700 text-center lg:w-32 ">Video Quality</th>
                        <th className="border border-slate-700 text-center lg:w-24">Options</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
  )
}

export default CategoryTable