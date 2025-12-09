define("PvkYacht_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PvkYacht"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "PvkYacht"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_PvkName",
							"caption": "#ResourceString(PDS_PvkName)#",
							"dataValueType": 1,
							"width": 262
						},
						{
							"id": "14c1b2ff-93cb-4116-72dd-ee046ed47609",
							"code": "PDS_PvkPrice",
							"caption": "#ResourceString(PDS_PvkPrice)#",
							"dataValueType": 32,
							"width": 144
						},
						{
							"id": "afae7179-0e6e-2eff-6df2-e81f48cb9e6e",
							"code": "PDS_PvkPassengerCount",
							"caption": "#ResourceString(PDS_PvkPassengerCount)#",
							"dataValueType": 4,
							"width": 207
						},
						{
							"id": "7d638de9-bd80-3e77-2c60-4d89dda2bab4",
							"code": "PDS_PvkDriveType",
							"caption": "#ResourceString(PDS_PvkDriveType)#",
							"dataValueType": 10,
							"width": 274
						},
						{
							"id": "cc6a2280-82c8-2b79-2f07-e8aaffa31512",
							"code": "PDS_PvkStatus",
							"caption": "#ResourceString(PDS_PvkStatus)#",
							"dataValueType": 10,
							"width": 295
						},
						{
							"id": "2a9804da-6668-43c7-62ec-8f407f6fd757",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "PvkYacht",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_PvkName": {
						"modelConfig": {
							"path": "PDS.PvkName"
						}
					},
					"PDS_PvkPrice": {
						"modelConfig": {
							"path": "PDS.PvkPrice"
						}
					},
					"PDS_PvkPassengerCount": {
						"modelConfig": {
							"path": "PDS.PvkPassengerCount"
						}
					},
					"PDS_PvkDriveType": {
						"modelConfig": {
							"path": "PDS.PvkDriveType"
						}
					},
					"PDS_PvkStatus": {
						"modelConfig": {
							"path": "PDS.PvkStatus"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "CreatedOn"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "PvkYacht",
					"attributes": {
						"PvkName": {
							"path": "PvkName"
						},
						"PvkPrice": {
							"path": "PvkPrice"
						},
						"PvkPassengerCount": {
							"path": "PvkPassengerCount"
						},
						"PvkDriveType": {
							"path": "PvkDriveType"
						},
						"PvkStatus": {
							"path": "PvkStatus"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});