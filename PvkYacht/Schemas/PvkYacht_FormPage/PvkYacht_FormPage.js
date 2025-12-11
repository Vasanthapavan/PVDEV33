define("PvkYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "PvkYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "25e9c73f-5d2d-4926-9976-757cea8728fb",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_qcjo52u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_qcjo52u_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunCalcTicketPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunCalcTicketPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "PvkCalcAverageTicketPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_qcjo52u",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Pushme",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Pushme_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "Pvk.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "settings-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PvkName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PvkName",
					"control": "$PvkName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RegCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PvkRegCode_avedofa",
					"control": "$PDS_PvkRegCode_avedofa",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PriceperdayEUR",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PvkPriceperdayEUR_bc7hxto",
					"control": "$PDS_PvkPriceperdayEUR_bc7hxto",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PvkTicketPrice_nl2qvo2",
					"control": "$PDS_PvkTicketPrice_nl2qvo2",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PvkDriveType_lhsg79s",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PvkDriveType_lhsg79s",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtStatus",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PvkColumn10_6t2sop6",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PvkColumn10_6t2sop6",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_8pdqnt2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8pdqnt2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "YachtStatus",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PassengerCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PvkPassengerCount_bavc53m",
					"control": "$PDS_PvkPassengerCount_bavc53m",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PvkManager_opjljiy",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PvkManager_opjljiy",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PvkColumn12_ex854ya",
					"control": "$PDS_PvkColumn12_ex854ya",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EmailInput_vyrpzb6",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(EmailInput_vyrpzb6_label)#",
					"control": "$PDS_PvkManagerEmail_y8hx3t7",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_vyrpzb6_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PvkCountry_th5rnuy",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PvkCountry_th5rnuy",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "YachtComment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PvkComment_qk99f8k",
					"control": "$PDS_PvkComment_qk99f8k",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PvkCity_cp8xxuq",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PvkCity_cp8xxuq",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "MultiSelect_3jco9iv",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(MultiSelect_3jco9iv_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "PvkParentYacht",
					"selectSchemaName": "PvkYachtCategoryStorage",
					"selectColumnName": "PvkCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_n44lcis",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_n44lcis_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ho59m75",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_n44lcis",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_azvt09w",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ho59m75",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_26em5o4",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_26em5o4_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PvkYachtRental",
							"defaultValues": [
								{
									"attributeName": "PvkParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_azvt09w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_dvqp7h4",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_dvqp7h4_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_g62rfr4DS"
						}
					}
				},
				"parentName": "FlexContainer_azvt09w",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_9ztx08n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_9ztx08n_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_azvt09w",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_85ck2oa",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_85ck2oa_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_g62rfr4"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9ztx08n",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_qq4xgvn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_qq4xgvn_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PvkYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9ztx08n",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_6cpw2lz",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_6cpw2lz_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_6cpw2lz_GridDetail_g62rfr4",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_g62rfr4"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_6cpw2lz_SearchValue",
							"GridDetailSearchFilter_6cpw2lz_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_azvt09w",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_mcorozq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_n44lcis",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_g62rfr4",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_g62rfr4",
					"primaryColumnName": "GridDetail_g62rfr4DS_Id",
					"columns": [
						{
							"id": "66a7b13a-a278-3035-7acc-bcd7a02f00c8",
							"code": "GridDetail_g62rfr4DS_PvkRentalStart",
							"caption": "#ResourceString(GridDetail_g62rfr4DS_PvkRentalStart)#",
							"dataValueType": 8,
							"width": 155
						},
						{
							"id": "322c433d-623c-43ef-e72a-d1e0ccbc2e0b",
							"code": "GridDetail_g62rfr4DS_PvkRentalEnd",
							"caption": "#ResourceString(GridDetail_g62rfr4DS_PvkRentalEnd)#",
							"dataValueType": 8,
							"width": 140
						},
						{
							"id": "3a1610c7-b217-01d7-7a10-ba05f210a5a2",
							"code": "GridDetail_g62rfr4DS_PvkCustomer",
							"caption": "#ResourceString(GridDetail_g62rfr4DS_PvkCustomer)#",
							"dataValueType": 10,
							"width": 200
						},
						{
							"id": "ab9b0403-09fa-fcda-0c81-723685d22d14",
							"code": "GridDetail_g62rfr4DS_PvkParentYacht",
							"caption": "#ResourceString(GridDetail_g62rfr4DS_PvkParentYacht)#",
							"dataValueType": 10
						},
						{
							"id": "4dd21400-65f3-44f0-0adc-d6d294c9144e",
							"code": "GridDetail_g62rfr4DS_PvkManager",
							"caption": "#ResourceString(GridDetail_g62rfr4DS_PvkManager)#",
							"dataValueType": 10
						},
						{
							"id": "795e4a5c-7dd8-5461-ec47-403dba85dc2b",
							"code": "GridDetail_g62rfr4DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_g62rfr4DS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_mcorozq",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PvkName": {
						"modelConfig": {
							"path": "PDS.PvkName"
						}
					},
					"PDS_PvkPrice_gwlrtay": {
						"modelConfig": {
							"path": "PDS.PvkPrice"
						}
					},
					"PDS_PvkDriveType_lhsg79s": {
						"modelConfig": {
							"path": "PDS.PvkDriveType"
						}
					},
					"PDS_PvkDriveType_lhsg79s_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PvkColumn10_6t2sop6": {
						"modelConfig": {
							"path": "PDS.PvkStatus"
						}
					},
					"PDS_PvkColumn10_6t2sop6_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PvkPassengerCount_bavc53m": {
						"modelConfig": {
							"path": "PDS.PvkPassengerCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "Pvk.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PassengerCannotBeLess)#"
								}
							}
						}
					},
					"PDS_PvkColumn12_ex854ya": {
						"modelConfig": {
							"path": "PDS.PvkCrewCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "Pvk.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(CrewCannotBeLess)#"
								}
							}
						}
					},
					"PDS_PvkManager_opjljiy": {
						"modelConfig": {
							"path": "PDS.PvkManager"
						}
					},
					"PDS_PvkManager_opjljiy_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PvkComment_qk99f8k": {
						"modelConfig": {
							"path": "PDS.PvkComment"
						}
					},
					"PDS_PvkRegCode_avedofa": {
						"modelConfig": {
							"path": "PDS.PvkRegCode"
						}
					},
					"PDS_PvkPriceperdayEUR_bc7hxto": {
						"modelConfig": {
							"path": "PDS.PvkPriceperdayEUR"
						},
						"validators": {
							"MySuperValidator": {
								"type": "Pvk.DGValidator",
								"params": {
									"minValue": 300,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_PvkCountry_th5rnuy": {
						"modelConfig": {
							"path": "PDS.PvkCountry"
						}
					},
					"PDS_PvkCountry_th5rnuy_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PvkCity_cp8xxuq": {
						"modelConfig": {
							"path": "PDS.PvkCity"
						}
					},
					"PDS_PvkCity_cp8xxuq_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PvkTicketPrice_nl2qvo2": {
						"modelConfig": {
							"path": "PDS.PvkTicketPrice"
						}
					},
					"PDS_PvkManagerEmail_y8hx3t7": {
						"modelConfig": {
							"path": "PDS.PvkManagerEmail_y8hx3t7"
						}
					},
					"GridDetail_g62rfr4": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_g62rfr4DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_6cpw2lz_GridDetail_g62rfr4",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_g62rfr4_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_g62rfr4DS_PvkRentalStart": {
									"modelConfig": {
										"path": "GridDetail_g62rfr4DS.PvkRentalStart"
									}
								},
								"GridDetail_g62rfr4DS_PvkRentalEnd": {
									"modelConfig": {
										"path": "GridDetail_g62rfr4DS.PvkRentalEnd"
									}
								},
								"GridDetail_g62rfr4DS_PvkCustomer": {
									"modelConfig": {
										"path": "GridDetail_g62rfr4DS.PvkCustomer"
									}
								},
								"GridDetail_g62rfr4DS_PvkParentYacht": {
									"modelConfig": {
										"path": "GridDetail_g62rfr4DS.PvkParentYacht"
									}
								},
								"GridDetail_g62rfr4DS_PvkManager": {
									"modelConfig": {
										"path": "GridDetail_g62rfr4DS.PvkManager"
									}
								},
								"GridDetail_g62rfr4DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_g62rfr4DS.CreatedOn"
									}
								},
								"GridDetail_g62rfr4DS_Id": {
									"modelConfig": {
										"path": "GridDetail_g62rfr4DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_g62rfr4_PredefinedFilter": {
						"value": null
					},
					"MultiSelect_3jco9iv_List_Items_Predefined_Filter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_g62rfr4DS": [
							{
								"attributePath": "PvkParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "PvkYacht",
							"attributes": {
								"PvkManagerEmail_y8hx3t7": {
									"path": "PvkManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_g62rfr4DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PvkYachtRental",
							"attributes": {
								"PvkRentalStart": {
									"path": "PvkRentalStart"
								},
								"PvkRentalEnd": {
									"path": "PvkRentalEnd"
								},
								"PvkCustomer": {
									"path": "PvkCustomer"
								},
								"PvkParentYacht": {
									"path": "PvkParentYacht"
								},
								"PvkManager": {
									"path": "PvkManager"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "Pvk.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_PvkPrice_gwlrtay;
					console.log("Price = " + price);
					request.$context.PDS_PvkComment_qk99f8k = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_PvkPriceperdayEUR_bc7hxto' || 		        // if price changed
					   request.attributeName === 'PDS_PvkPassengerCount_bavc53m' ) { 		// or Passengers count changed
						let price = await request.$context.PDS_PvkPriceperdayEUR_bc7hxto;
						let passengers = await request.$context.PDS_PvkPassengerCount_bavc53m;
						let ticket_price = price / passengers;
						request.$context.PDS_PvkTicketPrice_nl2qvo2 = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{		/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"Pvk.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"Pvk.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}}/**SCHEMA_VALIDATORS*/
	};
});