import React, { useEffect, useState } from "react"

import { getUserIpAddress } from "./getIp" // Correct the import path
import "./style.css"

import { getLocationData } from "./getLocation"

const IndexPopup: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [locationInfo, setLocationInfo] = useState<string | null>(null)

  const handleShowLocation = async () => {
    try {
      setLoading(true)
      const ipAddress = await getUserIpAddress()
      const locationData = await getLocationData(ipAddress)
      const { country, city } = locationData
      setLocationInfo(`Your country is ${country} and city is ${city}`)
    } catch (error) {
      console.error("Error fetching location data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-500 h-500 flex justify-center items-center">
      <div className="bg-2293b0 w-400 h-400 flex flex-col justify-center items-center gap-6">
        {locationInfo && (
          <p className="text-center text-white text-3xl text-bold">{locationInfo}</p>
        )}
        <button
          className={`w-250 h-20 bg-d9d9d9 text-black font-bold text-2xl ${
            loading ? "cursor-wait" : "cursor-pointer"
          }`}
          onClick={handleShowLocation}
          disabled={loading}>
          {loading ? "Loading..." : "Show my location"}
        </button>
      </div>
    </div>
  )
}

export default IndexPopup
