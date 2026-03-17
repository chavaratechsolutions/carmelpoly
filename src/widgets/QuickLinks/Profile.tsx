import Titlebar from '@components/TitleBar'
import React from 'react'

export default function InstitutionProfile() {
  return (
    <div className="px-[5vw] py-[2rem] space-y-5">
      <Titlebar title="INSTITUTION PROFILE" />
      
      <div className="space-y-6">
        {/* Approval Information */}
        <div className="bg-white p-4 rounded-md border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-3">Approval Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">AICTE File No.</p>
              <p>770-54-001/RC/94</p>
            </div>
            <div>
              <p className="font-medium">Date & Period of Last Approval</p>
              <p>South-West/1-7022155007/2020/EOA</p>
              <p>Dt. 30/04/2024</p>
            </div>
          </div>
        </div>

        {/* Institution Details */}
        <div className="bg-white p-4 rounded-md border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-3">Institution Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <p className="font-medium">Name of the Institution</p>
                <p>Carmel Polytechnic College, Alappuzha</p>
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p>Punnapra P.O., Alappuzha, Kerala - 688 004</p>
              </div>
              <div>
                <p className="font-medium">Coordinates</p>
                <p>9.4383461 N 76.3424331 E</p>
              </div>
              <div>
                <p className="font-medium">Category (1)</p>
                <p>Christian Minority Institution</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Contact</p>
                <p>0477-2287825, 2288825</p>
              </div>
              <div>
                <p className="font-medium">Fax</p>
                <p>0477-2286048</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p>carmelpolytechnic@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Website</p>
                <p>www.carmelpoly.in</p>
              </div>
              <div>
                <p className="font-medium">Category (2)</p>
                <p>Co-Education</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="bg-white p-4 rounded-md border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-3">Transportation Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Nearest Railway Station</p>
              <p>Alappuzha Railway Station (6.8 km)</p>
            </div>
            <div>
              <p className="font-medium">Nearest Airport</p>
              <p>Cochin International Airport, Nedumbassry (89 km)</p>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="bg-gray-100 p-4 rounded-md border border-gray-300">
          <h3 className="font-bold text-gray-800 mb-3">Location Map</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.8197585185653!2d76.3424245750593!3d9.437200927238896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089b472295c221%3A0x25b9b8650cf8d875!2sCarmel%20Polytechnic%20College%20Alappuzha!5e0!3m2!1sen!2sin!4v1749352499391!5m2!1sen!2sin"
              width="100%" 
              height="300" 
              style={{border:0}}
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carmel Polytechnic College Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}