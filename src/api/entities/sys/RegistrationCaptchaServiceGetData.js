// @flow

import {create, TypeRef} from "../../common/EntityFunctions"

export const RegistrationCaptchaServiceGetDataTypeRef: TypeRef<RegistrationCaptchaServiceGetData> = new TypeRef("sys", "RegistrationCaptchaServiceGetData")
export const _TypeModel: TypeModel = {
	"name": "RegistrationCaptchaServiceGetData",
	"since": 40,
	"type": "DATA_TRANSFER_TYPE",
	"id": 1478,
	"rootId": "A3N5cwAFxg",
	"versioned": false,
	"encrypted": false,
	"values": {
		"_format": {"name": "_format", "id": 1479, "since": 40, "type": "Number", "cardinality": "One", "final": false, "encrypted": false},
		"mailAddress": {"name": "mailAddress", "id": 1481, "since": 40, "type": "String", "cardinality": "ZeroOrOne", "final": false, "encrypted": false},
		"token": {"name": "token", "id": 1480, "since": 40, "type": "String", "cardinality": "ZeroOrOne", "final": false, "encrypted": false}
	},
	"associations": {},
	"app": "sys",
	"version": "40"
}

export function createRegistrationCaptchaServiceGetData(): RegistrationCaptchaServiceGetData {
	return create(_TypeModel)
}