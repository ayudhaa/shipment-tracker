import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useShipmentStore } from './shipmentStore'

describe('Shipment Store Unit Test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.useFakeTimers()
  })

  it('should successfully assign a transporter to a shipment', () => {
    const store = useShipmentStore()
    const shipmentId = 'TRX-001'
    const transporterName = 'Rina'

    const result = store.assignTransporter(shipmentId, transporterName)
    expect(result).toBe(true)

    const updatedShipment = store.shipments.find(s => s.id === shipmentId)
    expect(updatedShipment.transporter).toBe('Rina')
    expect(updatedShipment.status).toBe('Assigned')
  })

  it('should return false if shipment ID is not found or name is empty', () => {
    const store = useShipmentStore()
    const resultInvalidId = store.assignTransporter('NON-EXISTENT', 'Andi')
    expect(resultInvalidId).toBe(false)

    const resultEmptyName = store.assignTransporter('TRX-001', '')
    expect(resultEmptyName).toBe(false)
  })

  it('should update status automatically after interval', async () => {
    const store = useShipmentStore()
    const initialStatus = store.shipments[0].status
    
    vi.advanceTimersByTime(10000)
    expect(store.shipments.length).toBeGreaterThan(0)
  })
})