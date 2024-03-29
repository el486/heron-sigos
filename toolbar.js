﻿var convert=[
			["Pt:",0,3],[" Circ:",3,5],[" Secc:",5,7],
			[" Ch:",7,11],["",11,14],[" Qt:",14,18],["",18,21],
			[" Fr:",21,25],["",25,28],[" Mz:",28,32],["",32,35],
			[" Pc:",35,39],["",39,42]
			];
				
var gridCellRenderers=[
	   {
			   featureType: 'obras_sigos_ref',
			   attrName: 'id_obra',
			   renderer: {
					   fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
	   {
			   featureType: 'obras_sigos_total',
			   attrName: 'id_obra',
			   renderer: {
					   fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
	   {
			   featureType: 'dipsoh_obras_sigos_total',
			   attrName: 'id_obra',
			   renderer: {
						fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
	   {
			   featureType: 'dipsoh_obras_ref',
			   attrName: 'id_obra',
			   renderer: {
						fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
	   {
			   featureType: 'vialidad_obras_sigos_total',
			   attrName: 'id_obra',
			   renderer: {
						fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
	   {
			   featureType: 'vialidad_obras_ref',
			   attrName: 'id_obra',
			   renderer: {
						fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
	   {
			   featureType: 'vivienda_obras_sigos_total',
			   attrName: 'id_obra',
			   renderer: {
						fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
	   {
			   featureType: 'vivienda_obras_ref',
			   attrName: 'id_obra',
			   renderer: {
						fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
	   {
			   featureType: 'dipac_obras_sigos_total',
			   attrName: 'id_obra',
			   renderer: {
						fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
	   {
			   featureType: 'dipac_obras_ref',
			   attrName: 'id_obra',
			   renderer: {
						fn : function(value, metaData, record, rowIndex, colIndex, store) {
																							
							   return '<a href="javascript:void(0)" onclick="popupObras(\''+value+'\');">' + value + '</a>';
							   
					   },
					   options : {
					   }
			   }
	   },
		{
		   featureType: 'parcelas_rt',
		   attrName: 'NOMENCLA',
		   renderer: {
					fn : function(value, metaData, record, rowIndex, colIndex, store) {
						var nomencla='';
						for (var i=0; i<13; i++) {
							var k=convert[i][2];
							for (var j=convert[i][1]; j<k;j++){
								if(value.substring(j,j+1)!='0'){
								nomencla+=convert[i][0]+value.substring(j,k);
								j=k;
								}
							}
						}
						return nomencla
				   },
				   options : {}
		   }
		},
		{
		   featureType: 'parcelas',
		   attrName: 'plano',
		   renderer: {
					fn : function(value, metaData, record, rowIndex, colIndex, store) {
						   return '<a href="http://www.mosp.gba.gov.ar/sistemas/geodesia/ugeodesia/Geodesia/'+value+'(PA).dwf" target="_blank">'+ value +'</a>';
				   },
				   options : {}
		   }
		},
		{
		   featureType: 'parcelas',
		   attrName: 'nomencla',
		   renderer: {
					fn : function(value, metaData, record, rowIndex, colIndex, store) {
						var nomencla='';
						for (var i=0; i<13; i++) {
							var k=convert[i][2];
							for (var j=convert[i][1]; j<k;j++){
								if(value.substring(j,j+1)!='0'){
								nomencla+=convert[i][0]+value.substring(j,k);
								j=k;
								}
							}
						}
					   return nomencla;
				   },
				   options : {}
		   }
		}
];
							
var resultPanel={
					xtype: 'hr_featurepanel',
					id: 'hr-featurepanel',
					header: false,
					border: false,
					autoConfig: true,
					showBottomToolbar:true,
					showTopToolbar:true,
					exportFormats: ['CSV','XLS',
					{
						name: 'Esri Shapefile (WGS84 EPSG:4326)',
						formatter: 'OpenLayersFormatter',
						format: 'OpenLayers.Format.GeoJSON',
						targetFormat: 'ESRI Shapefile',
						targetSrs: 'EPSG:4326',
						fileExt: '.zip',
						mimeType: 'application/zip'
					},
					{
						name: 'DXF (Campo Inchauspe faja 4 - EPSG:22194)',
						formatter: 'OpenLayersFormatter',
						format: 'OpenLayers.Format.GeoJSON',
						targetFormat: 'DXF',
						targetSrs: 'EPSG:22194',
						//sourceSrs: 'EPSG:900913',
						fileExt: '.dxf',
						mimeType: 'application/dxf'
					},
					{
						name: 'DXF (Campo Inchauspe faja 5 - EPSG:22195)',
						formatter: 'OpenLayersFormatter',
						format: 'OpenLayers.Format.GeoJSON',
						targetFormat: 'DXF',
						targetSrs: 'EPSG:22195',
						//sourceSrs: 'EPSG:900913',
						fileExt: '.dxf',
						mimeType: 'application/dxf'
					},
					{
						name: 'DXF (Campo Inchauspe faja 6 - EPSG:22196)',
						formatter: 'OpenLayersFormatter',
						format: 'OpenLayers.Format.GeoJSON',
						targetFormat: 'DXF',
						targetSrs: 'EPSG:22196',
						//sourceSrs: 'EPSG:900913',
						fileExt: '.dxf',
						mimeType: 'application/dxf'
					},
					{
						name: 'KML (Google Earth)',
						formatter: 'OpenLayersFormatter',
						format: 'OpenLayers.Format.GeoJSON',
						targetFormat: 'KML',
						targetSrs: 'EPSG:4326',
						//sourceSrs: 'EPSG:900913',
						fileExt: '.kml',
						mimeType: 'application/kml'
					}
					],
					gridCellRenderers: gridCellRenderers,
					hropts: {
						zoomOnRowDoubleClick: true,
						zoomOnFeatureSelect: false,
						zoomLevelPointSelect: 8,
						zoomToDataExtent: false
					}
				};
							
var toolBarItems=[
		{type: "featureinfo", options: {
        pressed: true,
        popupWindow: {
            width: 320,
            height: 200,
            featureInfoPanel: {
				showTopToolbar: true,
				showBottomToolbar: true,
                //displayPanels: ['Table'],
				displayPanels: ['Table','Detail'],
                //exportFormats: ['CSV', 'XLS', 'GMLv2', 'Shapefile', 'GeoJSON', 'WellKnownText'],
                hideColumns: ['objectid', 'gid'],
                maxFeatures: 10,
                autoConfigMaxSniff: 10,
				gridCellRenderers: gridCellRenderers,
                // In case that the same layer would be requested more than once: discard the styles
                discardStylesForDups: true
				}
			}
		}},
		{type: "-"},
		{type: "scale", options: {width: 110}},
		{type: "-"} ,
		{type: "pan"},
		{type: "zoomin"},
		{type: "zoomout"},
		{type: "zoomvisible"},
		{type: "-"} ,
		{type: "zoomprevious"},
		{type: "zoomnext"},
		{type: "-"},
		{type: "measurelength", options: {geodesic: true}},
		{type: "measurearea", options: {geodesic: true}},
		{type: "-"},
		/*{type: "namesearch",
			// Optional options, see NominatimSearchCombo.js
			options : {
				zoom: 8,
				url: 'http://open.mapquestapi.com/nominatim/v1/search.php?countrycodes=AR&addressdetails=1&format=json&limit=3',
				xtype : 'hr_nominatimsearchcombo',
				tooltip: __('Search Nominatim'),
				id: "nominatimsearchcombo"//,
				//tpl: '<tpl for="."><tpl for="address"><div class="x-combo-list-item">{road} {city} {state} {postcode} {country}</div></tpl></tpl>',
                //displayTpl: '<tpl for="."><tpl for="address">{road} {city} {state} {country}</tpl></tpl>'
			}
		},*/
		{type: "coordinatesearch", options: {

		// === Full demo configuration ===

				// see ToolbarBuilder.js
					  formWidth: 320
					, formPageX: 15
					, formPageY: 200
				// see CoordSearchPanel.js
					// , title: 'My title'
					, titleDescription: 'Elija la proyección de entrada...<br><br>Luego ingrese los valores Lon/Lat o las coordenadas<br>X/Y.<br>&nbsp;<br>'
					, titleDescriptionStyle: 'font-size:11px; color:dimgrey;'
					, bodyBaseCls: 'x-form-back'
					, bodyItemCls: 'hr-html-panel-font-size-11'
					, bodyCls: 'hr-html-panel-font-size-11'
					, fieldMaxWidth: 200
					, fieldLabelWidth: 80
					, fieldStyle: 'color: blue;'
					, fieldLabelStyle: 'color: darkblue'
					, layerName: 'Lon/Lat'
					, onProjectionIndex: 1
					, onZoomLevel: -1
					, showProjection: true
					, showZoom: true
					, showAddMarkers: true
					, checkAddMarkers: true
					, showHideMarkers: true
					, checkHideMarkers: false
					, showResultMarker: true
					, fieldResultMarkerStyle: 'color: green;'
					, fieldResultMarkerText: 'Posicion del marcador: '
					, fieldResultMarkerSeparator: ' | '
					, fieldResultMarkerPrecision: 4
					, removeMarkersOnClose: true
					, showRemoveMarkersBtn: true
					, buttonAlign: 'center'		// left, center, right
					, hropts: [
						{
							  projEpsg: 'EPSG:22195'
							, projDesc: 'EPSG:22195 - Campo Inchauspe/Faja5'
							, fieldLabelX: 'X [m]'
							, fieldLabelY: 'Y [m]'
							, fieldEmptyTextX: 'Ingrese coordenada X...'
							, fieldEmptyTextY: 'Ingrese coordenada Y...'
							, fieldMinX: 4500000
							, fieldMinY: 5000000
							, fieldMaxX: 6500000
							, fieldMaxY: 7000000
							, fieldDecPrecision: 2
							, iconWidth: 32
							, iconHeight: 32
							, localIconFile: 'redpin.png'
							, iconUrl: null
						},
						{
							  projEpsg: 'EPSG:4326'
							, projDesc: 'EPSG:4326 - WGS 84'
							, fieldLabelX: 'Lon [Grad]'
							, fieldLabelY: 'Lat [Grad]'
							, fieldEmptyTextX: 'Ingrese Longitud...'
							, fieldEmptyTextY: 'Ingrese Latitud...'
							, fieldMinX: -180
							, fieldMinY: -90
							, fieldMaxX: 180
							, fieldMaxY: 90
							, fieldDecPrecision: 6
							, iconWidth: 32
							, iconHeight: 32
							, localIconFile: 'bluepin.png'
							, iconUrl: null
						}
					]

		// ====================================

	}},
	{
        type: "searchcenter",
        // Options for SearchPanel window
        options: {
            show: false,
				searchWindow: {
					title: __('Multiple Searches'),
					x: 100,
					y: undefined,
					width: 360,
					height: 440,
					items: [
						{
						xtype: 'hr_multisearchcenterpanel',
						height: 600,
						hropts: [
								/*{
									searchPanel: {
										xtype: 'hr_formsearchpanel',
										name: 'Busqueda de planos Rel Territorial',
										description: 'Busqueda de planos Rel Territorial',
										header: false,
										border: false,
										protocol: new OpenLayers.Protocol.WFS({
											version: "1.1.0"
											,srsName: "EPSG:900913"
											,url: serverURL+"/geoserver/dipsoh/wfs"
											,featureType: "parcelas_rt"
											,featurePrefix: "dipsoh"
											,featureNS : serverURL+"/geoserver/dipsoh_postgis"
										}),
										downloadFormats: [],
										items: [
											{
												xtype: "textfield",
												name: "nomcat__like",
												value: 'Part:',
												fieldLabel: "  Nomcat",
												listeners: { 'change': function(e){ 
														var str=(e.getValue());    
														str=str.split(' ').join('%');
														//console.log(str);
														e.setValue(str);
														}  
													}
											},
											{
												xtype: "textfield",
												name: "num_plano__like",
												value: '55-',
												fieldLabel: "  Num.Plano"
											},
											{
												 xtype: "textfield",
												 name: "obra__like",
												 fieldLabel: "  Obra"
											},
											{
												xtype: "label",
												id: "helplabel",
												html: 'Escriba una parte o un numero de plano completo para buscar.<br/>',
												style: {
													fontSize: '10px',
													color: '#AAAAAA'
												}
											}
										],
										hropts: {
											onSearchCompleteZoom: 9,
											autoWildCardAttach: true,
											caseInsensitiveMatch: true,
											logicalOperator: OpenLayers.Filter.Logical.AND,
											statusPanelOpts: {
												html: '&nbsp;',
												height: 'auto',
												preventBodyReset: true,
												bodyCfg: {
													style: {
														padding: '6px',
														border: '0px'
													}
												},
												style: {
													marginTop: '2px',
													paddingTop: '2px',
													fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
													fontSize: '11px',
													color: '#0000C0'
												}
											}
										}
									},
									resultPanel: resultPanel
								},*/
								{
									searchPanel: {
										xtype: 'hr_formsearchpanel',
										name: 'Busqueda de Obras Sigos',
										description: 'Busqueda de Obras Sigos',
										header: false,
										border: false,
										protocol: new OpenLayers.Protocol.WFS({
											version: "1.1.0"
											,srsName: "EPSG:900913"
											,url: serverURL+"/geoserver/SigosGis/wfs"
											,featureType: "obras_sigos_ref"
											,featurePrefix: "SigosGis"
											,featureNS : "http://192.168.1.28/geoserver/SigosGis/SigosGis"
										}),
										downloadFormats: [],
										items: [
											{
												 xtype: "textfield",
												 name: "reparticion__like",
												 fieldLabel: "  Reparticion"
											},
											{
												xtype: "textfield",
												name: "nombre__like",
												//value: '',
												fieldLabel: "  Nombre"
											},
											{	
												xtype:'combo',
												fieldLabel: '  Etapa',
												name: "etapa__like",
												typeAhead: true,
												width: 125,
												triggerAction: 'all',
												lazyRender:true,
												mode: 'local',
												store: new Ext.data.ArrayStore({
													id: 0,
													fields: [
														'myId',
														'displayText'
													],
													data: [[0,''],[1, 'FINALIZACION'], [2, 'LICITACION'], [3, 'PROYECTO'], [4, 'EJECUCION'], [5, 'ADJUDICACION'], [6, 'CONTRATACION']]

												}),
												valueField: 'myId',
												displayField: 'displayText'
											},
											{
												 xtype: "textfield",
												 name: "contratista__like",
												 fieldLabel: "  Contratista"
											},
											{
												xtype: "label",
												id: "helplabel",
												html: 'Escriba algun dato para buscar<br/>',
												style: {
													fontSize: '10px',
													color: '#AAAAAA'
												}
											}
										],
										hropts: {
											onSearchCompleteZoom: 9,
											autoWildCardAttach: true,
											caseInsensitiveMatch: true,
											logicalOperator: OpenLayers.Filter.Logical.AND,
											statusPanelOpts: {
												html: '&nbsp;',
												height: 'auto',
												preventBodyReset: true,
												bodyCfg: {
													style: {
														padding: '6px',
														border: '0px'
													}
												},
												style: {
													marginTop: '2px',
													paddingTop: '2px',
													fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
													fontSize: '11px',
													color: '#0000C0'
												}
											}
										}
									},
									resultPanel: resultPanel
								},
								{
									searchPanel: {
										xtype: 'hr_formsearchpanel',
										name: 'Busqueda parcelas Arba por partido y partida',
										description: 'Busqueda de parcelas Arba por partido y partida inmobiliaria',
										header: false,
										border: false,
										protocol: new OpenLayers.Protocol.WFS({
											version: "1.1.0"
											,srsName: "EPSG:900913"
											,url: serverURL+"/geoserver/dipsoh/wfs"
											,featureType: "parcelas_vista"
											,featurePrefix: "dipsoh"
											,featureNS :  serverURL+"/geoserver/dipsoh_postgis"
										}),
										downloadFormats: [],
										items: [
											{
												xtype: "textfield",
												name: "partido",
												value: '55',
												fieldLabel: "  Partido"//,
												//listeners: { 'change': function(){      alert('you changed the text of this input field');    }  }
											},
											{
												 xtype: "textfield",
												 name: "partida",
												 fieldLabel: "  Partida"
											},
											{
												xtype: "label",
												id: "helplabel",
												html: 'Ingrese partido y partida inmobiliaria.<br/>La busqueda puede tardar 10-20 segundos. <br/>Si demora mas es posible que los datos ingresados sean incorrectos',
												style: {
													fontSize: '10px',
													color: '#AAAAAA'
												}
											}
										],
										hropts: {
											onSearchCompleteZoom: 9,
											autoWildCardAttach: true,
											caseInsensitiveMatch: true,
											logicalOperator: OpenLayers.Filter.Logical.AND,
											statusPanelOpts: {
												html: '&nbsp;',
												height: 'auto',
												preventBodyReset: true,
												bodyCfg: {
													style: {
														padding: '6px',
														border: '0px'
													}
												},
												style: {
													marginTop: '2px',
													paddingTop: '2px',
													fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
													fontSize: '11px',
													color: '#0000C0'
												}
											}
										}
									},
									resultPanel: resultPanel
								},
								{
									searchPanel: {
										xtype: 'hr_formsearchpanel',
										name: 'Busqueda de parcelas Arba por nomenclatura',
										description: 'Busqueda de parcelas Arba por nomenclatura',
										header: false,
										border: false,
										protocol: new OpenLayers.Protocol.WFS({
											version: "1.1.0"
											,srsName: "EPSG:900913"
											,url: serverURL+"/geoserver/dipsoh/wfs"
											,featureType: "parcelas"
											,featurePrefix: "dipsoh"
											,featureNS : serverURL+"/geoserver/dipsoh_postgis"
										}),
										downloadFormats: [],
										items: [
											{
												xtype: "textfield",
												name: "partido",
												value: '55',
												fieldLabel: "  Partido"
											},
											{
												xtype: "textfield",
												name: "nomencla__like",
												value: '',
												fieldLabel: "  Nom. Cat:",
												listeners: { 'change': function(e){ 
														var str=(e.getValue());    
														str=str.split(' ').join('%');
														//console.log(str);
														e.setValue(str);
														}  
													}
											},
											{
												xtype: "label",
												id: "helplabel",
												html: 'Escriba los datos de la nomenclatura en orden, separados por espacios',
												style: {
													fontSize: '10px',
													color: '#AAAAAA'
												}
											}
										],
										hropts: {
											onSearchCompleteZoom: 9,
											autoWildCardAttach: true,
											caseInsensitiveMatch: true,
											logicalOperator: OpenLayers.Filter.Logical.AND,
											statusPanelOpts: {
												html: '&nbsp;',
												height: 'auto',
												preventBodyReset: true,
												bodyCfg: {
													style: {
														padding: '6px',
														border: '0px'
													}
												},
												style: {
													marginTop: '2px',
													paddingTop: '2px',
													fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
													fontSize: '11px',
													color: '#0000C0'
												}
											}
										}
									},
									resultPanel: resultPanel
								},
								{
									searchPanel: {
										xtype: 'hr_searchbydrawpanel',
										name: __('Search by Drawing'),
										header: false
									},
									resultPanel: resultPanel
								},
								{
									searchPanel: {
										xtype: 'hr_searchbyfeaturepanel',
										name: __('Search by Feature Selection'),
										description: 'Seleccione objetos espaciales de una capa y realize una busqueda espacial basada en ellos en otra capa.',
										header: false,
										border: false,
										bodyStyle: 'padding: 6px',
										style: {
											fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
											fontSize: '12px'
										}
									},
									resultPanel: resultPanel
								},
								{
									searchPanel: {
										xtype: 'hr_gxpquerypanel',
										name: __('Build your own searches'),
										description: 'Busqueda por recuadro y por atributos',
										header: false,
										border: false,
										caseInsensitiveMatch: true,
										autoWildCardAttach: true
									},
									resultPanel: resultPanel
								}
							]
						}
					]
				}
			}
		},
		{type: "-"},
		{type: "upload", options: {
			upload: {
             layerName: __('My Upload'),
             visibleOnUpload: true,
             url: serverURL+'/cgi-bin/heron.cgi',
             params: {
                 action: 'upload',
                 mime: 'text/html',
                 encoding: 'escape'
             },
             formats: [
                 {name: 'Well-Known-Text (WKT)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT'},
                 //{name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                 {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML'},
                 {name: 'CSV (with X,Y)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                 {name: 'ESRI Shape (zip, WGS84/EPSG:4326)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
				 {name: 'ESRI Shape (zip, EPSG:3857, EPSG:900913 - Google)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:900913')},
                 {name: 'ESRI Shape (zip, Campo Inchauspe faja 5 - EPSG:22195)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:22195')}
             ],
             // For custom projections use Proj4.js
             fileProjection: new OpenLayers.Projection('EPSG:4326')
			}

		}
		},
		{type: "-"},
		{type: "printdialog", options: {url: 'http://192.168.1.28/print/pdf' , windowWidth: 360, id:'prevImpresion'
			// , showTitle: true
			 , mapTitle: 'Visor Sig'
			// , mapTitleYAML: "mapTitle"		// MapFish - field name in config.yaml - default is: 'mapTitle'
			// , showComment: true
			 , mapComment: 'Provincia de Buenos Aires'
			// , mapCommentYAML: "mapComment"	// MapFish - field name in config.yaml - default is: 'mapComment'
			// , showFooter: true
			// , mapFooter: 'My Footer - Print Dialog'
			// , mapFooterYAML: "mapFooter"	// MapFish - field name in config.yaml - default is: 'mapFooter'
			// , showRotation: true
			// , showLegend: true
			, showLegendChecked: true
			// , mapLimitScales: false
		  }
		},
		{  //print screen
			
			create : function(mapPanel, options) {
				// A trivial handler
				options.handler = function() {
				window.print();
				};
				// Provide an ExtJS Action object
				// If you use an OpenLayers control, you need to provide a GeoExt Action object.
				return new Ext.Action(options);
			},

			/* Options to be passed to your create function. */
			options : {
				tooltip: 'Imprimir Pantalla',
				iconCls: "icon-printscr",
				enableToggle : false,
				pressed : false,
				id: "print",
				toggleGroup: "toolGroup",
				msg: 'Imprimir Pantalla'
			 }
			
		},
		{type: "-"},
		{type: "oleditor", options: {
			pressed: false,
			// Options for OLEditor
			olEditorOptions: {
					activeControls: [/*'UploadFeature', */'DownloadFeature', 'Separator', 'Navigation', 'SnappingSettings', 'CADTools', 'Separator', 'DeleteAllFeatures', 'DeleteFeature', 'DragFeature', 'SelectFeature', 'Separator', 'DrawHole', 'ModifyFeature', 'Separator'],
					featureTypes: ['text', 'regular', 'polygon', 'path', 'point'],
					language: 'en',
					DownloadFeature: {
							url: serverURL+'/cgi-bin/heron.cgi',
							formats: [
									{name: 'Well-Known-Text (WKT)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT'},
									//{name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
									{name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')},
									//{name: 'ESRI Shapefile (zipped, WGS84)', fileExt: '.zip', mimeType: 'application/zip', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'ESRI Shapefile', fileProjection: new OpenLayers.Projection('EPSG:4326')}
							],
							// For custom projections use Proj4.js
							fileProjection: new OpenLayers.Projection('EPSG:4326')
					}//,
					}
			}
         },
		{type: "-"},
		{type: "help", options: {tooltip: 'Ayuda', contentUrl: 'help.html'}},
		{  create : function(mapPanel, options) {
				// A trivial handler
				options.handler = function() {
				Ext.Msg.prompt('ID Obra', 'Ingrese ID Obra:', function(btn, text){
				 if (btn == 'ok'){
				 	var layers = Heron.App.map.getLayersByName("Capa Agregada");
					var features = layers[0].features;
					if (features.length==0){
					Ext.Msg.alert('Error','No hay geometrías que agregar. Agregue una con la herramienta de carga.');
					}else{
						for (var feat in features) {
							if(typeof features[feat].geometry!='undefined'){
								featGeom=features[feat].geometry;
								if(featGeom.CLASS_NAME=='OpenLayers.Geometry.Collection'){
								//console.log(featGeom);
									for (var feat2 in featGeom.components){
									if(featGeom.components[feat2].CLASS_NAME=='OpenLayers.Geometry.Polygon'){	
										//console.log (featGeom.components[feat2]);
										var vector=new OpenLayers.Feature.Vector(featGeom.components[feat2],null,null);
										var geom= new OpenLayers.Format.WKT().write(vector);
										//console.log(geom);
											Ext.Ajax.request({
												url: 'php/editarTest.php',
												method: 'POST',          
												params: {
													id: text,
													geom :geom,
													action:'add'
												},
												success: function( r, o ){
													console.log('Success'+ r.responseText );
												},
												failure: function( r, o ) {
													console.log( "fail: " + r.responseText );
												}
											});
										}
									}
								}else{
									var geom= new OpenLayers.Format.WKT().write(features[feat]);
									//console.log(features[feat]);
									//console.log(geom);
									Ext.Ajax.request({
										url: 'php/editarTest.php',
										method: 'POST',          
										params: {
											id: text,
											geom :geom,
											action:'add'
										},
										success: function( r, o ){
											console.log('Success'+ r.responseText );
										},
										failure: function( r, o ) {
											console.log( "fail: " + r.responseText );
										}
									});
								}								
							}
						}
					}
				}
				});
				
				};
				// Provide an ExtJS Action object. If you use an OpenLayers control, you need to provide a GeoExt Action object.
				return new Ext.Action(options);
			},

			/* Options to be passed to your create function. */
			options : {
				tooltip: 'TEST',
				//iconCls: "icon-printscr",
				text: "Add",
				enableToggle : false,
				pressed : false,
				id: "edit_add",
				toggleGroup: "toolGroup",
				msg: 'Test'
			 }
			
		},
		{  //editor
			
			create : function(mapPanel, options) {
				// A trivial handler
				options.handler = function() {
				//Ext.getCmp('hr-info-west').expand(true);
				Ext.Msg.prompt('ID Obra', 'Ingrese ID Obra:', function(btn, text){
				if (btn == 'ok'){Ext.Ajax.request({
							url: 'php/editarTest.php',
							method: 'POST',          
							params: {
								id: text,
								geom :'',
								action:'delete'
							},
							success: function( r, o ){
								Ext.Msg.alert('Informacion','Se eliminaron '+ r.responseText +' elementos.' );
							},
							failure: function( r, o ) {
								Ext.Msg.alert( "Error: " + r.responseText );
							}
						});
					}
					});
				
				};
				// Provide an ExtJS Action object. If you use an OpenLayers control, you need to provide a GeoExt Action object.
				return new Ext.Action(options);
			},

			/* Options to be passed to your create function. */
			options : {
				tooltip: 'TEST',
				//iconCls: "icon-printscr",
				text: "Delete",
				enableToggle : false,
				pressed : false,
				id: "edit_delete",
				toggleGroup: "toolGroup",
				msg: 'Test'
			 }
			
		}
	]