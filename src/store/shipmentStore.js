import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShipmentStore = defineStore('shipment', () => {
  const shipments = ref([
    { 
      id: 'TRX-001', 
      origin: 'Jakarta', 
      destination: 'Bandung', 
      status: 'Not Assigned', 
      vehicle: 'Truck', 
      transporter: '' 
    },
    { 
      id: 'TRX-002', 
      origin: 'Surabaya', 
      destination: 'Semarang', 
      status: 'Assigned', 
      vehicle: 'Van', 
      transporter: 'Sandi' 
    },
    { 
      id: 'TRX-003', 
      origin: 'Medan', 
      destination: 'Palembang', 
      status: 'Not Assigned', 
      vehicle: 'Container', 
      transporter: '' 
    },
  ])

  const transporters = ref(['Sandi', 'Budi', 'Rina', 'Andi'])
  const assignTransporter = (id, transporterName) => {
    const item = shipments.value.find(s => s.id === id)
    if (item && transporterName) {
      item.transporter = transporterName
      item.status = 'Assigned'
      return true
    }
    return false
  }

  const simulateUpdates = () => {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * shipments.value.length)
      const statusOptions = ['In Transit', 'Pending', 'Arrived', 'Assigned']
      
      const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)]
      
      shipments.value[randomIndex].status = randomStatus
      console.log(`[Real-time Update] ${shipments.value[randomIndex].id} status changed to: ${randomStatus}`)
    }, 10000) 
  }

  simulateUpdates()
  return { 
    shipments, 
    transporters, 
    assignTransporter 
  }
})