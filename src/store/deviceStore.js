import {makeAutoObservable} from "mobx"


export default class DeviceStore {
    constructor() {
        this._type = []
        this._brand = []
        this._device = []
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setType(type) {
        this._type = type
    }
    setBrand(brand) {
        this._brand = brand
    }
    setDevice(device) {
        this._device = device
    }
    setSelectedType(selectedType){
        this._selectedType = selectedType
    }
    setSelectedBrand(selectedBran){
        this._selectedBrand = selectedBran
    }

    get types() {
        return this._type
    }
    get brands() {
        return this._brand
    }
    get device() {
        return this._device
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}