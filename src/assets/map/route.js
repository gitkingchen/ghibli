(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}(this, function(exports, echarts) {
	var log = function(msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	};
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	if (!echarts.registerMap) {
		log('ECharts Map is not loaded');
		return;
	}
	echarts.registerMap('route', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"id": "110228",
				"name": "密云县",
				"cp": [117.0923, 40.5121],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vIHZDZQtDLNMXIbHRCXXITbJ@H`LGPRDDJNCLHTOCWFGvGBUJMKGFO^IHWXITQCIY^AXGfRDXF`DJOLB~G\\DZIHHpErUVMhHb]\\MBVF@FTP`@zTbD\\@~M\\K`H^EVODWICAakAQXoIcCOCIgGYNWFWNGGKKGaJEGMEIKYJUT_J_Go@_SyQaSFMEGTcYOQLIIi@EKAUPCV[EEXQCW|aMUMAaYCYNIDGGACIMGGSKDQGaF_C[GaB@GOIiOKAYLmI@CN]F[SWWAcKKI@HMUimEKbeYQYISNUOcBKPIFBNgvDPGZYFSf]CMSIWGEUFgDIQ[MeDMJS@RR@LphFPCHaBAJKF@J]IBJO@HlO@@RKAMPJHCNDJTHFP@ZGNANBRFH@J_fM^ONJNF\\VTDJHDON@XRND\\XRCPVETCLBVKDFJINHRGPRV@\\CLJN@VbXbLVT"],
				"encodeOffsets": [
					[119561, 41684]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110116",
				"name": "怀柔区",
				"cp": [116.6377, 40.6219],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JHTVHXCHPfnDJGHNDJSB[JSBGVSAOH@PMPuDEHHXZN@PHF@ZLJ@LHVYJA\\OFWP]BMtMBSRGV[JeVAPQVIFENMD¡@^NV\\JH@NNL@NM\\kTQ\\I^FNIpBHGTBFFAZQfKDIXQTLXFXNNVMVHRGpCFLlRLEVBBH`IVO\\G`RDPAXLXBXORHZEHTDLLN@VGTMrQNFPeASKG@GMOAKBYMK@GTUHUXSHMVDNMOUEOZMJML@^KRACMZEZMRQLUHE@OFENPR@DI\\ChMHIDG\\GJMDWHCKGMDCIQCHO_K@GaIJSWWQDaGWJMNCKRsCYGYuJUSaKaW@UIMDK@[QUHOGQJMEILCAUDKFSOUQD[WMCQ@WPMGCCIUSE[IMPMN]`e@IEGAQBMHM@YEOSGCIDMIGNOLB@QP@GkP@AI^J@ILEBIbADGEOog@KQQWSekWQQUOFKZLF@PUNmIaHIUeBCTSHENcJa@_IWSaGu`GLSBKJQFOXGDXVQVOBIHcDSJWBEFGTMH[^mLaXcHiKElTRKtFXZ`MHMPCNRDxZB\\ICIHK@KHbIVFZ@BPnGTGbDXRDJaZKRiGEFSFEJhjFNZFjn"],
				"encodeOffsets": [
					[119314, 41552]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110111",
				"name": "房山区",
				"cp": [115.8453, 39.7163],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@h@bl@HRJDZ``TA\\VVD^H`\\pF\\J`JGv@ZO\\GPSTEjPTR`FnEbDTDHEhLFMTK@ETSPULKEI@OVISKSJACEQNQbVIXGDIN@dMB[IIBcN]ZHNLP@XOWCFWCNRHTpATD@^NVNLED@Rh@jCEF}E[OOHUEW]W@QGGDIQSH_MmFmCUT_K]i@MHCMWFCFE{BMHMPOHKS]CFNGBELDH_@BcAKOACESAOBELaXAROB@FODMEDWJAG[aE@UM@DImEWJMC@OeCA{aE[@{L@MINUCQXKfUJORCHqJBF@TCXWNQX]M[EAJO@@KMBQJIC]EWMCCUBEBFHKDOTMBGNGF]MWDBRDdMDQVyE@LPVHDCP@JVVMTG~HNSH[CmRUvHPHBbA\\PTNRC\\YNJPRARPJDDR"],
				"encodeOffsets": [
					[118343, 40770]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110229",
				"name": "延庆县",
				"cp": [116.1543, 40.5286],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^AXOPEB[ZIGU@KKI@YGE@OYMGWFGvCNO@OPGTBHUTA\\ITACIGMIHmCOeDGGWSUIGimYEEMgiFITEFEjHLQbYCIWQaCSHmHAOY@UEaJG@LGLDJ[JAwYQCDMNONGY_EWLsSQFkMO[NWAIGaIYL@HMBOKiOQDWEUDMQSF_QIUBWdg@[NaAKQ@M]OQ@WhgLUMMFYQDIRCEUZOOCIOJ[KIUMKL@HIDKVEBM`HJAJSJUdBLGNEdMBMO[BYEWJSNKNaD]PE\\SjOT_RQVEZPpNQXfNA~lNG`@PNLp¼RFLfbdKbATUh@FSNWjGFZVLFHVA~X¨PPROfFJbNJPLFbENJPrEFNPFRHDDJdENJLVEPBJTVTHGHFRFH@PXP\\ORQHW\\BjWFDERLPPBbB\\E`B\\D\\L`@F]FCnJ^AZL"],
				"encodeOffsets": [
					[119262, 41751]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110109",
				"name": "门头沟区",
				"cp": [115.8, 39.9957],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V@XMnGPY²JQNEhH\\AZMPDVTTDZCPiJkHSHCjIdFtEHITCNITQEKUAMCEIKCECABYESKFWAKBEIIHABGDCKCAIHMHALKEI\\CFIBILIJQZS]BBEECS@E@@C]COKI@CABAAEEDMGCH]A[M@CJWHJaUMRFRBDTITLUJ@PFJKLOVST@FSLENgKGFSCaCmF_ESQiOSFOT[HYPu@IH_[IoE_[]GUC[USB__CYQI@Gakg@qZeHQNMNV\\FVLPgJAFJPRLCH[XcPELUT[JiV_EELFTADBXRTRLJC@fHXHHbPd`fR@NfT`@TLplHMpCEJHJBVLF@JTVnG^KXDXHNVGRLRXFJVdDHSNWLGfEzA"],
				"encodeOffsets": [
					[118635, 41113]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110114",
				"name": "昌平区",
				"cp": [116.1777, 40.2134],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VNLJI\\JPPDYPFVQDCJZRNEVNhKXgR@^P@NLRbB\\Mh@XcVARJE`RTCNFVXRCjPPLNA@GZKbJJHXB\\MNPjLdGbWnK\\]NGHSFEXATIdCJGPARUWUHCPWRELITAHKv_E@iYCaW_BQ\\Y@QIO@QDCIGZCEMWGFMFAFgHEDOCSqKCCFGAMKEAC@ODGCGs@WH@KQA@EE@CE@GEA@EH@GGUEEJEAYD@JM@@DAA@FHD@FTJEHUC@JUBKCKG@G[CIIQReAYhO@OXGDO@@FF@IHJFCPEBACBIAAKDOABXARHPNEHGbQAAKQFGIAM[C@WHKaGiCEGOAHUKCIokSCUSOCYN[BgGMFIR±OZmHWNU@ShbbXDHVXXGJ^lZ@PZ\\Nb@\\FHJAD"],
				"encodeOffsets": [
					[118750, 41232]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110115",
				"name": "大兴区",
				"cp": [116.4716, 39.6352],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@F\\E~DFN@BDFEpHFCHBBEGCDCJBHUDSBB@ELCPbF@B\\J@BJVAFJ\\ADKTCBGECFMT@BMN@@FH@DaNBEnvB@FPBATK@FHEFIAKFBFL@@PKBFJHC@FXBRAFCDMPDTOL@JIVFDHH@DDH@BGRFCDLD@N^@@CNA@KNOAEBCECFEGCFGMGFIPMOEJOLBADBBHGG@GCHIECY@INC@DMGS\\AIOZAAEYA@GT@KKMBEETCGMVINFxA@MJADB@FlA@HJA@NND@DFA@DVAZBBOFKH_JA@K^GBC@EFEG@gAENMXKJigC@IbSJMqGOP£RGSMGE@kbQFDPEFiBSGGSBK]I{CDWCIDOic[C_G@SuSO@EWKCO@MNY@\\uZOPENQD[LKESSKGBKEG@EJGAGHoH¥CqhifeJkX_XFFGHFNEDFPENKHM^IFIVL^S`DVEnNnG`RTCJHH@R^XFXGVPP"],
				"encodeOffsets": [
					[119042, 40704]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110113",
				"name": "顺义区",
				"cp": [116.7242, 40.1619],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EhEBENXHFNYDJHCD@RJP@R[ZARX`DbjZF@bHXT`Jb@dIFMTGDSfAJVbGnJVM@OKELYPERVXRflXTT@NIfC\\NJRhCVEHFJXNT^DTeZEHYCOhuAMJELOdAVPTMOWBWNMNEJgl]@WGUFIC[T{EEDEHGCIGMI@SECUQI[D{A{GQESPUH]CsiMCmHUeoHENcAaDGCMDGMQCACCBaCGLMAHB@DIEQLOAAEEJ@CW@CDINGAAGKQOCgV@LG@BEGDKNeREFBNCFIDOPKD[@YRW@GFWDAFE@EHDDrLDTCPGF", "@@KrJEH[\\B@FF@CHFBHUNAJKADGECBCMAG^E@EbI@BEGP"],
				"encodeOffsets": [
					[119283, 41084],
					[119377, 41046]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110117",
				"name": "平谷区",
				"cp": [117.1706, 40.2052],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZJZRafFLjnVGNJ@LLBdXX\\T^EDMJ@nZKLBjPPJ@HbA\\H`DbERHLCFK^BZaFWXQLAGMHa\\OLO@SBIpBdCLVQfElO@GSAKEDQTC@GEBKG@ORIJBDAPDFA@CaOq@GGQAAEJK@KMUGAAGEAa@MGMBGCGSIIW@WSUCMDOJeWOM@IUF{WMWaDIMgIoRoCOKeEOEAG_I[cg@wLIFENQFDVTFJ@HNDJGHCFFFS|D\\EJHV@Xk^IhMFMNAXPX"],
				"encodeOffsets": [
					[119748, 41190]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110112",
				"name": "通州区",
				"cp": [116.7297, 39.8131],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FDAJTGDNDCTDDEDBBE@DT@@EHCDGJ@EIZ@@FDBR@ATFBBVFFE@@HNA\\VE@CLIFNJFNJBCP]A@LJFA@HJEDD\\C@DBCHLAEPF@@DH@APHAERDF\\GIxDTM@CFLBBFJ@CNUPMHECGDBF]BMFPDLRBHHBJMDCX@@DFIBFPBRKJF@CGANBHKbDDABDRDHNNCHDbCdBFMpGHiOYMefKJMC}HWAUNW\\NNBNAkNU|]HMTMN@MZBLFFF@RIRUTBMFIEGaAGGAOIIUGTSFcYKS@MSLYPKRUBU]EWDOI]CKGASgW@MTWKIMCS@uMAKKADMECGAKVUTSDy@IjWLMNBF@hHEF@FAD]H@LIBG`ELAPYAUB@CEB@CMC@MIB@GkB@ECAIB@NwBMEUJHNSDFFNALLS@@HZBBFYBJP[BHTCND@JMZ@FDGJHDH@GHAABCKAIPPFONEJNHEHHDEFFDADBFMP@L"],
				"encodeOffsets": [
					[119329, 40782]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110105",
				"name": "朝阳区",
				"cp": [116.4977, 39.949],
				"childNum": 2
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@bFGHBHFBFIVFHHG@@FFB@HDFF@@FRB@LXGt@DHCH@PBDLFBNF@BEXCHEX@ZQ\\@LCPOJCDEAMFEfQLMHCAFH@@KhUNE^AAEHCFDNGVODMI@AEKADEN@CSJw[HCEFQGBBOG@@CE@FOKBDGCAD@C[FCGIB@IE@K^BDOIAEMMIJEDKF@[UMB@GF@EEAUEABSQ@CA@EY@FJI@CHGD@FS@@CAFCACFSCCDCMSHBIECMB@D]@@MKCDCQEAHG@CCG@CGUEIJK@SPOCCNEDQBDNDB@DJCDLFCBBALJB@BVGPBKVO@KHCCCD@FE@BNA@FNCTDDJA@FGB@NBDW@CL@hT@@ZHHQDDDAFSAANBC@HG@EFS@@DE@@PCB@Ue@CADNJB@FCBWA@LI^ix@FIHrH"],
					["@@HUNAJKADGECBCMAG^E@EbI@BEGPKrJEH[\\B@FF@CHFB"]
				],
				"encodeOffsets": [
					[
						[119169, 40992]
					],
					[
						[119398, 41063]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110108",
				"name": "海淀区",
				"cp": [116.2202, 40.0239],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@plDJVLGPBFHjDbHGL@X\\DBNHJREBLRBHaFGMGOBQAWPBLCBBAJBDFADOIEJGE@@EP@HCPWP@ZgfBRQJJ\\D@HLHLDVA@IVDFGSI@EGC@EBB@CN@@IZCAGHGaEqGJG@EjwJ]@K@GSA@e_I@NE@CA@Kg@KC@ENCFAKQAW@WIMK@V@I@@F@^EDFB@HcIaDYCBRRDCHD@EFLN@FE@CJUPEJOJMTBPEDIFCMIAKNOGMRFJNDVBFLSRMJSDGJsFcEiJGDGTIlOjYD"],
				"encodeOffsets": [
					[118834, 41050]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110106",
				"name": "丰台区",
				"cp": [116.2683, 39.8309],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hMN@NFTQCFRCBJFA@HJ@@HJ@HJ\\FTACD@@UNLXJX@@MA@@IECAQlDFEHBDI~D@GXCFMVDFCH@@NF@ANJC@FnAB@AMF@@EDCDDLGP@LUOAUH@AIABKAAEDCKID@CCACMWA@EGDEILA@OK@AELEJBFEEGL@BSOA@EuAFmMACbG@@EM@ANS@ENFDAHSDCL[BEIUBAII@A[E@OaKD@FAACTGVIACDHDAFGAEDoGEFACM@ig@@QFCMKMU@]SCoBGSMQDEXXDWPO@MKYGM^AdJJA\\cNB\\G^DNHFCBFABDBJ@PL^D@DF@T@FDAF^A"],
				"encodeOffsets": [
					[118958, 40846]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110107",
				"name": "石景山区",
				"cp": [116.1887, 39.9346],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NQPHLMJBDNJEFCAONSPIFIVODIF@@EKMFEC@DGQCAQZDbCdJ@GEAFC@]@EJ@DCSB[EGII@@GI@@GEBAIQDDESRMEM@gNYTIRKJAJEJ[DFJKLGBGNBJLDCDAHGBJJAFBLEXTLZFBAFDLD"],
				"encodeOffsets": [
					[118940, 40953]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110102",
				"name": "西城区",
				"cp": [116.3631, 39.9353],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XBDA@EIACM@IJAD]BC@SFABISAD]H@@OAEDQEW@BLEMD@FLDh@@LDBF@@M`J@fTB@H"],
				"encodeOffsets": [
					[119175, 40932]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110101",
				"name": "东城区",
				"cp": [116.418, 39.9367],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DBf@@VDA@OF@@CT@FEH@@GADBMTBBECCRCGG@YS@@gDK@AC@PG@C^TBAJEB@TADC^IB@J"],
				"encodeOffsets": [
					[119182, 40921]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110104",
				"name": "宣武区",
				"cp": [116.3603, 39.8852],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RBX@RFFCBFU@aK@WA}CCJGAEFkCBRFD@JB@@N"],
				"encodeOffsets": [
					[119118, 40855]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "110103",
				"name": "崇文区",
				"cp": [116.4166, 39.8811],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XBL@@bEVD@BX@AC@MHA@EIBCCDSEMmB@EIDBME@@MG@EDUCENWD@H"],
				"encodeOffsets": [
					[119175, 40829]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120225",
				"name": "蓟县",
				"cp": [117.4672, 40.004],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EUDAEI@WNMNCBFAHFFNACDJDPBD@@GD@DIFFHEFGDBDEQOFG@EI_KG@OcJQM]RMEKBGPG@[LaCIICBWKCEEG@WBQHCDFD@HSLEJI@IHWECFGAAEKCGDBFCBSBIDCKKHEADMJMFABKOKEQAA@IEEG@GIQAEK@OZEESMOLlu@SLUTYFQCMG@@SQUAYKAACA@IB@BDB@B@DC@@BGAEFAA@BEGKJCC@AGAIHA@@JC@QEIP@@A@EGIDC@O@C@@@@CJCWKABFLBBEBSQGBAAMIEM@AKBcJEN@BEBCFMAEFEF@J@BG@BFABECKFG@AFQ@@F@BEB@@A@@AAAKAE@GFGDECEFEECBKIKDELDFEDYH@EIACDCHKBEB@BAAC@ADBHABKJIAIJICEDGDCD@@A@A@DHCHJHDFEFGBKRKBGIK@GIMHSBCH_BOJECCJCFKKMD@DNJEDEGC@OJCJHRUL@HRJ@H[DCNKDZHCTFDHCFFKR`TANVDFZRDLFARB@HPAPG`ILAR@TERNDFNHDLCLDDCXDYbHF@FEB@LDDVE@JPNfXPINCVDJJD@NJPAJHLXHDNANHhB@DPNLRMTBFRBHHr@`NBFEBOCCBIAQJDHCHLHFA@HSDCRLFTB@HEFLNF@PELBDJALFLTC@EPFLLP@tUHQJDfIHGTB^JTCPDLKAIBATFPADIEGECEMJ@JIAIHGECFEAGDI\\SPOXAFCL@BQTQBBTMZECYGAHA@GJAE@HCAEME@IECFKJADDBABLTHHG@ILEAMNDJCDHEBF@@JNFJELDFKTOT@JETBFFHBHEHKI@@IJEJ@XKEOUMS@AF@CEB"],
				"encodeOffsets": [
					[120575, 41009]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120114",
				"name": "武清区",
				"cp": [117.0621, 39.4121],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FWôµ@IFCLIB@EHNBp]AGEAKAEDMGZKFGBGME@ILGP@HEFB@BXMEAHUGC@IHCLOD@X[NWHWPKAEF[@EKIOL@EKGBNMJ@EIEHKBIC@BAKMIACCFQZCF]DB@ERAKADIHGEIBCGIIECFaGLZO@EFCNGAGDGAKL@BMG@IE@ADSDEH[JGC@CGA@BMDeK@EIACFE@@GG@FIAMM@CCGC@EM@ADE@CFMAAGHBDKIEAJG@DOGCDEKAGIS@KFCHKAEHIE]BeKNO[IFIOELC@A]GMBKVYCDDgGAICARc@MW@AQE@DGI@@AQ@@BKBAIQQYEFW@CEADIGGBCEIiMEMF_LGEKMBBDWEBGRC@E_CHYGCH_IAED@FFBQh@FGJaJ}AHRAREF@bE\\C@CT`FHC@\\BBF@BID@HGDDJ@@FAHKBARECKDAZBJIVNHCTA@EREAMLHDAFFBVFFC@RNRETHD@FOJMACH@CAB@P@DF@@FGDWE@FFSIEMKQDYCCHKb^JADOCIDGNDBdBCFJB@EC\\A@BJEA@JAAAD@HHD@LFBCFF@BERDHNhZQHMBGHOACCEBWEGD@PSJKCGEUD@CINLFGHE@AJK@HDABBHTB@F`DBFLBBHEDARCFG@ABJBAPVFE^FBGLGCFG_BMLEXGAAFE@@JNRVJHFALFBEHQJCTbNDHCF@PlFLJSXCHFHfVBTNJ\\BPJXC^FAVNFCHFB@FFH@JF@\\ABCFD\\BDMCAAJKQBGAILOEGHILECQLWFENJHADC@QxNHFJNLDFA@CBA@DUÂmR@FBL@BD"],
				"encodeOffsets": [
					[119959, 40574]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120115",
				"name": "宝坻区",
				"cp": [117.4274, 39.5913],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TZbB@JHD@DODCLM@AP@LL@BNH@ETFN@`E@DNG@CHLBCJA@AICFKDDBKA@\\N@AFNAGRBFjFFFL@DHLBLFQPcXAZMJ]GAVHAIZJFNE@JpDRRDCLFDGXA@EFF@CFFPDfEBDB@DCHCFCJDJIJBLI@I@CB@@ADBB@FALADGDC@@H@BB@FZGFCCE@@FMLALJDAFFFEFDFCB@@AHCF@L@@BBB@BB@FC@E@@R@BEL@HEFD@G@AH@AIB@@@FEFEBALDDEFAFO^IF@JCBBFPNJJ@D@PRDCEKBAXL@BIFD@T@JE@BHHJORFDI@@B@JGH@@B@BDDLIFFHCD@D@DEE@BAAAB@DAF@B@H@NGLJLMRDNMfGIEPMI@GDAKK@KIDIJ@GE@CFDN@FE@GFEPGV@TCDFKHBBF@RW@DD@@ID@TJFKIKLI@EP@IGBCLAEKLEN@KSHIGYACSD@SEAMBBMGEBMQBCMIGKFB[D@HDLPHDBC@IFITDLG@IIIFGVBNJDLN@VIRI@YIAIHIC@CLKZCBEE@JECEIHEAKGDGECBGEEM@@DA@CCCBBEGA[GEDBBoNAAH]MKiIAWKQoIIPMFQAEEDMH@FMSUYIeF@EK@BIOEKJEBICFKaKPFAFSE@LWCCFMHDDEKESBOGBKIEIODLG@CCDEQCEDWEMDIEIB@EHGEEDAEAa@@HqDEJGF[AECCFa@WCEIKAAEQB@FCAE^YDERDDJBLNABD@AJGLJF@FNIAMLH@FPKLJ@FE\\BFOLGXMXW\\C@KPGD@JHDGVFBWN@AEAGFO@KH@JNFAHEHYLNHFCLBFBBHo^MAFGA@KJED@Jó¶EX"],
				"encodeOffsets": [
					[119959, 40574]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120223",
				"name": "静海县",
				"cp": [116.9824, 38.8312],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NGFMDATCNDR@CCbINEHNJA@C\\EEGVE@IhE[wepc¢·²^QEKIEKIgiQDkehY£uSDBMkUDOJDHC@GF@CAFBFEN@CQ@BeP@@G@HD@@MHQKi@[IGCOCESE@GMA_OcCGDu`a@VZzKDkJBLNXGDqKEWE@cFEFA@ISIi@@KMABJGBcMuFEzGVH\\ATSEUBeALCEMG@CEBUHUCGXaBPtUBBFIBFTDFF@DDKBFNGBJPHXDDMDCLJ^mBIHIL@LR\\@LCR[@@z@NFD@LLBNb@RHDBNTPT\\F@BJF@BXCFBHHBDLFB@HODADE@@JHVXCPDHCFTLBBFNCDCCCU@@GAABEHHZHBCAEdEjFDD@GfD@DXFCHF@ERFDLBH@"],
				"encodeOffsets": [
					[119688, 40010]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120221",
				"name": "宁河县",
				"cp": [117.6801, 39.3853],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BFLBFJXDb@DEFD\\BHEFIrC@Gb@FBCBFFGH@FJAJFNCXFFCRDCFDDH@CKJPJFALPHTALFCFGCENDDKXF@ETEBObLELJDFALIPFAJL@@FfEZJTVENG@CNFFRBNEJOpJLRBXjJNLG^BBpMAAFC\\HHBAFDADDB@@CN@FFAHFDCHLHFBJGFCFUNKJJTD\\XUXF\\^F@DDDQXXBRLRCBDFEVCDLVDpUl@LEDJHAPRFGL@CETGPBTCDDVI@CFF@GFDCCVGLKEK[Y@MECISG@BKNSCGCKWEAaEBEKNGFSECO@GGM@GYI@DÅCMLHPTF@DJHAVVNKEGDETJ^[TJNNd@NOAMFYJ@@GFANDPEJB^aOadSTQSI@MHBDIEOKCG@EEFCKCqXO@@DMFENCDDHCCGJ]AKFoDaGGHYFDHKJiCMFGC@EQ@AEHGAC@IEAATKOHGIC@IXIFEoGE[JCFCDHNmRADFZMF[EEBMO{GU@AOW@@]ZeHBDEHBKEfQkuIWBs@EC@d[@[^EDMTKCEEcI@cDAB@FCBCACmOCG{PYHeBgPwPFDDALFFFCHQGSD@BHFAR[TaFYXMASUiGFL@DQNCJI@@D@PLDN`ETEFIGMCGBCE~CAIFDPEHGEQPHJADFJGHCJLB"],
				"encodeOffsets": [
					[120145, 40295]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120109",
				"name": "大港区",
				"cp": [117.3875, 38.757],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JFFL°_`ONJKDDFIFZN xlb~yFVNRrdJGzDPVFBCTNND\\UR@E`F@@Ip@IWGUoawOEE@ÏDgK{İEEMFëCb@KwOCDHHKBDJCDEEEAGHOABFABMCgDLSQ@CFEBMgYIDQINE@AUSwSAdYEHQMEyK[KI@GRMLE@@OqOoBOnpJ@BmEAFHL^FDB[C@BBDVFAHFJENB@sNEjQAMYsUgCSBGDJH@\\LjGR@NC@@G@HO@AfR@DM@EFEADBE@@HGDICCPlVANTC¤vgZlfRChjLJ"],
				"encodeOffsets": [
					[120065, 39771]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120107",
				"name": "塘沽区",
				"cp": [117.6801, 38.9987],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|ODHnPBDADEDA@CB@ddJFFLDNSFC\\]\\@@cFD@nACOMW@M@ITURBRZNHNWRQoOj½fcqAqeiDÿÍyÓįFL|Ch@ÐFFxPpbHVJXo@@JCTR^BPABQA]^MB@bE@@FQBFVJRH@FXtPNZSBAja@@NDTLJrQTHFXZFB`"],
				"encodeOffsets": [
					[120391, 40118]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120111",
				"name": "西青区",
				"cp": [117.1829, 39.0022],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@LHAHRHATh`LHNHDG`HDGZ`D@FQDAHXFACNAFLVRTBFOfHDCVBFQH@HSXHEPFB@LDBF[bDbLFKJBFLADBDjLvCPEI]FGEIGCBEUSjcFiBIVWfaHCjN^HtwBBFGPBJGjFBEGECGDONMFAP]TDHQOWCMGAMHKIJEIGQ]aDlUG]VGEGDC{PEbBZmE@@GH@BCA@FMQCFMYMJECELCMI_P¯`]R±¡¸odfx\\gF@JUFFH[F@DIBGMMFaJDDQ@MCSDCBENMH"],
				"encodeOffsets": [
					[119688, 40010]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120113",
				"name": "北辰区",
				"cp": [117.1761, 39.2548],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ROHFFGCOJEDB}DFHANDJHFEFSM_KC@O@CJ@DIRM@CEKKALFKACHoLSJSIBETDJaEIIE]E]K[MYUYQILC@GF[MGNKEK@A@BCWECAIFEFYAGFOMI[OFuDiKACBCEKIAELaKaCE\\CA@KEAFOWGGTG@ERUACDeGEPSAUQKHE`FNjNFJADHHCJFB@DEXZFRRBJLA@AR@@BJ@CHF@BRX@@NQdDBBJhHCCZDLUNA^H@BKDPFEJ\\JMPfL^AJFFGLBDGLET@HJLBCFHDCPH@BIJFCLGABHNBDEF@BCN@@FHDDDN@BNEJH@@HF@DEJB@FfLNC@AHB@DHD\\IFGTCBCF@@JNH@ALKHBHCHBDMFEP@KYbHDEJF"],
				"encodeOffsets": [
					[120139, 40273]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120110",
				"name": "东丽区",
				"cp": [117.4013, 39.1223],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZV\\N^L^FJFFJIbSCAFTJTIpKDGLBEKLBjHTVNBZWbE\\SBQGE@ATCRHDGEEKECBECxOhOfAZGA_YEEWSGqRKISC@Mb@BiTAMYsOEWG@IQEURA@EF@@acUOXQRYCUDCHDTEF[SUEgAYDcVGJM`iAWDWLQRMHUHgDsDBLHJFCFDFGHBFFVEAGHCJN@RJFPIhBD\\FENCPWA@LFBAFHBEJUEARCDIAEDQBRNa^"],
				"encodeOffsets": [
					[120048, 40134]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120108",
				"name": "汉沽区",
				"cp": [117.8888, 39.2191],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LMEI\\MTABKN@FCDMH@COAcH[AoēAM¡Wa[MeqpQRMXMGQYQASV@J@NNXDPmBAtJXlveRLFGACFGAYf@^X@BPV@|HNPFA\\FNEEYBCnQGMDCDE\\IHFpEFWJ@JJDGHLPBSFB@JBDGHBFR@@FHDNEjDLICGZEHGbHpCLE^BHIDDCGDCFMNE@CP@rWLDEDFFH@"],
				"encodeOffsets": [
					[120859, 40235]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120112",
				"name": "津南区",
				"cp": [117.3958, 38.9603],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TLv@CNHFFBHGZFETNPhCVGNGRQXKXCjBN_HIdUZChBVF\\TFECSDGVCZDRQPWdVNA^]RBBAAOQ]DSE@F_Q@[VMCSMADUECOHycIqMQEU}zkawENRDENB@ADG@@HF@YnaAOF|CDFHUHH^kVbCR^JHIFLJNGHBDNPXGRSCO^EBMNCPDHHFAFiEIHOAEH"],
				"encodeOffsets": [
					[120045, 39982]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120103",
				"name": "河西区",
				"cp": [117.2365, 39.0804],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@d@hZNFdcLYXKRCtCMOFSYEGHEAGEDMu@SKAAsx]GMTGt"],
				"encodeOffsets": [
					[119992, 40041]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120102",
				"name": "河东区",
				"cp": [117.2571, 39.1209],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZBVFFIGABEEA@KXBDOFM[EACJgOIE@QIMGDBHUFEEGAEHECEDGIAKQDWLKZcdQPEP@FOFBJTJ@HNORJf@DBCN"],
				"encodeOffsets": [
					[120063, 40098]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120104",
				"name": "南开区",
				"cp": [117.1527, 39.1065],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NMVDCG\\E^B@HlB@YEDS@CHsNSiMGDebUXAJEjidVTAFHDFJ"],
				"encodeOffsets": [
					[119940, 40093]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120105",
				"name": "河北区",
				"cp": [117.2145, 39.1615],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DBXFADB@L@LFHM\\NHED@JKZRb]QMRAFCJBDCBQYADMCAe@QIMP@GSIAIPE@E[EGH@ZEF]^HJAXK@KF"],
				"encodeOffsets": [
					[119980, 40125]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120106",
				"name": "红桥区",
				"cp": [117.1596, 39.1663],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@J\\PNHEZBFEJELEL@BWGI^]FEkA@G]A[FDHUCMNEHJ^"],
				"encodeOffsets": [
					[119942, 40112]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "120101",
				"name": "和平区",
				"cp": [117.2008, 39.1189],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DT@FCHG\\FFOROMEgYc@"],
				"encodeOffsets": [
					[119992, 40041]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1308",
				"name": "承德市",
				"cp": [117.5757, 41.4075],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lLnlmxnIVVlUnb@VVxXJWL@LÞVnnVJ_@wkmKbxwXkWXXKlb²K@nVVVbL@WlU²lKVnUJVz@VVb@lÅ¼mVUVnbôaVX@°Ub@lWbX@b@bVb°x@VxÈLVlaÆ@Þb²k°@lVU@Xn@VWLXb@¤VXKVVVLnm°_ƨ¤@aUIVaalkX°kV@alwUVyU@kó°na°UVUUmUÆw@mkLVUWVIWLnn@xlVnKmyU@U°UXaV@U¥U@UÆ@aVUkWU¯aU@WLUV@bkbmKULmKkUVUkmVIUwlWV²Uml°U@WLUwVm@UUK@_KUUÜaXw@VKUU@mVIUUlmnIVVVbÈVlKnbVK@nI@nVnwVLVKKVnb@aUIVW@In°@lVnI@lWĢ@°UVL@b@VyUUa@w@WUnU@WÇ¯K@UkkJWaÛbmk@mVaÞU@amkW@mXUKkÿ£@akl@Um°UXwlaal@nmlXnW°znW@awV@akbĉ¥VmU@IVUJkUmWUKbmkUaKkUVU@KV@@klwWaU@kmXVènbmlUUKX¯JkbI@JmIUWU@Lml@XkJ@UkK@aVKwWaIWwmU@mU@J@UaċUaUUVkI±k@UU@UbVVm@UVKLlkIWaULUWXUJU@WbUb@lkXUxm@@JVn@J@bnb@Vkx@bLUÆnJaVXnKVVmzX°V@_lJXxWXK¯bÅamU@lUIbñJ@LÇKkIÇ`kxWL@@@bUVUb¯xWKkÅVlULW@n¦Ul@IlmUUUVm@kWnkKma¯XUKWmnwVwÝLmVUbUVWb@LnxmxVmbXx¦@nb@`V@kbLUmVUlkbVXkºmnm@@xk¦bĢÜl"],
				"encodeOffsets": [
					[118868, 42784]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1307",
				"name": "张家口市",
				"cp": [115.1477, 40.8527],
				"childNum": 15
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@kġÛal¥@wn@nml¹UWlaVknUVKla@U@_ma@¥WwnaUwnmw@KXaVUVaUnmWUk°lnUVUXWVwIWVóKUI@WXxUU@mma@kUKWLkw@yk@aVkUUċaUU@Wk@Unm@UVmLm±IUkJkW@aI@m@UVUla@VXVXmVwnkWKKU_k@m¥mX_JmnU@km@U@KmUVU@U@Umk@@LmW@Û£Wka@wk@aI@mmk@mUa@UmUIwW@aWUbU@kbÇ@kw@makVUkU@am@aU@mxkUbKUXU±KXVWLUK@wkU@V@WXUa@WbUxJI@¦VèVVX@±ê¯KUI`¯UULVx@V@UKIVkLmVkKm@nUJÝbkIUJVXVVxVbUVJUn°bVmlU°XnK@Ul@lVÈVUXx@W@VXVKÞbn@VnbVm`UxkW@UVkLKm¼@lUnUJVnVXV@Vm@@LVklIkl@VWlULWKUL@mJ@blbUVUlmzUJUxm@UUbċÜk@Ub@VLVV¦ôbVmUKUkU@m@VlVn¼WbUJ¯@@°nIllÈl@nXWlLkJ@bkxlxkxlXUlklJXL@bWn`@nÆXxlL@xl@XbLKlVlIXblVUbUJW@lX@VL@VVXJwn@WnL°KbVbl@VI@K@U@nmVmV@XUWI@aXm@VUUkWmn@lmUUk@mUmK@UnwVĉ@mU_V@XJôVVULVUn@llUnJl_n@ml@XlLlw²LVJUL@VmbVblVXmVnl@Ť¦nn@Ü@bl@@XV`Unb@VlLVb²JXn¥ÆÑ@¥Þ@"],
				"encodeOffsets": [
					[118868, 42784]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1306",
				"name": "保定市",
				"cp": [115.0488, 39.0948],
				"childNum": 23
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VbXW@@UlV@xVLXKWU²LVVWLalVnwV@@bn@bVVllUnb@lxÈ@laV@aXV@bXxJnV@VVb@nnl@nJ@bll@aU_VWUwVUkUmUkb±mVwU@VIUW@UWk@VU@ynLm@IV@bnKLVaVmnIlaXwV@@WVL°@@xnX@V`V@VbUVVLVKnwnL@ll@@_V@VVnaÆ@KVXÆ@n@wKmUWm@km@kÜKXU@ÑW±nIUwVKla@I°wU±kkmm¯m_JnawW@IVaUama@wUmU@mVw@aXk@mWa@£km@a_kVmUnWW@¯bkUmk@VÇm@@kUUKUU@UVUamVUaWIkb@xU@@amUkKVkam@@kVUkUWmKmUkLUb@xmJU@UImVÛVmnUwJU@VX@UWm@Ub°¦UmxklmX@`ULU@@UW@@xkn¯@makVUmxUb°lUbUbnUJUUVaLkbUUJUU@mUUUJka@xUIWJUnJ@Vz@kb@`@bln@lb@X@@@XlbnbVb@VJlInlbVw@UKl@lbnan@VbJôLnUzlV@lÈLVbVK@LVxVWXX`WxXzbV`UXV¤nx@bVlVnVlUL"],
				"encodeOffsets": [
					[117304, 40512]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1302",
				"name": "唐山市",
				"cp": [118.4766, 39.6826],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@VVl@²lJUVVbČVVb@@InV@VnXxJXbxUL@bLl@VlI@WnkKV@VXnJ@IJla°IWLVVnkmaUçWVkôaÜ¯@nV°wnJlaV@VUnUUaW¯wXWWwna@£UaWKU¯¯@aVUkKUamUUn»anIVwUWlk@LlWVakU@K_lbÞU°@y°n@KÈkWWţ¥ĉōkġWUw¯£¯Çwţw@kK@k¥ÝwÅbÇ¤ÛťVlW°@ĸx@VVVULVLkl@V@X`Ub@Xm@UWbk@ÆVbnLWV@lnXUbl@X¯lmUVkKWLkK@_UK@U@UmmUxmVXLWVULkU@`W@ULUK@XlJXzV@@xml@VU@UX@Kk@WbUK@Xn`XmJnmkxUVbUVlVVxUbV@nKlLkVKÞbVKXI°KVmVUIUKULVxVJVLkV@V@UbU@WUU@UbUK@b@nV@VkLmb@b"],
				"encodeOffsets": [
					[120398, 41159]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1309",
				"name": "沧州市",
				"cp": [116.8286, 38.2104],
				"childNum": 15
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@ln@UÈl@Vnl°aX@mXnVlU`@bln@¤Xb@nWl@bUx@nnVV@xnbVbUb@JXxbmXa@kUVwlWkKôVm@wkkK@kl»ÈmVKXkla°@XVV@VI@ml@@Vn@VX@V@J@VxUzVV²blVk¦@Ġ@@»@VK@VÈLlK@XnJ@alIUlaVVb@n@aU@WUIV@mUn@mKXml@lL@LnWb@XV@@aVVbV@VVIVWÈbIÈ»ƒǟlWaVUÅUUm@kVUWVkaUwmaóUJUU¯ÑU¥mk¯UaKÅnÇyóXmWÛX¯aċbÛaJWÝU¯»aóóUm@IVVl@bLUJWLX@@xXUxl¤V@VnVUVXVbV@@@VVn°V@ţU¯VUmUWV@mUXabUKUwUaÇKnVk¦Wb@VnLmV@bkV@nxW`Å_UVV@bUklVX@VmlUx@VVL@xVWVL@VW@UUm@"],
				"encodeOffsets": [
					[118485, 39280]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1301",
				"name": "石家庄市",
				"cp": [114.4995, 38.1006],
				"childNum": 19
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@la@y@UImVXIVJw@lbIVVnV@VVIVVlaKbVUVVImVaaVk¯VanwVlUnb°@lm@wX@@VV@VK@_nWlknwV¯¥Van@VX@W@UVIVxnmÜUnUVJV@nI@wValKnV@kmU£na@mVk°KLVa@UU@UmknWWkXU@aWW@@km@UaU@@klK@UkaWaUnamm@Ua¯wWU@UkL@Un@xVlUXVJUbLmU@aUWUkmKkLUUm@mWXammkkWUm@@U¯JUUmkU¯@mKĉxÝwÝ¥LUómwkUUUWVkKmkKmLXlxVLVxXJ@nVJnz@VWL@`nX@x@kVUUmJmIXxJVnUV@UVV@LU`UXVVlXL@l@b@VmX@bxn°UbkKWLXlW@@bKmKULmakLUlmb@Xb@xmXU`Vb@`lLx@nWVXL@°WlXnlbKVKXVb@X@l_lJ@V@XnI"],
				"encodeOffsets": [
					[116562, 39691]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1305",
				"name": "邢台市",
				"cp": [114.8071, 37.2821],
				"childNum": 18
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nKlLnlLXUVVlVnxôVKÞ¦ÞxĊwnL°@lVnVV°I@Vn@VlXnlnbWnXn@VVlKnLVlVX@bnVKVaUIVWkU@wVm@¯@U¥VmU_°lKkw@LXVaU@wUUUKlUóW@UVUUl°KwlKU_naKVnlKkkWWa@IJVa@IlJnU@KVUUmVlaXUl@lm@kXWÝÑnk±k@wğ@@U@mKĉLmVJ@zmlnWLUÝJU_@@mJkXUVlbklÝ@Ýab¯@¯±JÅwġaUU@kU@mVI±bUKLWUXJkaLóKULWbUVkKmnk@@bmLUl@b@mnmJkUULabnmn@lVV@¦n@l@bznx@`Vz@bxnV@xllbnKVx"],
				"encodeOffsets": [
					[116764, 38346]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1304",
				"name": "邯郸市",
				"cp": [114.4775, 36.535],
				"childNum": 18
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bVKlVnInm@@akVnK@al@nmlLVUXaVKôLKlbIVWXKVL²aJnU@lV@VVĢbÆx²I°°@aÞbÞ@lkkaVUlWnI@@V`ÞIVXKmnk@yInUĊKÇkUUamUUk@aU@Uk@WUwVkVJVkkw°a@mK@UX@VVLVW@wwVa@¯Xm@@lUIWaU@UWkXWmU@UwmUkKmn@lkV²VaULUVmJUUUwLma@UmkIUmLmVmx@bLUamKÅL@VmbkU¯KÝamzkJUb±VkbL@lU@WIkJzkKmKnUalWkkKW@@nkbk@WW¯XUVUJ@XlJ@X@XlWLkU`VUnaWaUV@UVIaUxUUmVK@I@W@ÇU@@U@b@nmKXmx@UxkVWUX@`VLlL@`zXÝb@b@VUVkIUJVz°KVlnLlKnLxlLVVUVlXUJ@nnI@mVUlbn@@m@bVnV"],
				"encodeOffsets": [
					[116528, 37885]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1303",
				"name": "秦皇岛市",
				"cp": [119.2126, 40.0232],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lnV@Xbkx@lU@@LUVlVLVbnlaLXVVnlIVUJV@UnĊ¦lab@nJ°UmV@wn@VUJVI°bnWlXnWVLVK²bakklI@aUaVUwVUUalaVwnUVak¥X@WkLVÓmmUK@_lW@n_UK@alÅ@ğÅƑŃÝm@ÑţÇlL@¯mz¯@ÝVak`@LlVUbkXK@klVXUxJmbm¼VnVVblLUV@b°V°XLVb@¤mbXxWX°xXVbmVUVU@kbmI¯xmU@Û°óbUl"],
				"encodeOffsets": [
					[121411, 41254]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1311",
				"name": "衡水市",
				"cp": [115.8838, 37.7161],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@KVlV@X°xb@VnnmbVXblb@VkL@lV@Vbn@@l@XX@bWVXlmXnlVV@@VUbK¯LUl@nmbV¤n@lLXnlVUV@ln@lbUlLnV@bV@@wlaXJVbnUVbVU@VVLVVn@VVX@@UKXUU@wUK@UwVnk@UUWlkV@aUVUÆ`X_w@mlU@anUmK@UXal¥UmÈLVbVxVLabVW@nXUVnV°UŤV@U¯Um@U@@UUaWVUmUUU@k£VwW@wW@XKIUa@wU@@al@UK@_mKXKbUU@aVKm@Xm±@kbÇakLğVaUw@a@mkUJk@ykw@£WX@lknk@WVkbUVnUVL@mVkI@JUbI@JXbXllkLUmLmbV`kLx¯LkVUV@VôXkVVLVV@xVUbW@KxlL¯kV`UnV¦°@"],
				"encodeOffsets": [
					[118024, 38549]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1310",
				"name": "廊坊市",
				"cp": [116.521, 39.0509],
				"childNum": 9
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@laU@UnL@VWbklWxnIVVV@XJlbUlXVbn@@KmV@@X°WVInJmn²@lmVbnL@amKV_kwlmX@@LVamaXaaVU@UnJVanLlUkaW@UaVakK@IlKUU@an@ln@alKUkIVa@a@klaUKUV@UkUV¯KVV@kUmU@@a¯ImJUU@VV@UL@U@@WXUWa@Ukwm@X@@w@al@@aVIUmVUUUVWUknK@I@l¥kU±aUUVyUw@@I@UUWm@@Uk@@nUJU@WU¯@kbWlULnÇk¼@llLl@xUnóLlkXUxV@lWbI`°nnnllV²¯x@JkbLUVxmJX²@ÒWVÛL@lln@XnnVL"],
					["@@@kX@Valaa@KWI@UXW@WanaUIW@UaUKķk_W@UVUKU@b@UamxVXnJUbWVXLVbn@W°kb@U@Wó¼mIU¼k`V@bVbl@lX@lUôVlUIV`lXVn@lUlVn@l@UVaIUWl£UmVWU@@UUKlUUUnVL@KUnLVWUa@U"]
				],
				"encodeOffsets": [
					[
						[119037, 40467]
					],
					[
						[119970, 40776]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1409",
				"name": "忻州市",
				"cp": [112.4561, 38.8971],
				"childNum": 14
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Vx@lnbn¦WlnnUm°²VVVVVnUnºlz@l@J@kXWVXl@La@KULlbnKlLnKLnKÆXn°bVV@bUVl°Un@LnaVJUbW@UX²l@ČwlVVIWnkÆa°anVKn°UW¯@aVUVk@Un@aV@ValwUanmWUk@WVUUanaVwnLVl°@nk@mVU@UVK@wLVKVU@K@UUKVUV@@bnLaVaôlIXmlKX_°KVV@bVV@zV`kblIVUlL@bnV@VĊllVlIXW@kaU²blKVnIlJalbXXlWVn°JnnL@l@XlJlaX@XW²@l_VmnKUblU@mnkVK¯@U@ma@kX¥VmakkLa@a@WIUUVXWWnk@a°a@kkm@kUUmJm@WUUUIk`m@VkaWWkXKmXk¯@WKLkak@±bw@aa@aka@ma¯@LKÇÅkKWbkmġ±ÅULUKVVkm¯LUVVbUwUW¯bmULxWJ@klmkUm@@KnwVkVK@akw@@a¯bKknVUIb¯mmbk@UbmKUL@xUU@klmLUlVXIVVVUVUU`mLXVWbXnW`Å²°xmxU@mĉwU@mbU@UmbkVW¦kJ@X@`¯Im@UlUVVnb@bWJXnmbJUUUUa@UamIkax@@x@b"],
				"encodeOffsets": [
					[113614, 39657]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1411",
				"name": "吕梁市",
				"cp": [111.3574, 37.7325],
				"childNum": 13
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@a@w@wlbnJVb@VbVVVInaWmXI@aaUmVUVkn@°J@_W@lIX¥lUnaVV@naV@xĊnV@wn¯wÆ±X_WmXaWUnKV_VVUUUUWJkUVnKlk¯@@kmKUaÅ±KkU@WmI@WUIlUUmVwXw@UlUVwV@LnbW@anU@UaVkô@l»n@naJnUÈLVaÆUUVmVKV²L@mU_lK@UVWkUa@a@U¯aUaÑóÑUbKk@@ak¯mVaUwVÑkWUmK@UUKmXUWÝwUaLUU@aWJUUU@UaÝU@WL@VKVaVI@WnU@alIVK@kImIkJ@m@@@_K@x@kaW@U@Vmn@UK@mIJUXV¤XXWlkKkkK@XmJVakImJU@ó¯LWKUV@nUVLkxmKkLma@kXKmmLabLmK@V@mXVÆUxX@`nLaV@@VmLUVnLlLb@°²nx@bVUxlb@V¯bUV@zVXVĊXVx@lVn@VnnmU@LlJXVz¯VWVXbV@bmnVUVkÇþÅ@XVxmbUlVUlnW@Xl@VLXÒ@bÞJ°¦Lò@nUb@°X@XbmVUVnb@xx"],
				"encodeOffsets": [
					[113614, 39657]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1410",
				"name": "临汾市",
				"cp": [111.4783, 36.1615],
				"childNum": 17
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nW@@UnLKabKnnWL@lnblKnLlwKVU@mVUXL°KôV@nIlJUbnI@WlLllLXkWWU£VWInJ@VL@nm@UVX@lb@@wL@`@n@V@lw@nVmVXWmwnUla@_lKwVlUn°xVKVXXWlUVVI@K@Kn°KwlVlU@kna@V_WnmUVm@kXml_@mLlKXw°m@_ôJVUV@Xl@UaV@Va°Ilk»VwUkVmwUmmVn@V¯@KUwmK@U¯wUVÝ@mJUnWK@@UnKVa_lykUmKÛnm@x@UUlwVkXW@a@U@@K@kIVnammVakUl@wX@@k¯@VVbml@°UbULmlVbnbÅK±VKVXUJWa@ULWaUU@@U@aWK@UkxUKLUUUJ±UkL@V±kk@kam@UV@l@LWl@n@VVUxLlUUx@VUVU@aIUlL@°mLUbkUUaWUUaUU@aWKLWJ@bUL@VUVVbU@m@a@kmKmnĉlUKXWUblbxmIkU@xWb@lkVxLXmzVV@bklVVUzm@bk@Vx@xlU@lUbVnl@Wxnl@n@UbVmLmb@`X@lUX@@xlnkLWaUJnnWVVn@l@bULVV@lV@XnJVX"],
				"encodeOffsets": [
					[113063, 37784]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1407",
				"name": "晋中市",
				"cp": [112.7747, 37.37],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@lInJlJ@ULkJ@bmV@XUJUbL@UXKV@ÞVbV@VVXI@bVVKVbÞxVXnWVL@VnLVlXÒUVxUb°nl@bl@LVaôÒÒVb°b@VnLnnV@lmn@lbUV@JUVVXkl@lUzmJ@xXklbUnJVUbnUlbV@nlLX@lakV`Ub°@XVJnUL²KlxnI@KV@lbUbVVKnVl@zlm@U@nI@WUaVl@@mVU@XkW@nkVKV_Vwy@knwVa@XalU@Vnml@X@VLKVaÞbnnlJImVKnVVVInVlU@m@mXK@UmyUI@mWUUakamw@wUwmLkakwVmKw@wUam£y@am_W@UU@knmmamU@WUa@knw@UUUUV@nJm@mVUkKVUUUkKmwKULKUImV@lUnnm@mbUK@°bUnmbUmkkWUb@am@UXkK@a±@V@ĉÅVUXVxUVkLWl¯@@bULUlm@@nm`XlWakIkmVUbUL@Vm@kI@@Km@VaXI@W@aU@kUVU_KbJkkÇb@nkKmLwÅW@kVUUVU@WUIJmIXmma@_kyVaUUlkUm@kUx¯Lm@L@LUJUkVWXUWUL¯wVmUkxkL@`bkmVnxXUWUnm@kxU@"],
				"encodeOffsets": [
					[114087, 37682]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1408",
				"name": "运城市",
				"cp": [111.1487, 35.2002],
				"childNum": 13
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VlnJwkaVaXWVLĊknmnLl@@bnV@UaVU@UVK@aXIKXL@bVVVbXVVblVaVnK@¯KVkJ@bVVU@UVwkVKVwUUm@@Xk@K@kVUn@lbl@²l@UlK²VVIVVKVLlw@VXL@b@VV@VXbVK@XbVIUWLU²ÆLmaUankVKVa¯@nkUaU°@n@@kWaUVaXUW@IXKVw@UWU@W@@UUU@mn@`m@UUULkUmJIU@@UK@U@anak_@wmKUwmakVkmKVk¯bw`kwUIÇx¯»ÇaÅmn@@mmUkV@wkKW@kxmLUkĉLÝkxÝw¯lóVUmV@ĀVVX¦W¤kz@`Vx°²ĸ@Ul@xêĸǊ°¤VVlXLWnXxmV@nUl@"],
				"encodeOffsets": [
					[113232, 36597]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1402",
				"name": "大同市",
				"cp": [113.7854, 39.8035],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²£yl@ČĖ@bĸĢbĸXaKŤnn@ŎôllÈxnVnÞÇV@bnXllL°KbVb@J@b@UxlKXLlKlXk@UlkJlkUVKXUÇVIVm@_nÇLalwVnU@UUwma@aaÝaLmUk@@W@U@@XwVWÝUUUk@@VmLKV»nwUwaUL@`mzJUIVUaUwKUaVIlJôanÑlLVUn@a@VV@@UUwVK°Vn_lJÆLéW@UUUÅ@»lm@aÞIVwXWUUkkm@U@aU@mwU£VWU_kWmXwW_°yUkkK@UÇK@kkUVymóKU@KWIbUak@mJ@bkbmLkUmkVUW¦@lnb@@V°ULml@nkVaVmLUnk`±@XWW@kbÇ¦X¯WxI@xmbmxXlWV@bÅUz@Jb@bÞbU@Wbk@xk@WX¯VÛWÝbÝUkVUU@alI@a@akLWam@U¯UUmÇL@K@aU@¯VUkKmX@`@kJ@nVUb@lbVÆXVWULU`VbkLUV@XWl@bXJ@VbV@Vl"],
				"encodeOffsets": [
					[115335, 41209]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1404",
				"name": "长治市",
				"cp": [112.8625, 36.4746],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UkLky@IJVa@mÞaWy@_W@_WXVlUVw@nw°K@mUVamVkU@mmmnLVUmKXaU@IlKVUnK@UmWkX@WV_V@akU@aKWIXyIUVmUnUa@WaXUVKVmkUWVkULU@@VbKbIUm@mbVLxWUUkn±V¯wbÅJUbmLkbmKÅKbVnUbVKUbKUbmLKmbaKkUm@UnnVnxUVlUxl¼k¯JUbU@Vbk@WU@UVóI@`¯nWxkLK@nk`Wn@lUnVnmXU`@mb@lkV@VnklVVUblz@`nbWnnJIVJ@XUVVUV@lÆXxnKlL@maÈllIaLV`UlVV@@b@XJWUb@n@L@lJn@@UVKVaUlnlJXbkWn_@mn@VkVK@a°@XklKVUUwVWUĊÆ@U²@@blLVWn@@bVaXllVnnaVma@¯VLnan@mVm@knUVJ"],
				"encodeOffsets": [
					[116269, 37637]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1406",
				"name": "朔州市",
				"cp": [113.0713, 39.6991],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XXWVXVWnnlnn@èÆ¼@xlVnblVÈUVl@blnLÜĊmUkU@Ua@WI@aXk@WVUlKUaV_VKXWUUÅka@VaU@mlI@@_nWLVl°UV@@b@LÈKVn°V@VnXblK@b@bkJ@bVVlUÞVÞaXÜ°UXWl@wl@XaV@Ýa@aa@IVyÆ@aXUWknwna@wJXw°WÈ¥kI@W@kmKm¯IUmkXWWkabkImJUkL±aVb@lWXkJUkĉk@UmU@aKkVUkJlaU_y@UU@aUU¯LW`kLWnkJóbUbmK@aU@UVVL@VL@UVULK@xUL@VUV@nml¯@UkmKUxmbVbUV@XlXVmnVbkxUbU@bm@@VUlUVb°@VX¯m"],
				"encodeOffsets": [
					[114615, 40562]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1405",
				"name": "晋城市",
				"cp": [112.7856, 35.6342],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lVLbanLnKVaLVaLUVaUmaÆLnLlanKVaÆIa°x²UlmVVXwUKna@VnJaLa@UV@@alUkKVKnkmmVwUkw@@kxWUXW@@mk@aUa@a¯aLkKmwkUm@kL@K@aWIXmVXWkUVakL@UVKw@aUK@UUKmLU@¯nKUwVUIWJUWmka@UXJk@UkmW@kLWKVx@bmI@VUaVU@a¯@UUmVKmX@±`kÝKVxUL±akL@VbLkKmV@XWVUbVXb@lm@@lW@@xklVUbnnmbUlJ@@L@@Vb@WXUlkxVV@wn@ÜmnLlVkz`UbmL@V@XLmVnIÞ@VU°x@VnLxV@LU°"],
				"encodeOffsets": [
					[115223, 36895]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1401",
				"name": "太原市",
				"cp": [112.3352, 37.9413],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@VV@wVKnLVal@na°naVJUlmL°a@b@lx@bULUlmx@Ln@lVknl@XIwKVn°aVXVxUaVU°KnUlUVLKÆV²ĢlnXalLÈÆLKUaVkUanmWUa@WwkUWU¯y¯Ñ@anIl@@aVUmIymULUUVakaU@@LmJkw±LKmVUI@W¯VaU_lkbW@kK@mUkaVmVaUIVmalkW@wnIVy@klkWUUVI@UVkam@knU@mmmK@bblVUX@VkLV`@n±KUULUnVVÅUbÇKmVImbm@k¼ó@Ulb@VmV@bXmaK@UUxkVV@xWUxVnkVVJ@XnJ@XlV²LÆVbnL@l@°"],
				"encodeOffsets": [
					[114503, 39134]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1403",
				"name": "阳泉市",
				"cp": [113.4778, 38.0951],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°@nb@lb@bbb@x²al@lbKXU@mkUWkkmUUVwV@XUW@naVklKXblKnLnLVanImaXKlLaV@U@KUKWalXK@£WKXUV@VUUUVW_V@W@@K@UIWmXUmULnJkImmÝaUbLK@UWk@mnU@kVWb@Ubmx@lzUx`UULml@XWl@UV@nk@UVb@XJm@@Vknyk@zJnUV@bk@mJ@b°Ò°zXVlVXx@bXVmnVbUlVb"],
				"encodeOffsets": [
					[115864, 39336]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1507",
				"name": "呼伦贝尔市",
				"cp": [120.8057, 50.2185],
				"childNum": 13
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@m@Łkklô@£kJ°ýɅķÑó¤ğLĉÅlÇğŁW¯¯ƥóÿlwkţÈéÝƛó°ÞÅxV¤ĉĖWƒ¯lȭţυ̃ɱÿķƅˋğɱřÝţϙȍƧĊţ@¯kWKUKm¹Å@ķJU@ƧÑƧō¥˹Ɔ@L@ÞVLn@VōČWJX¦@JŻbU@ţÞmVU@ȁýóbkWWLÅ¯UWġkmó±UŹôV¼ƽ¼ł̥ĖƽǬʉxĉŻȗKΕ̛ʵƨʟÞ˹»Ƨţ»Ǖō˷Ȍ±ȚʊĠUɾɜɨmÜ֞߼˸ƅȂ¯ǖKˢğÈÒǔnƾŎŐ@Ċbôô̐¼ƒ@ĊôĊÞĀxĖƧL±U°U°ĬƒČ°ÜêɴȂVł°@nxŎèbÈÞȌ΀Ǹl²IlxĊl²ÒmôĖÈlĵºmÈêVþxɛČʉÇĵVmÒÈɆôƐŰǀĊ°ÆǬĮƾbyĊ@ĠƒXǀċm»ôw°Ûk¥Çm¯çkkÇǫţǕéX_ĶWǖīŎaÆĵĸĊ@ȚȘĊLĢĉVÆĉʊÇĕóaU¥ĉ°mkÅ°ġUĠřk°mÑČÿÛƒWĸ£ʠÆxÈÞŎÞ»ʈ²ĊÇČalÒ°Ť±ĸzĊKÈ²m¤Ŏ@Ò°¼nyȂUźīǖƳÈē°@ÝĶ@Èkl¥ÇçkxkJXÇUÅ@£k»óƿīÛ@lÅJl¥óý@¯ƽġÆÅanċ°é¯¹"],
				"encodeOffsets": [
					[128194, 51014]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1529",
				"name": "阿拉善盟",
				"cp": [102.019, 40.1001],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƏnǟƨʫŹɆÿ°¯ÆV²ˢżÿ@ÝÆŁȰ¯ȀƳĉó@ğky¹@īwl£Ź¯Ŧé@ÇÇxŋĉƩUUŃōLÇĵóÝnóç@ó@ġƱ¥çWUçÆō@éçťKçȭVһƽ̻aW¥ȁ£ʵǊǓƲɳÞǔlżÞmĠóĬȂɲȮ@ÈĢŮźÔnĶŻǠŎȭгŃċóȭţΗÆƑÞƧÅΫóȘǫɱȁġlÛkÇ°ȁÈnõl¯ôÞɛÝkĢóWĊzÇɼʝ@ÇÈķlUČÅÜķnέƒǓKȮŎŎb°ĢǀŌ@ȼôĬmĠğŰōĖƧbЇƧōx@ķó£Ål±ĀƧīXÝġÆêĉK°Ýʇƅ@ΌʉżÅÒϱʈ@˺ƾ֛।࡬ţશóЈèʞU¤Ґ_޸Ƒʠɽ̦ÝɜL׈ɛϜóȂJϚÈ@ǟͪaÞ»Ȯź"],
				"encodeOffsets": [
					[107764, 42750]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1525",
				"name": "锡林郭勒盟",
				"cp": [115.6421, 44.176],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʶĬĊIȘƨƨ@ĬÛĢșŤĉĬĀóUÈŚÜènŦƐȤȄłϰUƨťƾÑ܆ğɲƜǔÈèʈƲĊƞƒɆ¯̼V˺Ò˺ȂŤVĢêUÜxĀˌ˘ƨÆ°ѢmÞżU¼ÆlŎ@ĊçŎnÈÒͪŎźĸU°lżwUb°°°V£ÞlĠĉĊLÞɆnźÞn¦ĊaȂīġŃ¯Iĉůl»kÇý¥Ŏ¯én£ġÑÝȭxÇ@Åçķ»óƱŎ¥çWÿmlóa£ÇbyVÅČÇV»ÝU¯KĉýǕċţnġ¯»ÇōUm»ğÑwƏbċÇÅċwˋÈÛÿʉÑ°Łkw@óÇ»ĉw¥VÑŹUmW»ğğǉVÿŤÅźī@ř¯ğnõƐ@ÞÅnŁVǉóJwĊÑkĕÝw¯nk¥ŏaó¦ĉV¦Å`ğÑÑÝ@mwn¯m±@óƒÛKˍƏǓ±UÝa¯lōșkèĬÞn@ŤġŰk°ċx@ĉ`Ƨĕ°@ţÒĉwmĉ@na¥ķnÞĉVóÆókĉķ@ÝkƧƧÛa°Ç@ÝÈUóbÝ¼@ÛÒV°@V¼ˋLÞɅŤŹǠVÞȗŤÇĖÅōbȁƜ"],
				"encodeOffsets": [
					[113817, 44421]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1506",
				"name": "鄂尔多斯市",
				"cp": [108.9734, 39.2487],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĶL²ĬVłƑkkl@ȎŘWńÈĬȗ¯ºlz@ĠĊôŦôÒĠ°kÞÜn@¤UĸèĸbŌÈXĸLlÒĢxɲÆ¤ÈÛƾJÈÝ°UÅĶ»²VW¯ĸJôbkV@ôlbnĊyÈzVôab@ĸÞUl°yǬ²Ǭm°k±lbn°@È»JXVŎÑÆJ@kLÆl²Ġ²ʊůĊġřóƛÞÅ@mmLUÿóĉƧ@»L@`ČĸmȗÑţů±ĉğl¯ĀwÇçƧŤÛI@±ÜĉǓçō°UwôǫůķƳÅ±bÅ£ÓÇwnÑó@ȁƽ@ÇƧĢón»ŏĕóĊ¯bÅVȯÅImōKULǓ±ÝxċŋV±Āȗ°Źl±Û@WÒȁŚŹНŚÅèŌô¼°ȰɞȂVĊ"],
				"encodeOffsets": [
					[109542, 39983]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1504",
				"name": "赤峰市",
				"cp": [118.6743, 43.2642],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɲŁĢǉĊwƾōÞĭ°_ŎŃźȹƒUČÿl»¯ôķVÿǬƽɅġÅÑǫ»̐ʟȣU¯wVWÝÈġW»Þ¹mÝƒɛŎÿŎōͩůV¹ōéċóŹÅVVĢǩʈ@Ėċ@ķÛV°¯xÇÅţ¥»°Ûôĉʟ¥WýČ¥wç»±mnÅķ¥ˋVbUÒġ»ÅxğLƧbWĖÅx¦U°ÝVóŰlô²@¥ÜÞÛôV@²±`¦¯Ý@ÅVÒō¼ô¤V²ŹĬÇĊƑţxç¯Lk»ʟlƽýmłÝÆƏ@mö°Ġ@ŚŹĬţÆUĀĠǊĠX¼nźVUÒ¦ĊxÈ¼@ôlx¯łʊÒÜĀˌÇČxÆČÈƐaxÒĠn¼ŎVÈ¼Ģ°ŤmǖČĊþLV°ÞU¼ċÈUÆzÈa¤ôbknXĀè"],
				"encodeOffsets": [
					[122232, 46328]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1508",
				"name": "巴彦淖尔市",
				"cp": [107.5562, 41.3196],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²@Ζǀݴʶհĸƒ¦Ķ̒Uˌ¼ӾÇƾ¼̨UÞĉƧéÝ»ĕĉƐȍōǪakóó¯a@ôţaV¯Þ¯°@²él¥ĵğťwōxó¯k±Vó@aóbUÇyĉzmkaóU@laóķIX°±Uĵ¼Æ¯VÇÞƽIÇÜÅ£ɱġwkÑķKWŋÇķaķçV@£mÛlÝğ¯Ñťóǿƴȯ°Åł@ÞŻĀˡ±ÅU¯°ɅĀźƧʬmǠƐ"],
				"encodeOffsets": [
					[107764, 42750]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1505",
				"name": "通辽市",
				"cp": [121.4758, 43.9673],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôƲĸ¼Æè@ÈȮwƾ»ʠĢ¥VÆ@²¥@»ŎÑ¯ĊJŤ£k»ÆÇX¯̼ōī°aX£ôƾȁź¥aôŤĢL°ĸ@Ȯ¼ÈÒʈŚôVXůÆaĠƛÈKķĉôÿ@ğÈĉ»ÇVnĉVwXĠÝ°ČÿĸwV¯¯ǵ±ĉǫÅÅm»²Ż±ƽIm¥ţÈķ@¯ƧJV»ÞUÝç¯UġºU£ţóaÅÅlƧī¯K¯ÞÝğL̑ȍƽ@ōŎōĀƑɜnÞÝºX¼ÇĢÞUX°xVʠȤ̏Ǭ¼ÆÒɆĢǫƾUĀóĸ°k¼ċĀƑVŹȺōń¯`ÝĮƽŎĉxġǊɱłō¦"],
				"encodeOffsets": [
					[122097, 46379]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1509",
				"name": "乌兰察布市",
				"cp": [112.5769, 41.77],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʠǠÞĸɲȺƒÒȂƛŎaÆÈĕȘţUÝźǟɆţÝˌKU»@U¯ÜÑ@Þ»ôaVÞÇÈ@¯ÜbƨƨÞlĸ@ĊôlôÅĊUÝĸm¦bmĊ@nĊxŤÑ@¯ƨĖĊ_@Čwl¯ȭLÝ»ƽ¯ķůǓ@ÇǓbċÅÅÆwÿĠÇU£óa¥¯aŎğĠţkw°»¯ůlÝĵkÇ»Ý°ɱƧǫaóôɱ»Çk¯ŃóʇŐŻĉǊŻĢ¯ÒÈUl°x°nÒĬónĊğ°ÇŚĉ¦ʵV°°ĬÛżÇJȁńʇʹó˂ƽŎÆţ¦"],
				"encodeOffsets": [
					[112984, 43763]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1522",
				"name": "兴安盟",
				"cp": [121.3879, 46.1426],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆXnlŎ°@LVLĠþxĊUȮĊnUĠV@żaW¯XIŎġ¥Ý@K@w@K@I˺ŻŎ¦ƨƨÒŎIÆ@X@VºnX°lŎ@ƾĉˤƒȘǷȘÑÝÝÞbVţĸÿŤxÈĖƐêÇKnĸ¥ô@ķÞUnÒl@UÅaīˋ¯ÑƧx@±kXřƐƏÛéVˋ»lō¯ĉÅÇÓǫÞĖġV@ğ»°ĵÇÞǓ¼¯mÛÅŃĉĠÇƾb²çéż¯VğÞml»ōÑVç»V¯¯ĕÆU¯y°k¯¯V»ôÇÑ°a@ŹkġKţóbŹ¦ƽȂóW¤¯bĬ̻ŎW°ÅÈl¼ţ¤ĉI°ōÒ@¼±¦Å@Uġ¦ʟƽ¼ÞĢÒm¤êō°¦Èþlk¼ĊŰ°JĢńȁĬ°żnÇbVÝ¼@¼óĸţ¤@°Ånl"],
				"encodeOffsets": [
					[122412, 48482]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1502",
				"name": "包头市",
				"cp": [110.3467, 41.4899],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@źxżĀǔÆǬVȘĀŤ¥ÅƾōôˁʈͳȂŃÈIÜŻ¯ī¯ōm¯ɱĖ¯ķÒÝIÝ»ÅVlÅôÑġğVmÞnnWçkWÜXƝÆwU»Șĕ£ĉÑğ±±ÅkK@lÅIōÒUWIÇ¼¯@mka²l¯ǫnǫ±¯zkÝVķUôl²ô°ŎwŦxĶĠk¦±ê¯@Ý°U°bóŤ@°bôlôǩbŎƏȎĊĖÞ¼êƨÝĊ"],
				"encodeOffsets": [
					[112017, 43465]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1501",
				"name": "呼和浩特市",
				"cp": [111.4124, 40.4901],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʶUĊ¥ÈřĠ¯ĉômīÑ¯mwk¯ÇV°ÑżġĊǉǓɱţǓƝóX¯ɛÒóa@nÝÆôƜŚĉĢʉŰĊÒ¤ȗĖV¼ÅxWƞÛlXXèmÝmUnĠĢóÒkÆÆUÞ¼ÞJĸÑ°ɲĕ°Ŏn"],
				"encodeOffsets": [
					[114098, 42312]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "1503",
				"name": "乌海市",
				"cp": [106.886, 39.4739],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ș°ÇīXŃŗ@ȍlkƒlUŁ±īĵKō¼VÇôXĸ¯@ťê°źk¤x@Ĭ"],
				"encodeOffsets": [
					[109317, 40799]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2102",
				"name": "大连市",
				"cp": [122.2229, 39.4409],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@IÞmVk@wXWÜbnwlLnU@nLlbXW@awnbl@XLa@Ċ¥@LULnJ@xVnmV@VXXV@VJkn@VÜKXXôJlbxl@IVbnJVLUbnlnVwJVU@XUaUUlwn@°nVKnV°_VJwl@nwlVIXWlIVVnK@IWmkIVaVU@WÈUlmU@UWUalkXġŻ@kI»mmakUmĉUŁV»²ġVĕ@aUU؍IɃ`ȃ@kw@Umwĉ@WķÑIĉÇbÝLkymbIwÇmÛbmbU¯ÜõÈkÆVbŎxnXVÆnǪ¦b¤UxÝnĉÒmĊVÈ¤ÈbÆ¼ĀÆÆÞźbVVbX°²¤"],
				"encodeOffsets": [
					[124786, 41102]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2113",
				"name": "朝阳市",
				"cp": [120.0696, 41.4899],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@na@UVI@mÑWkaV¥UI@wl@aÈbm@wVak@@K@k@a@UUmUUalmU@KÇUÅ±¯@±kUKVkUaaU@¥m@@¯k@WLUmkn@mmIkm@amU@wVmkU@Klk@UmaXIWWULaULVbmk@UUmUk±_Uym@mbkImaX¯WWxWKzU@WkJWwkV@Um@UbVVVVXb@VWX@W@Vkb@VnUK±aUUlwXÇWKknU@mmUkLUVVUUVUawbkKmwnIkJ@nmb`kmVkLWwUm@UUUK@UmaUa@UUaWK@mU¯Wkk¯VmUUxVXUVmL¯ymXkWUbmXUKVknWx¯JVnkLl@VVxnxlĀVL²WlXl@bÝVUn@bnlÜaXblIVl@@È¦@VmbXV@@xVVnUn@`°@VnXU@K@VV@VmbnVn@ln@bx°Ub@bLV`ÅnW@@lUnnWVU@Vbkl@Xl`XxVUblkX@°¦VUVVbUlkV@UbVbkLUxmJkX@bbxVKÆlXXbnnala@Uk@UVVklKVUXKVU°KVan@VUnLKVLWVaU_@mmUXa@mwXwVkVWXkk@k@klm@wXKl@U@KVUUUVaUV@alLxUx@b°°VnnVxlIXJmxLUVlV@bnX@VbaVx@XJ@bn@VVXÈl@llX@lUVô°°@ÞVbn@Vk@VW"],
				"encodeOffsets": [
					[123919, 43262]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2106",
				"name": "丹东市",
				"cp": [124.541, 40.4242],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lzXJU@²x@@V@bUVmKUn°n@lnVKnV@n@VlV°WbXn@VzJ@¦@bkbbUl@bkbJ¯zWULWbklVnb¦VJ@K°Ukl@@WbVn°@Vm²UnX`UÜLXmVXlKVbUVVnUbnX@VUL@lUbWx@²kl`n@Vlb@nUVWVLVU@aV@²bl@ÈmxWXVÈUJVl@laWnXKÈkÈ@Va°bÆm@XV°IVV°UnalVUn@UwVU@@VVJI@bl@XK@wWmXUUVbkJVXnJVI@mknwlKXL@`l@VI@UUaVKÞnaVm@aÇ£XWU@aÇUU@mbkKm£@WWL@@Kk@klUbWKUkUU¯UõÛmUUaVUU@WU_W@kVkJ_WKkV@bUL¯¯±mk¯ġğÑ@UmwKUaka@am¥ÝIUWmk@wmţLKʝbȗKWĢklVbX@VVknÇV@XUVUblJXn@J"],
				"encodeOffsets": [
					[126372, 40967]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2112",
				"name": "铁岭市",
				"cp": [124.2773, 42.7423],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XJm@¯mXUlnVbUJU@bV@UJWL@VXLmJVbkXlJXxVL@b@V@n@b@`Vbk@lxknV@VVV@bUL@bV@@bVK@VXLWLXJ@LV@nbWJ@IUVx@LVJUXVxVx@VV@@LXJWL@VU@@L@VnL@bVVmVX@@VVInJmbnLWVnVULVVU@VVmX@@JVzl@nVVKVXÞ@mk_lmUUWV_nJlUÞÑÞVVUVVLUVJ@IVna@@KV@XwWknwnKlalUwaĉÝwJl_@aUaKUUU@WU@WXUÆ@@UVK@n@UnVVblK@bllb@bbW@Xbl@UlnLl°°b¦nKlVnIV@UWU@WXkw@am@nm@aVw@I@KUaVIm±XÑlknJVnVJaX_VaUaVKmwnkmmn@lU@U@mnaXlKUmUIVmklaUK@UlUVUW@UkVma@UUU@JmUU@@bmbKWV¯XUKm@ka@UVKVk@aUKmLkKUUÝUmbXbÇJ@k@WU_@m@klm@UXKVaUI@KWUXaÇWkaWUkWUL±U@lUU@UJI@V¯JmIm@@aU@Uwa@UV@VkIV¯aUkWkb@bVL@@VVVUXW@Ua@@bÝbUVÝ@LmUkVUbVllLUV@LXWbUXm@U`@kxlnnJlbnIllLXlVlUXmVKnV@L"],
				"encodeOffsets": [
					[126720, 43572]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2101",
				"name": "沈阳市",
				"cp": [123.1238, 42.1216],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȚĊÜ°bLlÞxUbUn±@ÈnVÆL@xnLlUVbxkImJkn@V±LUxkV@bbKVKnzVl@L°@VaxÞUlbôxVV@@V±bn@llXLöXĶnal@nkVJVI@aU@@aVK@aUUUU@lmkwl@Ua@_@a@m@U@aUKWwkIlWUanIWK@UXKVIU@@aVVIUamVknW°n@WI@KUmULWnkVkUWKkkmJkamIkmlw@V_n@VWXaW@KVUkKUkValUnVK@ÞVUÞa@a@VbX@VWUU@U@UK@ala@IkKmUUa@U@VkkWVwU_@KÜUXbl@V¥XUVmXakÅlUUkIm`UIUJW@UIKmkm@UUJImmU@VUXU`mIUbUK@LJUUl@X@UbJkU@nm@Uam@@aUmLKwmWXUK@kUaÇa@JUIUa@aKVUUXmUy_@lmbkLUKWLX`n@bVL@JXLWX@Vnb@Vm@UbnVmL@V@x@LUbVV@V@LUVl@mb¯U@xU@UVVV@X@VVblJ@bnVKUnx@llnL±¤b@k`VXÆK@kV@¼kl@bWIUl@VmLnbm@@JXXmb"],
				"encodeOffsets": [
					[125359, 43139]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2104",
				"name": "抚顺市",
				"cp": [124.585, 41.8579],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XVl°bUlJ@UVU@bVxV@@bn@nJ°I@UJIVV@V@k²VVKlXXVblÈXWbXV@LVJUbWL@Vkn@l@nV`@X@lÈIWanaÞVVVlLnKVL@bUlUL@Vlbn@VL°WXULna@aV@nV@IVV@VbUnl@VXnKVa@UUnyWkXaaVk@aabnm@_WKXmWanU@alaUl@XJVLVxX@wnKnVlw@V_@a¯¥@UkKWUaUUanK@IaU@WUaVw@klUVyUUVUUÇ@Iôba@mnUma@kXa@UWak@Wal@a@WULmU@U`mIUU`mUk@@UUK±nkJbUam@kwm@@a@UU@Ua@@K@VK@kmKU_UKUUaĉWmkkL@`LnmlkLkbmK@k@Ulmb@b@xUVIUlmVXXxm@JUUk@WUk@akx±@¯x¯UmbKUUVmUU¯UmVVnWkÆlWbUnWVU¦k@WaÛV@LV`UxXllU@@VVbnVlL@J"],
				"encodeOffsets": [
					[126754, 42992]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2114",
				"name": "葫芦岛市",
				"cp": [120.1575, 40.578],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ll°XnV@XLVb@VVbnb@VLVV@VVnXxlKnUl_na@mlImJnxlLaxVbUVVUVUKVlnnV@lmXLÈWkxVV²bVLm@Ula@UX@XW@UWaUUUUVan@V@lUXxlIXV@yXLwXXW°nblJnan@Vz`l²nVVVl@nUaVKbVKnXVaUaVUynXK@kVK@X@m@mLXaLWU¯w@a@UVw¥°ó¯¯y¯UÇ¯»w¯Im¯ÇUUl¯»ţKċÑţķm¯w@mU_ómk¼VnU`±IkbVlnnU¼±Lk`@XWl¦UbmVUxkXVlkbllUVb@bkVmx@XVV@Jb±aULkKWXkWmX¯aUJmIkVm@xU@n"],
				"encodeOffsets": [
					[122097, 41575]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2109",
				"name": "阜新市",
				"cp": [122.0032, 42.2699],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Xnb°lVlnXVJLlVnl@zÆxnK@bblKVLn@@VaVLVK@L@Vl@XVVInVVKVwlUXwlKLVVb@aV@XlUXbVW@nlWnXKV@@V@XUVVLUVV@@bVVV@@ln@VbVUXVIxVanJ@UIVWL@UV@@¤V@nInwWklnIVxlnzUVÇJ¦VVÜLĸUnW@aV_WĊXXaKnkl@nmLa@alUVw²K@UlmnIlJwaVUkmK@wÅKmU@Ç²VmVaÝwkKaÛ¯șĉķ¥ğ¥@kUWkƏīÝ@@akUK@KWIUm¯nU¯JmwUVmIkJÇLm@UImJUU@aW@U@@nUbJabXVWn@UVmX@V@b@l@L@lUb@xnÇabk@@xVJU¦lbXÒ@nUJ@Vmb"],
				"encodeOffsets": [
					[123919, 43262]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2107",
				"name": "锦州市",
				"cp": [121.6626, 41.4294],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nJ@nlmVnXKl@@°n@@¦VbVbUlVL²l°@Æ²ÈV@LVknVbVVnnWVU@XmWUabIVa@mV@X@@bVVnIVJ@nÈKlInJVUnx°IV°mVnXJ@LLlV@b@ÞƐĬXllV@Ġ¦ĸ¦naWW@In@manK@UVkXJ@alk@»lU@ÅLUWl_@a²£Kkm@kwVmULm@akIUa@U@WUUVUaÝ@ğwkmĉ£UW@@bÇL@ma@_mKlXUwKLţÓ@UWw@K@UI@mU@UV¥@°UnJ°@@_KUwW@UnaWUmmI@mķwUaÇLóVĵwÝUUW¯¦Ux@Vb@xV°XKWbK@n@nW@UL@lWLmzUVVbUbmWXXWJbn@Vkl@LlVUn@xnV@bln"],
				"encodeOffsets": [
					[123694, 42391]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2103",
				"name": "鞍山市",
				"cp": [123.0798, 40.6055],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lxĠÞ@bV@@w°Vna@UkV@K@UUUVa@K@w@UnKmUVan@@Uma@UXWWK@IUK@amW_XKVLlKna@kmKVak@VU@VmU@anIÆan@aUVnb@blLV`ÞLlUbnaKn@naVU@¥°IVK@anUUKVaUVak@mJkXUVwkVUUa°U@W@WlkXWlIXUlJlaxIVVXLll@nLV@lLXlKĊz¥maUlkXaVKX°yIla@aVkala@a@¥IUy@WmXa¯kU@U@mmUULkmm@¯VmnLVU@a@U@±w@VWIkymLUUkJWXJkUmxk@xUI¯`mUULm¯m@kxVVbWV@UVIUx@bkVVVxUbVV@V@zJVXUlnk@@lkLlLUU±Jkm@UIUVLUVU@K@UnnV@l@LlaUJ@zn`@nWlIUVUUUV±Ln@nmL@VUVkLVlUxVLVlÅXma@@akLmWUX@JUnVJVkXJ@X@`WXVUVUIlbW@bVUVL@`Un@¦U`@bUV@z@Jm@@XV`LUL¯J@IVKmKÅI@JnWVnLnVxV¤z@bmV@VUV@bUL"],
				"encodeOffsets": [
					[125123, 42447]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2105",
				"name": "本溪市",
				"cp": [124.1455, 41.1987],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lb@VnlnVVUb@VJ@nnJ@bmXUx@xVbkbkWLUxnl@Ul@xWx@nUV@¼UllknkK@bmbnlLVJX@VIVJn_lJVVXUmnU°VVVUnVVLna°V°w²@lwbl@XVl@VVIn@wWWnUVkJVUw@@anaVk@@lnLlalKnkmK@_lKnlĊXVbVVLV`nL@lUL@@L@VbV@@V@bn@lxn@VbalI²mVL@Vl@nV_VVnJV_@nVKV@X@bkXbl@XblylUUk@Xa@UVIlK@UUWVULlm@UUUnKWU@K@UXmXVa@U°KVUUWUk@aUVKkaWkKUknaWa@U@m@mk@aUJk@@_WKkLmxl@nUJmIUWlIUaVWVXn@xWLk@@aJUI@U@UVVxm@UVkmb¯VUU¯JWU@Ån¯aUbÇ@ÇlLmWXkbk@UIÇVUXWwÇnk@±aU@@bUVUKUXmV@kaUm@k_±l@XwVa@kVK@UWmVaUmVUUakLUWWnÛKVW_m±VnU¯@Uma@Xk@l¯V"],
				"encodeOffsets": [
					[126552, 41839]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2108",
				"name": "营口市",
				"cp": [122.4316, 40.4297],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĊĖÆn¤°Ċ¯ŎWô@xXbwnKl@nX@VUVKmL@VU@UxÝ@VlbxU@VUb@bk`IUlVUnV@@UV@@JnXlK@b@nbÆWUkUKVwUklKVU@UnK@mm²KVUVVVUJXk@mm_@yVIbk@K@kmUm@VLV@VUKVUVJn@l²IVVKklK@kl@kmVUWI@y@UUUVawUUUl@akmmVaUKmIUaJk@wkaóIWWÛL@UlmUIU@WW@UnUUm@wmIVK@Kĉ¦@bWKk@max@bWXkamK@mVkKmxÛaWX@xUlÝnJ"],
				"encodeOffsets": [
					[124786, 41102]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2110",
				"name": "辽阳市",
				"cp": [123.4094, 41.1383],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`VzWnVUVL@bVbVJ@IÈbVb@lVLXWnxLnKVb@n@Vbn@mV@lIVa@@WkVVI@KVLVanJV_VWUV@nnJVIVn@na@alLlmkVk@»VU@mXwwk@@VmkVwXKllaUa@wVwnW@amI@mUI@VaUUkmm@UkaL@UIĉyLWkkKU@mKk@kWKUUJwkbkIWVkJWXkl@X@X¯VVbUVlUxVWlnI@lUbVUbVLmV@bUL¯J@¦UVmbm@LmbakVÝKU_kK@amaVUbm@ÅbmJ@bVUn@UVl@UbnL"],
				"encodeOffsets": [
					[125562, 42194]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2111",
				"name": "盘锦市",
				"cp": [121.9482, 41.0449],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Vbĸx@nnJVnXmb@VXVxL@`¯@mI¯V@U¦@VV@nJ@V@LXx@VŤÔKLVxWknL@`b@nÈK@a@VXĊ¤nVK@aVU@UnU@ayU£UwmmKXUm@IÆJnLUL@J°IVKKU_@Wn@@I@yVU@aV_@¥Vm@_UKUV@aXkaVJVUUXW@_@WWIUlUIVm@IVW@IU@@VU@mUVVkJ_l@aVa@UVwka@UÞVwV@@UnKLVU@UmWk@mLxWa@wóUVUIÇÆĉ¦¯¦¯xʟJ"],
				"encodeOffsets": [
					[124392, 41822]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2224",
				"name": "延边朝鲜族自治州",
				"cp": [129.397, 43.2587],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Wxĵm@ó¤VX@@xÜ¼ƨ²xWxVV@XVbWXllaÞU°Ċ@ô¼LôÝWanV¥Ñnĉ°¥ÅX¥°¯@w°w@»°k£°mÈŹmÈbÆŎ¦K°z@kxl¦UbU¤klVKŤÞȰ@@bV@nVVUlÞ¦lUllVlU°ÑU¯V°wbXxl@V²@nô¼ó°kmVk²ĕw@wVÞÞ@@Ġö»¯@bnb°mÞ¯°V°ÈJmX¥mamUÅUlaU¯@wKkl±n@@wkÝVUUl±¯I¯bal@kLmakb@ġŹé°Þb°ékLmwXaÅb@bVlbVbÒVbUbUUanwakbVUVak¯ULmxV°UxnôŻX@JXklbkbĉabWU@kWUU¯@@klm@@Å@awWXlKkI@WbUaVIUanU@ĕ¯KmUnWUwm@£ċèkUmbUmm@@nkJUalwk@@nmWUan_óaWmnw±KIwl@UmI@an@@mlUÅmV_KUk@U`@_KUmU@U¯mmb¯@kbImV¯LkbKÛ@ÇnɱJóaÝĢkb@xÒÇll@²VÆUVVUÇ°XóxlV¯lV@bV@nx@¤@șŎnxV¼knJnKX°¦UlnVbUbÆVnÞWVX¦llb@l°VJôÒnLVbbX"],
				"encodeOffsets": [
					[131086, 44798]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2202",
				"name": "吉林市",
				"cp": [126.8372, 43.6047],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôlzaÈV°K@mLWlnVxUVÈ@ÝĬUÈnôLa²VmĀkV@ĠĊnU@bV@b@nl°UVnÞaôJ@bV¦mlkbmVXx¯@VxmnbbÈKV@bÈLwĠyônmnbÜ@nnVx@n²KJ@kal@nxÞULź±Vwkw¯LWWUkŎīVww°yVĕ°wÈVlkÛ»@wW@Uô£@nĶXwWaUamKóÑUI¯@kakkW¥XUmÝÅUVaUamVk¥W¯LmIlmU»mwȚō@£kJUÇk@am¯y¯UVwa@wġx¦K¯X°Ċ¯¦U°ċWULÅa±b¯@UkÅWmVkIUlóċ¹`óIlXWXxmbULÝbƧ@x¯bÈl@x¯zaÝ¤@nmVWb²bmn¯J¯Ò@n"],
				"encodeOffsets": [
					[128701, 44303]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2208",
				"name": "白城市",
				"cp": [123.0029, 45.2637],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@óǩŁ@WlwUaƑwÛÅÇéĉamKōÇ@IôġVȁÑŹçÝUƧċĉwóóÝ@Ƒ»ğL¯ll²@ƆÅV@¦mÅb@nmlU²VxlUn@VbnWbÇbkÒn@èlnlUÒ°Lx@¼ĉb@ÒUċxÅènLVxÒbÅJ±a@_ÅJÅnVbKlnUÜĊ@UxXVÆnmVJÞ¯VĠwXw°xWLxKV¦ôUwVÝǬóÞÞ¼ÞkVôȘxÞUlVn¦ÞĊa°wb°@bÆwlŤL²`z°@V@@nJVnl@@¥nUmmn@mwnmmUnk@mlwUaLnwn¯°anWakIÇmXwÆamUXUlJXaUUklKUknmÞV@K@VWÞ@VkUwV"],
				"encodeOffsets": [
					[127350, 46553]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2207",
				"name": "松原市",
				"cp": [124.0906, 44.7198],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@źèȂÒUóĢ@JŎÈLnĊbÈêÜÆƒxVbkx@XǪłôkÞ`Wb@n°abKnVw°`_X`W¦ĊIkmVakwKx°UÞbU@ll@°¦VWaÞbxÞI@mVI@VkÅUWK¥nLa@@È@°Æ@nU@KÞalkUwVékUWwkUVkkJk¯@»ókV¯ÆÇI@bĉô¯@ķw¯nmmÅL¯wVUÞy@UówÇLkmm@@UóxkkĉmL¯wVwkWWXmLõm@kÅ±V_ô»ÛÆ¯@VaVaĠVlmğwķUóÝƽ£ÇJkbǫaƽLW@nxÝ¤kzy¯XɅm@VôÇX¯Ė¯ºÝnUnLVlUÔmV"],
				"encodeOffsets": [
					[126068, 45580]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2201",
				"name": "长春市",
				"cp": [125.8154, 44.2584],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@U°xÆKnn°mĸx°@Ċó@aÈJ°ÅUôl@¼l°IllUlVXxlVUêVxkllnÈUVll@Vx²IÞ¤VUlVnIôlÞlwô_bVaĶLXÅÞÇ@K¯@wÛaçn¥¯WXyW¯XwUmmÛ@manómğzxÇK@aUÇLamanUw°@WwnUalnk¥U@aóIÝbUm¯Vmk@@aU@amVğĉ@lUnÿ±UbóKmVÇÞī@ÇVUUwmXkKn@L¯ÇUbyókōè@bn@lÝX@x¯ô@ÆUV_maXm@aóJWxnX@VVnĖVnUJ@nōÆÇ¼V¼kxLklÝw@xx@zV`ÅbmxU±xUnnmknğUbUUb@Å°Üó¼U`Æ²@lönKnXWlXUx°xnKĊllôw@Vn@lnÈKôx@VÝzV"],
				"encodeOffsets": [
					[128262, 45940]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2206",
				"name": "白山市",
				"cp": [127.2217, 42.0941],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ul¦kÒÆ°IlÒU¤ôz¼lJUnÆXVl°@²aÆbVKČXV¯°¥¯ĉ°WL¥Ģw@xbUx°V°znb@ÈlVlI@w@mU@akU°kUôwWÈ¯VUVUÅ±U@kÈkÑw@laÞġUÞ£@ƅKnÑĢ¯@WaUaVUVkkw@a¯@¯ÝVXnW@@WkXmK@xkKUb@bW@Uw¯mmb@WKUbmUbUaWbJĉIVW@Il±LkmUbUm@nkKWa¯n@`UbmaĉL@bÆ@W`L@n¯Xb@kb@xL@VkL±mlUIU¥mL@lÅx@_la@UaV@kmmK£LmKUnÅKVbmXVlèĉUUbmlĢÅ¤Il¯bÇ¦l@ô¼Ģ@x°l¤nal@xb"],
				"encodeOffsets": [
					[129567, 43262]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2205",
				"name": "通化市",
				"cp": [125.9583, 41.8579],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆlXnĠxĢ°lÈ°K°kXm@¦VbkŤJnÝ¤kVÞVVkÈb°y@wkÇ°awƨ@aÞKVnaWwXWkôJ_ČºôVk»óyV£kÑJÅ¯lÑk¥Va@wkbmk£¯@wġó»@kÈ¥°akJÆ£ġnkVaĊVkçWUnUaÆLVmnLKU±@m@a¯UbmV¯m@_KUaÅWó¹@UanmWak@@wmI@y@mkJVa@UaIkJ@n@Um±kkxmIkbÇm@°bXnV@°ÈmlÞ¼¯XVº¯LmkWWXLmVVlkn@@lnWÆVxbmnm¯lÝaVÈè@¼VbÆ°ÞUVJkxIxIV¤ÒXxmn"],
				"encodeOffsets": [
					[128273, 43330]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2203",
				"name": "四平市",
				"cp": [124.541, 43.4894],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ɇn°WzlyÞ£mwX@ƾKǬblaÈIƾ¤ôÞĸVĠxnmmV²wVnwÆaU_@yw@wÞxlkKlwU»È»ŎÅ@mVIUmmĕUU@mWXwIô@bWnnbU`V@Å°ó@wÞW@km@aŎç@m°Ñ°Inm±aXaUn@mƑU¦@Ç¯aU£aUġ¦ÅÒJōUŻókUÇ@¥¯ak¯mUVak@@aċçÅaUm¦Ý`XbÆ@n`IxĊÞōÞml@Ub@Wl_¯JkÇUÝÆÅb@nllUb¯±a@WĉJġĀ¯Unóm¤xôaVnxôI@xV@bmÆ@lnLmÞ¯ÞxVb¯þ"],
				"encodeOffsets": [
					[126293, 45124]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2204",
				"name": "辽源市",
				"cp": [125.343, 42.7643],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@żôŎVIÆÑĢ¥VbV¤°bÈ@V¥ƒÞ£lÇUUUÝlÞ£mţIlUa@¥nlW¯L¯kÇġ¯ğwWmÅk¯UVUbWlXlmnbUx¯xVVknlUbVÇKUb@VnbmlnzUº±bmJUbWÈnèmÒ@X`WL"],
				"encodeOffsets": [
					[127879, 44168]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2311",
				"name": "黑河市",
				"cp": [127.1448, 49.2957],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VÈÞ@kxnX°VÈa°V@kôwbJVkXlVUx@lL@xkVV°VbxlVUnVxk@KkVbIl@°kVl@lÆnkll@@VVX@V²bUlVlVUVÇn@nkJlkVb@x²V@n°VUnlKUn`@n°bWLnVUblVUVVbknV`°kkl@@V°@nzJ@XxlWXb°n@bĠlbXbbVbJ@Vba@@lbUbVmn@lVmnIW@WbÞ@n@x°@ĢaƐéϚnlČ¯ĠŻÈwm@ôçUmm£Xy°UV@wÈ£Ǫ¯kõÝçUÑUķĢkVÑÆÞU°nŎ¥ČUĊx°m°¦żVƐx°Ç£@yUônÞÆ@Èĉ°Kô¦WkWUbÇ»@ÈĕWÇÈ£ŤU@n£ÆUUKVamanwÅmÝJ¯k@JIkaVaUUÇbkaÆÑkWmÝUÛÝ@wnU±@kkV¯KUkJ¼U¦Å@ówķaķůV¥Uaó@Åwm_kVwĉĉmmn_V»a@UVwķóU¦LǫéóXÇmōLǓÇķxÝkĉkmakbUĶ°@W¼@bÈÆ@ĖLl@°J¯mkl¯LÝ±LamJ@¼VƧUóUXċb¯ńVbkÆÝI@llxk°V²V@UxÞL@b@b`ÇzkókÝ¤@ğ¯WLĉÇLmmnċVkbUaL@¯bU°ğLÝÝ@"],
				"encodeOffsets": [
					[127744, 50102]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2327",
				"name": "大兴安岭地区",
				"cp": [124.1016, 52.2345],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@kϙmƏêġb¯@@wmÝ@XV@Ill@bUxl¯VlVbV@ULVlUV_kxVVVÈÝJ@¯Ulm¯x@xóÒĉ¼m¯Wxţ@Uz¯WwnUwť@knW£óVUUwğyó¦WIVmmI@±kwÇ@@b@ĉ¼ó@¯wó@¯aó¼KÅaUwmWUwÅI@aKó@UaLaVÅwō¼UUÝl±I¤VxÇx@zkJmnnmbnzxll¯ČkJl°@kbmx@x@kêmVnWxôXxU°bWLóJnÇWĵV¦UUbbÆġKk¯VU±aXmċÑUwĉKġkVxkÇKkbIÛXWl¯bX¯KbĊÞVÆnĸ²lxU°n°òÈb¦xVb@¯Vx@¯VķÞČlĊ°KĸȘI°¤ČIôò»ƨnȰKǬ¦ôWŎÈƨwlnKVXmbX`lbwkVWXXL°aƾaĊ£n°@°¥ŎzÞ¥»alwôkƒJa@ĶK£bU°ĊxźVÈUĠ¥ƨVI@XU°x°Ln¥w°UmwXmÝV¥Ģ°@nU@mÆ£¯lKÜw@aÅU¥UaÝIkmV²nn@Ķ»@Uk¥VKÞ@ÞÛ@kVmĢa@_Jómǖ¯ÆwóÇa@alUwwĢřk@wÆWXUWXWam@_ƒ»ÇéXaĸwVa@ÝKkUWkXkKXxn@lĊV@¯m¯nřÆw¥"],
				"encodeOffsets": [
					[130084, 52206]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2301",
				"name": "哈尔滨市",
				"cp": [127.9688, 45.368],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°`_JlU@@V¦°JUnLôlnŤ@@ÈaUÒVbkbl¤zk°ÇVÛô°IlVUVôUxÆU@bźĀº@¦b@l²UVl@°ÒĠxnXxÆVô¼Þ@Üx²KÞlVÑ°UȰôlwô@²ĸ°lanV@VŎUll@bÈnÜmwĢ@la@ÝÞb°UXblŎ²ÆkVI@nJnĠ°knÜbĢwna@akÞKƒĀaIVbU¥wĠwkôxnLċVçkaU±IUmnġW°WôĉalÞÅĵ¯@W¹XÝab¯a±X¯ºLaVmkLóbkaVUKVkkKV_@aÝykk±L@ÅU@yV_aU¥ówÇx@UkVn@lkÅlwWVwUkĉmkklW@abVwnWWwWL@UUÇLÇm@wJĉL¥@Ý_@a¯yUWw¯¯Uġx¯aÝXVmaU£ó±¯nwa¯óÅVXmanUlUXkWa@mkIğamIklÇUkĊzkKlUōĬl@nX°@llUxŹ²mKĉVWwk@UbUK@bmVmIVmwaWxXlWČmºÞÆbUxV@ĵńWÆĉLkWUbaWzkbĉ`U±LklōwUVÝ£UW`Uwk@mk¯VkaõVX@WbLK@XƧºWzxK@lmX@bkVVÆk¼Vbk@Vn"],
				"encodeOffsets": [
					[128712, 46604]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2302",
				"name": "齐齐哈尔市",
				"cp": [124.541, 47.5818],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Þ@ÞĠKV¯a°@KVblaČUmnnKĊÈKX°Ġ@Þ£ôllÈy_@a@aKÝVwU@±¯Ulkw@kÞJlÅUa°ŃČaWVôƨVU@»nIb²KÞ°Klkn°¯I@kK@ĕÇÅ@aX»¯@VĵlaÿVamI@aÅÝउýĊȗJôȁÅkmƑÛ@kxġ@@laVk¯»īŹak¥Å¯JUaWU@@wa»KUkÆkUmUmwÛ±±UUbUUXwWwÆÝklkUanaWwnKlkal¯kaƽakÅxa¯@amb¯VlÇwÛĀV@xmêVÆVVaôVwÈx@ˌx¦VÞ¯VlmX@L@¯Ua¯LmV@°XċKV@UÈ@¥@wġIUkm¥Źw¦¯lmn@°kxVV@¦óamn¦l@nxlĉVómxnÒĉĀĊ¼þǔêÞ°ˌĠÞÒ°ĀɲĀƨźˤȤƨĊ°w@£nymwnkUUV¥ôÑVmkÆmUUVamVIkmôlxkXÞþbll@kVƆVxV@¼VÒ@UnnÞJ"],
				"encodeOffsets": [
					[127744, 50102]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2310",
				"name": "牡丹江市",
				"cp": [129.7815, 44.7089],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@U`lLUlVLUlbaôlKnUbK°¹²W°baÞbknyUlUkamř²L@m°@lm²n`ôÅlKxÜKnxV@l@ÅXyW_k@wmŹĕmX»Ûl°ôÈ»ôô_WW@Ual»wU@@wUV@VXI@wĢ͑ÞȻaU_@mUkly@¯óV»XmWUXUWmnm¥nUUaWLk»Æ²IÇawÅaÝ°¯nUa±a@¦õÆğ@@ÅbxUÜnÇłlb¯¦ôó»m@±Uk@Wwa¯xUV°xXbÇÅUVK@¹KUaȯ@ōÝXallÛkalÇUǫÇÅÇakbÝƆ¯nl¯@¼VUx@x¯W¼Æ¯mĖĬ¯ČVkķÅmx°ô²V¤bUnÞW°bĢw°V°XxV°z@bÞ`@¦KĊI@xnÈÈKV@VXKxXmXUxab@kXllĊnVlUxXkxlÆkm@UVl@ÈwôxV¦bU`@zÆV@²KllÞz@b"],
				"encodeOffsets": [
					[132672, 46936]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2312",
				"name": "绥化市",
				"cp": [126.7163, 46.8018],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ऊþÆÞ@bnJUbĀnblĊÞlĸwǔÈŎKÈnôWǬêKV¥ĸôUx@VbU¼m`nnĊĊxlUmkaVÿLw@°»UmbKmÝUwUmVknKUUl¯KUUÈnK@ĠkX±lX°L@¯¥@wV_mĵ¯WwL¯UkōÇVUlwVó±¯aVka°wVk°mÞ¯ŦřÆl²ŎkU@mUkb¯ķ±ó@kxȯó¯VUÒkÝ±LÛwÝ@ó»ÅUWwmğw¯Ñ@UkV±@ka@¥¹Źÿ@aÅVwóVVUkU¯JÜóÈUl¯yk£laUaVÑÇb@ţ@kmómKV¯IU¥@@kVI`@ô¼blUlbÈb@xÇKkĢɳaÅɆō@VK@z@@¥ÆKnÜ@@aÛUwwnUķ@_V°@klVnULVVÞbVl@°@nxn°LÅÆlVÈmU²@VmĠLxn¯xkWzJwnLmbXbW°Æ²@x@JVxLĀ²Æ°I¯ºÈ@ÒnÈ"],
				"encodeOffsets": [
					[128352, 48421]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2307",
				"name": "伊春市",
				"cp": [129.1992, 47.9608],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@K¯kWW²ğl@mLÇVVLk°VVmLUlVnxVnÞLnaV¯¼@xKUĀlbn`nÆxô@VbU¦ĸŰĸbôxÆ@V¥»IVl°LUll@²mVx@ÞÜÞVnlXÅÒlbÈaVVUblbJ@I°lÞInÆmxnbUbVLÅVm¤@ţVÇ¤XÈÇĖ@È¼aXVÜaXbWnzŎařKôbUlw@¯naÆKnUU¯Üa@mkkVUĊmżÝǖK°L²lÆI@¯¥ĉƛVaÞk@ÝVaĠlnUVwóma@wĉ@aVxamX@a@UaÅLaVW_nWm£nWm_ÅV¯m@mó¤Ý¦¯ÅalmX£VWUÅwmÇ@@IVWUw@aI@k@wŎ»WÅVaKIka@¥lUkUlwÅwVyÈwWU@a¯U°mÇ@UçaVa¯mV»ÅwÝUlUkV@kmUkX£w°@@ÇaÝIamÛam¯lğmmI@JUl±ÅōkWa¯VÝa@Þkbġ@xÛnÇm@akkōVōl±kÅťŚÝ°¯nUl¯xlbU°b²ôUxkVÈUŎVl°KXxĶ°nU`@x°¦@"],
				"encodeOffsets": [
					[131637, 48556]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2308",
				"name": "佳木斯市",
				"cp": [133.0005, 47.5763],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nbÞJb@È¯@xW¤Vln@lUVlkÞVÆxU¼°nUbbVèÈ@nIn@ĢmlUw°żVUn@lnL@VôbwĊlJķĸĢlwôwƨxVVUŦxLźÈ°`nnĠwŎJÞĶwôJ@¤XnÜĸln°¼È°lUbx@l@ÞÞÈm°lôwL°¼ĸ°Þ²nĠ@ôwÞ`ŤIVÒĠU@VJĸbÆ²@°ĊKJĶaĢȰ@ô¥°n¤bČU@VxmUw@aÝţÇķ@ĕķīU¯²@ÆmVÑô¯X¥ċç@ĉ»U¥ÝţKWVÅkUVÝŎUmÇÝx¯aķxÛUóL¯a±óōb¯ÑÅVÿ_Åķa@UK@wm@Van@UmmLVa@VImmXUWÝUÅKUwÝUUkVk@l¯XÅ_J¯kJmÅLa@¥U@¯Vz¯@`@¼mxƥŏKÛk@±laÛ@@Xm@@xƽ@WŎnˣĕÅ@@aÅ@@nÝbÇ¯@_UkUWkbwÝU@çWlw@anI¯lyX°m°VaÛm@mVwÞK°XlaXmm_@UkwÝK@VIXmV»I@a¯ğWbġaU_¯JU¯ġĉkō`±nÝÆkbóĊ¯XĢXmVn²JVlbUèČmKwlóğxxV¦UaJbƑÿÝLl@bmbġx"],
				"encodeOffsets": [
					[132615, 47740]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2303",
				"name": "鸡西市",
				"cp": [132.7917, 45.7361],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LKVVnkbVÈb²U°VnklVlaÈL@anU°ÜmXV`nôLèxlLXL²aVVmÈX@ķlnUÈl`È¹@Ť°U@xKnnVmlnnUllVnnaŎwlVÞÒ@n¦LV°lwVkLaÞlnÒ@xmLÞ¤Wn¼WÈLVVUxlÈôWVaU_VKKXUÆbnnôKbÞw°bÆWXamVwKUw¯WUkUlJUwVUa@@kmyzmĉw@kVwkW¯ÅKU_VmxU@aW@@kK@wa@K@@kVUaky°_Vmkna¯K@Lwġk@@IÇóXwVakmV@mwXUWanlĉ@ÇUwKóܛǊÛm°@wÅ@±b¯W¹WVwŹĕ¯kVmōb¯w@awmVUUbVIkaVwķxk¼b@VXXó`ó¼Çó¯kÜ¼WnźĖnxl@X`WzÆ"],
				"encodeOffsets": [
					[133921, 46716]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2305",
				"name": "双鸭山市",
				"cp": [133.5938, 46.7523],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UUwómÑÞÑUÝÝUkmmÅyV¯ī¥Uÿĉ¯mÇkaWbÅX¯aÝxaóLmmÅaWVLULV`UbXókÇVwUUÇKX»XmÝ£nK@wmÑkÝbKUlx¯kUKm¥@ÝÑkUōxmbUmkVkmmnkUmmL@w¯Vţ@Çºk_ÇmVk@ĸVxVÈ°lLkllUbōwnVW¼nlUx¯XmWUnÝ@xÝUó¼¯J@LVbkJWnkbW¯ÝLUxn@nÜb¯U¯nWkz°mJ@bkxX@èÞVxlaXlVV`°@ÈÞa@mÆ@@bÆ@ˤĖmXōƾ@@wn@@WÜ@kb@²ÜlŐLƦnw@»_°@y°UV@@¦bÆKnI°lIÆ`°W@kllUVÞVVxLÆÞVXWVnnUJ@UbnKVnm@Ubn@@xL@VbÆĸ`UĀÆÒ°Ŏa²ô°bôKÜVĸw°bÞwÈVnÞōVUÆlXU"],
				"encodeOffsets": [
					[137577, 48578]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2306",
				"name": "大庆市",
				"cp": [124.7717, 46.4282],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@mÇ@ÑÇ°¹¯J±ÅÿKUwI@w@±ÅX¯WanamKxIylX°wmwğKUn±@nVÇUÅkÆ¯Kmmw@@¯UkÝaUUVKmUlk@¯U`ĸ@VmxVxÜ@bÛ@mÅL@¦@@yLUŎ@ÆɅɴblġÈL@wÇaakkVa»@ó¯_ÝJwÇaÅXnyU¯¥Å@wbÝaLmm@@VUlbğVm¯Xm_`¯_UxmLa¯b@maó¦Çk¤V@bóJknVxVXx±aLUbVxkLVlLWl@nX@VÅbWlÈnxbWÅbm@xbml°bXbWXVmnn`Lmnbmb@k@mwU@@¯Jlbk°lbkmLXxmbVbkllÅÞxXxVWVVa²VÜ²nxVVnÅlVlL¼b@xV@XVbIÆ°¦lźbĬ°¼Ulb@kĢ@lw@ƒÜlnȂÆóȘIĉ"],
				"encodeOffsets": [
					[128352, 48421]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2304",
				"name": "鹤岗市",
				"cp": [130.4407, 47.7081],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Þ¥ô£nn@°ÆUn`mXn¤mX`UXbÆKVb@@bnWbwUbĊ@x@nbWVm_mm@ó»UmÅWXkĠ»²¯¯nķwŎ@ĊŎK°bĸUnÑKČ¦ĠÈbÆknJÆUĢV°IVƾwaVkÇ¯¯»mķkÛWm@£óIĵxÝōIğxmm¯_ÇŹKwťUVUƧwóxxġkĸķIkĉxóa@UmK@kVmUŻ¯Vxkġn@mmJ¯n°V@bXVÇxUzÆxkxlVkV@¦lbJLUbÆXō¼@xl@J@bVxXU@JÈ@nxVÆUXW¤knÆb°"],
				"encodeOffsets": [
					[132998, 49478]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "2309",
				"name": "七台河市",
				"cp": [131.2756, 45.9558],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²mŎ_lĊĢV°°IV`ĢbaĠX°@bJU¼WnUJ@ÞLlxV@n`lIUa@K°Iô»ÞVwÞ@VmnX°WVwmkX»UmŎxVaklkkKÇ¯UUwÇWUnU±bKWKkwçóKmU_nW¯ÛmV@bÇKkbkUml¯U±VÇaUamlUULKk@U@mwÛLwkLóÆm_±nk¯@@n±KnŚlbkVVmzlWXº@Ķ°"],
				"encodeOffsets": [
					[133369, 47228]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310230",
				"name": "崇明县",
				"cp": [121.5637, 31.5383],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@uŏu»GPIV±ÐɃŜ{\\qJmC[W\\t¾ÕjÕpnÃ±Â|ěÔe`² nZzZ~V|B^IpUbU{bs\\a\\OvQKªsMň£RAhQĤlA`GĂA@ĥWĝO"],
				"encodeOffsets": [
					[124908, 32105]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310119",
				"name": "南汇区",
				"cp": [121.8755, 30.954],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`yĉNǕDwǏ»ÖLxCdJ`HB@LBTD@CPFXANC@@PGBKNECCBB@EBFHEDDDSNKAUNBDMNqf[HcDCCcF@EFGLEBa@ACoCCDDD@LGHD@DJFBBJED@BGAEGGFKIGDBDLBAD@FHBEF@RFDMLE@SGANFFJBANPH@@E@FJjRIACDMDOEKLFD@DbDAJI@AP@BGHFBCBGDCC@DCA@CECGH@FKCEHFJGBFDIHACEDNJDCVFBDCRKRLDLITB@CjNJI^DBCfNVDHDFKHAFGDIICDWBIF@@CFAjFJNJBBHD@CJ@AEFJ@@DH@BFBCPDBMFEQGDIFCNDHIP@HDABFACBJFHEBSZC@DP@@JDBƤ~"],
				"encodeOffsets": [
					[124854, 31907]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310120",
				"name": "奉贤区",
				"cp": [121.5747, 30.8475],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~T~JjZdDbLXDLCB_J@@FHFZJJIAGH@HGR@BENBLID@@LFCDF\\FpDBDb@FAHKFE@dEDDdC\\GreNMACVMLBTMCCFCEGFAA@DAFDLMHA@OD@BMEWDOC@AS@KGAI_DcKwÕísƝåĆctKbMBQ@EGEBEJ@@MBKL@BJB@FIBGKE@ABG@@FMFCPL@AjCD@ZOFCJIDICIlKJHNGJALH@@FPDCTJDGDBNCn"],
				"encodeOffsets": [
					[124274, 31722]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310115",
				"name": "浦东新区",
				"cp": [121.6928, 31.2561],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EN@JJLNHjLJNR^GRYVBNZJRBV@PDvbLNDN@LGNER@nCNQNuT_TIVFV\\Z\\XnDrI|[Ʉś²ÏJUHOƣ}CA@IO@@CYDATGFIEDAEBBAGCO@GJMCEDCJRHEFANOCADAEG@@CI@FE@BDIC@AGIAIMiEEB@DE@AJCXJDCJEHGBELGCUCeMAD]CIJiM@DSAKJKCLQDQACUECDMIFCBDJGECHAEIWCK@GLMCCGEACNKCEJG@MMBMC@@CIJUINT@JAJSTEPZZCP"],
				"encodeOffsets": [
					[124383, 31915]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310116",
				"name": "金山区",
				"cp": [121.2657, 30.8112],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@L@BIHFN@@EE@@EFBDGDAADVDD@@EF@CA@IIsRE@GDAF@BF@CV@|FBCHBLCNHAFCADBMDCFZXHILBVEEQA@MWFARJJ@DCX@@TEFBLHAAERE@AJABRPBNK\\BrJ\\VHGND@CNADKDADQjGAGNC@GJ@FCFFHC@JF@@dLBDSFADHVG\\DTEPDDHJALIJkJDJCDIPE@YDCBiK@DONE@EH@BAF@HLJA@EIA@ALKNA@@FIFAFHR@NALadsæąyQY@A±DŉXUVI^BF@FFF@HBJEDFFGFEBSRkVEXGHFBMFIVW@GAEEFOIAIPKABGWEKFSCQLQBSEIBC\\FdBLRR@JGACFDDEF@AWB@LJJYNABBA@CUEGPaO_AIE@MYMFIGAEFECHSAAKAO\\[JEDB@E@MMA@@AGBKMGDFFCDDFEDFJF@NPBAFLHFH@EDDHBADDC@DDCDHHCDDFDABDAD@FEFOBCJ[D@HEDDNJBDDHABJIBBvGLBJAH"],
				"encodeOffsets": [
					[123901, 31695]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310118",
				"name": "青浦区",
				"cp": [121.1751, 31.1909],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RUNKdOFDJCbRFMLAHPLDN@JGL@@APBWYCKN@TU@SHGCEJIDIJKVIZVNM`iNY@CIE@CA@KBOEGEUFCCSADEIEFCDDDIDDHC@CKIeDCG@IG@DHWFEEGCH@@GO@@O]CNpeEQDBFME[JC]DGF@CKOA@QSB@GB@@GW@@ED@AQIJIAAFE@@DO@CFI@KNG@CDACAFEGKGBEGBDCCAIFCCLIECFI@MBCLDHGNAHSF@DMB@EEKBA@@C]DEICFG@ADBHGFKCDAKKHKD@@FHGAANGEEFCHKCECBCKG@ADKCNE\\[A[I@@mGBDQQEO@BCE@AI[AML@JGACLOAFKEMM@EQKC@CUCBCCBCHEA@FF@@FM@GEAJK@GNF@EXPH@FD@M^@HIADJCFDBER@DK@@DE@CAKFOCCBDHIBCNSB@GFC@GQEEOWFICGDUAEJIDBTAHJHEB@DIF@NE@H|HBDBEH@DKBAHEF@HEEUB@FGFGCCCE@AHOB@NH@PRLVNNFBX@RCPbAvMtBfH@DJF@ELBFA@EH@HNED@FFB@HLC@CJ@@DJ@PIRf@HE@CFF@GPHD@DKE@FFBEFFD@DEFCA@DD@IjCRFBAHFDKD@HF@@PM@H@BlbDJDBFEF@DLXB@HCD@@IFCBIFEJD@FDC@FBALLF@PAACJERACAJCBD@EL@JD"],
				"encodeOffsets": [
					[124061, 32028]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310117",
				"name": "松江区",
				"cp": [121.1984, 31.0268],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@DLDFRN@FNELPBDKHB@INK\\BBJF@ADP@RFCRHA@nJ@B\\[\\MFLDBCH@DLDADFGLEDFFMHBBGH@EC@GLLLCBLDHEAGBCH@DEFJ^C@DB@LAFFA@CNE@GTMBGHKCAD@NEJFDKJDDJEDBCDHAAFLHFHBEBDDCH@LMJ@DEP@@CF@BEJBJIBRC@@FX@@HA@@HTA@RPBDLE@CHD^\\INFAERCfFMo^D@PP@@HG@HDFFXECGH@@JDHfCLJ@DGDCCCJCCEDJFCFTBDDVEHFPFLAB@NBFCFKFC@CHIACNOHWHCAAFIDD@CDAGEI@ACFMF@R@R_@GQED@EGFEQEDE_IAHKAEXCQUOQCUDEN@ZI\\DDmAMHCICDSOC@EG@BKHIGMIBCGOCSF[CUHCGEBCTKA@cE@@IGDEEEDI@@HMDBHiHCRCBCLMB@DMCGH[UqI[AMLOAAQIB@BQFBFGBAKFE@SW@CDI@QIEBNXB@FRUFKAGJYWDENCCADBBEMGKDGAAD{EU@@DAEE@CB@HQFJt@JDBE@@FC@"],
				"encodeOffsets": [
					[123933, 31687]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310114",
				"name": "嘉定区",
				"cp": [121.2437, 31.3625],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@F@LI@IDKJADKIEJICADGACFECCJ@HKCAFOHAJI@aCBEE@ICAEB[GFGCKL@FGEIFADMLCAEJM@ELQECEIG@BE^QKKLQCA@EHBIGQ[GEHOMGGDHKH@JOECFCjCBEFDNCACMBCILGTABDLEEOEIG@GFIMM@CGKFBFCDE@@GEAGEEACIcGaHMFITIHDN[AKF@FS@OA@BK@IHM@KCGOKBENaQIDECcPMLQVFHFB@BFBKLGD@FAJOVGIACQ@A`LPCB@JEF@RU@ANS@@RCL\\HIFpRBFRBBDKLLDADJDGBFDABHBEDNF@DGBBBADKDAHC@\\JJFBDEH[DEFDH\\LX@XLBLbT@DNJLDCEL@VJABJNDHB@HBHYFBAA@GNFB@@AFB@AFABFLFBHFCL@HJBAFBLC@DN@HN"],
				"encodeOffsets": [
					[124213, 32254]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310113",
				"name": "宝山区",
				"cp": [121.4346, 31.4051],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@mÖoÖi½[s[YEUJU`SCIEBCCWJY_LIICDWU@@FaBCJIB[ICH[@@CDKEE@MK@@IMCAEBCH@AMFI@SMGEFGB@FK@BHCAIFJNQD@FEBDFMBKGACG@ECWH@@CDDTOEEBGEK@GC@EE@GPHFR\\JHGA@FDBKRLL]RAFH@FJFDKR@FINBFKDCNEBFJEHK@DLEH\\HFADB@JFFDA@bIJGBEPDBGLI@DDEFBDCHDBIJJFCLIBCL@JKJE@ADHDBHJ@HIBBDFHBBAEIJ@BJFAVL¢"],
				"encodeOffsets": [
					[124300, 32302]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310112",
				"name": "闵行区",
				"cp": [121.4992, 31.0838],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@T@@ELE\\BCMJGJSNEbGdHDJFBJAFIEIFCEWG@@gMENSFCVJFAxR~B@IH@AIiI@GE@FGEAFQPDRiV[\\DFSGMHAXHDOMCJCDETBBNVJJI@DD@ANNNH@FILDDMFBDHNDHKL@XDFGLD@EHGFD@DDB@CDDHCDAEAHG@ABOJ@BIaC@CECLKPFNCDCJBiQEIF@@@OGBMIAEEBMTHF@NKEC@QFEGA@EBCKAACHCLJHEFHHB@AFCAIEACIC@HG@KCCDC[ECEED@KC@KJMAAFQ@GHG@BHIJYIGE@EI@A`KDWCaKcCiY}I}S[CYJM@CFDVPRRVWDFLBBG`JCFRFEFFHC@RF@HQ`Q@E@ENBDJ@HFCB@DCCEJBBGDGXMPBDGJ@DEDELEDMA@DJF@DMZ_jMNYUUJILCJIJDFGH@TSVM@DLXZ"],
				"encodeOffsets": [
					[124165, 32010]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310110",
				"name": "杨浦区",
				"cp": [121.528, 31.2966],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V@CXJDKJZ`XIDDFADJvSRMDM@mFQHM@KCMKMuaOCU@BDAJSX@HKJGD@PNJCJWAGT@R"],
				"encodeOffsets": [
					[124402, 32064]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310107",
				"name": "普陀区",
				"cp": [121.3879, 31.2602],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@F@@FHDL@HFFAPFCSDC@@XGFDH@BDLHNACEFA@ERCIMJEDBAGL@@EHAFENHHJ\\ONQBQCIBC[MKACKI@GGGH@I_G@CW@[DMHCDIBMTDHN@JNHEH@FJFPKFACSBKHDJNABDMDECAFiDEDFDIPG@GLHCNH"],
				"encodeOffsets": [
					[124248, 32045]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310104",
				"name": "徐汇区",
				"cp": [121.4333, 31.1607],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RADL\\NCPHFfLJaJ@FWLGMGIK@IFMDOYYFOTSBI@IMSAMSACFIDNDCPWGGBHNET[CU\\QjOCERFBEHF@@HjJBJG@@J"],
				"encodeOffsets": [
					[124327, 31941]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310105",
				"name": "长宁区",
				"cp": [121.3852, 31.2115],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HFFB@HF@DCAELENSJADCNG\\CX@@D`H@JHGHHJ@BINBFUGEDO[MCKQB}AwQEBUIEDMTNF@hH@FXEDFJEJIB"],
				"encodeOffsets": [
					[124250, 31987]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310108",
				"name": "闸北区",
				"cp": [121.4511, 31.2794],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@CSG@BQGODUPWTOBQAAFMECKBGEMFKEOHADDJARMR[PGI@TEJBNG@ADBFND@JL@@NFFCL@D\\@DG\\JJADI"],
				"encodeOffsets": [
					[124385, 32068]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310109",
				"name": "虹口区",
				"cp": [121.4882, 31.2788],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bA@E@QHSXBDIMI@OHCLI@GTWBIACQAYIOFGCENBBARSPOXCVHPARH@DT"],
				"encodeOffsets": [
					[124385, 32068]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310101",
				"name": "黄浦区",
				"cp": [121.4868, 31.219],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NEHFLAFDHDPEAMZUHQQ]IMKJG@EPERABHBGRUCCNGV"],
				"encodeOffsets": [
					[124379, 31992]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310103",
				"name": "卢湾区",
				"cp": [121.4758, 31.2074],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VDHQGABAFQFOH@LIiKKHEXI@IbAFZB"],
				"encodeOffsets": [
					[124385, 31974]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "310106",
				"name": "静安区",
				"cp": [121.4484, 31.2286],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DLLB\\NPGLFHUDMYABEeKEVMAAJ"],
				"encodeOffsets": [
					[124343, 31979]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3209",
				"name": "盐城市",
				"cp": [120.2234, 33.5577],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n@°ĀÞ°@¦ULWKkx@bkLWb@lUlVXXJVbnUKmxXV@bm@@XLÞÜ¦XlVnmzVJ@n@²ÞôkÆÞaȰĉwnǉÜóéVÛnĊīČǉĉ@ō@KÞUlU@kklÇÈÑÑlġXɛ@UġaU@U_W@n@kaUL@VW@kKmkUV@bkbWW@bkzma@JWI@KUKUL@U¦`@XUJU@KmXw¯KXkmy@aUIWJXXmV@K¯UU@@bVL@¤VLXbV@@JVXVK@JVn@bkKmakVVXUVVVlI@`U@nzVVb@¤n@@UlKXLVVI@V@nV@V@ÈUx@óVōkÅWó@mU@bk@Ýwk@WbXxm@@J@zV@kVbVnLWVUXWUXUWLU@Wl°z@VkxU@UVWIxWJkbĬnW@@bUl"],
				"encodeOffsets": [
					[122344, 34504]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3203",
				"name": "徐州市",
				"cp": [117.5208, 34.3268],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XKVX@WnIVx@K°Lnll@@I°KnVaU°x²mlx@VanU@ak@akmV@@w@Ua@aUwVwUw@w@UK@£kaĉlóIÇVk±@@kUKmVkIkxW@Ua¯UUm@UVI@WVIJV@@Um@UanaU@mI@J@XV@XaVlkXVaUUWLUyVIXmWak@XkJókJUL@KWkk@ULU@WalUIkJmImkVbV@lV°kXUKWKULUmb@VUlVnb@VV@IVKUUmU@ak@@bmV@xklUU@UKmV@nJVbkXKUamLUJ¯UUVmIbVVLl`@LLU`m@kXUVU@VlxUK@xkIWbUKx@VkVVnb¯@@U@xkmbkLÇKb@@XnJ@LmVkl@@XlUVkxakVVb@bVnUbU@@xVUVb@nIĊ`XVVôJ_K@xlU²KlkU@VaVVÈm@kVUVmnamUUaVXIVJ@ç@¥nkVLn@@XVK@VUX@JVUV@UnVJVLUJVLUVlnIbKnU@m°VanI@anVKVLanlKblKÞk@¦@¤@VKnLVKLKVzlWLX@VmV@VbnU°@UalkWXLVUKWkUUW@£Wa"],
				"encodeOffsets": [
					[121005, 35213]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3206",
				"name": "南通市",
				"cp": [121.1023, 32.1625],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VJ@bnzWl°LxnW@LVVI@W_V¥@VKVL@LXJI@nbly@aXXla@aVUnllLX@@UVKlb@@mXV`V@bĢlkČÇÆȘ¯wnĕVĉVÿUƒUĠŦğlXÑVǵ@±ōLʵĖ¯lÇbÝÞ¯xk@Çkķén¯@ğġƴǫ@kVVlUbL@xULÇóLUl¤@nkVV°VLkxVb@laUXUKWĖklVX@¤UUkb"],
				"encodeOffsets": [
					[123087, 33385]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3208",
				"name": "淮安市",
				"cp": [118.927, 33.4039],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nźUôÒɴèl¦nĖVkbmX@xVlVL@xUb@bUJVnUxlKVLÈxmzXV@lW@XVb@bÈVxnbVIXa°LaÆVVaXUlK@aXIÆVlXKVUlIXalK@alwXLVK@¥Ý¯¯ÿ@mVk@aX@mīlaXIwXJVUV@lw@U¯ybUaUġUÅaUKVknaġm@kUm@wÆIV±nLÆwÇnUUk@ƅÝU¯JÝI¯¦Ul@b@@VVL@l@LLÅmL@b@UaVaUWmLUKV¹KLWKX¥WI@mXk@UmaUVUU@VmL@WbkIUWUmVóIkbmm@UbVLUxmJkU@bkJWbnXU`WzKUÞÈlVbLmx@kè@Æ"],
				"encodeOffsets": [
					[121062, 33975]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3205",
				"name": "苏州市",
				"cp": [120.6519, 31.3989],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôèĊVnX°¤²lxƒÈÜ@²x@J@b@X`nIUÆUUV@bl@VVnL@L@xJ@X@blJXnW@@`XbWkV@UbVxXUxkV@LóxVbUVW²VJĸklUǬ@ĢƳĠ°@mƒī°»ÈÇ¥ULUU±a@bU@¯U@KnImUVWUkmXUVU@lIVaUUVWKUbUkWKU¥n£WakJUkULK¯LKkVIn@VaUVUUUkVk@U@amUkJ@UUlwX¥W@@UkVmk@JUakL@kk¯ÝmJUn@nmVXlmbVVkn@UJ@±WUxV¯a¯KōbÅ¼ÇxUxUUlWL"],
				"encodeOffsets": [
					[122794, 31917]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3213",
				"name": "宿迁市",
				"cp": [118.5535, 33.7775],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XbWnUJVzXKVVUbWklUWbU@@W@IJ@nVmbVbn@@V@UIUJ@XUJ@VVn°VVbX@lwlJnUVL@l²@lÈUôJĊklb@¤VL@@xVxUxVx@bVb@@xU@lnmnXmXLVmV@X@lxVnVJôLLXax@b@@KVL@bn@@m@@alLUUVaU¥nIV±I@mXI@aWWXU@LlUXWW_XWmaUwÇ@aaWUX@@kWUynÇwUKkLVwUmVI@aVa@wUKUk@wWnlaUmĕk¥ɳçóÑŹVmmzkVmm@a@Iók@@LWU@`WbXLWlkImJVn@`nXVbXmL@Vn@l@nUVl°Xx°U@LVĠ@z°@¦UV@Xn@VJmV"],
				"encodeOffsets": [
					[121005, 34560]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3207",
				"name": "连云港市",
				"cp": [119.1248, 34.552],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@lzXxmÆV@@¦@l`XnlKXXmKnLlab@xmbm@kL@V@Vl@@VUXJXmb@@°Æ@èÈzlW°XĢJlÈ`lInbWV_@m@UUķnôw°ÆmnaVVÛVmĸ»Ģw±Ý@@mUInyUmWkÛ¥ÝK@Wn@@aWUnwVLmUaWIUWVk@kkJUVWLUkÅWJ@bkLWVUbÅUb¯KWbUJWXX`WXkV@KWVXX@bWJ@nJU²mJV¦UbVVkK@b@@nm@@aUK@L@@awWbKóKUIUmkwW@U@UnWKnmWn@bl@bmVUb@kw±n¯wVUb"],
				"encodeOffsets": [
					[121253, 35264]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3210",
				"name": "扬州市",
				"cp": [119.4653, 32.8162],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VUXblVVVb@xV@kzV@lwVLUbVV@VU@VbUblb@nkĶ°IÞV@ƆVlmVÈÅxmKU²ÅJ@xVn@lĢnmbUlVLÆbĢVVbVaXk@VXKVVWXVWXUmKUaWaU@¥@£XWUUV@@ynam_VWkUVUna@ÆV@mnkWmXkWUW@k@@akkllWUI@UnKl¥I@VVma@a@I@U@a@anK@UmK@ÅVUnJlkI@aVwka@mVIUW@UWL@WÅbmIULkaUWUxkLUKWlXL@VImÅVUmĉLUól¯I±l@ÒUbVbUVVXUJUnVV@lnbl@"],
				"encodeOffsets": [
					[121928, 33244]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3201",
				"name": "南京市",
				"cp": [118.8062, 31.9208],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@k@ma@kUUVmVIUWVUUaVa@Ñ²k°Jôk@Wmk¯KmX¯aUakKWU@XULXaV@@mUaVUUl@VmkaUXm@WUUna°IlmVmIUW@Uk@@aV@VVX@VI°»nmU@VKVan@m»UaU@U_@WlIUaaVaUala@¯n@kaUkUUWKU@mwkUUmmL@K@LmUUVKVÅImUJVkVVLèVLVU@WLV@nVÜULVUL@bW@XbWbkJUUVUxVXmVk@WUUkVmIV@nbnVWbJUkUULa@Jma@XkK@VVL@L@JLUVU@V¼nXlbm@kbUKmn@lVb@VXXVUV@b@LVbÆxXbl@@lV@UVV@XVK²VlI`UbVbUlVVn@WXn@@VUV@@KmbVLXÒLkKV@nX@VVUV@bnVllbmnbIWVXU@`lLlknVnmlLlbUmVInK°nUU@l@VU@Vn@@alI`VIXaVaVa"],
				"encodeOffsets": [
					[121928, 33244]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3212",
				"name": "泰州市",
				"cp": [120.0586, 32.5525],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lUU@@y@In@WwXal@Þxl@@anVô@ÆXlŎôU@Vw@ÇUU@@m@UJUUWKkL@Vm@@£aUUmyV@@_kJUUVUUWlUnblL@aUmI@ULUW@IU@WaUK@£UK@aV@°V@LnUWWXIlaVV@£UWlkXĕVLVWb@kUalwUKU¯lU@mk£VôKÈVK@wKVaUkķlUI±ğ¥ÝUŹ¯ôm¦ĸ@XXK@VVXUJ@nlbUx@blJkmIUV@ÆnL@VmL@b@b@V@J@bnbU@UJk¦mL@VVJkXkll@b@@lXXVWlXnml@nÅU@mbUVlVUXn`mb@zU@VVWX@¤¦V@Xb"],
				"encodeOffsets": [
					[122592, 34015]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3202",
				"name": "无锡市",
				"cp": [120.3442, 31.5527],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nLÒlxUVkLam@kVWUULUxVVVbUV@bVLUnnźÞVĠ¦XVUUaôw@KlUVwWUwVa@lUXWa@_X@WmkI@a@WI@w@KmKUUk@@aVUVVÅmJ_@W@a@I±wÛ@ƑÇkw±¯£mWĉUóçK¯VkUWK@XkV¯UWabmUaUUblln@b@xbXWX`@VxUblL@bn@Vb@`m@XbWnn@l¤n@xnVlUVLÆWkV@VbÞJ_nl@nKVU@aUU@mVk°WVLUV¯bVXbXlVn@VmL@xV@bl@nW@X@VVJ@²VJVU"],
				"encodeOffsets": [
					[123064, 32513]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3204",
				"name": "常州市",
				"cp": [119.4543, 31.5582],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LnxUbVVL@xnnWnn@VVXn@yImx°La¥n@VkKVwW@nXVJ@b@UVn@UnUV@Lb@`VLklVÞnÆ@VaXLlÈJmmVUK@aVUUaUUVwVKXVlUn@blKVUkwÑmKUVUI@±UI@U@WmX@k@aU@wnK@UUmWkaWU°aVUUK¯XUl@nVV@bUVmLk@m`ÝIUaU@lÅXUKkVmU@wmk£m@XmWan@@_Uam@@akKVaUw@W_XWa@w@akmm@mL@UJmnUK@@XnJWLkKUb@VxkWLaWVUImVULUK@L@lkLVVVllbm@@°kbVbUbbVbkJ@XV`V@Vbn¼"],
				"encodeOffsets": [
					[122097, 32389]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3211",
				"name": "镇江市",
				"cp": [119.4763, 31.9702],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VĊKnVÆUnJ@UWKXkVLlKVwXVlbVKnJÆaķn¥°óÇIkWKUbÅ@mUÝlkUK@_a@KVUVm@mVU@@aUIW@mXUxLUlm@¦bK¯nwJzm@UW@UmmXmm@wKUUVamwKm@UbUL@Vmn¯¼JUW@UUU@@bl@@VVXJnnUk¯JmbVVXn@VWlbUnk@VVUVb@nU@WbKWV@XVlLVb°bnW°Lnl@X"],
				"encodeOffsets": [
					[122097, 32997]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3311",
				"name": "丽水市",
				"cp": [119.5642, 28.1854],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@VbVl@XnUXKV@¦nxlUXVnKVmnLUV@bn¤lLXK²`nnlJXIVJIVnn°KnnVll@VLXWV@UkVaVKzV@VVaUK@U»VUl@@WnUU@wVLn@Vwl@XW°LVbn@VU@Xl`@XnKVbkl@XVJlUnlVxlL@lnXl@VUnV°°@aUVLXblWVXn@VVUV@L¤VLVUVbnalLUUVX_laVaWVzXKV@@a@KUmImmXama@kU@yVIUKaVa@kXK@aWU@VIUmW@kkVmU@VwUa@K@k@U`@kUKVk@UV@VaUm²Vy@klUUWUkVmUa@_KVaXaXmU@mUlWkaUX@mmkL@wJnVVÅbWKXa@@I@aJUUÇ@VULW@akLmb@K@aXXw@mVmUVkUy@£@aU@@VkUWm@kUKXUWU_mW@wkkmJUUkLWWUXW@IkJ@k@mW_kÓ_UlLm@I@aUa¯m@ka¯LUJ@mVVxUba@LUKkXbm@Uak@@a@Um`IUbUJ@nUVW@@LnVV@lUbVlUX@`@blXklWUmXlm¦U@@V¯bml@@nUb@llnn@VbX@lV@UVULmU@JVnbVbkbVWxU@@nUVk@"],
				"encodeOffsets": [
					[121546, 28992]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3301",
				"name": "杭州市",
				"cp": [119.5313, 29.8773],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X@l°KXXlWb@²`bIX`l@@bWl@n@VnLUV@V@°¦@l@XVlU@@xVbUb@Vkb@@XVJVzJ@LÞ@VmLUxUJ@LUVxbxXUl@VaÈwbaÞa@Vl@XUVx@V@VLlbnVal@lbVnnLnKnL@VlbVJXalIb@KUU@mVInJUVl@xUVLnU@UÞaV@lkV@UanKL@UlKVUnbÆmn@@nUlVnVJl@@UXUL@WVIVJVxVLXV@IÜKnbn@V¥V@@I@y°b@UUwnk°ÆƨVlUçXm£aÇIkV@WV@@aWIUWUIkb@WW@UnK@UU@kaWVkVIVVnU@UWVUV@VmVkKkWIkVWaULU`UImJUImmU@wmwUVIUWVkUamaU@mVkb@KVU@aVU@anKULVJU@kÛUJUVkkVakU@aVwkW@UWkXmWaULUaUK@XJUUmVU@UVUkJ@ImwmKU@k@lUW@@akKmkamIkWl_UwVm@UkaVUUa@UamakbWlkL@aUalU@mkL@U@UlmK@XkKm@Ýakb@xnXb`nUUU@U@wU@@mKkkV¯U@lULUbVbUb@Va@LºÝb@bLmKx@VUL@bk@mxULWl"],
				"encodeOffsets": [
					[121185, 30184]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3303",
				"name": "温州市",
				"cp": [120.498, 27.8119],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ll@xnXV`VXWVL@lXnlV@UV@@b@¤VzUlnVU@nWxW@b@LnalK@bXVKUÈ@VVI@b@J@WbXLÆaUUmI@xlKnn@VWlbkXV@nVWnWbUbL@`VbUnVlVXkV@lUz±VnUbU@@VUlVL@l_@V@l@LVbV@XLV`VÈlxn@lU@aaVVk@XJ@nl@@LU`°LVbL°a@aUVy@anI@aanV@²wÜJX@VVV°kna@WVkaWwU@m@kaUĕÝÝŤnÈaaóI»@±XWkUķ@kV±kwUkWwUÝ»ÛkɳlImaUaWóXÿǬkUnWVmmkKţnŏÞğlUlUx@XWbV@JkX°mb@VULVxUVk@@LWWk@WIkUkJmUkVmI@y@UakLmU@mUUUkaVk@mK@UlUU@UmKmbUUUJ@n@KVLUL@VkJWXX`mnULWlkL@JVLVb@°kxkU@LVV@VLV`UL@VUX"],
				"encodeOffsets": [
					[122502, 28334]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3302",
				"name": "宁波市",
				"cp": [121.5967, 29.6466],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ċ¦ĸĀ°nXÞVKkƨƑźÿ°»n@wô¥ÜbU°ÆXÞWóçĉÝ±IUÈ¥@U°wÆ»²mm_@aXVKÞVlk@akk̅@£X»VwÆXWa¯aȗbKƽŰĊxLók@@¯nKUL@xkLÑkWULUUmJUXVU@mUX¯@V`mbXbV@@nn¤WXx@kJ@nVVUVl²UbÝVUVk@Wx@V@VXzmlaL@VlLU`XUVVVUnl@VbnJlnUVVnlUKkbmnnVxlJnxmbU@UL@KUVX@xmb@lk@mnVVUè"],
				"encodeOffsets": [
					[123784, 30977]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3309",
				"name": "舟山市",
				"cp": [122.2559, 30.2234],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l΢ƒʠþÆVĢLĊǬXĊÜXôVÑÆwlƏÈóVĭVǓ@ĉwɛkmK@ĉXīWaĉUĵÝm¯ĉwĉ±±nÅ¼¯x@VÇ¦V²JĊÞôèÝXÅW¯VÛaó¦@xm¯¼ŹĀ"],
				"encodeOffsets": [
					[124437, 30983]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3310",
				"name": "台州市",
				"cp": [121.1353, 28.6688],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lVIVWVz@bXJl@Xal@°nLll@nVxnVK@UJVb¦°k`UIWJXnÆ@bUJXl@lbWn@UzVV@bVVmVnnJVXnabKUKnUVVUnVLlKVLXaJm£@mU@WanaU_°@VWnV@UVWnIVVVKlXÒlK@wVKL°m@l@ôKwĉƾůUl£@»UVkm@ƅUaÛIŏmUk@mw@a£Wk@ţIm±@ankôUlaUUw¯ōabÇbţmÞÞVĖbl@@nVXxbUl@Xmb¯lUUUW@ÛI±xU@mb@bmJ@bUzV@b¯bKUa¯KV_@Kk@@mWI@lUUb@bkVm@kwUÇU_WKU@Ux@VUnllX@VnJ@UXV@bWL@lUbbVLUJ@zV@lnbWbnnnJV@L"],
				"encodeOffsets": [
					[123312, 29526]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3307",
				"name": "金华市",
				"cp": [120.0037, 29.1028],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nbVb@VbUVlb@VUnVxk`lXnJlbnlL@bX@V@klV@nLnx@JlIVU@VUVnVVI@WVLVbVKXbWnXl@VlXUxb@lVUbllVUIÜVnalKX@@bV@@aUUlUwUw@naWWUVaUUaVbLlxXJVk°UlkU¥@ka@LVlXLVlVWznVn@lxJl_@WX_@mVaa@alU@kVVnaKVLlKb@UUaVabnUWmXU@k@yVI@aÅWmXIVJl_¯¥UaVI@LmUUw@mkkmK¯k@Wbk@WI@aUyUXJkU@bU@WLUyXUbkbW`UVVkKmbUaVUUK£@KVUUUm@UWkXWaUKV@b¯¯mUV@UkmW@kkKwUmkkVUI@WlkUamL@Wk_W@UVm@Ua¯KWXk@Uxm@UK@xVmV@Xk@UVV¼@VLUbUU@yULUbVlU@@XlVUVVbU@lXXVW@XUVl@@VUVÈn@VVU@lVa@UmL@`X@`WL@VUX@lUL@xlx"],
				"encodeOffsets": [
					[122119, 29948]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3308",
				"name": "衢州市",
				"cp": [118.6853, 28.8666],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XkVKnwl@@aVK@UwnLK@aÞa¹@Kb@UVaUaVaVK@k°VUllnL@V@xV@V@VVm_Wam@wlaÞbn@lL@WnLk@V@VlK@nkVVb@blKXklakw@wVK@kVW@UXK@_W@_nKV@Ub@kVUUm@ÇVU@Uk@VU@WUXWW@kVUaVUkU@WWXUKk@Ukmm¯LmmUJUIWJkImm_±WLkKm£@aVUmKUnLmWUkVmw@¥ULVWm@WUka@UmmLmm@@bUX@@WUIm@UVUK@UVUUUVVJmb@bXnmV¼nnn¦mJUVLV@VW@UzUlVnUbl`UnVl@XU@kl@bmÈUxVk@@J@¼W@ÅaVVnzmV@WJk@kWJ@lXbWbXxmVnlLXb@°lKVXnWbWVXmbV@XlbI@Kn@@x@VLlm"],
				"encodeOffsets": [
					[121185, 30184]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3306",
				"name": "绍兴市",
				"cp": [120.564, 29.7565],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@x@VnnVJnIVJV_VKXblUXJllLUUnU@UVVX@mVUUUJlXUlbV@@VLVmX@@XlaVJVXXJ@b@XU@lUJÈb¤ŌJçVUUnml@@kna@wWVU@LVKV@namwkIUwmnmlaVLkUmVUkmmIUak@VmUUVUWV_kK@UKbnkWyU@@UXwl@VUÞUVak±VUUU@mlI@wXWIWbUKkLUKVmUUmVVLLambUWmIUmnUU@aUUVym@Xkak@W@z@lWVXnmVaUbVb@VakLUKLmbUU@lkV@bbUb@nW`@Xk`Ikwm@mUXyUUkWKUk@Kb@lV¦klV¯UlWIkwKUabVVUbVXXmb@VxxkVVV@bU@@aW@kLmb@lVUIVKmL@bUV@bUV@LalnUV@nbVbUlVXJVUnx"],
				"encodeOffsets": [
					[122997, 30561]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3304",
				"name": "嘉兴市",
				"cp": [120.9155, 30.6354],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@blIX@@VÜVUnn@lklKnI°Þl`²LVKVbnbVaVLUVn@W¦@VkVVb@VI`@blLnLaX@VVb@U@XlVa@@kVaUKV»U_lWXU@albk@VllnLVKn@@UVIUw@y°IVVXU@VV@lwm@wVkƾaJLkΡƧƒlLÝUmW¯ķÿĉ¥IŋWnèkVƧU¯ÅmlVx@V¯az@@JU@U¦m@@nVmn@VLV"],
				"encodeOffsets": [
					[123233, 31382]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3305",
				"name": "湖州市",
				"cp": [119.8608, 30.7782],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@kLlkm@VmÛU@UW@kJ@aUK@UnmmU@maÛL@JWUUKUwUIUJ@XKWV@Vk@UIUmVk@mm@ÅnmaUVkL@VKmLVbU@klU@ÝbV@mVUKV@wUkVmIUJ@nVV@LakJWbUIka@UmKmLKmmUUVk@@nmLX`WXUV@@nUlkmlU@UbxVVIlVnn@@nUÒ@°n@@xmb@VbnV@@b@`@L@L@x@blVklVbnnV@aXb°VlU@Wb°ULXWVUVVwÈwÜ»ĸaĠnUVw²X@V@lVU@wlaUUVm@knUV"],
				"encodeOffsets": [
					[123379, 31500]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3415",
				"name": "六安市",
				"cp": [116.3123, 31.8329],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nJUXUV°UÑnU@mlLVaVln@@bn@VU@xlb@lLnKlVIJUVxnI@lVL@b°VX@bxnVVUnVVnU@kX@VwV@al¥UUnUWa@@wĸULU¥lKUa@aUI@alLVaU¯anWkUKm@XV@VaXlW@aU_UWVUI¯@ma¯W¯I@UU@WWU@U@@UU@VkV@@WUUm@UaU@lK@IUKL@KWmXUWaXI@@a@a@U@U@KV¥lwk°b²JVIVKlV@UXlaUl`UVLVVVUJU@Lnm@_VK@KUIW@J@Xk@WW@UmmXmWk@kK@aUUVmmkUwUmWL@WmU@UJmUULkKWakLWVkIlwULW@X°lUJ@°ULWVwmJ@bmb¯Vkm@@WkWm¯wL@lkXWmXym¯UImJUbkV@Vn¯@V@lUb@mk@maUxmlUbULWn@JLmKUkWKkwUKbmXWxkVUKmLkVV@JUUWL@xkJUUV@X@VVlUbVX@xk¤x¼xWxnnn@Þ¼JVb°aVn@mlnXUJlbVlkz@lUlXJmxVxXnWxXÈWlU@UxU@VX@xUL@UÆmLnV@lWXk@@JlbXblnlJ"],
				"encodeOffsets": [
					[118710, 33351]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3408",
				"name": "安庆市",
				"cp": [116.7517, 30.5255],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n°znWXlW@kK°xXnl@Xn@l°Una@anIxXUVK@¯VIkW¯X@VKxklJXUlKXblLVKnVVIV@Xn@XKVnVxlnnUlmV@²óUkVlWbln@VVVIn@lw@WVIXblV@ÈxaUaVIVVnKVLKln@b²K@»U£ÑķġÝÅbKa@Im@Û@kWÓkkmKÅnóJUÅ£W@wĕ@wĉţ¯¯UkK±l¯U¥UÑkÝUķ»Ý¥¯JIUVbUl¯ÈV¼VJU¼Vb@bkLUl@VJ@bUXÇ@lkVmXmKkLVxVL@VkVVVlzWkbmLUUUbVbUVlÒnJlUnLllUL@bUVxlLXVÆ¦ÈVU¦WJ"],
				"encodeOffsets": [
					[118834, 31759]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3411",
				"name": "滁州市",
				"cp": [118.1909, 32.536],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@`nnl@xK@X°KXVIXVlbXVWnXlL@È»LVan@VJêVVn@X@laÞbVayn@_xnWVXnWl@VnUVkI@lnXKVLVV@V@kW@LlVô@J@bVnnKnkVa@»lç@nwKmaUUUVÑ@nmWXalI@alVn@VwUaVU@nlaôJnUVVXlJaXXVK@UV@VWx@nXVWXVUlLUbVULVVnUVbUbVb@@aKÆnnKVK@U@UU@@a@V°¯ÈJVIlķ@aaUaVKU_@mkxUI@aUlyU@@wkKWmUbUnUVWbkJW_J@bn@Vm@@KULk@V@@bVbÅm@LW@UVVbkK@UkKWL@VULUKWIUJUbkK@_WVXUJka@XVa@ky@aVIUUW@@mUlLKWÑUKVan@UkVmmIXKaVaUwVU@UmykU¯@±UUL@WUIVUU@KkIWaaU@kUUaÇUó»mKk¯@y@kWK@bkI¯`mnl¯XWlkVUzUJlbUbVJl@nnm@VULV`XnWÆbmUUnJmUknJ¯km@yk@kUxL@VUbmnn¤lX@`z@JmaULUVl@Xn@xllkXWaaW@UVmUb@mVXWxXbWbUÒnVVnVVUL"],
				"encodeOffsets": [
					[120004, 33520]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3418",
				"name": "宣城市",
				"cp": [118.8062, 30.6244],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Vb@XLJXxlIXxlVlV@I²¤nlUnVU@VULWVUJ@Lnb@lV@UnV@@VVVlLnbnJUVkUUVWn@@anUVnVJVIV@@nUJVbUb@VUbVK@bn@VbnIlxkllXVlXKWUXUlL°¤UVVb@bUlkXWxXz@IlaUlnUlJVInVÆJULVUnVK°@VnlVnxV@XLlK@wVL@KnUlJXUbnKVLXlUw@VWlLXKm@@a@VLnmlIVVnKn@kVaVlwk@@a@k@VIUa@maUa@wna@kmWUUmVUIVÇ@aKmakUJ@InmUUaVaklX@Vk@m@VU@wnK@alKVUkUkKbmUkm@U£WVk@@UÝbbaÇx@b@WVUa¯@wVwUUV@VwnK@KWaÅ@KIUyUI@WmXóUbWaKm@km@IUyIUaWKx@zUKUL@llVUnkLVVkJWX@VUKUVIkVWakb@VWb@n@JkXUlmL@xkL@`VxLUÈUJ@Vm@@bmIUlUL@VUVVbknm@mKUwKVÈ@J@LV±kkJUIl"],
				"encodeOffsets": [
					[120803, 31247]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3412",
				"name": "阜阳市",
				"cp": [115.7629, 32.9919],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Vn@ak°a±@¥@UUI@aUmlwUUxb@¥XU@mmI@a@Kn@@_W@@WI@mUVVXUl@XaV@K@I@aLX@aVI°K@KVLUUwyXkK@kKÆbXnlK@k@aJlU@w@U@»@aXKWn_JXkVKn@°LlKXW@¯U@aUK@kmJUwVIUJkmLK@kka@wUVm@@am@UkUbkK@nmVÒ¯VUWVVmIULk@ma@kkK@nUbUamU`UUVUkKVkkW@@bkmnmUXVKXVL@VbUmbVXJ@nmKÅI@KWKUXVJUL@VUKUX@KUKWL@LUJmaXXm@kVVV@L@VUL@VlK@L@V@LUK@VUb@UUU@°@nVxU`Lkn@`@XVJ@XVmk@UKmV¯LVVn±Wm@Ub@JlLUl@VLk@lmVVn@bnV@V°IVaVJXI°K°V@XXVlVVUnKVlUbWXnV@bV`U@@m@@@nxmn@bXVlL@¤nbUl¦VVUnJVUVl@@bÞL"],
				"encodeOffsets": [
					[118418, 34392]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3413",
				"name": "宿州市",
				"cp": [117.5208, 33.6841],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@UWU@bkW@aWU@aUIkWVlLXblVIUVV@mn@V_n@VaUK@I@UaanJVU@lVUVnnKVVlaUaI@wnKLnll@nVlk@wVKXkl@@bbUJ@VU@UUUyVk@aVUXwlWXXWU¹@aU@WUI@mlUnJ@Il@aXbV@VKl@XxVL@WIJlb@al@IUUm@@aVK@¥¯@mUķ¯bWk£Vm@akm@VaÅ@UVWa@UJWkJUbWbU@UlXk@amV@K¯nk@lU@Uxmz@bU`ÇbUbÅVm£U@Wwx@akLUK@UlakwUJWVkLmaUal@n_mVUnKVUUmÅXWa@kJmx@XUJ@bVLXxl@VVUVVUbkLWbU@@lUVVVVXK@XkJ@nU@@bV@VxUVlbU@xXLWn@UxVbVĊV@b@XV`mnkJ@kUKmbaU@VbnbÆx@XU@@`k@@bl@@bkL@WakXWaU@Vmkx@XWW@@wUUUbJU¯V@¯ÞU@WxXlL@bkb@lVlnbJW@kkU@mbkaWJIVlmz¯`UnU@mb@@`@bkVlnV@b@V@aVxn@VxKXnl@nbVKbVK@a_V@Vw@WLlwnK@UmIU@VW@UÈ@lKnalw@@V°@aUmlUUw@V@@UXK"],
				"encodeOffsets": [
					[119836, 35061]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3410",
				"name": "黄山市",
				"cp": [118.0481, 29.9542],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lXnlWX@VUJVnUJVzXJVxkVJlI²lU@K@IUÇLVxnLn@lmUaVU@UVKVknJ@an@@UVIVÇKUw@_lK@wnKVklW@I@mXa@UlaXblUJVUVL@UXWlIUUlKVmkU@kVKVL@ywXLVbJVz@Jln@nLXbVaônW@la@UVWUa@@a@mk@WIk@VwUa¯¥m@UUVK@ImK@aX£kKÅVa_@±akXWWLnU@@a@¯mK@LJUWwUVVmbXX@lWLn`mzUJUbLk@makVWmkXambkKkna@ab@U@Unm@WV@VbUbUJWIk@@lmL@°UVUVmn@@kmWkb@x_m@@aU@b@JlUzlWxXn@b²@l`IVlUlL@VKnVbUl@VlIn@@bbVWUk@@bX@Valb@bnb°Vn@xVKlbVnV@VxL@ln@UXVVL"],
				"encodeOffsets": [
					[120747, 31095]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3414",
				"name": "巢湖市",
				"cp": [117.7734, 31.4978],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VV@blL@XlWnnn@VXXl@@WIX@VJ@LxŎxln@bXJVblX@VVbUVn@VbUVlb@LnJVbVLVXLÒVLÒVbVIVylUXk°Wknm°_lJ@aXL@lz°@lnLô¼VÈVUUaVKU@WW@@UUa@knmVLlaV@a@kak±@UmwkKmkǉÝUUkL@mlIVmnÝWkkUÝ@KƑĉa@»mma@mX¤¯Uw@@UU@bU±±L@akmLUKmLUUUJVbbÇw@kUWaUJ@Xkxm@UJUUm@kakXUVl±ôU@kn"],
				"encodeOffsets": [
					[119847, 32007]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3416",
				"name": "亳州市",
				"cp": [116.1914, 33.4698],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lU@Un@@anUlw@KVmUwlaX_lKna@KU@@kWKUU@ankWXK@@V²VVIÈU@al@VaÈamK@wU@klaUV@XVUU»WUUbkmUkVmk@aÈw@mWU@VkIkVWKUÑķXȭºU¯l@kkLWmÅaL@lLWlzVxVUK@L¯LUJ@bWK@b@JLU@Wbk@WVUUV@nJ@XX@@`m@@L@bnJ@nWV@¦awVVkxVn@bVJ@V¦@²¯blb@mUU@¼¦XbUV`@nnxUxWLkUkVWKkV@XV@@VVL@VX@lVV@L@blL@`L@xXKVL@VnU@lwnU@ml@XnV@@UVW°LnalUI@aUK@aa@UkXW@I@mWL@UXK@UVW@U@@kWn@@V@XblaVxL@bVKXbIlJ"],
				"encodeOffsets": [
					[119183, 34594]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3417",
				"name": "池州市",
				"cp": [117.3889, 30.2014],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V°°ĊŤ@xĖ@xXÆ¤VôIÆmnLllXÔ@lÜn@@JbLÆaĢÞĸ°VVUUKVanK@UV@VLVVnln@xnklxXamk@WV@Xa@naVkKlk@mkUWwkJWwIWK@UaUwWIUyVIUmVI@UXWmkkWKUUVWm@@kKw@UUUmkaULwm@¯Uma@akaUbW@@a@VlUXa@am@kJ@UVkUamL@UkKVUkJk_±@a@WmXwÇkkaVaUa±wV@VkwnyUaW@UU¯amLk@m@kmmU¯K@L@lUX¯WlkXVbbVUL@J@LVKnlJXnlb@`nXlalV@bnL@Vnb¼@lXbWlkLK@zUJmIUxUVUVmX", "@@llUL@VlxL@a@UwXa¯@"],
				"encodeOffsets": [
					[119543, 30781],
					[120061, 31152]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3401",
				"name": "合肥市",
				"cp": [117.29, 32.0581],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LxVĊLÞkVlVVXaWaXwWnU@anVVUX@bXblWkk@wWmk@VUVKnb@Iy@_kWm£nmVa@UKwlVl@zn@°lIlmnVIVmnVaXÅWmU_VK@Unmmk@UIVakaaUÑUKÑWKUUKUamI@KkaVUUam@VUUa@UkWUaWI@akmōwwUL@`mn@KVIUVUUUKVk_VkbW@VkUULUJ±I¯alkxU¦@L@V@V@b@b@WJXbWVXn@LKVL@JkLV@Vbn@VV@XU@UlV@@VV@V@XXV@@VJ°°Xnb°@JUVVXV`@bkXWUbU@Wn@VLXlm°bVUbkK@bVJ@bVbkLV¦KķV@x@XbmVVVk¦"],
				"encodeOffsets": [
					[119678, 33323]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3403",
				"name": "蚌埠市",
				"cp": [117.4109, 33.1073],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VÒXLlUlJ@UXV@nÇx@bnlUVllnVaXVV¼UVWU@V²wVV@Vl@VnwlI@XbÆWVnUVmLUVnm`k@VbnblKXUVIlxkb@VVLlK@bwXxV@n¤ÆUVaÈaV_@anyVwV@kl@°m@LnUbl@WVkV@XaaVIXlIV@XbVUÆ@XKWwUkmW@_UmnIlJXkWKXmV@w@_XV@Kl@kU@KlX@@UUUUKWLm@klJVUUmk@mXUWmXw`m@zUbÝakbW@m@UUéUIm@UbKÇ¼@kKWXmWUkaWUJWU¯L@WLwk@mm@_ÅlUVkmWUnV@VWLUbbƑĬ¯l"],
				"encodeOffsets": [
					[119543, 33722]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3402",
				"name": "芜湖市",
				"cp": [118.3557, 31.0858],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bVaV@XllLXU°lL@V@VUnVl¯IkVUVU@@b@lUXUWmbn@¼bƒĊLÞ@lVXlmÞUnkJ@nlKVVÞXklWVaVI@aUKn»lL@Kn@XXwlm@mn°@V@WywXlWVk@aUaVU¯£kKWVXVWLUkkWlkkwmJUam@@aULVa@UVaUaVI@m@UUJUIUmmV@bm@UXVVUlVmImakKUU@UU@VmU@@kma@KVIXUVK@UVmUkVm±£@JkU@nlkLUlmb@WbU@@XnlWb"],
				"encodeOffsets": [
					[120814, 31585]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3406",
				"name": "淮北市",
				"cp": [116.6968, 33.6896],
				"childNum": 3
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@lnnK@¦n@@VV@@VV@nIVV@VW²a@b@bVnUVVV@Vz@l@°UVIVaVV@x@XX@WlwUnV@XblWb@XlK@a@k@al@@_V@@WÅwmaUaV@bnaVL@llInmU_@W@aUUĉUaVwm@XWK@wVkaVUUwU@@aV@@mlI@WLWUUUVU@kV@XalKVaUVUUUk@WwUK@aVI@WUk@@UUU±xkb@lV@xnLÇbUbk@@bÇVUJ±U@U@WLXml@bVVXL@lV@@LmbkLW`kbVxUn@LkxmV@bm@@VkV"],
					["@@VVVkV@¥@UV@U@VUUJkWakKUlXVJ@bXV@blX@aXV@V"]
				],
				"encodeOffsets": [
					[
						[119183, 34594]
					],
					[
						[119836, 35061]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3404",
				"name": "淮南市",
				"cp": [116.7847, 32.7722],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°kƒīaVaXK@UUVmnXUlVÆkVKUUUmmUÑkUUÝlĉKUwKbU@UxW@@lmVUUVmUUmwaWkL¯K@mULWlIm`XWL@b@¼@V@xkVI@b@l@lkV°Ȯ¹ĸW"],
				"encodeOffsets": [
					[119543, 33722]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3405",
				"name": "马鞍山市",
				"cp": [118.6304, 31.5363],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǊnllLnxV@laXLVKmaaXbVIbVKVVVIVyn@n_W@@UnJlUVVXlLnaUWlV@VVIXW@_W@XK@K@UVUUwVamÑXmmwwKUnUKçU@JU¯@m@nknWxWm@@LkKm¼VL@bUJUbkXWl"],
				"encodeOffsets": [
					[121219, 32288]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3407",
				"name": "铜陵市",
				"cp": [117.9382, 30.9375],
				"childNum": 3
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ÒV¤@¼V²@aVV@@x°V£nW@nbnaVXVW@k@aV@VUUl°JUkVm@U@UkK¯WVkKWkU@Ubakwmlwm@kUmUUKU@@VmLUbVLUV¯U"],
					["@@LllUL@VlxL@a@UwXamK"]
				],
				"encodeOffsets": [
					[
						[120522, 31529]
					],
					[
						[120094, 31146]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3507",
				"name": "南平市",
				"cp": [118.136, 27.2845],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@knyk@KU¥wV@nkWzUmk@@lKUa@aVI@UKUamKUUVaUI@X@UV@K±IUVVlUbUbUL@KWUXmWk@KkXmmkÅKUa@amUbkUkKWUnwUÇwVUUÝUKV£U@nKWwXLVKm¥@wUXkmWk@@wX@lU@yVImaXwV@knU@mbk@mlUXmU@mV@n@bnW@bUIWJImVUKWbUK@nkKaU@W_VUUmWmL@UU@bUWUL@V@bmVUz@`mUUVVbXL@VL@lmLUxmVamXkW@xWbUVbUxkU±@ÅUmmkLUbW@@`kLknVlV@lbXxlVUXVVUU@UbWkIWVUUUJkI@llbUxVL@VVUU°ULUmWXUV@VULWb@xm@UaVLVKUa@w@VbkmVambUUm@@VkK@@bxlxX@n¤@X@@lkLWV@nVkb@bWJXLWx@nkxmmbXn@VWVUn@VnJ@bVXl@VJXnWbX`lLUlJVI@@VXV@Vl@bn@@Æmn@VxXU@mVIlxVnIl@nVJaXI@mlU@aXkVm°klmnVV_na°@V@xÜ¦XKVnnUlVXbVKLXKV@naV@@VVl@@lXblXWnLlbVK²n@@VLUnlV@lXxô°V@UnaUUlKXLVUVVUbVVlUnJVX@VW@an@lb@nl@VU@anUVW@kaUm@InVVKVU@kUW@Uam@km@kVa@a@nwU@WlI@mVI@WXaW_n@nlkkW@U¥@kV@Uw@wU@@IXK¥VIn@nU@`@Xl@VVLnaWbVaUwnU@VIKlV"],
				"encodeOffsets": [
					[122119, 28086]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3504",
				"name": "三明市",
				"cp": [117.5317, 26.3013],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lL@Un@VVnabnUla@Ux@VbULUKVbn@w@XaVK@UVUXWVnVKV¯VU@UUKVwka@klJVIVVXUlJXVaV@VUUVWkUWwkaU@UklmlK@_X@ValKnnÆV²@lVVwUaVXa@wlXnWbnUVwnK@kK@UWKUaVUnV@_VynU@a@UVKVXaV@@VnKnXVVUX`V@blL@mVLXaVLnUJXIVJ@amX@a@mnUV@nVWnkl@naV@ml@@KmKUam@UU@@UlKUVkUK@aVaUwVU¥UIkJ@wmI@mbkwkVW@UXKULU`IVKUa@LkkVmUU@WlULUWÅU@I@WWnU@@w@a@Uam_XyVIVWkk@mwVKXUV@nwVXkWÅU@aU¯KUnK@¯mULXVLnWVbVbUVm@Ub¯¼W@am`kbamLUUUaUXV`@x@XmJ@n@L@xkJUU@kU@mWm@kUUwUUVWl@VUkIy@kkaVUUmIWVXbWxU@kmVkK@nWVX¦WxU@@bkx@VU@Wk@kUbmJUUmkUW@_kKWK@knV¤kIUKWLUbV@Wbk@@VWL@VkI@lUXVxUVU@@mWIV@a¯nUaaUV@Jb@bÞ°VbU@XaUVmL@VXblnV°n@Vnx@VUUUlK@InJVb@Vlnn@VL@VWJUx@XlJUVVVl@LUUUJ@L@lUL°¦kVVnV@xVl@blLnlLVaXll@nVUn@xn@nml°X@lb"],
				"encodeOffsets": [
					[119858, 27754]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3508",
				"name": "龙岩市",
				"cp": [116.8066, 25.2026],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@aI@VUbVb°m@bUXJ@nV@VUUwVW@klJ@UXK@Ul@Xa@UVaXKVLlJU£lm@XLlL@`VXnlVVnIVall@XV@@Ulw@aV@XwW¥XU@mlLnUlV@XwWaXUJVnUVlb@lzlJUVk@UXVVVxlVn@nXV@@lVVlI@w@K@mnI@W@wU_VWbVVVnKbla_nbX@°»Van@VUUaUamXUKWK@a@Uk@wWkXWW@wUUKw@_lywUkU@@U@kamVmXaUVUka@Wk@»UUUVKkbWUVUbk@mkxkKnIVUmW@kUKmXUmVaU@kU@m@KUWVkIWJ@U@UI@wUUUa@KW»nU@mVkUmm@XwWU@UUmL@w@mnVUU@aWak@@amxU@UxULWVXbVLU`mbUImVUbnV@@bVn@bnVWxLmyUbIUK@aVmakbVUXWUlKWbkV@WLUlk@@nbb@lkKmU@UIWJkw¯UUVVxm@@XkbWxXKlUzWJkUUL@bmKkV@@VUIUlWV@XK@VkbWx°xUb@LUbk@@VWb@LXJ@VWXU@@bUVVVVn@VVlLn@l@xk¦Vx@bVJXbn@JlnXxV@@nJ@X@V@lmxbUn@xVL@VVKlL@lnLVaVL@xkl@LxVl°XWVXVlJWnxlJ"],
				"encodeOffsets": [
					[119194, 26657]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3509",
				"name": "宁德市",
				"cp": [119.6521, 26.9824],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@LVKVaVaUkVU²J@LVU@@WVJUbVVnLVbL@VUJ@bVbkL@l@VnyXmlU@xV¦L@lmz@lnL@bVVbVb@lnKVkVl¤@zXV@l@XJVLVKnXVKVnU@wUm@KU@UlVlw@U@U@UaUKlU@kXKlmXIWKXaVIVUVK@KU@@kJVUnLVJUL@VIVa@VnLKUnl`VbVV@Vbn@Vzn@lKnVlIVVKUalkXJl@XXVWVLVUUmVU@Unm£lK@Uk@WUXK@U@WVwVkĠkĢÇ°aUÅUwmaţɱUÇaw±V¹XalKôx@UVaÜʓͿVóbÅLJm¯Vk¦k@mamXkKUULakbk@mV@LkJWb@VkmXk@UVmaUV@amLUKUamI@KUaU@WbU@UUUUIWJUkm@wKkVJm@kxÇVUK@mUVUkmlkkVm@amwLVWU@UbVLkUb@VmK@XaVWU_VJnwV@@kUmWakx@kwWakIWxnbUJz@kVW@@x@XllnVW@xn¦ULWKXxmL@VU¤VLÞVVUÈxVmxXVlLlVanV@bbVLlÆnnlW@LXlWnXV"],
				"encodeOffsets": [
					[121816, 27816]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3501",
				"name": "福州市",
				"cp": [119.4543, 25.9222],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lxna@nJ@xlIVJV¦UVxUb@bLVUlVkL@V@VVn@VbLn@LUlJXblx@lwXbVn@lU@mxUIV`UXWb@nLU@ValUKVaV@UXKnxbn@lUkllnUVnV@VLUÈlwn@UIlLxn@VlXIVJVVVV@XaV@Vb@LnJVbVLnK@bVUnbVUl@nWl@UXalI@KnUl@labVKVlLnWnbl@l¥°UnIÆKôa΀Ua@UUwÇWǓIUWUÅVkƨm@@£@KmLU¤ULˣJkUVǟUUķ@ĉVKUk@Ñ°wôÇç@īé@Åţ¥mīÛkm¼Å@VķVó°ō¦U°n@bVJXVVL@bUakLmx@xmxXzW`XbWnXV@bWLÛ@a@aXbWVkaÝwU@mlWKkLWWkLUKULW@kVmVUUÝUamV¤n@xUVUzkJV¦lJU"],
				"encodeOffsets": [
					[121253, 26511]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3506",
				"name": "漳州市",
				"cp": [117.5757, 24.3732],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@bl@Xb@bVVUm@nx@nKVV@XVWxn@VnUl@nmVX¼@LVbVV@xVJV@@XIlJXUV@Ln@lVV@UbVnnWVL@lnXUVmJLlwnll@VaUXVlaLVUVV@¼Xl@lbUVVWbnnUlb@@VV@aVUmlUaUny@kU@Wkk@WaUVk@@ammk@@U@UlU@aUa@wl@mXLllnLU@anVnU@L@VVV@KlXnWVnVanUw@w@wmnÅ@waUam@UkmUl@@aa@U@¥kôKwÈ¯°w@ŻkwǕaKÑÛk@ĕōřċ£ĵUKW»kÅŻLU@Ulġw@¤VzVUbkKUbmLmlULU¼UxmbXl@bWVb@bUnVUVbULU@@VkbVL@`U@WX@XV@b°@b¯@¤@Xm@@b@`UVVUL"],
				"encodeOffsets": [
					[119712, 24953]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3505",
				"name": "泉州市",
				"cp": [118.3228, 25.1147],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Vlxkz@`xLVV@xXXWXl@xl@V@bnV°@LVm°LVbV@ÆXWlUmxU@WVULnx@llUXUJWzn`Vb@@b@xV@mXX@@JÆVVXVKXkV@nVlUl@KVbULJV_VKLVWX@lUVkIU¥lIVyVU@wm£nUVWU@am@UmWw@UX@@amVUn@@aUUlUVanaWUXWmUnkK@VUlVVUUw@XLWWXma@knmbVbVXbVL@XJlInlLwmXów@çV»ÇçŋaķƧóƅóKġ°nÅUķƑUÇW@¯xÇ°öÆlVn@lla@Lb`@VXVVx@V@bULVJUkÇ@¼XUKk@mmULkaWbk@x@UkL@a@K@U@UmKmbU@kV@UmVUbUmmXkW@LUU@U@KmVmU@bVmKkkWKnk@@xVb@bkV@V@Vl@nn@bl@VUXbl@XlV@@lmzVVbknUVb"],
				"encodeOffsets": [
					[120398, 25797]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3503",
				"name": "莆田市",
				"cp": [119.0918, 25.3455],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VbÞVVnUlUX@VKVLlKXXlKXLnkV@ÞxlbXUWab@bÜ@XK@aWUXmWaX_Wynw@wnwlKbV@aUKWUUI@amV¯Ŏ¥ô¯ĸUUÆ@n»¯aƿé@ţ¯nĉĬÝKóó@ÑU¼@èxWônxKmkkJWI@UKWaUUaamn@lnbWXXWK@VxUVkUV@ULmlnVWXXVmbUbkVVV@bm@UVn@bW@@VXxn@Vn@bVUX"],
				"encodeOffsets": [
					[121388, 26264]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3502",
				"name": "厦门市",
				"cp": [118.1689, 24.6478],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@VlUV@nanL@V@V@L@blK@Vwl@XalbVKnnl@VLW»È@lVUIVK@a@UUwWUU@_aK@bkkm@UkõÅxóLl@¦@Vb@bk@VnVln@Vbb@xmÆn@x@xx"],
				"encodeOffsets": [
					[120747, 25465]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3607",
				"name": "赣州市",
				"cp": [115.2795, 25.8124],
				"childNum": 18
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`l@Èbln@KVLl@V@bÈlnKXkVlVL@lJnb¦VKVVnXW@w°@VUmlnUV`UbVUV@xnKVI°KXKVkVL@al@XaLVlULWVVVL@bx@VXVmb@x@VVV@nn¤lb°b°KXXWbX`lbXxz@x`VIVUnKLxWXLVKVbVLVU@wnW°b@nalXmXVJn@U²mKkVlU@@xlnaVmlKn@JVLlnVl@XXÆèVlUX@xVLXVb°W@wnUWmXk@KLVwUmUkUKUw@wVaVK@k@WnkUKWkwlmXL@KVUlLVKXmWUL@aL@malaVk@aaanX@VVUblbJnXaVwn£K@UWmUk@UaWIV@bJW@KmmU@aUUUkmKkVKlUUnKVUlVaV£Å¥WUUK@UkUUw@m@mIkUUWLK¯Uw°¯@wUKUbKm@kkKUL@UUKV¥U@manw@k@U@Wm@@U@WwkmwWaUU@UUmV¯kw@@kmkKkUW@UK@ÅV@XWWkXa@Ul@Va@KVaUUU@aXwla@UkVWaXk@K@lmkUmV@Vmbk@»XI¥VUkVUVU@anKVUKUalU@wX@@a@K@ÝwL@UnÇlUIkJmn@bVVb@VmnkLV¯U@±lIWm@kaUI@aÇU@K@KUIkbWbJUIUyX¯UbU@méUUmUkWKxWIkJm@V¥U_UJUwmVkUU@@knwm@UmkWJkL@n@VW@@U@knm@kUml@xÅx@@XUJlb@VXJVxn@lbV@lULnV@VlnV@bWV@bXL@lVLVbV@blLn@VlK@xln@bX@laLVbnKUVVbKlXVVkxV@nnVUblV@@z°WWkbIkWL@LUJ@bUI@b`@UmI@mkK¯XWmUV¯@UUVUUam@@VULWUJIm`IUJKUkW@UxnWbnnmlXbmIUVmV@Vnb@VLUKWLnÒVVV@VUL@kJUV@bÈ@V°@XVV@l@xUz"],
				"encodeOffsets": [
					[116753, 26596]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3608",
				"name": "吉安市",
				"cp": [114.884, 26.9659],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lxnb@V@bV@ln@nlIn@blVXKnk¼@VUKWL@bL@`UXU`@V¦XLĠ@lJ¦@nV@l°nn@mVXna@nbKn@lIV@VanJ@_lKVVnL@LK@Vn@VbUVanKlLnbnJVbnWVnVVanI@Vb@LbVKVanXVbVJVU@aXLllbôlÆ¼XxVLVK@Xn@xnVVVmb@LnVVKVXV@@mnaVXUVnVK@_UaUmwnKV_anKVL»K@¯ÝU@U@kWlUnlknKVnaUkma@UIUwl»Åw@VwV@nn@ÈXlKVmna@kVw@anm@n_WWk@mUkUK@ImkLUnbkm@wV@klUnLV±m@UInWkWmb@¯amX@xUVUKUaULWKXwKmLUVUJ_@wyWwkaW_XaWW¯L¯akam£@mUU@U@wnaWU@Uw@aUKUXUVKUkKWbk@@bUKUlWL¯LUJmLwU@UVaVU_VkmnUV¯@@xXmWUUUL¥makI@UKUkWlLkmÇ@aUk@UKL@kmÇak@_VlkL@`lbnlLVanLnbmVÆln@kJlbknmKUbÝmmwULUK@bkLWKULUUma@Kk@UV@L@llbVzxUxnl@bVLm@IVJXVlLV`@bn²@J@V@Xmbñ@WbUJ@bm@@LUĬU¦lV@xXb@blnUV"],
				"encodeOffsets": [
					[116652, 27608]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3611",
				"name": "上饶市",
				"cp": [117.8613, 28.7292],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@VI°`nm¤²@bVJUVVXUl@Vmb@xV@XbmVV@lkLmbn`VbnU@VaUnbVllUXVa@w°VW@_VWLnVlbLVbnlKnVK@IUW@_@am@ÑUólK@U@WU@VwU@UI@aUUaX@kwmJV@yX@kan@mkwVmmI@aUU@aUUW@kVkV@@anK»XVWnIVUl`@_W@wlUV@UWKnUbn°InJlUV@VnIbWn@VklL@l@Vn²m@U`kI@bWJnV@°VXnJmXVmx@VVL@bkLmWULUmU@bWXb@llnX@xkxVVnVV@¤nLnVxnJVXX@bn`VIb@blmlLnaV@blWXnlUnbl@KVanUVmm_XK@kWWnaU@UnaWUXaXamUkKmXUWLX¯WakKmnUWwXa@KW_aXWW_@WnIVl@XULnWVknK@ImyUUÆbXKÛ@W@IÆUnVÝlkVK@mUIVwkUVaUm@aVIVyXIaÈwmmk@UnanVUmÅaó»lwW@kkUVmUK@WKLUmWULkamKLk@Wa@wk@UU@U@mbUIWVKUXWmkUmVmU@LkakKw@w@U¯UUn¯l@bmn@xkJWxkL@VkI@mkmJUI@V@b@VVxnbWlkÈkVLbkKmVL@V@²nxWkLUL@xlKVxbXmVnWJ@Þ°@nxUKUw±`UImVmnU@kalm@akwU@UUJmxU@@U@kU@Um@@KnVm@kKmkU@@WUnkLWxkVUwmKmLkUbmKUbV@xUnkJ@n±UxVXUWJ@LUblUnm@W@nknUJUVm@kXllknVbÆKVVb¼V@Ul"],
				"encodeOffsets": [
					[119194, 29751]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3604",
				"name": "九江市",
				"cp": [115.4224, 29.3774],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WUkVUkmaVUb@mVUam_nalK@kUnUWaU@@wna@UVkUWVUUI@a±n£m¯_JU@ĉ¦Ul@UVKmmLlm@ğ¹m`Uk¯@@UVK¯@UUK@amkmKkVVUa@UkUKUaL@VVXUJ@n@WUbnVb¯V@LÅlÝIJÅkÝm@UaWUU@UmUXmmwVUUKWUX±mUam@kWzUaVmÇw@aÅLmKXUWKkL@W¯IwVwlkUJ@Um@ÛÈWKUxWkaUU@KkLVl@UKUX±KUb@nVVUbUVmaUlUL@aUL@@nUlWzX`@V@lx²@Vlb@bVÞ@°nl@UxVL@lUbVV@n²xVUVmnUÞbaJ@IV°xnbl@nbÆ@VwnK@VnXlK°xnUlVXV@Vl@L@lk@W_XK@KkWxUL@JnVx@aX@VVUaIXlmL@bVVX@VbnKa²XVWk°a@UnV¤nbmLmW@XbmJUbVLaÞKL@K@U@aVKlbV@nXlJxV@VnVÈÞKôbźĕČmV@Ċ²xÆIV@Þ¦ĸ¼ÞVlVÞnxln°JkLXWVUVUVwnJVI@yn@lXlaXmWI@w»ma@UmK@akKkXmW@_kaWakKWk@@K@IWkUa"],
				"encodeOffsets": [
					[119487, 30319]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3610",
				"name": "抚州市",
				"cp": [116.4441, 27.4933],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°V°UnÜ@n@lnLlV@bV°LlnLllVzVVXlVV@@L@xX@WlXm@UVL@V@n°kVmVUnKlaXxVbnlU@lVVnaVI@aX@VJ@V@bb@Vb@X@lUL@@VlIVm@wUVanLalVnKnLVxlUXwlKVm@k@Una@mWIXKWUÛVk@a@UVWn@@kl@@WXlW@_Um@UVK@aLnalInWV@@xnI@¥Km@kKmnk@mlI¤laXbVblknV@UKXVlUXa@@Unw@±mU@ak_±a@UJUIVKW_Xa@aWUK@mmUVa@IXa@UWmannlmX¯WKXwVUVw@XUlK@klJXa@kkmm@Uww@¯W¯kw@WmbULaUUU@mVUUWmkUbKmkkK@akU¯¥Ulm@akU@m@KVIVV@KUkUVUkaUWbmIkaVaUU@mWbb@bUlkbb@nK@bKXVWnULkKUV@LWKknlxXVLml@X@lULUb@xVxVLVlVnUxK@LWlXnmV@x¯XaWUUK@wVWUkÅçm`@mn@bUx@lmbUnkLÇWm@mU@Ux@Æxk¼VxVJ@nbVlmbUmLklmkVlX@VV@°Þ"],
				"encodeOffsets": [
					[118508, 28396]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3609",
				"name": "宜春市",
				"cp": [115.0159, 28.3228],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@VlbnK@b@JLlUnx±ĀXxÆWX@l@V@@blJ@nX@xUbVVUbVV@bVmnmJ@bmbm@klUbLmb@lVb@xUX@bVVVbV¤@LVVbXlVwLXÜÇn@@VIlVkUxx°J@XlKXLVWnLÆK@bÈxUnVbylXn@VbnW²XVLVVUnxWnnV@VVVXVbn@ÞÆlIÞJÆk@K°UUamVa@UUU»@wV@VkkUKUVW£U@UmW@@aXkVUnVlKVVUUkVmU@kWaUanUVVamIX¥W@@aUaUVW@_mW@UnIVVn@VbVm@bVL@anKVUkWKUXVIkx@nabVKb@nVJ_V@VwVUVVXUlUUaV@X@VblabnKlkVaXa¯@m@UKVUn@WXkW@@w@KU@UWkUUUykkmKk¯KU@akUmK@k@mmÛ¯V¯U@L¼UKmLbU`mLxVnVb@`LmUVUUWmb@nU@UWULmU@KnaUUmUwmJ¯IUJWIkVkaWVUIUlWaUIUVkKmbUIÒlVUnn@VlLUJ@bUX¯@aWVUKUXKUbm@UwKWa@a@VkUWn@Uak@mbXWJXbm@mLaWVk@wL@WmanU@knwWmkaWLKWUXaU@¥lUVVVbnw¥nKV»@aUk@a@UJ@kmLma@mbUWnm@ULÇº@LXnmxUm@UbkbW@@akLmWk@UXmJmUkV@VUXVlULmKUxkL@lmXnJ@Xl°Vnb@bU@WbKUX@VmKUX"],
				"encodeOffsets": [
					[116652, 28666]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3601",
				"name": "南昌市",
				"cp": [116.0046, 28.6633],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X@m@VIUW@UKVbLlV@VVbUlUnLnl@bVL@V°UL@V°@Vln_Ġºn@knKnLVU@VkĊ¥Vk@U»UaUÅLUalmkklWn@VUVIlm@mXn@VmkVa@KXIVUWVw²@m@U@VK@k@WUa@a@aU@IUW@@bUJmbUU@kkVmUaWwkbmLUVUnlWbUbklmLakbUaW@U@VbkVWVUUUVUx@U`UI@maULamb@lwJWUVXLlUVmL@bUK@aUnUam@UUmJ@VnX@`UXVVb@bX@W¦nJUbUmVVbXb@lVUnVlVUUkLmUUVWl@bX@VnV@X¤VUVLllUU@@x¼VV@V"],
				"encodeOffsets": [
					[118249, 29700]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3602",
				"name": "景德镇市",
				"cp": [117.334, 29.3225],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VVX@VbmzxUlU@mbmL@V²xVbUVVblbX@VkVykValKVI@bn@n`lVWnX@lL@WKnVIVa@¯nK@alIXJVIVWUwn@nUnK@alI@a@anKm_aW@UWmIUwmmK@£UUmUUlwwW@km@kWaXaV@VnVKnXlK@aUK@UnwWUnmIUW@¯mUXI@alJV_n@m±@U@kkKUlm@XamJ@UVUkmI¯JmamVXL@VUkV@xX@`k_UVmJUXW¼mL@bU@UllX@VV@bVV@bnJUnlx@nmb@lW@zUnIlx@WbVV@bVJV@UxV@@X@VkLVôÒn@@b@`VX@J"],
				"encodeOffsets": [
					[119903, 30409]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3603",
				"name": "萍乡市",
				"cp": [113.9282, 27.4823],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VWnL@UVWLXaV@@ama¯Uk@WmInW@klKVwnLVKUkVW@UlUnVnIVWl@nXlK@bX@laVan@VnwWm@KÈ¹VK¯m@kmU@¥kIğ@WKU¥@V_VW@_K@aXKVL@Ul»mWLkU@amkJm@kmU@@a@UmakwU@Xl@VXk`UIW¼kWWX@@lxV¦XlW@Ubn@mUkL@UmJ¯UkUWVUaUlm@UXWlnUJ@LmLUnXll@bUVUUmVUn@¦xlnn@VÆÈU°kbVVxllnL@VnVVUl@VanL"],
				"encodeOffsets": [
					[116652, 28666]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3606",
				"name": "鹰潭市",
				"cp": [117.0813, 28.2349],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@XV@nlL@lUnm@Ln@@VlV@@VV@nwVI@VVlx@bknlbV@nmnUVJ_²VxVLw@m¯@ÝXImnUWaUwkL@wVKlKXmw@±@UKnUlLaKlUlÇXkmaUw@U@a@UUkwUJ@zWJw@WbkVWUL@VmUklUaWakb£kJ@nmlnlL@nL@¦mJ@wU@mXkJmbK@bUL@VVn@`kXW@Xk@@lm@UX@V@blÜUXVWLXJ@nmb@V@l"],
				"encodeOffsets": [
					[119599, 29025]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3605",
				"name": "新余市",
				"cp": [114.95, 27.8174],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@m@@WULUKWwÅ»ókakkWK@bUVUIUamWUbULa@KUa@mJUbmUXUmUamImakKmLUbVUam@@UL@KKmUUkL@`mIUb@U@V@bVl@b¼UmL¦mxUaUUVk@¦VWbXVLXKlbXnmx@lmVnb@XKxl@XUbnKn@WaXIWnal@Vb@XmlV@U@bXbLVxn@VaLVWVLXUb°@VW@aVIkK@UmVmkUÑVJnalLVUVJXbVkVJXUlblUXJVI°JnI"],
				"encodeOffsets": [
					[118182, 28542]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3706",
				"name": "烟台市",
				"cp": [120.7397, 37.5128],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŤLLllVń²è°xżĢĠÆlÒŤbV¤ĊXnlĢVĊÒÈ°ĊŰÞèL±@џn»VUźċ²»ÆkôVɆkĊŃ²kŤVVwUUVmUa@KkU@mUmmk@UwUkmW@UVIXa@mw@aKULax@Uk@UbWU@yULmK¯@kXVUwm@@JUUknWKUVLUbU@wWykIa@w@mUI@aUVynIWak@@Wbl@@knmK@wnIl°Kna@V¥ğ@ġUķ»¥@UōJX¯¤k@wmI¯k@mwak@@lX@bUJ@VbknWxkLkxlLVlkLmb@bU@bU@VbU`Vb@nL@mbU@VnUVmnU@mm@kIUWVIUKVkkUJUnmL@VmLUaVWaXamU@U@KUUmVUJUVÇwğnm@mXĉV@l¯xnô"],
				"encodeOffsets": [
					[122446, 38042]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3713",
				"name": "临沂市",
				"cp": [118.3118, 35.2936],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bXll@zlV@lXXmkbVVlU@Vn@@Vmb@XKVXWJ@XXl@ÈbVLUl`@XXV@VVUxVbUxVb¦@WnXVJ@bnVUzl@°ÆxUKlU@mUUnUlUVWVUnVV@XX°V@Vll@VkaXVl@Ux@bmbXLlKlb@b@bUJn@@b@n°x°K@an@@UlLVKVbXb@bVVnK°LVa@UVa@XwKVxnLU°@naV@UWUkWULmVwÝKUUla@aó_@mK@aUU@WUkwVm@aVI°W@@IUw@a±¯@¥kUVUm@awkw@K@kVKk@maXalI@alLWXblaVLVUV@LnK@l@waXaLlnUlLmV@n°J@_VmnIVym£UKmI@WnIVm@anUVmÇ_kġIÅWUXÇm@U@Ý¯Å@@naWIVW@IkK@klKn@naWImk@abkKkLWnWkLWmk_@UaVUKmLUw@mn£WwUmUaóV@UkUm@UKULUwmJUX@WW@XÒzVblJXWXk@UVWKX¤UL@xU@@VUaU@@XmVkLmWkXUyÝLmKXnV@n@lx@bWLnVVn`knULmxUlWLXVb@VK@z¯x¯¼WxKUn@bk@lVVVz"],
				"encodeOffsets": [
					[120241, 36119]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3707",
				"name": "潍坊市",
				"cp": [119.0918, 36.524],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l@@UK@@L@bX@@VlL@JLUVnX@`ÜXn`V²mJ@bU@@nb@l°xnnĸVÆ°@Ċ£Þ@lWnÑnkʶJmó°w@kk»V@»¥k@V@kw@wVmaÅmaô£ŎXI@mlnKla@mV_UK@kUkw@alWIU»m@WUIl±UUÅUbkJ@a@wUKUaVIÆmXIWaka@m@Ul£XKVw@UIJUkmJVkU@aWKImV@UxmL@bX`WXU@U`ÇkUak@@°UblXkmLUKmL@VULóVk@@Vlbn@Ub@ċaUJUbIUlVLUVVbVKXVlVXU@mb¯@VmKUwLWx@Ub@VUb¯KmLUU@aWaUaULkK@Vm@@b¯L¯w@ma@m@UUU@U¦lJUXVmkb@nmXVWkbIVxUV@VUbWLXVLW`Ux@nk@Vn@x@VkJ@V`mXk@VxV@lVI@VULVUIV`°bVXXxV@VWVnL@xVUb"],
				"encodeOffsets": [
					[121332, 37840]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3702",
				"name": "青岛市",
				"cp": [120.4651, 36.3373],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@nUJXL@blVUnIVlIVJ@UxWLk¤@V@nlbXbWJÅnUJVbVL@x@blIaÆVVVk²VJ@XnV¼JkX@blxlV@VLU`@nkbLkm@nWJōó¤bnÆbUn@xlxU@l@¦@¼Ul¼ĊUnW@nĠmÈxUVIVnUVV@LV@nVWbXbUVbnK@UnKVmVIllUVLUJVXlJ@nnV@nmVUUm@Vna@K@mUaV_UaV@aV@@aanlKUkKklwlKXwlma@UVI@akW@l@bnxl@°nJxl@°£WŎIUÑn»lamô¹Ŏ¥VaUUkmkġWɱIUUŹ`@kk@ĉƨřV¥_Ç@Ĭ¤ÝL¯m¯£ƽóķwUW±ī¯kōaĉĕkğmó°bW@UKkLUaVmz@V@UxVn"],
				"encodeOffsets": [
					[122389, 36580]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3729",
				"name": "菏泽市",
				"cp": [115.6201, 35.2057],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@¥IVUÈmÞ»@UlU@Un@VW@UVmkk@aVUUKVÝ@UVknK@UV@VVnIV@wnmwmKXaWaXI@UV@Vy²blkVKkamU@kb@Um@VmUkmKmkXKWwkU@Ul@UnK@UVUUmKXwUVLwKU@@Wl@@wUkV¥@@I@W@_V@VWUw@UUa@aaWa@@_mKUwl¯amzmV@WKnU@kWLķaUKbÝVmV@UWÇbÛ@X°UbW@XmVlk²UJUbmLÇxÅWUzl¯Ll@VkKXUbWJ@bU@¯@kbLmKka@l_WXºVbUz@Jn²V@¤lXnV°Ln`WbXLôVlKVUxXnlXLlU@bVV@XJWLUVnVV@@nl°nnVKÈbVXÆJU°VnXVkV@@xVL@Wlb"],
				"encodeOffsets": [
					[118654, 36726]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3708",
				"name": "济宁市",
				"cp": [116.8286, 35.3375],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nam_nKlVLXaIl`_@KVVXI@m@w@@k@Knô@n`VbV@@LL@KVVn@VX@VLJl@VUUU@Uam@UkwKWaXamkJmIUVUÈblaUnV@kVKl@@lXL°kVJ@VÈnVJUX@VLXl@xVLnU@VKV@aIUaV@bĊUxKkVJXUlVUVaI@WUI@KlUnwmWk@WXIWUL@Wna@Um@@UVkUUlanWW@kkU@ykWkaWVUlÝbUU@kJUIU@@JmaókLKÇUUkKWLk@WbkUUabmKn¯°¥V@XwV@VanaVaU_@Wlk@WÈ@VUÈVVÛmaklKÈ¯lLVUX@lK@aX@@kV@VmV@VwnJV_UWUwXam@kW@wVUkKVIUUVmU@UV@IVK@aUL@aV@LmUKmx@ômLkUWJ@nXmlUxUL@VknVUU@VL`Ub±LkV@kUKÇbÛ@UWó_mJ@Wk@@X@VLxUKVWxLVnUV@VmL@Vk@VlVXxWLnlLnVlUnn@@VlaV@nlbULkl±aUzU@@VWJXbWbnLnxm@xUmJUUU@@VmLUl@VUÞVLUV@bllUn@VUXm@@VkV@VÝ¼ÇnUVJ@¦nnlnVlL@Þb°KVV"],
				"encodeOffsets": [
					[118834, 36844]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3714",
				"name": "德州市",
				"cp": [116.6858, 37.2107],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤@VmbVXnVVbVJX@ll@zlVInl@@bVxUbĠl@ÈblaIxXVWb@L@nULWVXXWWLnL@`@LUVVL@lVnJU@UUkanVôôb°¼VÞXIÜbČabôWXÞWÈzÆmnLVJ°ÈnlV²lbnW@@UUVmnwmkkKWkla@mVIUKUaaUwmnJU@@amIk@@bVlkX@mmUklUUa@_UaUUV@wwWkXmW@I@WUaÝU@UXaWUU@UUVW@UUUWUn¥nUVa@m@k@alU@wkLWa@UUm@@wnmUwla@anKn_@alK@Ý_@@WUUUmlkaIyU@UwU_Wa¯yU_mWUwkImm@InWWUk@@UVWVkW¯U@VL@b¯b@l±¦@VV@lUbV@kxVnUl¼XV@b@lV@nIWxnb@UULxÅxm¯aUwU@mUÅVÝKULm@bmKUXó@"],
				"encodeOffsets": [
					[118542, 37801]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3723",
				"name": "滨州市",
				"cp": [117.8174, 37.4963],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Vb@`bVkVlnV@nlWUk@al@nJ@bV@InmVxbVbVLUJ@nkblXlLnlmxnUV@V@mXnlbĸ@nnVxb@lnXV@UJ@nVxxnxVbÆVn¯ƒĕ@@wÈçUÇlķVIb@Çmk@¥k@UkUK@aWakUóJW_UW@wkkWK@U@K@XUUkmUUalKXala@U@kkWlkÈl@kVmVIVmU_awnwVW@wwU@wU£wkJWIyUI±bkVUJ@nmVUklXmx@lnbWkVUkLWxkKUUmUkbJ±LÇxUKmkUmkkWamUaVkJÆ_²KĠ@UW@wU¥nUWwK@aÝUkÅVaVK@akLW¯I@bnbVx¯JWñWbUL@nV@VmbkUUV@IÇak@@bWak@WJUJWL@bXV@@VJlb@zUlUUImnbVmz@°UV@VbV@@V@L@xLmKUnmJVXJ@VkLW@UVUL@b"],
				"encodeOffsets": [
					[120083, 38442]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3715",
				"name": "聊城市",
				"cp": [115.9167, 36.4032],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ô@VWnLan@VKÞLÆUnVV@xVbn°ÆwwKVV@maXwmJU@@k@aWUk»VUmlw@UVa@kUU@²¥@k°a@aK@UU@mmm@ówÑ±¥¯@@wKmwI¥kU¯UmakJmIUaVkKUkm@VUUaU@UaKUK¯@wUVUIUKVwk¥wbV@xn@lWnXxlL@`XlJX¦l°XxW¦@¦Uln@@@Um@@VXVmx@¯bllUnUJ@VULVn@bxVVL@bVlnVVblVÈnVlIVJLôlJ@xl²"],
				"encodeOffsets": [
					[118542, 37801]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3705",
				"name": "东营市",
				"cp": [118.7073, 37.5513],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ͬUǪlô@°Uw°ōĠ¯»Ģç»XÇ@wwƑaÇkwVƑ¯@ÅķUmm¯w@ka@mV@@anIU±m_ÛW@_mWVUK@IkK@UW@@a@K@L@Vk@±U@UV@lm@mUU@kLmxV¤@xVx@xUXmxxbV`UnUJnU@lÇkkllX@l@VkbWbkLVbnVVlWV@@L@VXLll@xVXX`ôIlVXb@bVLVll@@¦nlÈ@aUJkĸVÈÇè@x"],
				"encodeOffsets": [
					[121005, 39066]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3701",
				"name": "济南市",
				"cp": [117.1582, 36.8701],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²¦Òôxn@nn@V°VlXUUX@Vl@XVmX@JnnlJVxnXV`°zXbV`VxV@zJlbkVnVV@X@`@ÞkL@bm`mL@bkbxnVm@xn@VV@XbKl@xkV@b@l@nUbmVm¦XVVV@VUXVVV@XVWb@VÞVVb@X@JnXlWXx@xUVV@aVKVUX@lK@UIUWnIVmnLK@w@K@UU@a@UVU@¯nyUmanVJVVk@ykaIU@@WU@aXKIVXIl@Xb@al@Èb@JVUlVna@UmU@VKXaòX°IUwma@aU@UU@wVW@Ñw@aI±`kbUkwUmJ@UkmÇUUkmKknUV@mJUkaWka@KmKkULmyXa¯_@WmImmbLmUkVUbUVJbUkkWJkUlIUmkLlK@knaVmkI@mWaLUKUU@@VmLUVLWK@UUUWUkkVmx@Vl¦"],
				"encodeOffsets": [
					[119014, 37041]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3709",
				"name": "泰安市",
				"cp": [117.0264, 36.0516],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n¼WnxL@x°@¥Uk@nwlUVlXVV@VXLKVUnK@UV@VVLKXb@nlJUnmb@lkLKlVnJklVXIllVaIVUValUnVKannnJ@X°`WbnzKlVnL@LbXlbVlnI@VUU@UmV@U@U¥@VmV@@_Ua@m°@@kmUUm@UVmn@nX@@aanJVUVLmlIVJn@nkVLVa@KVmVLXVVL@@U°bn@VaV@@K@aVkbWaXUVymU@aUImWX@¥UaVwUaVwUUU@WW@k_VUKÇa@nmxkV@LVJ@XJUbVkUWVUIlLwĉVaU@VbJ@bUUL@mVUK@wWkK@UVWUIÇm@UUI¯lWK@kk@UL@lmUVkbÇaUVVnJlInWbXbLxVln@VbV@VUV@kIUK@UWm@UU@LK@KU@Uam_ó@m@L@l@@x@nWJUU@L`k_JWbUKkmLn`mb"],
				"encodeOffsets": [
					[118834, 36844]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3710",
				"name": "威海市",
				"cp": [121.9482, 37.1393],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VbUnVVUxĊ¼¼ô@ÞÑ¯WǬLŎUÆW¹UÇō¯ÑÝkţţóġóLł̥Uwm¥kÝmkkKóbÝ@U¦@mb¯LkmJ@xLmn@lk@a@X@lXbmJUzV@bVJ@n@xblJXzxV@VaKVUXLlmVV@In@VxUlW°@nLVK@zXVVal@@VwbVKL@bnx@WbUJ@VnXVlVxl@nnnV@lV@L"],
				"encodeOffsets": [
					[124842, 38312]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3711",
				"name": "日照市",
				"cp": [119.2786, 35.5023],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UaVUUKVkJVaVIČb@Vam@ka@Ul@UôVK@UnKVLnKlkWVa@¯l@VbÈlV_V@XWW_@anKVwUmVw@@UnyUVblKVLX@aô¯ó¥mÛĊÿÈ¥Þ¹lUī¯Kĉ¼ʟbÇVUUXmakJUnmV@bUnmJ@XnJVLn¤UzmJUn@`¯ImU@nKVkkmKWbb@xk@mL@KUUVUKkbWaXkK@bkJWbnbl@UL@lL@lxx@bnUVlV@¦²°@bVx@J@¯XUJ@bUnlxVX@VV@bL@nô`@bkbVVÞLxnU"],
				"encodeOffsets": [
					[121883, 36895]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3703",
				"name": "淄博市",
				"cp": [118.0371, 36.6064],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nlKV@nVn@@kVU@²VVaU@wmKXU@UUWwUW¯aU_JUVVK@UJU@kUw@UlnWU_@lI@U@wUml@@mVwX_KWUXKVa@UVUUwJlaXWUn@mlanUVWkIV¥V@VVVI@a@akakLWKna@aVwk@WUbUlk@k@U¯UWWU@mUUVUXkVmVVV@nkVLVÅw¯k@WVXbaUl@bV@@b@xkVVXVxkJ@nk@@VLUlVbVXUVVUzVLVbUbVVWVkLmkJ@n±@UxUVVkV@bx@ÒUX@xVVV@°JXlK@bULUblÆÞV@bLXxmV¦V@xXVğ@±LÅ`IUlVbnbXllVnnlVLÈwK²IlanVVVlLwXlKVlUXma@knwWlkVnU@mVIUl²aVJzXJlI"],
				"encodeOffsets": [
					[121129, 37891]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3704",
				"name": "枣庄市",
				"cp": [117.323, 34.8926],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@yUUUkl@@aVmLXw°»°w@yL@UUaWXKVknwVKlm_UmmUXK@aw@k@mUWmUL@@@£@KbÝV@akwaULmbUKLUU@lm@°mL@nUJVxVXU`mIUxU@UnU@@lW@@bkLW@UVkKÇ°kLlbnUÜÇUUVÇ@@Xkl@XV`UbmbUbU@WxU@¯¦m°nLaVblVXal@XKlLVVÈLKôlnbI@V@VJI@lVVÞaVkXU"],
				"encodeOffsets": [
					[120241, 36119]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "3712",
				"name": "莱芜市",
				"cp": [117.6526, 36.2714],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lmnLVlÈVln@VnIVlxVla²_JlUUUVVw²@@mlInlKXUUUVaUaKUVyUUWVUUaVkUK@l@@mlIUwUWlU@w@aU@@LU@Ubm@¯a@V@UKWUUKUn@LUbUKmlm@UIkJnUKUVmIb@b@mWm@Un@VVnnVl@¯@@nVb@`U@Un@¦@V@VUVnV@"],
				"encodeOffsets": [
					[120173, 37334]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4113",
				"name": "南阳市",
				"cp": [112.4011, 33.0359],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lKl@nVV@bn@VVnmnLLXx@VLlKVUIXWÜ@Člbl@XUĊUlwnWLÞwm@ÞUVmnVl@nXJXLm@VnnJlaI@VkxVb@VlnJ@knKVn@°aVanal@XK°b@¯VJXIVK@al@nVk@nKab@XL@blVVKVLXK@VaVI°mVaX@V_@a@yUkVwVIVaJ°@anIlaV@nKnXÆm@wUUV±UUWUKnaWwXUWmÅ¯Vam@kakImUK»lan@VXXaW@@UlUUa@a@UlwUV@Xal@@anIVaUK@VXmwVmUmVLXl@nalLnal@nKlkV@@UnJUXnl@nVl¦V@@VnJ@nUVVVVIn@VaJÆn@@K@mka@kmWVaUI@a@k@@aUL@mmaVIUKUV@@IU@mUmmL@K@UUUU@mW@@nU@ğ»mVmbk@klW@UXnV@LJmlUnUJUUUW@UnkKxmLa@@@lUUbmUVWk@@nkUmam@UakJU_Vm@ÅlÇLUVmVUwULKU@k@UVUlU@@U@UaUUWaÅzJaWLklb@bmL@kKabWUV_@mV@b¯JmXUbUK¤ÇLUU@b@JkLWmkUWIkJ@VmX@JUbVXU`¯VV¯blK@LXKlUV@Um@@Uk@kxWkbL@KkbmL@UXmaU@@l@x@blX@xUJ@bULUlULÇ@@VnU`W@@nÛ¼U@@VmKUkm@VVX@@xÇ@bUbVb@VX@@xLUb@l¼XLlbUlVVUUb@n"],
				"encodeOffsets": [
					[113671, 34364]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4115",
				"name": "信阳市",
				"cp": [114.8291, 32.0197],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VllInJlknJVkVU@mXlUÞ`VnVVU@U@y@nXlKVnJVkXKWaXIb@yVkVUkVwn@K@nW@kKlUXVVUlbnUV`n@V_V@llX@@Vb@bV@@nlVUb¯WLnbmb@nLnKbUbVWnLlaX@VVUX@Vln@`kL@ll@VXVJÈIVl@XÞJ°UnaLlylU@UXKlnn@lanLWWnbVI@KXKVL@LVWVL@UVKUIVWX@@XÆJ@In`@lJVI@aWÛnK@UlK@UU@VKnlmnXalUllLUbVVknJ@nV@Vm@al@@xnVlJVUU@w@ak@XW@_mWnUlŁUmVKV@VXwW»XWaUwnkWUkVUU@@@WlaUkkaIWVkm¯xmIUmLUVaUIó»m@mmwXk@amk¯¯l@wmkLmmU@UbkUWJ@XUbJ@b@l@znÆmK@Xk@Ub@lm@I@akmVKUUVUkU@U±JUbk@IWmkxa@UUVUWVkIUaW@UlLWn@VkJI@VkK@L@bmKkJmUUaUKWXk¼VxnJ@V@@VULV¼@@UkaUlWL@U@W@IkKmL@KULUWULWKUXUJmIbK²UWnWKUUkLUmUUam@UU@mUL@xkV@VV@bmV@Vk@mwkUVUx@mbXÇnVbUL¯WnUVLVb@xnlWnU@UVUVVUbVVlVkn@llVUXUWUXVbUJ@bmLUJnb@nVK@bl@@@bVJUbnX@lb"],
				"encodeOffsets": [
					[116551, 33385]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4103",
				"name": "洛阳市",
				"cp": [112.0605, 34.3158],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VVUllLXl@LWn@J@bKUVmnL@`VblLnbV@b@JmL@LnV@VV@¯VJVnXL@nm@aÞ@ak@mImVbXLynLk°@°aVJnUV@UVVXk@WJ@VXLlUnJVnn°U@»°Uwl@bWmUXÆ@VLXU@m@Ua@Imkba@naWW@_@WXUV@@U²@K@I±U@¥kKWLóLla@£Um@kWKXU@mlLXUVKUU±J¯_@`UL¯Wmk@WakklUnVUVaU@KUU@mmK@_a@KX@VaUIm±kaVKVUkw@kaW@kbkL±UUaK@UUKVak£@UmmL@lIkmU@Ualw@UJkbmIUmn@WKImWk@mUUnÝV@nÝxKmXkxĉVWVk@kaċÛ@WXJUV@zmVWnbUbVbLlUnlUÒnWVVWnk@@Vm@kxm@Unl@Ll@@V@XnkJVV@nlVXxU@ln@a@VLnWĊ¦nx@lbVKXLl@ÞVLXJl@XXl`lIXVl@XlXUVKwV@lanxzUbVJ@VVX@b"],
				"encodeOffsets": [
					[114683, 35551]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4117",
				"name": "驻马店市",
				"cp": [114.1589, 32.9041],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n@b°UÆXnVlnLÜ@VLm@n@na@Jm@k@lVVxXX@V`lLVXVV@VVÞLVV°²@labnxV@@bLmlm_VWnIWUna@lLbnV°VL@KVLVUVaVLXK@mÆXna@wVma@Xw@KlL@a@Va@wUkaWnIVla@Kn@Vn@VUl@nKVnJ@LnK@aVkVUUW@VakUVanI²XW@UUU°KnUVLl@XaVK@aU@KUI@W@_lm@KkLUKV_U@»@UVJ@XV@@mVL@K@U@Kk@VwUUm@kmWL@VkVkzKmb¯VÝI@WUkÇJUIUWk@@klK@_km@UVWUUW@kbmKUXaVamLmK@namaXK°VakU@mU@@aa@UW@kkU@U`m@U_mVkaUVWUkVL@lmX@Lm@UxVlUUl@zaWJXbWLUlmIUkLmW@@z@VUVUUmÝ_kVW@nUVUlmIklmIkJUkl@n@Lm@ÅIUbm@UJUUVU@mmI@UU@k¥mUk@WmVmI@VU@klmLk@mbkKmb@WkKUVnUnnxW@UVLUbmJ@bk@WbU@Vkx@V@bVbkV@V@XWbUWm@kb¼VLnlJlb"],
				"encodeOffsets": [
					[115920, 33863]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4116",
				"name": "周口市",
				"cp": [114.873, 33.6951],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lnb@xlJ@UnLlKXUlJl_KnV@xVL@bkbVVUè@Wb@UbmkVmbXVJnUl@a°@@bLVblXxInmnLVwanJÆw²IlmnXVl°VVbÈaVb@lkn@VWnLlUVmÞUUklkVkUaVaVaUwK@kkaVWmw_l@nUVVb@baV@VV@zXJl@@kl@lk°WVnÆbnbUVJI@VKVm@kK@_kK@a@aU@@wW@@k@aUW@IUWVUnLlUlVXKVwmk@W@VWa¥@k@lnUIÇKUaU@UUVmIUVUk¥Vma@¯k@Wanwm@@n@@m@UIVkUVamUXWaVU_@mUVUImW@aUIĉK@VmIb@lU@@nJkU@KIUmmLk@UVm@Um@@LkbUmJXlbV@xUb@@bkK@LWx@bUn@xmbÅW@nWLUKUbUVKU@LUK¯mU@VV@xULUVL@bU`WUz¯aUamKUa@@xkX@x"],
				"encodeOffsets": [
					[116832, 34527]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4114",
				"name": "商丘市",
				"cp": [115.741, 34.2828],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XVl@lLÈ@VkV@V»UanWX@VaÆÇô@ÈaVX@xVJXUÞUaVLĸbXKlV@m°Vn_nyXX»mUk¥lK@a_@yInaVKVa°_@WXI@@KVnIlbnaV@l@a@_w@lwUKmXa@UV@»Vw@kUKVUUm@w±VUXUKUwmJUU@km@@±mXkmUI@mmKUwkbWakLWaUIkJmX@l@@VUX@JWbX@VbULWblUVULknlV@bVJkmb¯KknWmk@@nmVkx@VmU¯KUnUL@JUIVmaÅaUm¯Xlkk@@lk@WI@yUUU@b@aUaUmVk@`nxUXlb@lLVxUbUbVbUllkVlÝVUnkVmKUXm@kl@nUx@xnxn@`VX@V²x@V@b@Wl@zU`VUVVbL@VbW@bkXllkLWV@V@VVÈwlV@@XK²LlbWnnÆL@VnJWn"],
				"encodeOffsets": [
					[118024, 35680]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4112",
				"name": "三门峡市",
				"cp": [110.8301, 34.3158],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WKUmUI°U@@UmU@KnK@IaU@makKUa@_KnmVUL@a@IXm@KWkkKVkUU@aUW@UUIVaymwkbU@xLVUWWkk@WUkJk_WWk@WIUKÝk@WKULka@mwĉ¥mXUK@@bm@kVWwkU@mUUlIWm@@Uk@@KkVmn@lwn@@Ul@XmUXUmVÑkmkVKUaVamaUXn@ykLUK@WwKmKnUm@UmaU@mUk@kL@lxċxUnkVmnXxWb@`kzWJ@VLmVUnlmUL@lW@Ub@VXUb`VLUbUJ@nmnUlUUm@@bUJlnUU@lxkb@@XJUn@kb¯VVVmlXXlJlzn@VlkVW@bkKbmkUbVblXVxKÈnwÞlĊKlVnKlwX@lL@xlUnVn@l@lmX@ÆÈb°¼ÈwVJlx_°xalUÈxlUnbVxnL@lllbmn@nb@@VL@V@@VLJnIVVlKnV_"],
				"encodeOffsets": [
					[114661, 35911]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4107",
				"name": "新乡市",
				"cp": [114.2029, 35.3595],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XVlLK°bUblbUbl@nX@WXVVKVk@@mb@UbnW`kLLV@VVLnKlVXIlV@@a@l£nWlkVa@°bnUlLVlnabnUVUXKlU@@lk@aI°y@ôkUU@wmônkWakmlUkVmkUlmUUm@nkUKWanamULXW@UVnUln`lblL°KXV@ĠJ@L°JUVwanK@UUImmkK@¯±Um@IVmUmmÅnWaUK¯aUkw@W±kVxUVwnÅJUIWaÝJóIbm`ÝbÅImJUI¯¥¯@mU¯UJmnUVóUkl±V@zXlbWVXL@bmmº@@XmJUXU°llk@nWJk@U@¦U`m¯Wx"],
				"encodeOffsets": [
					[116100, 36349]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4104",
				"name": "平顶山市",
				"cp": [112.9724, 33.739],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l¤UbVL@VLVb²VlKlaX@lb@lxUVULbln²VJUbW@@Lb@`nL@nVV@LVUbUVmkVllXbl@Xn°VK@_°`²IVVV@VUVJnInaWK@U@KLÆ@nmlXXWVUUw@klKVa@knyVkVanIJXUl@XbVUl@@aa@mXkbnK@UlK@UUUVaXaWmkUm¥nWmXaWakl@VmÞbKVL@aVI@mUwVm@KÅméULKVaUk@kUK@UWXI@VlKXU@VVnInVV@VLlK@UUkKU_@WWUwU@kln@@Imb@@mnUKÛ@mKUkWVXxmbVLXVVU²VV@xÅnmWmLU@kbmJ@b¯IUbJUUxVl@z@bU`W@Ub¯nUJUb@WLUKULkU@aWK@abmL@lmUk@@bULWJUI°@¯aWLk@mbUb¯b"],
				"encodeOffsets": [
					[114942, 34527]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4101",
				"name": "郑州市",
				"cp": [113.4668, 34.6234],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@nWVUKÅ@WnVnIV@kÆwV@nn@lxÞlnôJzXJl@nalUČVll@²UlkôVVUnmI°VnV°@°¦VJnIÆJÞan_VmU@ama@kU¥kaUklw@UIV¥kVUI@mmUÅmUlwVU@amUJWbUakVVé¯Im`k@wVWmLkU¯XkWmLmx@UUbm@@xJ@LbW@UUVWUkVK@kaIUamKUkkmmLUkJUVWXkWmnÅ@KL@@VXLmbmJUIUVU@ULWVkK@nWVXL@lVn@¤bkôKXKlL@¦²V@JL±@@VU@WV@X@`XXmb@blan@Jb@V"],
				"encodeOffsets": [
					[115617, 35584]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4105",
				"name": "安阳市",
				"cp": [114.5325, 36.0022],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°kVaV¥kVmUkWkWVkVKUwkkmKUU@awWWXWakKWkXmlaIVmX¥U@a@WnK@kVI¯@KğI@WU¯LkKak_kmmVU@VWXKnVmbXbVLmln@VVknlVUnVlklnXbmlmlXblnÈlWbn@@nK@VLbVV°VVzln@VxIbU@WLUa¯VUkWõ@¯kkmxk¼lXUlVbVLnlULmU@lLkVUlX@xW@¯mU@UmIUWL@aXakU¯anWk°@kkKmmUIWaambUkkKmV¯a@UblkmXk¤@@b@UbULWVnb@lUVVnmnVVUJ@bWXX@WJkL@blVU°UV@XlWnXUbW@UVkVVWbnLUJWLUK@Lnn@blVUnUblxVUVJXUa@UbLnUVV@mVIVVn@UbV@XbmbUV_lVXUWanJVI@WkI@WVIVU°WXXl@la@mX@lLXlkVbmXylIXJV@@kKla²UVaIVyÞb°LlVna@UÆKnLVbK@anwU"],
				"encodeOffsets": [
					[117676, 36917]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4102",
				"name": "开封市",
				"cp": [114.5764, 34.6124],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lUVbXaInV@bUVxknVVÆnn@VJlUU¦VJ@kxVllb¦lV@nb@bVUnaôJÞIXbVJÆImxUVwU²l@XxVl°bVLXb`XklUnmVblL@lmx°LVK@UXIVaWlL@Uk°KkVaVUXmmI@UÅKmmXka±KL@W@kUÇxUU@@UXUlKkklW@aXa@UKUaVUUV_@yXk@@a@U±w@UUW@_mmw@wVwmUaÇbUa¯UUkmWkn±JÅxmIbUxmKmnJWwkUaK@a¯@bk@mVUIWLmwm@Ua@WJUb@LUl@UUmLUbWJ@VL@VmXWWzUJUê"],
				"encodeOffsets": [
					[116641, 35280]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4108",
				"name": "焦作市",
				"cp": [112.8406, 35.1508],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V@VL@x@bXWV@XklUWX@J@nI@KlLKUVaV@JlL@KUk@KÞLl²_@nWlLUVV@nLWVUJVn@anV@awÞUVLVxb@lW@lbXnVn@@¼L°mKVn@bnl@nVK@blbLWU@VWLXV@nlKn@lVVbXw°nV_@¥Vl@XI@mlkkV¯VWnI@W@n¹n@aWKXUaWk@yk@kċUkVmbk@WIyóImÝkkwm@mU@xÅlU@mJXak@x¯V@¼¯VmUmmIkVWK@UXIl@UWVUU@mVUI¯b¯@lmKzWKUanJ@nlbÝ@@b"],
				"encodeOffsets": [
					[114728, 35888]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4110",
				"name": "许昌市",
				"cp": [113.6975, 34.0466],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lIVnKlnVlnLVbJlb@ULVlUXVVX@a@KI@wn@aVV@nwnKlXW°lVnKUXx@ln_°JVIXyXnW@UK@UXIVanKVV@Vk@KVaXI@Vbn@nxKnaUlnVa@Xa@VçUUla@aUK@wmULk`kIWVkLmK@V@XUln@JXV@nmbUóImUa±@@ÑóVUUk@UlKVU@akWVUUlUUaUK@UUKWbUkÅJ@XWa@XbmJ@nUJ@bUKLÝaUnk@lXbWbXnmn¦lVXnWbUbVV@VkL@VmLaWl@nb@bk@UVWak@WVImJUbUlmz@lUbkL@lVx"],
				"encodeOffsets": [
					[115797, 35089]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4109",
				"name": "濮阳市",
				"cp": [115.1917, 35.799],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lLXbWXXx@bVVnLllVxULUlXXlVlUnlU¦Ub¯lnK@VbVb@XbVLKVxVVnIlaba¥lU@wnalLnVVlVLXnlWVXn@@lVI@WnU@mÅW¥aW_k@WwXy@km@wUm¦lUxVLV@UwJ°x@VX@Vb@`VX@VX@llIVbnJlIbVlJ@mÑ¯Lóa@KUakX@UK@wU@lWUUÝ¯ImW¯aLUKU@k»k@mwa@UnKWI@UU@akVWKk@a±bóUWKXUmkKUmLbUx@lmLX@@bVW¦UnJkbWnXl"],
				"encodeOffsets": [
					[117642, 36501]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4111",
				"name": "漯河市",
				"cp": [113.8733, 33.6951],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@LUnVxnIWa@Xb@WÆIVlXaVL@VVLVbkVVUVlX@bUVkLVl@VVôU@Ò²@VbnôJVan@mWU@ImVk@WkI@wmak@wlW@w@VbnLVb°bVyXV_@aUKVVK@wUU@aK@kmbXVmJUX`knnK@aU@mwakb±@¯UUÝKUUU@WU@VkLUKU@mUmJUU@WVkL@UWJX@VVL@lVlUbLVKnêÆ"],
				"encodeOffsets": [
					[116348, 34431]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4106",
				"name": "鹤壁市",
				"cp": [114.3787, 35.744],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ón@xVVól@¯zJ@bkl@@kVWLUVmVXbVJnnlLl¯@Xlm°bVlWb@bKVXnJ@VV°nX@@wWVklUK@knVVKmkUKUaVkWkl»nwl°lö@lXV°UVbXKV@aJw@UmkUy¯UUUaK@UL@mm@XaÇkkmWank"],
				"encodeOffsets": [
					[117158, 36338]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4228",
				"name": "恩施土家族苗族自治州",
				"cp": [109.5007, 30.2563],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VKbX@lbUVnL°@VlVnUl@VUX@aVmaXlaUUU@wmaVUn@Vnmmk@mU@knaaU¥VamX_@WUmW@_kVaVKnLl@VVal@k¥@kUW@kUKVUlUVÑW@kÇaU»ValmkUVUVak@aV¯_@WUkmVUlU@aalI@akkVWUaWXUWwWVbÆ@lalIVK@Um@UUW@al²a¯UağÇm@bkk@w@@WaULmxIUb¯@U`UXJmL¯aKXWUL@aknmK@aWUXaWm@I@UÅmVU@aUV@bVI@WkUbXkm@VakwUKULWKXmJ@XUK@mL@KUwVaUI@KU@mmnmXka@»V@@UUaw¯yVk@UUVmmkÛÈU@mWUnmxmlUbV¦UlbWVUL@UUIUmÇKVVbUVVxknLUxV`VX@kJVVUXWaUVVlUnmKUbkI@WULmK@L@LVlLnmUIWV@akn`VXUJIVlUVVbUX@¤mbnLmm@UXk@mm@Uka¥@kV@@KkU@aUKWbkLWVkIVk@UbVlmX@bU@@mmL@bn`@Ln@llVLVk@XVVU@`VXU¼k`VULka@VllVIn¤VU@@blÜbkx@bkLkKn@bn@@b@JUnV`UnVbVKlVXUlbn@°Vx@@bnVbUllVn@VVK@UnW@UVUlnkVÈÞxVbVVIxVaÆ@@aka@UVaU@@ak@Wl@nbVIÆ@Jk@L@VlXnlla@VJnw@UmwXU@aVK°ÒnllnLlbxnKVaV@l¦²nVl@llLx@XVVĶ@nax@U@alXUVaLÈþV°XxWXkK@mLnlUb@bxnLVlVVkb@UJ@xWXX"],
				"encodeOffsets": [
					[112816, 32052]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4203",
				"name": "十堰市",
				"cp": [110.5115, 32.3877],
				"childNum": 9
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@a@w@kV@nbVK@nUla@laÅl@nlVakwWX@WkLaVmwV@anK@UlIXmWkk@@mmLkWlwk@U_mKXwWK@U¯K@UU@VUakmkIyUUVUmanU@mlwk@_mWXaUWU@Ç@U@aUaVwUKUIVkK@UWIXmaV@k@Vm@UnwlUamk@V@ULUamxUJkU@I`WkkK¯XWak@@W@IUVLWJkXkaÇVUK@kUmbmUUUKbkKWUkI@kKÝ@@aUm»nI@mU@UnWV_@aUmWbkLUl¯b@akkk@WkkJm_k@UV±@J@bnU@@WÝIUJVbXL@nlJkx@Wn@VkJmbLmU`VbUL@xVn@XV@mVVnnJVbUx@VnVUbVVx@nbUK@b@bJm²VUlbXzVJVJVbn@@Xmb@V@bVJÈ@Vnkn@°aVVV@XKnalLVmUnnVKVlnLWlXXKlk°XWkLUVVV@nU@ml¯nmbk@W`Å@mbLWm¯UxnêVèk@mbVnUK@kKmXk@@JUIlÛLllnbVnlJ@LULnlÆaVLnV@nkVJ@lkô@²bÆm°wLWV@VXKVXI@W°ÆVKb°UJVIVV¦XKVL@lInaVÝnUl@@bX@nmVL@lVLlVLVUnbVW@xXnbU°¤V@a@kWKUUn@VlnL@UV@Ü»@mX@V_akaÞ@VK¯@kkW"],
					["@@mUkUUm@nllVKXXVK"]
				],
				"encodeOffsets": [
					[
						[113918, 33739]
					],
					[
						[113817, 32811]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4205",
				"name": "宜昌市",
				"cp": [111.1707, 30.7617],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°`U@blUbUVlVknUbV¼Èb@lXUÒkVUVVL@lVX@ll¦k@UbU@kmKULUbl@`nXV@XW`nUbV¦bmb@lV@nnlmnUm@UVnb@xVVVkbWnbVnVa@an@UaVUJXnWlXX@l¦@lKÆXbXV@VV@°¯°xXxXV@nV°UVWU_VWXkmaVnWVkn@lln@lb@UVLXWlnX@aXUmaVK@UXUU@WVIWXXVU@¥VK@UÞa²LlV@kV@UanKma@UVUnK@UVLXyVLknJ@UV@@UXKWUXaV@Vb@mVLnKWm@aUUm@@UkK@UlaLXKWaXI@alKlmUk@wVKXL@m@WWn@UVa@K@wna@aW_XWWkXbVW@k@U¯WWwka@UUaVIVkU@m±@U@@wVKka_@VV@XUVwU¥yUkm@V±ÈUKk»ÇLmmLk@ó£kmWwm@UIkWKXwWU@kLwkbmabkK@VLkmWIUKkUUÇIǫJXÅJULVÇLUV@UK@kI@WVI@UaWmXVVUL`±kÅLmKkkÅ@UaXXxWVXVbUXll@bkJb@bkVUVlnV@X"],
				"encodeOffsets": [
					[112906, 30961]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4206",
				"name": "襄樊市",
				"cp": [111.9397, 31.9263],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@Xl@Xb°WlLXl_@JlVVInwVbVK@@UnlVbkmx@VUnl@U@nbWXJ@VlLUVJVLUxVb@b@VÈ@XVVWbnX@`lkx@nmVnbUVVVzlJnlVbUV@@V°L@VXLWxnLV`l@kxlXnK@nl@XlWn`Xnl@@UVa@VÈK£VLVanW°U@UVU@`VInmV@nV@Xa@aVW@UalkXKblIyÆXnlJXbl@@VV@nklU@`nVKLVKVb@VU@UÈKUVKIlUX@V`lIVbn@nblVVmV@@XXJUVV@knKVn@`@XVnKwlLVmUUU@U@aXL@WlU@UUW@UmU@KkLWaXkWmXUWm@U@nk@UmK@U@UaUVUUKV_@al@namWUI@KUK@aV@WUIb¥ULUJkImK@U@KV@U@a@UkU@K@wVaUwlU@mUULmKUkV@@anIWmUK@I¯mKkl@LUb±lUakLmk@WwUKÝVUIm`¯n@Uk@makJU_@Jma¯ImwUVkKbaUÅ@wWaU@VU@mXIVmmUkJkwm@mIlUKWzUK@VmLUV@VnbmLVbU@@lkU±KbÝV@UL@¦VWUWXUJ@XVWV@VULnbWVbW@kmWXUK@Vkam@kkm@UlmXUnbWlUXV`UX¯VmUU@Ul@Lll@nnJ@LnWmbm@b`", "@@kUUm@nllVKXXVKmU"],
				"encodeOffsets": [
					[113423, 32597],
					[113794, 32800]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4211",
				"name": "黄冈市",
				"cp": [115.2686, 30.6628],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VVUnWVXnVJ@U@V@VXV@@IVJUn@V@L@KlIVlVanLVbnVlIn@@a@Kl@@IJlI@aXU@KlKkVblJXUVlU@VbVkVKXn@VlxVa²I@VlVUxln@bJXklaVWnLmÅ@y@k@aI@W@aXIlVVaV@nnlKnLVW@IUa@a@KUVVlI@wXKVV@IUla@lUXwWnnalLlxXLll°@XwVKVaXIlnb@nln@Va@U@k°UmÆUVaXIJV¯ÇUmmkU@WaKmakVm@U@aVKkkmKkVmIkÇ°£@aUUVaVVnKlkXmk@lUVaX@@Um@UmlUXVUVU@wK²¥Ua@I@UVl@UV±UIUÇ°»VkUmVI@a@Umĉ¯V±bŹĖğaÇL¯lmkX@óĀ@mÝêb±WkLn@xXx@@b@V@LW@UblţX`kxWnXô¯¦ÆV@L@JVLxkK@V@bkz°llXz@JUlVla@XUVbVKXnW`XXV@laVV@VX@V¯xx@xULVbUJ@n@LU@VmmakbUK@bIWWUUVkUmkLm@VJkb@nUJ@`V@kXaUaVmmLkUmJ@Uk@U±lkzmJUb@bVUxVXU¤L@JX@VlL@JkLUVU@mnUl¦@V"],
				"encodeOffsets": [
					[117181, 32063]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4210",
				"name": "荆州市",
				"cp": [113.291, 30.0092],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÈJVlVVLXJlnK@UlLanblaxlK@XVWxXLlJ@VnXxlnô¤l@nKnÈKl¼VL²ÇUn@VlzV¦UxWVU@@U`lbUL@xV@²@@nlVUUJVb@VlbXx°XVWX_VKUwVKVa@UVKUUVk@KnblaUU@wnWl@UX@lÆ@@aIVmUkxVJUbÜ@Uk@WWnk@VVm@I@m@Un@mXUlVlUnJ@knJVU°@@aÆLX@llL@¦nJV@XblLVa²U@UlW@VX@`@LV@@bXJlIXml_lJU°bKÆLnVVl@öVmXaVIĢllUlVnLVlX@@bannxVLbn@°ÆXmmkĉ¯w±Uċ@KÝÅƧŃÝçUw¯m¯k@WkV@¯UIUJW¼kbUwk@W`@¦Uônb@VÆlÈ@VU@£UWWnUÆUnmJkUÇ£VWUI@aUU@WkI@Ua@JW@k£kaWVUKmnkKbkkVWbVmUUmwU@kk@UakUUa@V@nlx@lUb±lUbnnWLUyk@UamUK@mlk@Wb@VXL@x@xWI@a¯¯V@bVn@LkKmL@`XmKmVU@@bkL@V±bk@UaaLKUVIWXamVVbUK@b@Lm@UWkxULWVUnm@UlUX"],
				"encodeOffsets": [
					[113918, 30764]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4208",
				"name": "荆门市",
				"cp": [112.6758, 30.9979],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n@lxlInVUnWJ@nUVV@Xb@xVÆbalLVUnx°JnbI@V`lInbl@@V°mn_VJÞUVLXx@nllKVb²kVa@KlknL°@JVLXnmJ@bU@VlnLVKV@nX@lUKVaXal@VKn@¥°L@UnwbnaV@KV@VUX@lVXI@KW@@IXWV@laVLKlaXUVVnkVWV@lwXblIXWVkVmaU£VaUmVIkU@y@WakKUamU@UUK@kmK@w@@mK@LV¯U@WwkmULamVVUU@IbUKUakmm@UakLmxU@UÒWlULţÿmwkIUm@akÈblW@UVUUk@JW@XkWWUkUKUIlw@aUWknWUUmnIWaUwVaÛaVUIwVlUnJ@bÅ@@kVWk@mX@xVVkbma@LUlVVUL@VUbULVxULW`UX@V@lUXWaXlWXX`@bmb@x@LUb@VmXX@@nWKUL@xVlknkL@bWJXbWLKkb@VlL@Vn@VV@bnXmLUK@nUaU@WbXVWL@VU@@V"],
				"encodeOffsets": [
					[114548, 31984]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4212",
				"name": "咸宁市",
				"cp": [114.2578, 29.6631],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞÆLČ@V²°xĊnlWnÅ¯m@aK@°nJwnVIUaÆJÅ@wwVXW@aV_l@²V°lĊwlaXLwlUkalVVaX@lVXI@aUXJ@U°UU¥VIVKVklanLVa@VÈIVV@nk@aVa@mV_@aK@klKUa@UnKWk@@lU@@UW@@nUWUwmaVIXlV@mLXblJ@kV@kk@KU@WkUWVÅwkLmW@UmL@lULKULak@maUUÝwUJIbKUU@aWK@kUWVkUwVw@mÝ@I@wkW@aww@LU¥kJ@nVJIkVVnkVUkyUIUl@xWUkaW@@°kzWxkLUWmzk@@bVVVb@@XlV@Vl@bVbUn`Wn@WbVVI@`LVbXLV`mnU@@lL@LUak@Lk@WbUJn¦@lVb@xVb@n"],
				"encodeOffsets": [
					[116303, 30567]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4213",
				"name": "随州市",
				"cp": [113.4338, 31.8768],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@n`lwkUmUVWX@lk@VanUĠ¼V@@mX@@nVVVXLmJVLnK@bV@@J@VUn@VaVUUUVWVLV@@Kk_@almaVkUU@WVVUVLXmmk@wUaUKUV@°@kmaUaÈmWmUVklaX@lVnxl@@UnaUk@VUVwVKn@VVn@VbVJUknUmmVmk_VwKUUmVak¥@UVKVIkW@UmIVWkIVkmmLkwmVU@LUU@VVXL@JmLUbmK@UUKmkKUUmVUaUnÇlk¯mJUnmLUaUJUaWL@UkJU@aklkU@¯@KWLUmUUWVkbLUKkbU@WX@JX@@LWJkUW@UVU@@LUmbamx@V¯K@¦mULk@WbUbLkVW@kVVxUb@x@LlV@V@b@VU@L@VLnlJVIVK¦aVJ@XU@bLV@LVJnXmbk@@bU`VLUVVb@V@VnL@Vml@@VXnWVXnWlXblK@LnV@VVX@VkV@XWK@bVV@VV"],
				"encodeOffsets": [
					[115830, 33154]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4209",
				"name": "孝感市",
				"cp": [113.9502, 31.1188],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VnXK@L@°lVlkb@VlI@VXKVbVIVbnKVmnI°lÈkVmVbnUVVlLnVL@VnLVanK@IWKUUV@V@KVnUlxnKlnUlJUXnJ@VlXUJUL@Vl¦UbnVVLUxl`UnnnmVVlnVKbmVX@a°Ý°LaXJV@VUnKVXVK@LnKlLUbVVX@VwVJVn@@UU¥V@@UUK@maUVUkkJ@L@K@UmVUI@JU@W@U@UV@UIWmXUVmUUÇ@UVmIlmnmakK@akaW@UwVUkKVnUlKVwkVU_WKUkVW@UXaWkUa@w@VU@XaW±@IkbKb¯L@WXkW@UakL@UV@UmVUmL@UXWVL@aUVUUUVU@yUUIUa@wUKWVU@kWk¯UkwVKLUxK@nVxUlUUWVUmw@wUUyXWlX¦WbUV@U@blbUVVbXXl@lVL@bk@lxkVVnVx¦`UnkL@V@L@@@xnL@lVL@VnVVblLXb@@zlVUJVnUbV¤bUnUlWXkJWakxU@UXml"],
				"encodeOffsets": [
					[116033, 32091]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4201",
				"name": "武汉市",
				"cp": [114.3896, 30.6628],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nbnmknJVUÈ@@U¥VknmV@VUlK@IkK@UW@IKV£UWVwU@aVanIly²kVl@@VnIlVnKUnVbblWU@@_VI@mlaUIn@lKVnUlVVXXJ@aVLlanbUnV@@K@mVIUaVK@ww°w@UW@UUUkbU@WWX_WmULaVU@WkbkUV@IWyk¯kly@a@UlLwUK@I@KÅUW@Å±Um@wl¥ka@@_Vw@ķa@akw@kKW£XVUVwVwUaU@VUUxWKkbĉx¯k±Uk@U`@bWXUx@xÆÅIVbUJmxIm¯@UmxnUVVbnJV@L@@kV@bVn@UVULlx°VXllV@XUVL@xVbJVV@zUVVVUVV@bUKWX@VnKUVVnU@@VlKVb@lXW@X°KaLla@JX²Wb@UV@@xVbXlWb@VUXVlXLV`UlUxkLmVUlLUVVxX@lb@blL"],
				"encodeOffsets": [
					[117000, 32097]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4202",
				"name": "黄石市",
				"cp": [115.0159, 29.9213],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VUVV@VbUxaWUblUVmnKlX@bXJVIlVUxVVVIUzlx¯@VbnL@xx@UVaXKb@XkWU_Vm²klWXVKl@nXV@@wmlK²XaÞén@ôÿ@lWn°kUKmmUÑUmm@wkImWU@UakL@bVLUVċ@bUK@alIXKWK@nXnKmkUVw@¯b@LlUL±Wn@KULUaW@kL@lL@bU`@nUb@bmlU@UÇJ@UUbmKkblUULUJV¦¯V@VWIV@bWJkUW@UbkUlbkV"],
				"encodeOffsets": [
					[117282, 30685]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "429021",
				"name": "神农架林区",
				"cp": [110.4565, 31.5802],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n`lIXll@ll@b°aVklKXaVn@bU`mX@VV@nmJn¼V@bÞ@lL@lJXVlLaVLVnVnalV@VLÈUlblWXIKVU@J_@annaXm@KmI@mkk@KVkWWw¯w¯°@UUU@WaÅWkL@¥@kWWXkWmIUVVbm@@bUbmUUbW@UVk@mVkU@U¯mKVUkaW@aULÆVbb@VÅ@Un@VLWl¯L"],
				"encodeOffsets": [
					[112624, 32266]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "429006",
				"name": "天门市",
				"cp": [113.0273, 30.6409],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@K@UlKVm_¥UwUmlUkwl@@aUK@kkWWUaVUka@aV@VUXaW¥Xk@WWIklm@ÅxmIVÝUkxka@bWJaUL@W@l¯UULUbkVUa¯bm¤UnÇUkmUUxb@VkXÇal@bVnlJnxŤĀVKXkVÑV@nwlKVbn@nlVbVLaJ@VVUnUbVKlnXxV@°U@KnL"],
				"encodeOffsets": [
					[116056, 31636]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "429004",
				"name": "仙桃市",
				"cp": [113.3789, 30.3003],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VK°VkX@@VKbXI@alblwÞVUnJÆwn@lkXJ@XWVzV@xnxVXUVVVkUw@mLVwKVU@Um@alU@@@KUmIUaVUmnwmwmb@aW@UkmKkUkVġkUJWbnUõ@UkmUÅKL¯aVkIk`WnkJ@xVLUVVbUbk@WlXbmVxnxUblbUV@@VUV@nVL"],
				"encodeOffsets": [
					[115662, 31259]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "429005",
				"name": "潜江市",
				"cp": [112.7637, 30.3607],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UbVxbXmJVnXVlmVX@bkxVJVLVlXXWlX@@IVlVUaVwVlnÈVVmn£°aVbUlaVUK@mVU@U@VUkaVamwUwnWaXkl@VaUaVUUK@wWI@aU@@K@_UW@kX@V±VUbkKWaU@mI@¥kKkW@ÅK@b¯@UVmI@lmIkVkUWVnm@@V@n@JUnU@mlXXl@@V"],
				"encodeOffsets": [
					[115234, 31118]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4207",
				"name": "鄂州市",
				"cp": [114.7302, 30.4102],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°¥WóXmlw_ŤWkVaX@@K@U@a@WwU@mWk@ULWkX±lUnV`XWl@aWLUb@Vw@wmKUa@°kwyVUJUUVwkUUJWI@akWmLUnkVaXVbUxUVWX¤lL@lx@bb@ĸUx@`@lbk¦@xn²VÆX@"],
				"encodeOffsets": [
					[117541, 31349]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4312",
				"name": "怀化市",
				"cp": [109.9512, 27.4438],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@n@b@XnJ@k°x@aVUnlUXnV@@VnJWUJVnIVV°UbVVVL@²LUVa°V@aV@nmUXblLXWVXVmVLVK@an_`@X@l°VlXXW`nX@Jmn@b@nV@Lm`bUbn@VUVl@nIVbUlV@LkJUnVV@xVblVUbU@zUKU@mx@xUnn@@WV@lbUb@nVWXXV@VIV@VUnJ@VUz@JWbXllI@VXVVL@Vn@Wlb@lXVlLaV@VJ@XX`kVwVl@bkbUlVXIlnLVamVwV@@nV@XaVJVbX@lwV@n@nV@VWnIVVUÆ@Xxa@IUUKmk@mVIXmWUVJnUVU@anaVwkU@UXa@W@m_@a¯@@K@UVbnK@blIlbXa@WW_n@VU@¯bmyUkUJÇÅ@WU@kWKÅwnm°KVkmankVWnXVWV@UwXkV@mUlLnaVaX@VUn@VnVK@xlnXWU@a@@klakVwmUaV@wmIÛ`m@mVUXmlIXVI@K@aU@UaV_UK@wkUmmUKWXmVkUL@mU_nK@aVU@Ukak»@U@ymU¯UUVKkam@nka@mwkLWb¯mka_VaVKUIUw@kKmU@WK@UnmaULkU@wUalWV¹U@@WUI@WU@_@W@U@mU@WbbUK@Um@@UmbUwWWkk@WUa@anUUwlWUwUU@wlJVUnnV@@mnI@mK@U@wa@wUm@_mVUUaVUk_kċUkVWL@mlU@kn¥W@UwUWV@VÝU@lXLWVUbVLXlVIlknmU@VUJk@@@kVmwmVkxU@@XmVUb@xnKVLl@VxUxkIU`@bWVXX@JWL@bkb¤@bmUUU¯Kkmb@VVUVVn@@Vb@`lnxmblUnbk@xUmV@bmWbUV@VJIl@nVUbK@nn@VbnJVIlJVkXJ@X@lmx@bnnWVXJWXU@UlU@mk@@llb°xIUbnJ@VWbXVmI@JVX@bk@bWL@JUXUK@U@U`n@@Xm@XVW@@nX@@`ImxU@@JUI@KLmK@UÅUUV@VW@¯kUU@UamVUUmJ@nxmLKkmJkwkKm_mKXU@aU@b@Wk@ma@zUJVUmbUlU@xnXlWlXXblK¤V@@nUVVLkVl@Xb@VVKnXKVx@znW@X@@lVK@X@JXbWbnn@JUamLVVXIVxnK@aWUX@x@VnI@WlI@anVIVxkl@lbXXxVVVJVInbV@@ln¦ml@XXVWbkJWb", "@@XLVKVXVKUa@UUUmV@l"],
				"encodeOffsets": [
					[112050, 28384],
					[112174, 27394]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4311",
				"name": "永州市",
				"cp": [111.709, 25.752],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lxUXVlXUVnlVĢJVbUXVJV@XUW¯VIUK@klW@Un@nl@V`XUVL@l@Vx@XXW`UnUbxUlVnUVlb@VnJUVVVInJlUVnwVklKnwLVJVV@nIV@nbVa@KVVVUUaKV_nVVJ@_VWnV@n¥lI@anl¥X_VKlwVlULUVVV@U@VXL@IUmn@VU@wmKXUWU@m²l@VIXWWkWUkWlkIVamUXamUnmWUU@@UnlK@XJl@kVUk@mWKXkl@@aVU@UVWUUVaIn`VUVLnw@U@K@U@w@UVmUU°K@UnV@bV@Xk@KVm@amkaU£VWUUmUUwm`UbULkaKXU@kVmU@aV_UWVIn@yXXK@klmVV_kWVUn@WUU@UmaU@wnwWanUmmXkam@UakLmK@bxUUUU@Km¥Va¯@kUaVUlmUU@mUUÇmUkUybbUaXUWWbÅLmL@VaL@WWXUKmmk@a@UUKXW¥kU@VUkxmVkUWbUJnVJ@nVJXzWxk@lVbUX@VVL@`mbUnUnVV¼k@Ulm@mwLb@lmLUK@UamWkK@£Ua@UkJkUmbVlkX@bWbUVnnUVl@bbVK@VX@lbV@nU¤x²Knblb@xVô@l@b@l@XWxnVl@VV@XLVlLUUXV`bXXmJU@@bm@UUkLW@UlUKWUUbwUmL@nklVVmVXXm@@bUKlÆnXkllVUVVL@nUbV@V@nnV@xUn¯U@JW@UX@xĉ@`m@@LV@b"],
				"encodeOffsets": [
					[113671, 26989]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4305",
				"name": "邵阳市",
				"cp": [110.9619, 26.8121],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XIlJIVVK@n@VVVKnLVwVmnLVK@U@wJ@wVIÆ°X@ÜÈUÈxll@kn@VwVaXJWXn@@WVL@UUKVKV_U@@aVKx@UaV@lk@XylbUaV_Vnal@WU@aI@aV@@aVUl@XmUXWaXml@@kk@ma@V_UnUVUUWJUa@kkaWLUmk@@LUVWUkJWkK@¼UnWJIkV@b@JUIm@UlVm@Uw@a@kWXWKUknW@WUU@kmxUkVmIUJUUVmI@UkaUVUmVkwVaVmX_WW@Uw@@kUKWVU_k@mm@@VkX@lVLUJX°WVU@UIVWUaIUġmkVUkWUVWkwWXk`mI@¥kUVUUn±@mXkWknVUVmmU@@XVUk`@Xk@¥¯»mbĉó@mkU@kUKmX@UnmL@lULkKUWUU@bUaUn@Vb@l¦Ub@l@UKmnKUnlUVVbUVn@`Vn@xb@x@VL@nmJ@nU@mmUVkI@xVVVxkXVxmV@bbXVl@XlXVxna@Vn@@VVLaXaV@n@@V@X`V@@XVJ@XV@UºkXVb@xlVVKnbm@VXLV@nlL@VxJVULUb`lb°nXalKnx@lbmn@lbULVV°nV@z@Vl¼lb@VUV@bmLV`@nKlVnUXWVLnnlV@xVLU`VbV@"],
				"encodeOffsets": [
					[113535, 28322]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4310",
				"name": "郴州市",
				"cp": [113.2361, 25.8673],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²zVaVlnVl@nVkJl_XJlIVmnL@mV@VXn@lV@XzV@lyV¯²U@UlJ@XVKnVVIXl@UVLV`@n@JI@mlIKVLnUlVUVVLXaKVLl@nb@WXV°KUnVVL@xVJL@b@LUVVVUVXbmbVbn@@lUbm@x@XVVV@@@bkImx@Vm@Xbb@l°XU¤aLmnL@bl@@VUX@VxnVanLnW¥XKVwnUWXmVIUWÆLVxLw@wVmlU@¥XWUkwlÇn_UwWV@VU°wnUy@aVkVlnL@lVnw@VlJ@bXx@bVKnb@U@WVUl@@Vnbl@XLlK@aVLVKnxÞn@aLlmUaVUm@ÅknUmaUKmVk@mkk@UlWUkVm@w@kUU@WU¯¥@wÇ@aVIlUV@kUWU@UUm»@k@mKVkUKUwaUaUa@kkUWJkImaU@UK@maUzk`@zy@XmJkL@UUJmUkV@z@kkVmK@¦UbWL@a@UbmKmwUKXkVUUkmVkw@UUKmL@WUIWaJW_k@@WmI@mk@WkWULUUVKUUVm@Ub@nUÇ@U@wV@Ua@aL@akl@kUJwó@@L@V@`@J@xnnmV@bkJmUó@nJWUUmU@UV@LkWlnnmVXbmxxV@nbVV@XVm@UVlXU`Ukn@lWLWzm@UJVXU`@bVUn@lWVLlbVKVan_VxnVVVUXV¤bnl@bUn@LWlU@@amU@V¯LVVUn@V@x@V@L@VmxUKUVm_JUbVV"],
				"encodeOffsets": [
					[114930, 26747]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4307",
				"name": "常德市",
				"cp": [111.4014, 29.2676],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lUmkUwUyV@VW@¯VaVmUU@KVUVUVLnaWnkUÓV_@mVU@Ýw@ka@kVmUmK@IkaUamKkXWaUW@WUk@@KVU@aU@L@J@XÇVUKVak_mWkLWakVUbmLUUmlUVKUU@kUWW@UImJ@xkLkKm@@X@óÝ@UUk@UKVULKXkWWbkaIUWU@mUk@WLaUJġ@@XÈÆVIlVnz°aV@Um@X`@XWbkakJ@amLaU@V@L°@@bn`@@XWb@VVlUxmb@bUVmVUIXVWnJU@nnlVLV@JbWzk`m@UVK²VxkLVl@Vn@V°xVKVkVVlUblx@bUÆ@@nVnUllkx@VW@@VkLWxUL@bÝ@kKkVõV@bkXVVUV@VkUkVLkVa@@¯xUxmX@JVb°WXkK@Vm@kVbbn¤xUXkJblxnXÆK²l_@Wnan@UL@bJnIlV@lU@@¯ô@lWȂIVKVmU@aXaV@lwVXn@@K@UVKUUnUbn@lWXlJnULKV@l@²a@UlK@aV@naVXWV_nKlL@KUm@a°U°@VXL@a@wWmXal@k@VLnV@@bl@VnX@mwVa²aVU@mk@"],
				"encodeOffsets": [
					[114976, 30201]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4331",
				"name": "湘西土家族苗族自治州",
				"cp": [109.7864, 28.6743],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@KL@wnK±nnm@WUkÜÈn@n»@mVamkmUl@VnmmU@wUan¯VKLnVWlInyWUI@WWk@KXUn@mnUmU@WmkV@kXaaVaUmIk@kaX@Um@UKWU@UkJWkXa@IVy@UmIUVU@UJU@WXWmU@VakaU@@Xm@Vm@wnwV@VLyV@VakUUa@wUUVmlI@KUVkUamJk@VU@UmVaan_@KmU@@anm@ImWX_WWUk¯@k@W_m`@bULUKUnUWWXkKWaVmnU@@b¯UUbV±K@UKUUVa¯UUmJUVIXmI@UU@WmVmkUV@b¯w@lmI@W@a@m¯LXbmJVLklWL@V@XXmbVVU@@VU²Ul@VlX@b`XxzUmkUVÒl@bXLWxXVl@VbkLma@nmVmULVbmVUb@lnzmbUÒVl@°nLVlJkn@bmJk_VmmkblxÈx@LUbxVb@Vn@JmLVU@nV@¦VbnJ@lVVbkxbm@UxVLV@n`UnVVVkl°zxVb@VU@@ÆlXnWm¦nbVK@XVVUVVl@XKUV@nVL@WnIWXLVKVLlxUbVKXVWbn@@UnKVLVbJU@aVU°b"],
				"encodeOffsets": [
					[112354, 30325]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4304",
				"name": "衡阳市",
				"cp": [112.4121, 26.7902],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lV@XV@mXVlXLWX@l@bVxn@UVkn@VJ@I@alUJXIVm@»LXllIXVVU@Kl@VnXKlb@lVbXIVVUmVVU`@nbl@@lXLVVVKVbnXWJ@VXbWxXbUlVK¦nLVVUVVbbK@ULnK@Un@VxlUV`UnnL@VVL@JV@VUnxnKVbV@@VIVUnJUVUl@nWXllIUaKVbÞLV¼²`V@VIUwlaVmXa@IWanK@U@mkVVUVaX@lnaVLÈ@¥@kkJUWJUaXkaUmwVXJ@_lWUU@¥n_KkamUK@amKnKbV£¯W@kaWan@@UnwlJ@a@@UUU@Wwn@Va@km@UanaWaUVUUVU@K@aKUI@wKUUVm¯LWUX@mak@UKLWbUKVUkUmVUKLkJ@nJ@I@mU_UK@VWkUJmUUL@WkI@V±VU°kzU@Wy@kUm@UWU@@nmKUnkJWIk`IUlmk@mUUkUb±yUX@VUV@bk@WlXL@nVlUlk@WI@kLm@VV@XVmnnVWbnVUblJXkVlXXlWXUJk@±@nXVWVnL@xUVm@Vn@JWK@UV@UUVUVKUkkxULW`k¦m@bkJm¦U@mUX@`UImUU`LVbUVUU@LUbmaU@mJU@UUIKmxkLUl"],
				"encodeOffsets": [
					[114222, 27484]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4306",
				"name": "岳阳市",
				"cp": [113.2361, 29.1357],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@wUklmUUmU@@UVm@wUaV_mmUKmwkIkJmUUnm@@UUbUKUmÛamm¯xVLkbÇÆUVUzkVUlUUKWLX¦W@VUUUaKUbmLKm@akU@amVaUUVIVWkk@wk@@xmLlmÅwmbVlXlÝIWVkK@kkVL@VWKU@Ublnam@b@bnW`@XUJk@UUWKk@UKnn@xmLUVm@kbVbVnV@Vb@KnVLWXÆVĢ¦VblnUJWz@ÆVóUVbkVaÅx@¦lVUbVVknWKk@wKVUÅl@zkb@`m_mJ@xXmbVb@llV@n@llbXLUXalUlalVnwnLVKlVbX@@IV@blJ@bVL@VVVUXÈ¤VnkVÑXmlbnVKkÑÅ@UmaVç@±XUlIxlV@VaX¯lUVVUVJnV@°°n°Vxĸł°¦b²¦lJ@U@aUK@kUm@_m±VIXal@Kl@bV@KK@km@UmUUaK@_UJaXU@Xm_VmUk@WUk@kU@a@m@UaUUU@al@nyXXWWwkly@¯n@@bnV@k@mVIVlUUmlUJUwIbXVaUal@Kb@VKVkXVl@VkUU@ylUVVaVL"],
				"encodeOffsets": [
					[116888, 29526]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4309",
				"name": "益阳市",
				"cp": [111.731, 28.3832],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆxXL@lV@ĢVIbXKl@nVV@XVJlbXalXWLVKUVLl@VV@ôÞ@@Wn@lLlK@wnIVJX@VX@lVVULVnkVVnKValUXblKnXl`UbVLÈU@W@IKV@@bUV@L@lXV@VXXblWnLVblb@JnLVUn@llb@x@ÞUV@nU`VÔmlXmbUKUVUV@LVVUnUb@°UX@UVzVxnlVkVnlVnaW@wnIn`@_la@ykÆVULxl@XLlmUUVakU@¥ÆwblUUaôVU@ÅXyVImkUaġ¥ÅUWXKmU@La@UmUUUalan@VUnK@wmmL@VlXLVVl@VI@WX_m@a¯mKUkwW¥UK@_UWWLUVkUWL@WUIkVU@JwkLUUmJVI@WkXm@VmkKUIU@mmm_@VUV@kJċwUU@KUWkkW@IWW@km@klwkWVkkUV¯m@kWLU`mIkmkXm@@`@L@xUKWkU@VL@JUU@mbUKVa¯WVnL@`lXUVkU@xW@UbUWVU@UJ@lnU@mnÈmVa@bULwUb@@VkxmUUUVK@IUmk@akm@wmIkK@bVWXkm@wULUmm@UVW@UbmbkKVnU@WlxVU@UXmWUXmlnbUl¯Lmn"],
				"encodeOffsets": [
					[113378, 28981]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4301",
				"name": "长沙市",
				"cp": [113.0823, 28.2568],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lVUllXkx@lln@XX@JlXXlV@LVVČxlI@VU@Un`nnV@VJlLUnn@lW@XUJnIVVlKx@IVlUVJ@XXKlVVUXKVX@`VLX¦lxVnL°an@bkmVaV@XL@UKlU@llLXUÞJWkUknaÆxnknK@w@l@xllUXUJVVUbn@blV@bnLnKVaLVbVVUX@W¥XKVLVVklUVyUVÈÅlaUK°wnnÜbnVVLaVV@n@VmnVlIlJna@Valkn@na@amwm@UXwK@aUUVUUaVawWK@kU@UaW@kKUU@kW¯XWan@kmmÅ@@I@U@KmLkaVUKkLWVUk@UVmU@am@kkk¥UVUKmaUb@UbI@aKkkWm@W¯K¯b@VmaULVxUXlVk@UxVJVbUb@xUL@ULWWLĕmxVVL@VbKUwaÅ²WwX@@WUWLU@VbkV@aU@@VUnmJ@VUn@VLUK@UmUIk@UÇmU@@UW@J@LbUmVI@aUmW@@bkXUx@lmLUbm@UbkJ@V@XmlUbkKm@ma@kUaVU@aUK@mImJUIkVUVUakbWwka@UWKkLUamKUXm`Å_UULmaU@@lUV@X"],
				"encodeOffsets": [
					[114582, 28694]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4302",
				"name": "株洲市",
				"cp": [113.5327, 27.0319],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XUnwĖKXXVK@VK@wVaUaUIVwl@kUVWUwVKnb@U°a°LX@XnllL@bJVa@VanbVLUV@al@@UV¯ÅÇ@Ummkw@¯yVwnUVVVUkmWVnKVUa@WXkVKn@lUVUVVVXIlV°VnI@VlKnV@mwVm@LXKWkU¥wWw@k@mX@KX¯V@VUVa@VnKWkV@VUkm@aWa@wkUWwkmV£VÿXUVL@mVIXaò@nW@aU@@am@aUUUmXmWUk@nUW@_maVmwUkamaUL@awW@akI@UxUm@kmKUklU@bzVm¯xUVU@XVxm`kÈlxXVW@¦kVUn@xxKUwÅKVXUJWnXmVUxWL¦XmmKbmUUwW@UV@k@VLnlbLm`@¦VVkX@`WIUxVnlbWVbXIVlI@l¦Ç@UKmbkW@UbUVUl@n@VmLXb@JWbUnkbVxUJUxWXXlWL@V@V@XXJWxzUVVVVKnXW`@bkIUlnLVJUbUIWVXlWV@XklVbnn@xl"],
				"encodeOffsets": [
					[115774, 28587]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4308",
				"name": "张家界市",
				"cp": [110.5115, 29.328],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@InWVw°w@@blUKlUlVU@VUUUlW@aöUlUlLÞ@@aVKXwlK@UX@@UlwkVkUm@m@ÅV@akwVaUkUUlUL¯w@UUm@UkKlw±UULVn@l_XyWwÅ@VUUmJUXU@@mmU@kxW@UaUIWbU@@mU@UxnUbmKkWJkUVal@aUkUxlW_@WUIU@bkKWUJVnUbbWblU@nl@XnVmV@nmWV@LXl@XJXVmzkJUXmKULm°Vb@xnVmnUk@VnnlUb@nm¼m@ÛÇVl@Xmnm²mL@xK@LUl@nULÆx@V@VXVWbXXl@nLlm@bVKXWL°bnU@VaVU@mVwJnwVK°zn@VVba@Ċ¼"],
				"encodeOffsets": [
					[113288, 30471]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4313",
				"name": "娄底市",
				"cp": [111.6431, 27.7185],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lLnJ@xln@bnlV@JLVUVnVlw@U@VaxVK@abnUmÇnV@km@I@VUVVXVaX@@wlVVUkW@_mKXU°UbVLnaV@V@IUKV@XlVL@w@K@_n@lWlnnJV_XK@l°nU@WVU@kV@nbVKVl@nLlLXU@lmkw@nW@UKVa¯IVn@@aVUUKl@nXVKVn²aXblKnLlmVI@KUU@akLUaVaUXm@a@wVUVKnLnWlXln@@U@anUVm@UInm@IUK@UmKVmU_kVUwm@@VmLK@VLaUaVUUUmK¥ULkVWaXwWa@UXImWUaULUUWKk@WnXbWVWnk@UV@bU@@bJ@bV@XkmbUU`VbkaWz@klU@b@VwUL@bV@U`ULVL@VUK@Xm@XWWIUbUxm@@lkkÇwVÛÇW@¯ÅUJ@xIx@@VULmKUnUxmKULUUm@@ULUJkIWJ@b@LJUWkJWnUV@nnÜ_nJxU@VbnUxlkb@l@"],
				"encodeOffsets": [
					[113682, 28699]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4303",
				"name": "湘潭市",
				"cp": [112.5439, 27.7075],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Æ`n_VWnLVblKXL@VlbXxlaVbUVlUVJnInJ@VL@bUVVb@lnbn@lLVank@W@UlIVan@VanK@kVwlW@aX@Vn@bUJVna@KIX@@VV@nVÈl@VJn@VVLK@UVm@UnIVm@UV@@blUUaV@XKV@XW@XxÆ±bVxLUa@UKWk@wmmUalk@WXUWkXUVJVaUImKVklJ@aX_mWULUUVUyXwWI@W@U@UXKWkXWVwU@±_U»ÝKUaLVbkJkWmXk@UVVmIUVJ@UU@UamLmwUVU@mnJ@VUnmV@b@Vm@kkWmXmKULUV@x@bWnVUbVblK@bVV@LUJknmKkLWa±bUmULmWk@VLUV@bm@U°JUbVLX@@mlxkn@WVKkmK@k"],
				"encodeOffsets": [
					[114683, 28576]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4418",
				"name": "清远市",
				"cp": [112.9175, 24.3292],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lÇ¯kÿaV¯VaÈU¥ÆÇIlxmnbUxlUôl°kWl@ôVwUanUl@xVkaX¥kU»a¯±@kka@UwmUkwJk±k@L@ÝWUwVÝxÇU¯ÇX@mÅ@@yĉ£VmUwȗ»ÇUnlUnWU¯`Uk@@x@bÇxX¼VV¯LĀkÝL¯@VĀ¯lnĊW¦kVÇôkUÇUK@ţU@aóÜUU»@¦k@VxKVbn@Æl@xbWnlUlxÈlVÈ°Æ@¼@xWxŎVK°¥nÆkŎ@ÈÑmK@¥k@ô@nôV"],
				"encodeOffsets": [
					[115707, 25527]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4402",
				"name": "韶关市",
				"cp": [113.7964, 24.7028],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WXk±Ñ@UwmUwĉwlmn@Æwn£mkI¥ÇÅ@¥aón£nWWw£V`Þ@nVml@xô¼IV¥kUmkamUkVWwÛ»mó£UVÅKmn@x@kbmm¯aXkaVĉaUbÝ²lIlxnVVx@lb@l²°bV¼lW¦bUlwk@mVVbUxó@kX¯lókVkwVmankwJÅÈ¦ÇVUbU°blĀ°kÈ@x¦ÆÜ°@°¦óaVUôlUlbXl@nÜVnKlnIVÞ°W°U@bnm@¥IV²Ul°VnalzXyl_Vyƒ¦lLlx@ÞbKmknVWanwÑVwČº@n_ÞVaVÜIl@KÈVJ@a£È@@kmaV¯W@_a¯KmbkÇkLmw@Å¥"],
				"encodeOffsets": [
					[117147, 25549]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4408",
				"name": "湛江市",
				"cp": [110.3577, 20.9894],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@kX@aUUċlkJk@wVJXUWk°W@nKnwlUl²blU@lIl@XbWxnm@lW@wwUJX¯VU°`ŎóˋkÝÝkÅ@ÇmğÈřmwaĵVxUÛ»°ĠǷnýmóX¥ɅĵҏÇ@°²ĊUĖ±ĮU¤Ç°Ā¯ɐnżUĊĊĬV@è@ÔÒU¼l¤nĠbêVĠ°ÈyzVaVnUÆLabVlwÆ@"],
				"encodeOffsets": [
					[113040, 22416]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4414",
				"name": "梅州市",
				"cp": [116.1255, 24.1534],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nÔlW¼x¦@lVllLkèa@z¤Ė¼UxlnUKUbÝlU¼lb@VxVklJÈwV¯@ĠlÛĖnbkÆźÞUÈôklmL¥LWnKUkVa°Vx@IVV@x°bUkaa@mV@@ywLÑUwVUVUbÞVVann@XwÇÿ¯²aVamkXaÆ»@»nw@¥UXakbWa¯KUw@¥m@kwmLU»UUJ@kmU@UUWU@yanwmçÛl¯¯UmKUmwVkmÝXbW@XWÝbk¯@±w@»U@W¯Å@Ç¥UU@IUakJĀê°þXkam@_J°m@X"],
				"encodeOffsets": [
					[118125, 24419]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4416",
				"name": "河源市",
				"cp": [114.917, 23.9722],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°VlmX¹laĢÒlm@V£@¦Ģklynn¼lW°zW°VbÈV@lÆbnnJkXVÆaÅW@UUw@kaV»ÞkVaVLkmVw»ĕ£@yblçkKkU@k¥wX»kmÓ@Wn¯I`@nlbWý¯éÿlI@XUmWUw@@UJUÇmKUV@xţk¯¯LWnUxK@Å±»Vwa¯@¤WX@Û¦@¤ÇIÈ¼WxX@WxwUnVbÅèmVa±²UWl@klÈ¤nôÜ¼XxlUnVlbVnlU¦Jó»@wnkmUÝ@U_¤XxmXm¤ôb@¦ÈÆ¦lJn"],
				"encodeOffsets": [
					[117057, 25167]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4412",
				"name": "肇庆市",
				"cp": [112.1265, 23.5822],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l@¥@V¼VôÛ@bV@ŤVLÈlVÈólUX¥mĉ°kÿU°@ÞKlÿ°KUUW»Èw@aw@@nm@w£kÓVUVnKk¥£Vam@nkKkbÆǫmakmLU¥UmÛwmVUmUJÇaUxÇIn`mb@Þ¯b@nJ@nlUVlVULW¯Û`Ç_¯`m¯IbĉWċzx±Jx¯ÆU_k@J@UmbXôlLn¦@¼ĊxlUXxUbLĠUnVĊwlUb@lWXm²@ÞWxXUnb"],
				"encodeOffsets": [
					[114627, 24818]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4413",
				"name": "惠州市",
				"cp": [114.6204, 23.1647],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lbW°bnnla@@wnmÆLVUkÇl@XkV²±bnUÆçUaVmxXw@WXwÇ»ÈJ@£Ü¥@XW@£°bUx²¼@ÆLVwmX°K°Ťl@wVUnLÈVVIky±wkKU¯ÅkXġÑÛlwUwlm@mnKWaÅm¯óÇmğb¯alĉUwķbmb@lÞÒVnmĀŹ@VbVUnmakLm`@xĉkklVÔVJVnlVUnmJmaLUblzmkLaō@@zV¦UV²kJnÜU@VXUL@lJL@bÝ¤UnVb@xVnlK²Vx°VxlIlkVl²k¤@n"],
				"encodeOffsets": [
					[116776, 24492]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4409",
				"name": "茂名市",
				"cp": [111.0059, 22.0221],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LnÇlkKnkÆLUmÈxlUJló°n@ana@@X_@mÝóóU@aaU¯mL¯kV¯ÇVwkw@V±Ŏ£@@alw±Vk@mÅm¯ÿÅƧIÇ`ōô¯_UVW°IVx@xkX@mnwXWa@kkJ@kVa±kkVmxmL@¯XXlWVUI@xlIklVČV@blW@@nUxVblVxkôlxnynIÆ»Æ°aXwlKbVnXbL¤kLèVV¼²IlĠVXynz°KVx°@VlLlblK"],
				"encodeOffsets": [
					[113761, 23237]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4407",
				"name": "江门市",
				"cp": [112.6318, 22.1484],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lUXx°JWnnÆXVWX@ºVLV¯nUVnbôxaXmWXIUb°xlKl¯KxXÞ°XÈ¥Ü@ĉÞUç»nóVmax¯UÅU¥Ý¯@ç@ș@çĉÅUmUç±ĉKÝxÝ_ÅJk¯»ó¯nmèkǀWx¼mnUÜġ°@¦@xLkÇaVnUxVVlnIlbnÆÆKX¦"],
				"encodeOffsets": [
					[114852, 22928]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4417",
				"name": "阳江市",
				"cp": [111.8298, 22.0715],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°nKV°b@bôVÞô@nVlÒôÆUnlnn@lmkmVkaÈkÆÆk¥ÅÞ»ÆKXkW¥ÅLmÅkamJUkUVwUmÈblKw@@¥Ģ¯VÛnm»Xwlƿ@kbWaʵ@óLl¯ƽ@Ln°Æ@nUl²kxb@@ō¤U²@lxUxÈU°l"],
				"encodeOffsets": [
					[114053, 22782]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4453",
				"name": "云浮市",
				"cp": [111.7859, 22.8516],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@VIl@`V°Åw²IwČyĊXa°Jn°_È`Ü_°XKVkUUVk@mmI@°a@Ýnam_ÈJVwlĉX@lUómaUmVU°UK¹@WXUWmÅXm¯IWwkVWlÅLÝ¼Æl¦ÅÅÇlbUllnknm@kmVmóÅkÑUW`@@bmb@¯mkôIkVÇwnVÅKmlLklmÈKVĊK°²`n¤nUbWlxVxLUx@°nXm`VklVxmnnx"],
				"encodeOffsets": [
					[114053, 23873]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4401",
				"name": "广州市",
				"cp": [113.5107, 23.2196],
				"childNum": 13
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ș¼VxUnĊ¤@z@Æ@nÈW°ÈVwUÞVxÞX@Kl@ÞVaĊbU@ml£k±lUkkJw¯UUw±kLUm@waUVmÞ£@aKkI@KVUW@ÛVmlIU±VU¥@yğzƧÇƽĠřÅnī±m@²¯l°@nÝÆóUll@XnÝVU¦mVV°V¼Jnb@°mbn@²¯¯wVw@@nmxX¤¯L@VLUm@@l"],
				"encodeOffsets": [
					[115673, 24019]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4415",
				"name": "汕尾市",
				"cp": [115.5762, 23.0438],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@@VxnXWV@bVJV@ÞÅU¥Ċx£UWUwÅUU¥WVUkĊÇnkV`°LVwnU@lbĊ¯Vnal@@çkUÝ¥ġaó¯ÅaÅLŻÆUýmy¯ó@ĉÆóȯwÆXbmL@nknVxkxÜĢÒWÆlV°Ll²xlz"],
				"encodeOffsets": [
					[118193, 23806]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4452",
				"name": "揭阳市",
				"cp": [116.1255, 23.313],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VÈ¦Æ@X°V@@¼x²°@lÞaWXX@aÞWlnUxVnnL°V@kmĢl@ak@mlk°aX±nwm±²¯JV²@wW_maV»U@m¯ĉUÑJlabVnlĸLlƅÛÇ±wÝ@ĉxó@è@kmbUĉ°ka@mVxU¯KU_mlĉÈVlXUV¦ÆVxVVX¤ĉwV¦ÝÆ"],
				"encodeOffsets": [
					[118384, 24036]
				]
			}
		}, {
			"type": "Feature",
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@kNGThNT_GO", "@@QNdZðxa]DMãs", "@@e\\NPj@QW\\H[[", "@@SFHl@NKEQN@S", "@@QJoDtPHVlAGa]O", "@@]VQdJJhENLNO]y", "@@I|THpUOaiK", "@@JFBOXDYSIZ", "@@vrFYXJWUaABQ[H", "@@F^N@XLqsFJ", "@@Oun@\\aC]BqesCq]W{eÝq[³wJmd°}xQ§¬I¾XÆNdTLJKpl¾PÂyrBdfBPgZFT`jO^Nr[¥éit{\\C¶vI\\pJRTa|upb]fH^OxTnR´_^P`GHmÁsY@UXas[@{RUIy±i@Q", "@@NdZMCU}oZp", "@@YHid`LXGT]GQ", "@@MpHf`SXZV]\\V\\AcosLgm", "@@YZJtPBAWZWW_"],
				"encodeOffsets": [
					[116790, 22617],
					[116973, 22545],
					[116444, 22536],
					[116931, 22515],
					[116894, 22503],
					[116496, 22490],
					[116453, 22449],
					[116557, 22530],
					[116772, 22412],
					[116747, 22378],
					[116265, 22735],
					[115854, 22446],
					[116552, 22934],
					[115859, 22356],
					[116561, 22649]
				]
			},
			"properties": {
				"id": "4404",
				"name": "珠海市",
				"cp": [113.3067968, 22.1401757],
				"childNum": 1
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4406",
				"name": "佛山市",
				"cp": [112.8955, 23.1097],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÈbInVVnUÜxnVV¦nKlnbÅǬlalL@mnUb¤l¦LUmUVlÔ¤@xmnVl°_XVVmkVmÈ@kn@VUK@°KW£nw@m@Ux°x°@±mna@¯amIU»U¯nUV¥ÞUWmk@Vk¯UknÑWÝĊÛ@Ç¦W¯WÝwLk°kL¯wVaWJXWnbwkVW@kĊ"],
				"encodeOffsets": [
					[115088, 23316]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4451",
				"name": "潮州市",
				"cp": [116.7847, 23.8293],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°Üknèmxbz@VVX@VnV@lIVVV¼nKlxn@@¦Vx°LXblaWbV°£¯W@nW@aUñVwW»@¥ŤÅUÝǓÝóV@ńÇkUVmIUwÅVWÇX¹@W¯bkl@nlb@kġn@l"],
				"encodeOffsets": [
					[119161, 24306]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4405",
				"name": "汕头市",
				"cp": [117.1692, 23.3405],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@U±°I±n²mx²@WºXÈÆUVxJUnlVÈ@ŃôUǔÞVçn»VyĢÛVm@»kaÝUÇ¼óÛÈķKċ¥X¥Wwğk¯@wķKkUmabkIVÒ°Ċ@nVU¼bn`Xx"],
				"encodeOffsets": [
					[119251, 24059]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4403",
				"name": "深圳市",
				"cp": [114.5435, 22.5439],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞL@xbVVK°X°Kô¥Vw@anUèlkĊl@wn_lKnbVmUaUź@nÿUmÝÑ¯Ubk@ÆkxŻ@aÇXwJ¯LķÝUĕóĸóêWº@b²nmĬÆ"],
				"encodeOffsets": [
					[116404, 23265]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4419",
				"name": "东莞市",
				"cp": [113.8953, 22.901],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ŏ@blKnykVaKnbnIVmUkUmUIUÓçmV@bUxó¦¯LW¯LUUa@wÝKğŚƾƨÈĠy"],
				"encodeOffsets": [
					[116573, 23670]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4420",
				"name": "中山市",
				"cp": [113.4229, 22.478],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XÒlmV°ôÞÅ@m¯°k±@@aX¹¯VÝÇIUmV¯kk±Û£mw@ÅmèÅ¼mô¼èV"],
				"encodeOffsets": [
					[115887, 23209]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4510",
				"name": "百色市",
				"cp": [106.6003, 23.9227],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lklWXL@VIl@XnJn@VUUalk@mK@kny@UlU@a°UU@VmaU@Ua@UWw@n@KmLm@alkmnIm@an@VIUamWÅImwU@@a@KX@JVLUVmUaVkUa@m@@Ulmkk°UaVUlKXbVwVIkaVmUk@KVk@aaW¯m@w¥laX@KmakVmnUl@nxVKInU@yVaVIV@na°KlxX@@_lmXUV`VIVV@n@lbn@@WUkValK@²yl@VUV@@K°L@KU@@UVaXIVVV@naVkVa@K@UUK@UUaLWaw@m@K@UVV@mVUUVKnLmVLKbVK@UUIkmI@mUIVK@IUK@VkL@WU@mU@WmUk@I@VJk@WwX_@amK@UUWkIK@LVb@mVmakL@J@bU@Ux@xbmI@`Iwm@UbmKUaUWa¯UkJWV@XJUU¯LUmV@ma@kkamKwLUUmWVkkm@aVUUkVKnVVUmXK@UW@km@Ukkm@@W@UkUy@I@aUUmb¤U@kUmL@bmJU@Ua@wkLWWkL@U@VaU@LUakKWbkUWVkKkLVLUV@JVbz@V@VmUU@kVmK¯@VU_VWakVmIUKUaU@@bml@XU@@V@LmKUVmVUKKbkaUXKUL@x@V@l@mxU¦V@lL@V@Ln@@VV@nlKUaV@nLUbmJnL@VWLkbmV@@LWXLlxVVIVV@x@V²blUVmLVUK@kWWXUlV@Xl`LXl@@Vn@VnbV@lVUVUÈVb@@`UXU`l@@XUVm@k@xmVknUJVXUbmKULmbx@VlJ@LVbkKUbVLÇUUVUVmU@VaUkUKVUwmLkUUVVlbkaXmwKUVVU@@V±Uk@VWUUm»XamUbKk`U@UnWW_kKmbUVUVmnUV@nJVUlUbU@UV@n@JmI@VmbnVUXlx¯kKmnVV@L@VbkVUmm@Ub¯LmlUL@VWLkmkLmmn£WmnKU_mWbnbmx@U¦UJU@Xmlk¦@mnUUm@@Jn@lVÔVJnIVWI@aÆK@I@aVKIlÞnnl@nl`nbÆX²l@xV@llbVn²VVl@nnV@IlW@Un@@kVa°KnÈmVaVXUlaVÈUVlwôUlynIVaan@lVXbI@n¥la@K_n@bÆx@XnJVnKVz@`VXVU`@b¦UV@VIlxUnVKXÈbVllbVbnVn@"],
				"encodeOffsets": [
					[109126, 25684]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4512",
				"name": "河池市",
				"cp": [107.8638, 24.5819],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lLVlbVV@nXVlI@JVXmnW°bIVV@ln@nalVUbnW@kVkÒlbVKn²°bUlV²@X@`nbaUI@°wlU@aXJVI@aVK@wUamIXm@XUV@@bV@VmImnUUwVaVKXUnVK@akVwV@nL@UV`n@@XlnIUJl@X¦V@aUIVm@anV@UwnL@VlbVL@KVVXUWwUUVUka@UVJnUlbnalbVVn@°LV`Þ@XVxV@@bVlUVVbXnWlXnml@XXWVXJmbUI@VllUVkn@@VWV@Vnb@VXUJVnn`lLVka»lVLnw@WV@lInw@WnU@U@mknUVóKwUmUXUU@@wVJVIl@XKVVVbVIJ@Un@lVLnmb@U@Ul@nU°VUVJnnVJV@@mVU@@wkUVwkKWkyUUkU@alkÈ@lJ@xIl@UUWVkUw@Kn@@kmaVUlUULÇUUKl@UUmL@aXU@mlUUwmKkUUVKVUaKUnK@U@Vl@XUWUKlwX@b@K@XkV@UwWJka@aUwmV@U@@U@wUm@»kLWVkIWXnmV@VkbmKLUbkVa@aa@@aVU@aVak£@±UkVU¯VUUJVUI@kxmUmWUbLw@K@aU@@aVU@Kma@aka@_VWkk@UWVUKULWKULU@KUnwVaUKxU@UmaLm@kVmVa@UkmI@@KmIkxU@@KU@mmakI@VLkmWkkJ_U@V@L@nxXbKVb@VVL@V@LUbUlmbU@UUWJUb@VV@@L¯K@LU@UVk@±z@kLUbVl@Xm@akm@U@UUJU_VWkn@`W@kw¯LmbU@UJUb@zmVJULmwk@mVUnlnb@LWkb¦@x°nXb@bUl@LVlUnlbUJUxWakLUVVb¯llkn@V@@nVbUlVbUnVUK@IW@L@bV@nxÆJnXVbUJm@@bnmJnkl@bnnK@Lm@Xx@VVbV@nb@UVV¯@bkV@Vmz@lnLl@kVbUVm@mI@WkJ@UWKkXkl"],
				"encodeOffsets": [
					[109126, 25684]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4503",
				"name": "桂林市",
				"cp": [110.5554, 25.318],
				"childNum": 13
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nU@JX@`XLm¦Vb`lVXXW@VblČnVlanLnmVLK@_Va¥@kUa@VmVbaV@XVVzlVVK@knKVmX£VKLlbn@b@llL@xĊôXaV@°È@¤bnV@@Wl_VU@WnVamwwVbn@KVLX@VmVUxlV@nVV_nK@mI@Wn@@IUĊ@@wVWX@@I°VVm@wmU@m@IUVklkUmmkÅV@@aV@@Wn_UKla@kaVlVanb@k@@KlVn@@aV@nIWWUUaVU@kKmwU@UImKk@UU@w@W@k@UkW@mk_W@Ua@a@¯mV£@mUUam@kWakVama@UUm@nw@alaUmnUlVlIVLVyk£Vm@k@UUJkK@kmKUwKkWK@UXImyVwnI@mkUlkUKkUVmw@kkJWUÈm@_k@@aaW@UUJUwU@@IWKkmUUV@nVl@bVb@bUUXakw@WUkbkKbm@xUlkLm@@wmKUX@UaVWXVmU@@UUUxkmWXkKkUWaUaUbL@`UL@LV`UXmK@VmakLVbkLxUJUIVbUVVb¯KV@Xnl@lVXbmÒnV@L@VWKkVUIWJkIUamUUbm@UkU@JUbW@XWxUam@kbVVUnUJmUUV@bU@UUV@Vk@bmULV¦U@VU`VLUL@xVbn@UJ@nWJXXVVV@bkxVbUxL@x¦@UlXUVVlULV@@nUb@xlnJVnlVknUlVUbmU@bVx"],
				"encodeOffsets": [
					[112399, 26500]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4501",
				"name": "南宁市",
				"cp": [108.479, 23.1152],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lKnbnU@Ua@KLlJVX@VnL@bW`Xxl@I@UJl@nV@XV@nXV@lK@UVL@JULVJ@nnJlVJ@VULaLUKnmKULVVU@nU`lIXllnK@UlJnb@nV@LV@lwnJ@L@nJl@VUbUn@lnKnbVV@wVLUbxVm@LVVKXLVKVLXU@VllUX@`lb@bnbL@UV@bV@@b@LxKVanXVUUmVUUUaVUkyUUaImK@mUUVUkKU_@W@UVVVIUWUVaVU@UUKn@k@al@ll@bnL@bVUVX@V@@bKnblmn@V_@aUalL@a@akK@kVKUKlwUUnV¥VmU_VWVIVaX@VaalÅK@LVJnalL@LnKwlVUwmX@VXlLUVnblaUmVUVwXU@Wm¯Va@ÞKnw@wmk»UVW²a@_mW@U@IyLVUUKW@@LX@VUV@@yVU@UV@nwUUmJka@IU@mVkaW@UwUX@`@kLWUk@mkUUm@kUUWkUkWxk@@VK@nV@UVaUUJmIkV@UamLUbkVmamLka@kmL¯WI@wJmwx@akU@aUKmbkaW_nW@_U@Wm@a@wkwUKmk@bkbw@mKUkkU@J@bW@kVWz@bVUaVUx@ULkJWbXVVX`@mJUVU@@Lk@WbU@UJlnXlmVx@Ln@b@KLXWJUUW@kaUVUbmV@nnV@n@lVLVmLXmXkV±@kxÅLUbJWIÅJ@ImXalkUamKkkL±aVwKUU@mÞnbWJXm@lbmKULWUUVkabnn@Vl@VVV@VbVbnLWLXJWxXLV@@VV"],
				"encodeOffsets": [
					[109958, 23806]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4502",
				"name": "柳州市",
				"cp": [109.3799, 24.9774],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@wUaV@nVaUVklmkUUmmIk@waVm@U@VKUkVUkWV@¥@wKVwUalw@aUUUWWXI@mVIm@Ua@wVKUKV_UV@U¥VKnal@U@VU@VV@aVUnVVIVmUUlan@VbXwWX@Va@IlVVn@VanVVblJXIVJlUXL@U@KmUnÑWakU@mkJUI@mk@wUmmUV@JXaWIXWmaUIJkk@WnJ@aUak@kkJ@kUKU_@myUóWUkm¥kUmL@KUKm@k_UmVa@k@@UmU@mm_JWIUVUWLUlbVUJÇVUIVwKUVk@mU@n@lUL@Km@@l@LVzJmUU¤m@UbV²U`U@@¼Vn@x@V@@VnUVx@blbXIVxU@Wl@@LaW@kxLXVWVk@@U@VmLVLbUVULVVlnLVxkV@nWV@bnKVVk@VLVÈVKVVkUnb@lm@@LVxUlVX@VkJ@wkIÇ@kl@blVVVzXllLUxlV@x@UV@nU@UImmUIUV¯mVk@@V@VamnUKkm@@VIUJUaUUWLk@UJUI@xV@VVWVnxLUômVV@VkVVVUnV@UVkL@VVV@bVxla@bkXVJVn`nU@bb@bVL@VnJ@l@VaU@@_lW@UUU@Unlll@XLl@@UX@°bVWVanLlknVV@VVX@VVnUVLmbXJ@nllXX@`VXlmaXVWk@WkwJ@VL@JbnU@bn@@bVKUnVJVIVVVL²a@bV@@Vl@nUVakalmUL@VUL@Va@mXl@nK@UlKL@Vl@@nkllb@Vnn@nVV°lVInwlKXxlU°n@@I@UnVlakUJWkUK@anUWK@_ÞJ@U"],
				"encodeOffsets": [
					[112399, 26500]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4514",
				"name": "崇左市",
				"cp": [107.3364, 22.4725],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@JVzl@V@Xn@ll@VlnX@@VWLnUVmUULVlUV@blnUlnXVVKxnLlb@lnbU@Vn°KVVI@WXUlI°VXbVVbnLVan@xJ@_nJa@wVwV@@a@IU@UU@WKXwWIXKmKUaa@UUUUk@@UmmalbVUXVVKnLa@knWXImanÝV@VLUx²blKlnLVbklWbn@JÆIXJIVaÆKlw²@lUnWWnKUUK@k@mmU@mnUVaVUb@lVXVXIWK@Lam@@KUwnWkkmVIV@Xal@@KV@VUnI@_UWWUkam@kkm@ka@mk@wkJWIUU@WXkWXkWWLUU@UakLWXV±VIVWUU@anUWaUK@IU@Vak@@UUKWa@m@ak@@wUkla@mUaUklakwV¯¯@WWUkLkKmakLUnV`UxWX@Jkn@bmlakkk@b@l¯bmbJb@VXnbVV@bJUkkKWVU@mÛVUUW@UVUJWXkVkKmUL@WW@UVl@XXKWXJ@XVlmbUxnnm@UlVnV@XVm¦VJb@mLkKÇbXblVkn@l@bWnX`V@@IVV@VV°n@@_naÆVVbUVVbUJnzlVUlXkV@Vlx@XVnxbKUK@b¯VVUVL"],
				"encodeOffsets": [
					[109227, 23440]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4513",
				"name": "来宾市",
				"cp": [109.7095, 23.8403],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nVlw@VJUIVVUV°lU²V@l¤Ub@bUV@b@b@bUblVaKnLla@UnUWmXlJXUlKV@V_U±Van@V£nVIyU@K@kn@@LVK@k@mnVl@VULUxVJÈUVIUaVkXKVVUXJIn`@nnV@Vl@@UbVnl`n@VL@LnKlVn¦VlôXVnz@V`VL@llIll@Vbb@mIXl@lIVJnbWXXJWb@IUnVVn@xl@nVJI@WU°LUaVUUaVJVIwlKUalKnb@UnLVWU_@KVK@_KVa@VKU¯VLVKn@laaUkU@maVUJ@k@Um@XmbkyVaUIUU@KV@laVn@KXKWUkUk@aWUUVw@aXKmVaUUkmIlUU@wUaxUmmU¯U@WLUmVIUym@UVmUa@wmw@çm@aWLUJUIUamKmL@ax¯¥kU¥U@±kUVmKU_mJUbkKmLÅÇ_@WWUXUmaVUkKUWW@nVxkUxmL@KkKmbUI@KLkÆbUbW@UbUJUXV`UnU¦mVVkxVLUL@llL@b@bkKVb@bU`m@knmaL@a@@UWVUU@amK@akkk@@b@lmVL@VUVUbVVXUJUU@V@XV`lLUVVV@nnLJVbVlzUVVbVVnUVVU"],
				"encodeOffsets": [
					[111083, 24599]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4509",
				"name": "玉林市",
				"cp": [110.2148, 22.3792],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VJUXVVXlWX@VxVnX@@`ULWUXÅbWK@mULUUmJ@n¯b@l@VULVxxXU`VXXJVIV@nm`@nUVXn@lWVn@b@Jn@nU@Lm`@Xn@WJ¦U@@VnLlV@@Xl`nIlJnkVLw@KVK@UaVL@bVKXlUUKVK@IVLa@U@WLUlVL@bU@@blb@VlbUxVbXUVJ@xVLUlV@VUbVLnKlXJ@Lb@an@VanL@`VLKV_UWl@U_a@WVInlVUUUVm@I@W@wVakIWm@U@XwlaVbnI@m»Va@aXaVLU»@aVa@kKkL@KmU@WzUK@wU@VWUUVUUKUa@mKmbUK@_nWVaUkVaUaVUVLXKVVUVmVI@UkKkLm`UkW@UwWW_UaU@WakXmK@xUXJkUUWUk@WlmJ@km@@aUKzmyVka@kkWVUU¯lmU@@wkkmV@Vk@mÅIUka@Ub@m@UUU`mUbWaWmbXXKWIXUWm@Å@y@UkIUJUUWLUWL@UkVUxW@kaWbKWnXxW¦nm`XLVlUbVbUxI@JmLUKUb@VW@@bkL@b@VlU@xk@L@lxXxWXX°V@VVVbUVV@UVVbULVnVJUb²baUb@VVVVInlV@VnXaVUlIVUb"],
				"encodeOffsets": [
					[112478, 22872]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4504",
				"name": "梧州市",
				"cp": [110.9949, 23.5052],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VbXblVlLXWlnwVV@VV@UnWUXVb@VWXa@kVKUaVaVkUlyX@VaVmUwUaVU@UÈymI@aU°@nWV@VaVaw@IV@VmnLVK@kmmna@VbVI@aV@XbW`ULUVVx@VbUV@bl@VLXblJn¦lL°°@n@K@UlLnKa°LWbnJ¦UÒVUllLlVnKnbWnnV`w@@Xa±nl@XKV_WVkVa@kVyUa@wU£UW@UIVW@@awWaX_WKkVmUULmak@UJUI@±m»k@m»VyUImnmmwnkUmVaVIUn_mW@»Vk@VwkmmUXa@IaVmm@Wm_U@mIUWóLmUk@laXmmkUK@UmKULUUmWUL@VakU@Ub@b¼VUKWb@bUbn¼@mJUakbWx@@VXnlJUb@x@X@JUnVVUVmkUJ@XbV`k@VXU`LUK@_mKUbm@@b@U`@nlV@bUnbVbn@@`VbUbVV¯bm@@mJXb@bVnUllVXUlbUl@LU¦VVmkLVb@bl@V@XlK@V@nUJUz°mwmLmlXbWVU@UUUlIU@VVmV@@¦bXbWxXWlXVWL@LUmkbU@@LVVVJUblzna@WVn@@lIUVnbV@Vlbkbm@ULUKV°UL@"],
				"encodeOffsets": [
					[112973, 24863]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4511",
				"name": "贺州市",
				"cp": [111.3135, 24.4006],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nL@xn@lKVkwn@alLlaXV@lxbVWV@aUa@aUk@mVUnVlXL@JV@VxVIVX@b@bl@@`ÇnXVlI@lxUnlVVLkllV@nmJUxnzWJ@VXLlLVxnL@lLlVI@V@lUnl¤UzK@Vl@LlLnb@VnVVU@kaKnxn@VkVJ@ÅUlakmWIUaVanm@_UK@UVWUa@klXamU@VmVIXW@lUVknVlKVLXVXW@b@VlnnVL@KXLKn@lb@UnW°@VaXWVb°aVa@I¯aUkUaVKVwaXk@aa@wkm@alanUVw@alK@Umkw@UaUmU@WXUaUK@UW@UaVWI@¥Xa@w@WWVXwU@mKUXUWVU@a¯kl@akU@UULmK¯VUVW@U_m`U@@xVbUz@lUbUlXU`WLk@m²Wb@@xU_mXmmamLkUkKVkUVÑ¥mIXa¯KbmLkK@V@Lm¯@¯kKm¥kIWaUKk@@aVUUa@UwVUKVX_WaU@@bUJUa@mbnn@lULmKUnU@@JxUbUbU@mX¯@V@bnJÇz@VUVVbVxUnUbW@kzVUlUbVbUL@lWb"],
				"encodeOffsets": [
					[113220, 24947]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4507",
				"name": "钦州市",
				"cp": [109.0283, 22.0935],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@IlVVlnL@xlaal@nVLlx@x@bXnV@@`mXX`lbnaVL@blV@bwnxI@xXJ°nKl@lbnKnblUVanKVb@lUnJVIVUb@VU@mL@Ul@XwllVVXV@lVnlVnl@XVlK@@_VWVxX@lbUnV@@JlbnIlmnVV@UwVK@U@k°a@mnIVVVK@nXLÆaVWXVK@_W@Umw@UXWWkUUVWUIVaUkJUVWbUmU@mkUJUU@UVab±aVaUIUmVKUaVUU@VUUaUUU@W¯XWWww@k@Kl@wkV@U@alK@aX@@UmIUWUI@mmkXU`U_WJUnUJmUk@@amLU@UVW@UkU@@VbUWVUk@@wmKkUWLUWX@JmIlUkkKWKkLWU@UKWa@bU@@a@_UKWUUUmJmw@nV_@ġğKóLmbU¼VÆ@xUX@Um@wklVnUnlkaUV@lV²WVklWXXbWlkVkIm`UULUU@UWx@XU@@lWLU@kbUbV`UXllUV@bmb@LnKVbULmnVVIV`X@"],
				"encodeOffsets": [
					[110881, 22742]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4508",
				"name": "贵港市",
				"cp": [109.9402, 23.3459],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n@VzUJnVK@XV°nVVnwVb@xVVknJlVVUbnWL@bUxVVXbl@lVXkWXwWaa@¥@nUUUV@JVkVVV@XUWanknKxn¯VyVI@m@UkL@W@Uk@aUalKnUUV¥@KVkkaWVkUVkUm@aWanI@n@°aUUVaUa@_m@UamaV@akU@mV_@a@KWIkmLUKaUVU@kVUK@wUIWVUaVwka@Uka@aV@@aUKVkK@X@VbKU@JULVLkVWUL@aUKb@VUL@LxUKmlkImJk_@WU@kmK@UV@¥XIm@@Wn_@KmVm@@I@aUmkXm@UWV@mn_@mUUJWIUWV_WwU@mUknVVmxU@@VUV@zU@UVW@K@X@VLUVKz@J@VnX@`±bUXV¼ln@xmxÝL@Ubn°@XWVUxUVVnkbWVXV@X`ÆÈKnlLVanIV`nLVUl²V@V¦l°¦wb@nKnLVbVJIVXK@bn@ènx@xVbUnV"],
				"encodeOffsets": [
					[112568, 24255]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4506",
				"name": "防城港市",
				"cp": [108.0505, 21.9287],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XV@X°°UlxkbVlVb@nkbVl@xl@@b@nXbVL@Vl@UbV@@JVLXbmV@bVVUXUJU²WXlKVb@VVXKlXWlXXWV@VXJlI@xl@nlbn@lln@lbXalIVK@VwUVbU@aXylUX@@aW@U_UJmUnVKUamL@Kna@aVUkkVWU_ValaV@XK@kV@@WwVXV@VKVVn_lJlUXkWaXWlkXU±kU@VUlbkVmUmlk¯ÝW@mb@¦VxULmkJUU@ma¯wmkX@VóJ±bUVUXÝWklWXXlxUabIğÇ@U@mVUKkkm@UJm@XnWV@x"],
				"encodeOffsets": [
					[110070, 22174]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4505",
				"name": "北海市",
				"cp": [109.314, 21.6211],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VaVLnK@IJVwUaVaUkWKn_mX¥WwXmLXalbU£UyVÅ@Ýwm@°lLÅUmkmwÛaƑLÝUUm@ȣÆV_Ó@£UUV¼U°W̄ÞVbXbôx@b@bmV@ÇUÝ@@ĢU`m@nxnIVVVXVL@`@bV@@aXbVL@XVlKXLlLVlknJ@IWVXXKlVnL@xl@UVVXa@UV@VlX@VUV@nK@bl@nVVIVmXIV`V_lWnn@VJVXnJ"],
				"encodeOffsets": [
					[112242, 22444]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469003",
				"name": "儋州市",
				"cp": [109.3291, 19.5653],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@à®¼jpnr``pRVHÊÌ¤Zt^JÖA[CâlTébQhRPOhMBcRSQiROE[FYdGNOEIH]MgEAMLLIAG_WMCSL@ED]PCLYC[ZIHgjSxJTMbHNEFCMEE_HSDFHSLECRNSFDRICHNADGPI\\RZGIJTIAHLDQOHG`GTNCOIC@eIGDWHIS[kiE[FMbECZS@KKS[FDWsCeRuU_DUQNOE[LKGUBM¨EDQP@HWHGDImXCog_~I_fGDG|QDUWKBC\\ore|}[KLsISBHVXHCN`lNdQLOnFJSXcUEJMCKSHOUMDIm_DI`kNDIGEYFM\\YPEEIPMSGLIKOVAU_EBGQ@CIk`WGGDUM_XcIOLCJphHT_NCISG_R@V]\\OjSGAQSAKF]@q^mGFKSW^cQUC[]T}SGD@^_aRUTO@OHAT"],
				"encodeOffsets": [
					[111506, 20018]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469005",
				"name": "文昌市",
				"cp": [110.8905, 19.7823],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hĲ¤Ī¯LQDaFßL[VQìwGF~Z^Ab[¹ZYöpFº lN®D´INQQk]U[GSU©S_­c}aoSiA£cÅ¡©EiQeU­qWoESKSSOmwćõWkàmJMAAMMCWHGoM]gA[FGZLZCTURFNBncVOXCdGB@TSbk\\gDOKMNKWQHIvXDJ\\VDTXPERHJMFNj@OwX@LOTGzL^GHN^@RPHPE^KTDhhtBjZL[Pg@MNGLEdHV[HbRb@JHEV_NKLBRTPZhERHJcH^HDRlZJOPGdDJPOpXTETaV[GOZXTARQTRLBLWDa^QAF`ENUPBP\\Eji`yºEvåà"],
				"encodeOffsets": [
					[113115, 20665]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469033",
				"name": "乐东黎族自治县",
				"cp": [109.0283, 18.6301],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ªVLP`@PEdNRAHOPEAKHEVL`GZBJfvdTAXNNTZJFPrHHNpKTD\\ILHbEVd^JOHLh@NNBnHP`\\xH@NBRLJTlNv_^CTLd@bNDVFbxdFVUPBTKOGEOUO@OEBXQP[H_EI\\EbeYa@UO_JMEJ_IEDKJUGMDcNUd_FMTEJSGoZ]EIYGO[YWgEQ]a@WHEDQKUSDUGAbYBUpSCYNiWqOSQEoF[UcQISWWNMSDe_cLQ_UBiKQOOASQAWgS­ā]ZaSPÝZ]XMXS[^oVËNgNKlE RôEø"],
				"encodeOffsets": [
					[111263, 19164]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4602",
				"name": "三亚市",
				"cp": [109.3716, 18.3698],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@®ĂhTBXTRPBRPjLVAR`dKf`TCNXMTXRJVdE\\FpTRrPjXZMTDVoZABaVHTCLVCRGF@X^bFRhZXP\\ZHHMA[^wBWXJlW¤EJ[bCTOFWWMm@ILMGWQ@DQ^QNWFSHEbF`OXNbOVNKTEPDTLTCCVTREfvfEHNbRAENH^RJXCFHNFRpVGHWISDOTMVCZeGamaLoLÛD¹¹ėgsia{OųETtlÉwr}jR±E{L}j]HąKÃT[P"],
				"encodeOffsets": [
					[111547, 18737]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469036",
				"name": "琼中黎族苗族自治县",
				"cp": [109.8413, 19.0736],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bRFnHNbHgN@NPEnbXP@bND`NT\\@\\QZb@`@J]V@XhDpWnCJGHGXO@CR§FANHVKLF\\MPVR`CvVfQtDPKpGHG@S`WJP~^dSTHWX\\RHTFACQTIAUPOU@MG__IaYSFQKNSbORHXCZeTFJgB`YBMNMFi~IVDV[tGJWXGDQRGF]JrALgESLSAYDGIaFeXQLS\\MKSLSQYJY}eKO[EHiGSaK[Yw[bmdURgEK^_kcSGEOHKIAS]aFSU@Y]IWFUTYlkP_CUOUEkmYbSQK@EMWUuAU\\M@EpK^_ZMDQ^OXwC_ZODBrERURGVVZ\\DTXcFWNIAWJWAYUUFYEWLQQaCIZeDM`cLKRGpanJZQd"],
				"encodeOffsets": [
					[112153, 19488]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469007",
				"name": "东方市",
				"cp": [108.8498, 19.0414],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ºxJYZQIYXLl@dR\\WZEn]bA\\S~F`KXaDeTiNO^EEKWEDQXITBXaWaDQMUJOIaTWf@NJV@dSxGZFu_@WMKAU}AQ@MwG_[GOAmMMg@GKP]IUcaFKG[JSCoLGMqGEOYIMSWMSBucIeYA_HUKGFBLOFGPQBcMOF_@KO©UAtERadwZQ\\@ÊJÒgòUĪRlR°KĮVLJ"],
				"encodeOffsets": [
					[111208, 19833]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "4601",
				"name": "海口市",
				"cp": [110.3893, 19.8516],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ńZƂtĢ¬æßFuz¹j_Fi[AOVOFME_RBb]XCAKQKRSBQWSPY\\HbUFSWSPoIOcCOHIPkYCQ]GdGGIFQYgSOAQLK`MFUIGa@aQ\\GGUFcHKNMh@\\OYKAigsCgLSF]GOQO]@GM]HyKSHKPW@Pxi@EMINYREXWRQ@MQcFGWIAwXGRH\\yDI`KJIdOCGRNPNtd\\UTMbQYi@]JeYOWaL[EcICMUJqWGDNZEXGJWFEXNbZRELFV]XQbAZFrYVUBCLNFCHmJaMIDDHXHEhQNXZ_TARFHVB@DTQIRR@YHAJVnAbKFUEMLd\\c^ÍÞ"],
				"encodeOffsets": [
					[112711, 20572]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469006",
				"name": "万宁市",
				"cp": [110.3137, 18.8388],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^J@ZTVbET^JBGLFPTHld]`FLQhcVanx\\\\ZbLHTGj\\FLP~fIZRZPVTQFSVAFJE^NDLEE[~LjsxVTG\\NZZNGlLRRGLJTV@hPZANN^@T\\NEPPbDZXO`d^HSvcJDIV\\XZAJUFCLNP@PQ¤@[ïKLÑIÏ]ÇE±I{u­YśUćFcYUmsVeBSVgB[RO@aYYPO^]@UVaNeDShMLG\\EfFVE\\F`"],
				"encodeOffsets": [
					[112657, 19182]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469027",
				"name": "澄迈县",
				"cp": [109.9937, 19.7314],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@T\\GJCXJH@fJDDPNCNJENN^NLHBNSx@DDYbBLLDRbjZTj@`XXTlG^Xr@PJLW\\WLTlWR@HDJTD@X_PO@STMDNTMVV@NLDM`M\\XM\\JNBH[PYZúYzŸ`Ċ\\ÎÝd]c[NKVFLEBaUmBIZGQ@JQSR@CUAEGBQ`SWYRMFgWGCGJCbNnIDGMEDKVAZUEqBYRa^WEUFKYQMaFWXEHIFWMYHCrXVIIiaK@aMCUYNSIISTwXALKH@XWXIEIJQCG[IEQDE_XSBaa[AIPW@]RS[FWS[CD]PEBYNGFSaSyJG]@ugEUDQlGHiBKHUIoNSKqHFaPMICK]UUHIPDJMuCA[SCPIDIOILGAEmU[POPBVSJDREBGS[QXWSGcT}]IO_X@TGHoHOLCX\\ELT@LYTDaFENF\\lj"],
				"encodeOffsets": [
					[112385, 19987]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469030",
				"name": "白沙黎族自治县",
				"cp": [109.3703, 19.211],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@D\\RV]dTXELnHr]^@LETBBRTHPi^[@U`QTHDJ`MGSogDIPKdJ`WVNHCXHl_DJR@AH`FBVPUJLHKNTJOFFZON[ZEHFCJlMJ_Cn`CJVNGPLTNDFIdVTWEIPmRKMc_kDMWGGUTAtJLK~\\f{pqD[LAVXRCH{HC`eJ`}@W^U@I@_Ya[R[@MSC_aMO@aWFmMOM@haGGMEmaQ[@MESHaIQJQMckBIw[AOSKKAMPSDSLOAV_@@`KJRbKRDfMdHZERgAWVsDMTUHqOUr@VQXTT@TfgL^NH\\@heTCZaESNObHPHeZF\\X^ElM^F^"],
				"encodeOffsets": [
					[111665, 19890]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469002",
				"name": "琼海市",
				"cp": [110.4208, 19.224],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TP\\pATHTGlZDJGAQjE\\Rb@jVBDCN`JZ[NCNHNXbULPrP\\KNbMTLjJJRFP`pNLZz^FLRHjVPZ@hxVKbHBHMNNJFRlLzGPnNHhIrHHADcPWdUAmEMVQDSKYHY\\EhBN^HpXGNDBNNBnIßÅ_g{³So]Ã£@ORO@KMEDIVYB[WJUICudGTc]P_YWaCOOMFS[]@MMYBgOU@ISHKQQkKMHYY[MSHwUit}KF\\KFMCF]EIUBETSROUKTLT[NKTWREfJbCHBZKTFTKh"],
				"encodeOffsets": [
					[112763, 19595]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469031",
				"name": "昌江黎族自治县",
				"cp": [109.0407, 19.2137],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`ZĤd`òü BSPGP@VSbQ`@]HC~T^SE]N]FkW]E[fYGGOPaTMbFDYfS@g[MGK]he@SSSRW@UVqrPVGNStCXUhBFQGYNcCeLQQaLI@_`@EUwcEaCUaMc@SK]Du`MSkKI~BVNL@X`EvYwHcTU@MIe@SXJbIPNVCRXbWbSAWJCRXFFL]FMPSjCfWb_L}E[TaBm^YF[XcQk@WKZJYRIZw¹ "],
				"encodeOffsets": [
					[111208, 19833]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469028",
				"name": "临高县",
				"cp": [109.6957, 19.8063],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jD`hNd\\^dZädĒH´Op@ùZY\\OAGIMN[[W_NCNMKU@NUMSNCTSP@`O@WSCCI@GXQSkXKX[IK@OWqH]SkWW@_SiiYQaKCAKZaCCw@MTGAMKM]FMMIMDSM_HGHRPKCBGSJJIYH[QOJCHMBDGQJECMTDQKFGTCEGTF`NFEDMFaGSNwIiTGhYJD\\KZODC^@FTKND`XBHKJNKFBNhG^FJMPcHEZF\\QPRjQTAdgNOPgQaRSê"],
				"encodeOffsets": [
					[112122, 20431]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469034",
				"name": "陵水黎族自治县",
				"cp": [109.9924, 18.5415],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@R]NC`YL]FoN@V[vBXVFNL@TRZalnVFVP`DlOZkVSXEE_F[EUFeH[NKTgfCbMVU^@P]ZObZP@\\QhATUfAtUasñiāEoI]eYǯ@aKmaeWuCºKÜKpnbHbYfUDSNCPJTRAHJTDJSfDNLHXC``VBNGTYCQDIXMDSP@xLNEFRNXBIpVNLXah@RgF@`qOML@LJNSPLbaHAh@Jdj"],
				"encodeOffsets": [
					[112409, 19261]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469026",
				"name": "屯昌县",
				"cp": [110.0377, 19.362],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\OnVBFKHPJCJOJTDB\\vDINOCGJVVL^JDONEbrGTLpMVJLGjAHGRkVChF@vH^zIbTETMHAZOFC^\\DXT\\EffAP\\PdAV@UIYfS|S@YPICMeM@sC[_A]VQEwyHSMuNcAUlQJMVGMS@mVBZPFO\\CSFQK[LqDMACiUa@[QiFBRIHYCHkGSBS[oSOqBIE^QHCRWHIXsHU\\UC}JEjMNAN_ZAIhSEYfWDQGaPMTLERZTJb``NHV@"],
				"encodeOffsets": [
					[112513, 19852]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469025",
				"name": "定安县",
				"cp": [110.3384, 19.4698],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JjDNdJ\\FbKPXfZ^Ij@RZNaVSc[MsMOHQPDJcLIJ_zCG[HQxWJBHXdENRR@XQFWZQQGOFSWUCI[WCJuRGLXNMPLhCl[Ta@SqGgJMGOmyHkKEQMINMAGaGULgwY@UOGiKQ]EYyMKoO_QEIIKiNSMa[LqOKOaVMWMGMDY\\_IKrL\\ERT[DEPYOUA@nNTUHINkRBVMdNvGTxzRF^U`BD\\@tfNDNOJ@Z{TeTJZ@VUcB[OBOeeQT@^OXBJb\\AbWTF`RCJFH\\RDJIJFXW@WLGBKxWTSJJMTVZND@bbL"],
				"encodeOffsets": [
					[112903, 20139]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469035",
				"name": "保亭黎族苗族自治县",
				"cp": [109.6284, 18.6108],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FJp@fxpQ\\ApN\\GNPNBM`HLMrXLXj\\PEHnI@WUCEM\\GTc\\GZYHTPBHRCPTdH\\K\\@HXiBJILJJAVNTOZJNtFPC`YxDPWci@IBgbGKaTOIM@KNKrP@_hE@QbgKWUMJoWAQMFEKM@wTONCJWRCZDHSAM_UD_GWMKeCITSCGIQBGXUHQoMEEGWDQIG]FMQBMaFGueFeSQDUSDSKOCSFMLUaPWM_PaEGFETMX]RCRR@HXKN@JNnXXESPaDI\\£FkXWIAX]xB\\GN"],
				"encodeOffsets": [
					[112031, 19071]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "469001",
				"name": "五指山市",
				"cp": [109.5282, 18.8299],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TCNOLBTLBPx\\AJdlNRRIbJTGNF\\@RcIYbmHoLQdKN_fCJYbDRRXKZFVEZVXBXIJBXMdESW[CUYHUVQFQAqsEIMPYMSBUIIJKAIjGW[@[LGScDOGQOAGSYZ[HSd[HFNVD@XmJFG[OWiWKNqGKN_MAMO[HoM[BoRewo@Y^HpITSFENc`MVCdHNIVCLJFI`NFIP`@VZbaf[FFJG`O\\WRFA@PVPFPPH"],
				"encodeOffsets": [
					[111973, 19401]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500242",
				"name": "酉阳土家族苗族自治县",
				"cp": [108.8196, 28.8666],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XJ°lJX@lbl@XbV@VLnJlxnbUU@IVK@lVIVwnJlU@n@J@L@Jn@l_nWVLVln@@blLmV@@xÔ`nxVÈLlxLVxVVV_U»VWn_m¥XwVmnX°lmUUVwÞaVk@a@mmIUa@mwk@m@@U¯a@UV@@K@ykkmwkV@kU@ÑVkKWLÅamaUm@kyU@WkU@UaIUaVaUUmUUa@aVLXKWa¯UUbmJXnWnX`l@@xkzWÆ@VLU¦x@b@JkIkJ@LmbUamJwm@óxnk@V@xVnUVmVUVUbVlUbkXW"],
				"encodeOffsets": [
					[110914, 29695]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500236",
				"name": "奉节县",
				"cp": [109.3909, 30.9265],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WVXbUnK@x@b²kxmKkl¯_VV°VU@bnKVVV@@nk@nbn@°@VLČU@°WV@VnU@InKVl@nUbKnXWlknLlKUwnalLaVlUXmWk@UU@UWWIUyķ¹XaWW@XKUIVmU@W@UVU@KV@n»VkUkÇmUmVIUmULUbm@wUaKkkm¯ÑUL@bWVnx@VmxUI@klmkkK@aK@IlJ@I¯k@mak@mnkJVL@bV@UbW`UUUVI@VU@VVbUJVLUVVbUXVVxk¦VJUnVxnVVUJV@Ubl@@bXV@L"],
				"encodeOffsets": [
					[111781, 31658]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500238",
				"name": "巫溪县",
				"cp": [109.3359, 31.4813],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nLWbXVLVUV@KIVl@b@lbUVnU@JÆU@V@n°KĢUl@VbÞKV@_VKXUU@KX@wlkkU@mWKUU@UôJ@XV@aVmÞIVaVL@»km@UkLU@aU@WWLUUUKkbwWa@KU@kaXmWLamVk@UmL@JmVUU@¯X@ċVUK¯@ÅnWKLkKULWK@UXK@wW@LkV@bVLlXn`¯xU°LnlV@n°Lnl"],
				"encodeOffsets": [
					[111488, 32361]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500234",
				"name": "开县",
				"cp": [108.4131, 31.2561],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n@naIw@@VVKLVbVxnVÆUnanKWXamKmk¯K@mkUm¯KV°w@Wm@UIUUlKUU@a¯KWanwmUXamKkUWUnU@KkUwWKXaWLUWkImaUUUKka±k@l¯wwmbUkXm@UJkIWXXbmUJXUV@°KllVXV@xmbnV@blV@VU`UL@Va@bULlb°VXbÜ@V@bL@JxnLVb@lVb@V@@zbXWXKVLV@@bUVVL@blVna@ll@zl@@J"],
				"encodeOffsets": [
					[111150, 32434]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500243",
				"name": "彭水苗族土家族自治县",
				"cp": [108.2043, 29.3994],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Jlb@nVV@bXb@ÆlLUl`nVKU¼VxkbWnlUxlXX@°°WnnJ@VUn@Jk°L@VlV@nUJx@bVVVz@VnLlaKnalVlIU¼@nV@@anKUwVal@UlJlI@akU@UWXKVI¯Uak@@KmkXWÜkXWykIWwXw@laXamkVUUym_XmlkkmmakwmIUKU@Wak@kaW@kI¯WIk¦VUUmaUV@XkVUV±aUb¯b¯¥m@@ImJ@mmL@kUKUkkJbV¦"],
				"encodeOffsets": [
					[110408, 29729]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500235",
				"name": "云阳县",
				"cp": [108.8306, 31.0089],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lbLVVVnblJVXXKWbXLVxl@LmVXVVlnLWbnVmxXb°L@bVVkLVVVJn@@X_WmkUK@alUKX@@xWL@VXLVKlLKXLÆm@ma@ml@mU@UUmL@aVUU¯U°`lknLlw±@a@wmLVWaXU@KWU@ak@VaU@IUVmUUwVmUIl¥UwUVWUaVUUKVIUa@UUUUJUUmknl@@VWV@L¯aUbUlx@@b@VULUx@VUxVVU@bU@mxUU@mUVklkk@WxknlxK@amLKUK"],
				"encodeOffsets": [
					[111016, 31742]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500101",
				"name": "万州区",
				"cp": [108.3911, 30.6958],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĸĊVInaWWXlJVIn@lWVnax°xkl@²LVLnK@bLkwlmXw@lllkUnVV@VnwV@@aVUUVw@UVwVK@U@a@kwVVa°b@KXU@U@mkÇÑamlkUVmn@VULUm@kUVkUawUWm@Uw¯mKUUmVUUULUKUW@XbWVkaWwkUUk@maUbmbVlk¦xUVUIWVUkJVVkL@UmJUUVU@lLUVUlx@@VbJUL¯¤@V"],
				"encodeOffsets": [
					[110464, 31551]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500229",
				"name": "城口县",
				"cp": [108.7756, 31.9098],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VK@w¯L@m@UÅV@ImVUVka@@aUkJ@LUUVUKmLmbÅVmUUwUaKUL@U@xJmbm@nVJ@X@VkVnlLXx@b@bUVLU`UnbU@@mVVX@JX@VLVVklV`@bUL@VLVKn@U@UJkn@lmLmK@X@Jn@mbnÞWVXnJkKČÑÆ@VK@knaÜmXlUČW°kôÇÆ@a@yÞ_VmUnU@K"],
				"encodeOffsets": [
					[111893, 32513]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500116",
				"name": "江津区",
				"cp": [106.2158, 28.9874],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@InWUUlU@LValX@°²lÒXxlK@Ul@@Un@UaVJ@I@W@UUUVUwVIUKUaUUVwn@Üx@XUlnnbJ@¥VklKUUlk@ynU@kVUUVWnI@¥V£VWVIUKU@UVa@n@Vm@@nlUaVkUwJ@blLkLW@XWmXkmmLn@m@U@UVm@UVUUlakUVaVkV@@wnaWUk@VwklmVIkUUxmJ@U@KIkx±V@IUm@K@IUKkbWKUbnm@bmVnbmb@xkxUJ@ULW`@bX@WVXL@V¯mk¯@UJ@VmLUaWnX@WJ@nkKkxW@UIV@@KkImmkK@UW@XaWIU@UIkbWbxXlLVbnV@bWlX@VxVLnl@nÆÞVÜ"],
				"encodeOffsets": [
					[108585, 30032]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500240",
				"name": "石柱土家族自治县",
				"cp": [108.2813, 30.1025],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@kl@¼UbmVXJ@bV@nxVIVJULVVk@@LWbnJVU@bVbUJ@blLXnWV@mbnV@Vbn@VJVLnaVanbl@VlVXxlbXUWaX@VUUVwUUVm@I@WmI@amlLlK@alwnUV@kóVaÝk@UlbVK@VU»VUUVWU@U`ULkwm@@KmU@knK»VkJkUmbLkbmK@UUyUU@awm@@XXJ@VVLVVUbVnUJVX@Kk`WXXJWXUbmW@bkLUm`Xnb@JVL@LU@°VVXKVnUxVLUbmJ"],
				"encodeOffsets": [
					[110588, 30769]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500237",
				"name": "巫山县",
				"cp": [109.8853, 31.1188],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@kVUbkKmbVxkLmKkllbV@@LXbxlaLVVVKXXV@@bVlKV@ln@¼°KXaU@Ulw°JXalIUaÝWXW@kVU@VUVWUUUamUw@aVamwn@VUUlLXWm£@wÇĉkKklmLUÒ¯Wn@ğ±kwmaWm¼U@@LUV@V@XVUnVJLW@XXWbĸºVzXJVXV@@VXlWn"],
				"encodeOffsets": [
					[112399, 31917]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500102",
				"name": "涪陵区",
				"cp": [107.3364, 29.6796],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nèVblĖVVnL@xVn@nJ@LUVVX@lbUJV@@nn@VVVK@zV@nzVJVUlmX@@_VVVbnaVal@@knW@wnaVK@aVIJ@£kUVW@wXUVJam@Ik_X¥@WwkKkwmkUxnÅmm¥WV@Um@UlVL@JU@@X@UVkKVkKVkKkb@bmJVXUVVUbU@@`W_UV¯b"],
				"encodeOffsets": [
					[109508, 30207]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500230",
				"name": "丰都县",
				"cp": [107.8418, 29.9048],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Þè@XUK@LlV@blbUJ@V@bnV@VVVXU@lbXal@VXnKV@maXUÞ@amk@aVKXVanb£°mnIVaUKVwUmWLUU¯V@@KUK@IaWmn_VlK@anXVaXWWIXWl_@LUWVIUmVaUUUK@UWI@Wn@VI@mkU@U¯Kl@ImVÅLwU¤óbUU@wWXkmm@LU@@VUIWVUL@JUnax@JnbUIWVx@UXlV@¤IUJ@bULmb@xmX@lk@UbmbUaUU@`W@kn"],
				"encodeOffsets": [
					[110048, 30713]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500232",
				"name": "武隆县",
				"cp": [107.655, 29.35],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lwbVm@IVKXUVJ@UV@@KnnWlX@xVVôaV£xÆKnUVm@UmIXm¯¯@WkWVwmkXlaUwV»ULmk_VkK@ÅWa@aUU@mkaIb@n¼nm_@mmK@ULUVVmI@aUJ@XWJ@U`UIkm±kk@@lULmUmKUnVnlUVmI@VkVlxbkIVmLUxkKUXn¦ÆnmVwlnlxlLXx@W¦`"],
				"encodeOffsets": [
					[110262, 30291]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500119",
				"name": "南川区",
				"cp": [107.1716, 29.1302],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VUbVJVUn@VLX@WVXVVI@VUVWxU@m@ĊX@@¼V°aVUX`@_V@VaUUVUWnI@alaLUlLUllLVU@@WV@@IUKVkn@@VlLVwnKUlJakwlU@UnJVUmkUVmXa@wVK@UUw@VVI@ak@alInwlKXUmaUW@wWLkKVak_ÇaUV@XbLVxUlWIk@UK@V@kU@VbUVUlVnLUV@lVXmxkV@L@V@Vk@WbUwmL@JUI@xVxkx"],
				"encodeOffsets": [
					[109463, 29830]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500241",
				"name": "秀山土家族苗族自治县",
				"cp": [109.0173, 28.5205],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XlV@lzn@VnbÆbXKlLUÒV@@llUnxll@z@LU@@V°b@Vn@l@VÑUnK@UU@aUakVm@K¯wklmnnUl`nI@almkIUwmWVkUakkJmUUa@K@aU@@_m@@wUyVUUa@Um@awl@Wka±UkUykIWVb@bUVk@aU@UXUUIWakUWmUxUV@nUVWb@XXVVmXX@VbVLkVWx"],
				"encodeOffsets": [
					[111330, 29183]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500114",
				"name": "黔江区",
				"cp": [108.7207, 29.4708],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VX@V@LV@VJUL@lVnnxlb@VXVXV@@W@UIVK@kUKna@£VWUaVUUalIVJVIUW_lm@bXKV@mn@JUUw@KnIVll@VanLVmUkVKXLVKUIVamw@UaU_lwKlwUWV_Ua@aUa@KUwm_Ó@wU@nkK@am@UkUKmXk`m@@I@K@I@mkVmIUxUJ@kUL@JVVlnklWnn`VzUVnlWbkb@WxXxlJXzWÛlWXnl@Ll@Vb°UJWLX@VlV@bkJ"],
				"encodeOffsets": [
					[111106, 30420]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500117",
				"name": "合川区",
				"cp": [106.3257, 30.108],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XKVXlKVL@UnV@aValXXKU@WVwUaVU@IV@@aVWL@U@anVV@@bVK@UVL@bnJWL@VnUnb@@JnIlVl@@bXIWbn@UKVLVKXLlaV@VVnK@bVLmIV@KmknUUWVI@aVJ@_WU_VmUwU@KVak@am¯mJU_UJUkU@WkIV`UI@JV@LmmU@@mbUzÅ@VK@nUKbakb@UWK@bkVVbVÛ@@`Xk@W@n@lXL@bmb@VVJUn@JnUlnUlmX@`XLlbkJW@kzlb@`@b@b"],
				"encodeOffsets": [
					[108529, 31101]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500222",
				"name": "綦江县",
				"cp": [106.6553, 28.8171],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@¦@XlVX@@UVKlVUX@lanVlUVbXWVXVVVUnKVUlwUwU@UJ@nmVkUVlwXam@VaUUUw@W@kk»mV@UmKkwVKVUU@@LUKVI@mV@XVWxnXVKUUUK@wWU@UUWnUlLXamUIam@wI@K@amImUUkI@makUkKWUUan@wamLVxk@UVmUUL@Vm@kV@I@ak@@bWVXJlLVbVL@@bn@@`Un@WbUKULWVXb@UVmbXWVb@bVmxUKUV@Un@V@V@nmnKlnnWWXX@lKkK@aIVxUlVbk@mn@@U@mbVUV@VLUJUXU¤"],
				"encodeOffsets": [
					[109137, 29779]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500233",
				"name": "忠县",
				"cp": [107.8967, 30.3223],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VLÞĊU@W@¼V@lk@w²mlVUllVnI@VlKUUlIVXUVJVUwl¥UkUKUIm@aU@mUna@XUWmkK@aVIUa@aUVmIXa@Kl@UUVKUIUJmwU@@aWInUVa»k@@l¯n¤mabWUUL@bnl@bÝWVnbU@mLUWk@Wbka@WVUU@UmUmVkUULVlVUxl@L@VbÈÒlb"],
				"encodeOffsets": [
					[110239, 31146]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500228",
				"name": "梁平县",
				"cp": [107.7429, 30.6519],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XLV@VV@b°°nnkb@bnJWVXblIUVxWnUJnVVLVUJlUnLVK@UnUVJ²nKVbVKla@aXlJkKlb@U°£KVIUa@@kwVVUkKV@VUkkUVk±n@xkl@U@»@XVÝĉUJnxWb@UXKkVUbUKWUkVmkkLU`b"],
				"encodeOffsets": [
					[109980, 31247]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500113",
				"name": "巴南区",
				"cp": [106.7322, 29.4214],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nxnVlJlUXL¦@x@Vl@nKVVX@V_V@@KlVXU@lKlxXIl@ÈĊ@Vl@n_VJlnVlnb²VVVJVVmUUkĕUamçU@»W@@ĉnV@XwVU@UUJWUXUW@UKm@UVUIVaUUVmLUVUUUWWXUakVmUkbW@UVkUL@VW@kUW@mJUXVVU@lmV@zklVVkLUl@¦I"],
				"encodeOffsets": [
					[108990, 30061]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500223",
				"name": "潼南县",
				"cp": [105.7764, 30.1135],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@a@a@_kalyX@lIkaWK@_nWVkkmmV@IVmUI@Una@aWK@k@mkbWaknmJUk@mk@@kUal@Ua@Wa@aXLlwUKlkk@KmI@VUJ@Lk@@VUUmL@amJU£kKUaWakLmU@bVVUbnbWV@xkL@bUbxUxVbXJVbUVWIUVU@kLWxkKWV@n¯VUbU@@VVX@VmaUL@VUK@VVbn@lVnI@@lnLULm@Ub@l@na@lK@XVVkJ@b@zl@@VnV@bVb@J@bnXV`lXXmVI@W@InbV@@aVKUblKVLUanLlmnLlK"],
				"encodeOffsets": [
					[108529, 31101]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500118",
				"name": "永川区",
				"cp": [105.8643, 29.2566],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@bÜnWVLXlxVVxXxlVn@@bVblK@a@UnLVJV@@UnLVU@VXaVKVX@n`WUÿ@IUKlaUUUkWyUÛÅÝ@mmkUKUwW@Xk@amUUakKWwXaK@VVLklXVlkxVUL@bm@Vxn`IVxUVkLVUl@@lkXmmVUn@VV@Xb"],
				"encodeOffsets": [
					[108192, 30038]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500231",
				"name": "垫江县",
				"cp": [107.4573, 30.2454],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ċ°¤nÒ¼aV_lKnllUXVVLValULVW@XamwVIUKkaÇÑa@U@KkVwkUUVKlVnU@aU@VIka@akU@KVL@WÝçUV@VmbÅ¯@LKnnJWVkxlL@VX@VxmnXVWxUb@bkn"],
				"encodeOffsets": [
					[109812, 30961]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500112",
				"name": "渝北区",
				"cp": [106.7212, 29.8499],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@bVVXLa@lnbWn@L@XVlK@VVLUVlbkLUKVVVL@VnXVL@VV@UbVb@x@¦UxVb@bUJL@LVVxlK@nk@U@WUVLlKXV@VblU@UUKVU@wn@VJVanLlkX@VaVK¯@a@U@U@VaUKkUU±maUkm@UUkbm@@Vk@@JwU@Ub@I@JmwUL@a@@KkVÇLkWk@kUU@@xUVmKUnllUb"],
				"encodeOffsets": [
					[109013, 30381]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500115",
				"name": "长寿区",
				"cp": [107.1606, 29.9762],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VVUbXlX¥l@XnVmlxUx@@blVnnôĀlm@aVaXwWUnmUwW@@UkKlwUXmImL@KÆ°na@UUImyU@@yULUUm@@mU@VIkaW@UUV@KI@mmUw@mKUnUUIlVLUb@@V@V@b°ULUbW@klmKUbUIm@@xUVVL"],
				"encodeOffsets": [
					[109429, 30747]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500225",
				"name": "大足县",
				"cp": [105.7544, 29.6136],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XUmaVaUU@anVlKXbValU@aV@@IXK@@bV@VxVK@UXLlUJXa@_@@aVKÅWVkwWawUa@am@kUWLU@kWmX@ykI@W@UV@na@LlLV@UkwWUKmXX`mIVl@bXLWVkbkkx@`VXm@@J@U@UUKUxk@WbUIVl@VXLWJUkUlUImxXlmb@X@VUJUnVbW@UV@@VVX@bnW@LVxUnlJUV@n@VxVIn@l`UVVVL"],
				"encodeOffsets": [
					[108270, 30578]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500224",
				"name": "铜梁县",
				"cp": [106.0291, 29.8059],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VblLV¤nI@bnKVV@Ul@@KVI@UnJ@LlklVLkxWK@bXb@Vbk@Vb@ll@@nVlnIlmXblaXl@W@_Ü@UUalU@aXL@VlabaVL@mUL@UUÇXUWX_WaU»m_@UWULWb@UUVmK@VU@UImK@V@bkLxXblxXUÆUL@b@@`WbIkVWK@VULUwU@@a@WL@JU@@bkVUb"],
				"encodeOffsets": [
					[108316, 30527]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500226",
				"name": "荣昌县",
				"cp": [105.5127, 29.4708],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VI@U@WnaWknwVJVkVlIXWK@UUkVJXal@VwVL@V@V@In@UW@_wlllaXUWK@aUknJW_Û@aWaU@@UVmUUaUImJVnÅUmVUm`kUUVWLnVU@VVmXK@nxmULkxImJ@nU`@X@Vkn@`@nlV@nVJVaXVLnK@bVV@nV@lbXW@"],
				"encodeOffsets": [
					[108012, 30392]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500227",
				"name": "璧山县",
				"cp": [106.2048, 29.5807],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XzVlVVkbVL@JVĀX¼VXbW`XWVÈVVVkV@@UXa@alK@IU@UKWUyUI@wVUUWVak@VUkW¹@WXI@yVIUK@kWwkÑ¯±W@kUb@KkVVVmXJ"],
				"encodeOffsets": [
					[108585, 30032]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500109",
				"name": "北碚区",
				"cp": [106.5674, 29.8883],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XVLV@@JkL@bWb@VU@UlÆVya@nV@nn@KU@IVJU_lJXV@VlVIV`nIn°@blUbKVI@aUaVw@¥@wUaVaU@@UUKWm@UUKUUVLlKkaVUUK@UkLWU@@KXmma@kbWKUU@aUamLnÞ@VWLk@@Wm@ULU@@UKUVWI"],
				"encodeOffsets": [
					[108855, 30449]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500110",
				"name": "万盛区",
				"cp": [106.908, 28.9325],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VIV@@wVJ@InKVxXal@@U@U@KlUnwUW@kVUKUmVkUa@I@KW@@bk@@mU@m@k@a@aIUxmJk@wULwkKmVVX@VXV@xVLVVULmWXwWUU@@nUJVL@KV@UVULlxnL@VnUl¼@l@XVxVVUbn@WbkxUlVnU@m"],
				"encodeOffsets": [
					[109452, 29779]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500107",
				"name": "九龙坡区",
				"cp": [106.3586, 29.4049],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XKL@V@XbV@lW@UV@@VXIV@UVKlL@KnnJ@VV@VU@I@@mVUVWUUmL@V¯LUK@UV@UU@a@U@yU@WLUK@X@KUVmL@@aXI@w@ammVk@WÛwm@UxVVVbVLUJVxVUV@V@X@JUIVbm@@Vk@@VkL@lVLUJ@zWJ@X"],
				"encodeOffsets": [
					[108799, 30241]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500106",
				"name": "沙坪坝区",
				"cp": [106.3696, 29.6191],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XºlUVl@UbVXUV@xVJVzXJVUL@VV@VKn@@Xl@XK@UmÝnKVbVakkVm@kUK@UmIm@LkKULVU@WJ@UU@@VkXU@Wa@@UKWL"],
				"encodeOffsets": [
					[108799, 30241]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500108",
				"name": "南岸区",
				"cp": [106.6663, 29.5367],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VVJVL@bUVVnl`XIlwXJlw°nnlIXW@UÇĉk@WJkwkL@WVkU@LU@U`W@UXUV@n"],
				"encodeOffsets": [
					[109092, 30241]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500105",
				"name": "江北区",
				"cp": [106.8311, 29.6191],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nLVU@wV@lV@XllÈKlU@L@@bVKnx@I@JVaV@x@Il@@Un@laVVn@mkUIm`k@WXJmk¯mkxWIkxWJk_UmVUUK@UU@@l"],
				"encodeOffsets": [
					[109013, 30319]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500104",
				"name": "大渡口区",
				"cp": [106.4905, 29.4214],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@k@@U@w¥WKkVkImUmwa@b@xWJ@b@nKVU@L@WVLXKV@@z@V@bVVU@@VVL°K@U"],
				"encodeOffsets": [
					[109080, 30190]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500111",
				"name": "双桥区",
				"cp": [105.7874, 29.4928],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WwUwU@kK@KmbU@@V@XlJ@znWlXV@XK"],
				"encodeOffsets": [
					[108372, 30235]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "500103",
				"name": "渝中区",
				"cp": [106.5344, 29.5477],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VL@VV@VL@aUKIUU@@JUVU@"],
				"encodeOffsets": [
					[109036, 30257]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5133",
				"name": "甘孜藏族自治州",
				"cp": [99.9207, 31.0803],
				"childNum": 18
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@aXam¯wm@±°wUwV@UaVw²KU@UU¥a@£ÞôxKnkmX¥IUÝUwlk°V@ÈKUwlkUyV¹mx²XllÑW»lw°UŎnJl¯°V@wôIVÇnnUllLVÇLô¼XW£@±@¥k_ÇJkUékwXa@Llw²Vxbm¼ÈxlLÈVWÞn¯mÇÑUÝlÛkwlĉmULmwUJç@wkm@ÑlUXÑôġVaUÑ¯@wķÓkbVmnU@@y¯IķKV@¹aé@kmÞU°¥@a¯@anKlblU¥@óğç@Çw@wklaçÝ±k¯±@ğÝUÛmÝ¯w@kb±¯akXWÜkXUÆÇU¤X_ƐwV@¤XUbUIUlÇUkġ@aXČmlUlèUV@mVk¦Vx@¦±¯¯¯anlW¯nÅw@w°KVak£m@klKknÇU»óKīlaUaV£@¯@ÆUVÛÝÇXÇlÓlŹ»WUğJ¯£mxLĵôºXVlUll²bllxónn°ÝU¼mJU¯nV@êĉ°Uĸw@m@¯kmXamÑ¯aUwÝKU¥mÅn¥Wmn¹n±ƑƆÇôXê±ǊnUôlĖkȂVÒ¯¼VnȮ¯ĀnƆĢ@k°V°¯ĢVlkVxm¼X²Ŏ@VxknWÜ°U¯nÆÝ@`ôÝ²ÒÇznmX@xè°K°ÅUČĬóĖÝó¼ÅêÒbmk@V@Òl@nĉÜêx@ĖmlÅJ¯¦óxȭ°Ým¯LĵèĀ@Æl°żX@xmkV@z@°blnÞ°J@bn@Æ¼UVUóóL°X°ÝLxUn°Ĭn@lnL@Æ@nKÆxnUnVInĬmÆnxŎ¼ĊIĢóÞ@ĊƨbUmV¥lkwnLmÅÆ¥XwU@wwUÞ@alUUÅUVkkm°aU°Ó°w°Ub°a²K¯ĕ@ÈbÞĊa»XVm°InĬk¼VbaJô£VĊankůnÜU@anKnĮbÈmÆ»nIé£Ġ"],
				"encodeOffsets": [
					[103073, 33295]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5132",
				"name": "阿坝藏族羌族自治州",
				"cp": [102.4805, 32.4536],
				"childNum": 13
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l@@þ²I@lVL°wnJ°UĸŎèIlwV°¤nĮ¤ÝlèL@@xlè²ôĊ_ĊġVÈôJżīlbXÆÈVkxÇVn°¦Üb@è@nn@@°UÈ¥WÇ_Uala¯¯UÇk»mVwk»k²°VxlL@¤_@x`ÈĖöb@l²alXa@bnK°¦VK@nnWmx@nUnl@@llĉk°l°UXkmW@Un`kÇLWÛÈVxVVlVk@lIXb@ylXÈWĮWŤzy@mI²J@n°@VJ°aÅ@ŎkVÇkaUwKVwV@nkm@±ôkôĊJ¼InÑm±nIÞXÈĊxĊUÈbÜyÈ£Vkw@kVUVm@a»ÜbÈmUXwÝxUn¥@°ġÅaJVkaW¯Û@W¥UŏĶ@¯kUŃ@aI@mmanwÞW@mw°»Uřk¹±WxVx¯¦U°zţWw@°ÇVÑk¯@y°a£@mnl¼aÝÝakwU±aĉImlĵn@m@kkV¯Ñmĸ°xl@XVÞmlÛÝĉUÅ¥mwÅ¥VaUwXġċaVůÛŹlwU¯Uó±xÛV±¯¯n¯mċLmnĊm@_kJWaXmwUĉK»@mwXÝUÇkKÇw»naUw±kxK@WbxlVêlÈIl`@¦@²X¤Wó»KUÈKkkmVmUÈóJ@x¯Uk°Imō¯VxkX¼Òkk±WwnUºVzklVxLÇ@¯UklVxÞVJW¦nmlLówÝ@¤b¦V@VV±LUxVbU@Vx¯x@²n°xnWbb"],
				"encodeOffsets": [
					[103073, 33295]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5134",
				"name": "凉山彝族自治州",
				"cp": [101.9641, 27.6746],
				"childNum": 17
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĶóKnw°¤ĠIXV¼kźÔkÈWÞÈÜUVÅ°@@U¤VbkbĬôL¼ÈVlmLlkn@l¤Ub¯L@xÆx°mXmk°b°°²@¥Uwl¥nU@VUkçVnkWċbĢ@lÈVVkJVaVW@£UƏxW`£ÈVVÅlWXÛlW°b²la@°xnÞVÜĠÞ²@l°Þ²èkbl@xÈx@Ġènal£nUÇ²@ÞKnn¤@¼°U¼nVXUbnĠUVbUlV°LX@lVèÜUnK@_yXVyUwmIU»VkÇ¥ÿkkV¯m±n@n¯ÜanVVÆz@bwÜbm@wa@kmk»@a@VUUów@nb°mXmnVbÞVôanwJak£lwLÅnÝ@wl¥IÇÓ@UL¼kVÇÅó¯kVmmw@n_Vn»°LÅ»@éÇçŹīVÇÝ@ÝğUaVÝ¯ķlŭġl@óÞÛċ@¯nkUÓm±IVġUwóKUn±¯Kw»KÝVnl@óxUwţ£ĉUmÅÇÝKÝUlmK£UV@ÞÈW¦Ò@Ĭnny@nÒmV¼@°Vbl@VlnUUwl°a@@llnk°lbnKWĀnUVxU²Åm¦ÛÇÅaUVb@¦m`móXUmmxÅ@±Þnè²U¯»mVm@wU@wÝÝmLa@VÇUkl°¯VlkV¦UmxaULUèVx@kIUxmWV¼¯VmÈ¯UnlÈ@m»ÅVWxÅbÅğW@km@kVV¦mlnn@ōl¦ÅÆxk"],
				"encodeOffsets": [
					[102466, 28756]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5107",
				"name": "绵阳市",
				"cp": [104.7327, 31.8713],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ńlV°@ŐĵVX»ÆUĊÑJw@È»m»£°Kk@ÇnÑÆ@w°JUwnw@wbVb@VlźLUwa»aUklyUUVakwWXwWUxkLmn¥mwkUXlJw@aIk°X¥W²l¥aUIlmkklÈL@m°nlWUaW@V@UaV¥@ak@Çk¹K@aK@kKkÇX@VU@kx±VèkIWwUVUkkKÇ@a@wkml¯@kUWn£WaaVwnaVÝw¯@UaWxnJÅUxUma@L@mbUU±VVnkxUÆVm@kkKW°X@¤ÇUkÆÇnU¦¯kmLVwÅK@UóbÇÆV¦L@±êX¦mVÞkÜÝnWU@k¯wķn°ÒUlln@@ĶmnkĊJ²bVlxÞbÞbk»mn@¤¯bz@l°UÒ¯È@xŤXyV¯°¥Uww²XlºVŚ¯¼nx@XÝmxnb@nJ@b"],
				"encodeOffsets": [
					[106448, 33694]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5117",
				"name": "达州市",
				"cp": [107.6111, 31.333],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Uxn°bnlUnÒÆnn@n¤LnxlUV@Ælx°XXxl`XVWLè±nÈb°b@²x°KÜ¼°ĉV¦lJnU@¦ÞJÞğmLÞ»xUlbVÆannalVÆX@lnŎVmUmaÅXa@aWm@£@wĉJVkkkkmnk@mna@alKJ@ÞwmÅÅ@ambkU@KUġKU@mak¯±a@aĉÑÅaVwXlw±V¥l@@ak@@£mĉÝónWV@nÝÇÇxUmbaVkkk@m@m°ÝýXmakÅī@@mb@@xmnb@mxkWL@¯b@WUXmWWKkbm@kxXmm@LUlxlêóKnUallLlLó°m¯JVUK@xK²Āô¦l°"],
				"encodeOffsets": [
					[109519, 31917]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5108",
				"name": "广元市",
				"cp": [105.6885, 32.2284],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆLĊx°»Ŧ¦WLÈ@xÞKÜ°ÞnVxÅĀlÒnJ°a@wV¯l@XWknKnwVÈ°XXalX°VI°bWna¥@w°n@yÆ@nkÞ@°¯lJn°IÈlUlXÅ@ķlUV¥VUUÝÞUU@UwJUkĉm@ýlkWUwVwWJk@VUKlUkaVUmLkm@@UIk`@UmlUkV¯ÇXKÝ_mm¯@U`kwml¼±KV¯¯Vk±Vk±kzmaKUnÇ±bk¦±X¦¯WlJ@bxkIWVlxnm¦nlKVwXWxXlxUbVVkzVlb¼bVxŹKUk@Uaa@xmxVx¯Ix@ÅmÒ@Èl¯L¤n¼"],
				"encodeOffsets": [
					[107146, 33452]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5118",
				"name": "雅安市",
				"cp": [102.6672, 29.8938],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ln@xèVInxVKnĊklxkÜVÞÒnÈm°nx@¼ĊLVnxWXblI`@nmĉnKČôÅlUÑmUK²¹@ÇÅVÓÅ¯VýÞWUVmXÆbnwKUÿ@UmmIUb¯¥Uw¯ÇmçmanUm»UUlk¤a¯bVU_WĕmÇÅ±ĢUlUlÛVçkU@W¯KUVkUağVmaVWUmV»¯@»m£mÝL±@ÈmVk¤mb@ô¦kVkamL@b°@b¯¦ÝVn@lêb@ºUĸL°J@zV@nmUlaĸÔ@x°VÒUbóĢÒWkV@Ò"],
				"encodeOffsets": [
					[104727, 30797]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5115",
				"name": "宜宾市",
				"cp": [104.6558, 28.548],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VlÈnlXnWLX`m²nV@b°xĢçlnVmnn@@°UzlV°nÞÒkxlw`UnVbmL@albÞKÈÛmÜ¼°@XÇ@wmW@ÅKĊLlVLVŎçÞL²±ğkw@Uy@¹lKXlKVa@wČ@w@aÇU¯n@@wġakaōK@Å»VakUWmķwkbğ¥mLak@ġÞ°¯xVVÞ@VxVVWxXlxU@k²WVÅULmèULVĊklĠVJVx±nÅ¯¦mwğ@mlğkkl±@kUk@¯±ÇKkxl¤bImx"],
				"encodeOffsets": [
					[106099, 29279]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5111",
				"name": "乐山市",
				"cp": [103.5791, 29.1742],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@kVkÆkV²UlºÈIlxLXèÜlUXUmkbVèx°@@¼°Knnn@mÆIUbnJ@bVI°b°±@nK@mVakkKl¯nbmĸèl@VnÈlUUwwmwnm°¥LlLnU@VaImbkmKnk@mbLVJVUUVnkVmb@a¯JUaÆkk¥IW¥KlwÑmÝU¯kVy¯@@mmnUkmġè¯w@aU±mnW_XKWmkÇmUkóbUÝUanmW¯nma@xVôUV@b@l¼n@lb@xnÛaxa@yUÅmUÛbm°@mn²U°llĀÈ¦lUV¼nJVxUzWz@`mL"],
				"encodeOffsets": [
					[105480, 29993]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5113",
				"name": "南充市",
				"cp": [106.2048, 31.1517],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@È²VmLnblyl²²UUl°U°²L»knlx_V°@nnÞ`WL°ÈUVlnkV@l_JV@n@lnKV£ÇUV¯m@laXUUbVx@VkôJU°Jn@wUk°wnUV_nJmknmm¯Vwk¯ó¥±ÿL@wLVUkUbX¯mykI@a±Kk¦ULmaXVm¯Kz±klUIVbÇJkL¯lUÿUlUkJUmUUkVVklKk@@aU@J²x¦kĬ@¼±ºXnWbxU@xx@lL@bLlº@Èl@bU¦Vb@U@XbVkX¯m@nÇKkllknJV"],
				"encodeOffsets": [
					[107989, 32282]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5119",
				"name": "巴中市",
				"cp": [107.0618, 31.9977],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VUlbkVVLUl@XIUxVxXkl@þĊnVlIVx@VVÝVÞUVU¦kV@ĸWÆô²@VÞn@Vaôb²W@K@XUmÑUW°¯°Ina@y_lWn¼lLUbô¼Kla@nkUyôÆx°@n£Ý@¥mVkIU¥Ċ¯Û»¯L±w@¯aÇa²mçKXUWk_Ww¯WwÅk@UkVmwK£@mmmÅmÑkVmamnnlmIU`Vm¯xVlx@m¯IVóIUl@UwVaVWkb@nU°VÈU¤"],
				"encodeOffsets": [
					[108957, 32569]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5105",
				"name": "泸州市",
				"cp": [105.4578, 28.493],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VVXwVKnwnVnl@b¯xmKUbVn°°X°@blLènV@Vnl@ULnmmUnaVV_ĶV@wnJl@@kkKVólaUwnJmwUlm@aUaôKVnJWbÞ@VwVLX¥VV_Þ`wWÞŹmmnIn¥W@kWV¯@°kILk¼Ç@k¤±XknmÝ¯UlÅÛKWV¯klUwkLÓ@U@w@ġXVWX@UbVbV_kÇVlU°lnwŎ¦ÞaÆ¯nmm¯Um¥nkVmkl_ó¥¯UÇl¯@Lk`¯ķLUy¯@mw¼ķ°ġ_ÅU°mlnÇVUÞ@_JUnVUXblĢb@x@mV°Èb@xċ@@xUbkLWkL@ºzV@lxĠ±²"],
				"encodeOffsets": [
					[107674, 29639]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5101",
				"name": "成都市",
				"cp": [103.9526, 30.7617],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°n°m²°ÜUw²ôV°VkxÜźUŰČbĢlaÈL»@kwVÇ@nÛÆ»ÈUÝ°Kl_V°U`Vbn@VbÈLaVU@ƨ»VnIlUUa±lIk±@VnKmÅ@WaK¦lVōkKÝ@maXÇmw¯IU@kVwUmVIçÿU±Å@¯È@xK@wLUbÇKÅ@mÝ£@yóUóóUxkI@WlIUabaVĀLmxÅaWUnVÝXUþÆ°UÔÈÆ@±ºLnVVÒkóÆ"],
				"encodeOffsets": [
					[105492, 31534]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5120",
				"name": "资阳市",
				"cp": [104.9744, 30.1575],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@èUJVnxU@lV°JnxWÈnbÞ@lLŎUk¥LXbÆ@nmLU@zlbXmlnVynLçJVbUnómUnamUan¥lKV_²aValWôn@nbVK°¯VblW@kklUnlV£°W@wUXk°KVwmVkwVyVI@wkmVÅ_Umm@Uÿmbk£xUaVw±V¼V¤kLWxU@UkbyXóm°V@@zÝÒkKn±U@@_VVkÇaVwnLWalm@@kkVVl¦kIV`±n@wKk²aVUUV¤nkxmUkVWVnLUbVb`kUUmLUmX@`ÅbÇXbWLXn"],
				"encodeOffsets": [
					[106695, 31062]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5104",
				"name": "攀枝花市",
				"cp": [101.6895, 26.7133],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bKÞnÞ@xV@xnUn°¼V±mç²ÝÆ@wnnVWnôn_@¥UaVbÆÈÜn¥Æ±VUwVmXÿmLkal¯km@k@¯bkVxmVUkk@Ua@¯»UnmÑ@mzm@īÑX¥Ç@ÝxU¦ÅÇUkx@lbUWVXmV@xĵĖ±@@¯xUÆLnÆmx@nXL±lUUVwKWak@WxkbÞĉbUn@@@xó¦Ŏ"],
				"encodeOffsets": [
					[103602, 27816]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5114",
				"name": "眉山市",
				"cp": [103.8098, 30.0146],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Vx°¦VanJVn@baVbkJ@XlJVwôôôV@zÞ¤@nÆÈLVaK@xL@w°ÇÆ@²VĀmWXKWaÈÆa@_nWVnKVlV_UaVamKXUWwnmmwÑm£@ynUkWĉUkWVkkV±çkJmkKK¯¦mnnxxVxVÇkUmk@çķnmak°LllUb@nmL@¯²¯aUJ@amIVaÅJnm@mm¯L@»¯@wUçanlVWVÛkWçKkwÇJk¹±VUÅlġV²ÈÆnXĖV`U°ab£lkVVn¼mVnbèÈn°"],
				"encodeOffsets": [
					[105683, 30685]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5116",
				"name": "广安市",
				"cp": [106.6333, 30.4376],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VlIVkVĀVk°lKÈIUaVJlk²yLn°UWnbVKl¥²L@blJnzW°alV°Inô¯KkKkkbVmôLkéwVk@KnnWlwn@laXLnXVW@X°a@XKlnw@man@w@na@@wĕġġwUkUWb@mk@¦¥mUÛb±yÅn@bml@kV@lknVbmVnlmbÇk¯bWyk@V_UamJ@I@WaVXamIVWkUkbVaUUx@VnkVU¼bkKUxmK@WxnV@n"],
				"encodeOffsets": [
					[108518, 31208]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5106",
				"name": "德阳市",
				"cp": [104.48, 31.1133],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nUW¥²é@K¥UÈÅôa@VÆLUxnKl°V¥ÈmlÅÈV@£WX¯lLln@UVÅlwUm²UVVna@@KnbVVwÆImXwWkIVwÝĕVUaIèmKUzkmWnka@y@l²kJ²VbVkmJUƧ¼@UVbÇKUam@Ua_¯VUk`¯LVÞÇÅ¼mÜ@UÈx@l¼ÇKkbWVxUbÆ¦nxÆ¦ĊV"],
				"encodeOffsets": [
					[106594, 32457]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5110",
				"name": "内江市",
				"cp": [104.8535, 29.6136],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²èlUUllXĊVXlmV@zn¤ÒnxmnXxlUnVlwmU£VVUbl±L@x²mU_lJ¥UklU@ln@kXbmKUxÈblUU@`V@²mlLÞÑ@yU@¯ônWzaVlV@XwlKU£»aVaUwm@mwUVUwklVÇ²LlKVm_@ykUm@mUçkKmxkIUÝ@LUJ@n±kºLXb¼@mmIXa@mamnkWKUx_U`UklwUwmUbV²akbmkn@`UmÒVxUbI`UaÝÈ"],
				"encodeOffsets": [
					[106774, 30342]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5109",
				"name": "遂宁市",
				"cp": [105.5347, 30.6683],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞĖUxlJXVb°@xUÞmbUxbXbm¤VX@lk°ln@xbÈ@lLVlVUXxlJç²UlwV@@UÈWlLw@wVwXaWm²¹@»lī¥w±I@V@bl@kLUllUVVn@mmUwXċbVb@VUkbmamW@ka@k@laUa@¯b@mmwó@@lkXUa¯°LUamm@ókXUb±bU`kLm¦bnVmbnVmô"],
				"encodeOffsets": [
					[107595, 31270]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5103",
				"name": "自贡市",
				"cp": [104.6667, 29.2786],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lIÞÇbV_JVaUwnÑV@_lmnlab±UVanVxkxVlV_`wVLlXnmnb@WbnJ@n»WaKl¹²@mVI@KÞVlJnw@aW¯¯¯UmVanL°w@akmmUxmULWxUUÝKōèUKUkĉKL@ÆnX@xWÈ¯@Û»nÇÜÝLka@bKnUaVm_xkLX¦Jl¦ÅlVb°I@bnaUmlUVUVIUKa@nmlnLlnaJUbV@"],
				"encodeOffsets": [
					[106752, 30347]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5203",
				"name": "遵义市",
				"cp": [106.908, 28.1744],
				"childNum": 14
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@UnUlJnwJU°VL@bnVUwlJ@XXVlU@klVUJknlUllL@bUJ@xULUlUblVkblbnwUXmla@wV@VK@L@UXaVKVLXWUVa@U@Im@@W@£UKUakKWIXU@al@@llUnL@W@Un@@VlUV@VIUanKl@Xb@lmxVb@b°bb@nlJVVnnJ@b@LV@ln@LmV@Vx@blnVKnlJXIlwJ@Òb@nlK@Un@UL@VVVVUUUVKl@VUVLJ@UVUUw@Wm@UVÈVlbUb@JLlX@@xLmk@@nlx@bUJUzVJ@@LVxUV@bWxnLnVVK@_K²xVbV@n¥@aVI@b@l@VaKnb@n`nmmýW@U_wV@VlVV@Vn@n@nI@Jn@°¦VaUU@mVVWVaUÅU@aVKnVbVUmmU@a@kUwm@aUUmUUJ¯lakUaXaWUUaVkkamkmUnVlULVlJ@XU@UJWUUwk@aU@WbkWL@U@WU@@XUKmV@aUVwUĕUJUamUUVUÑmnIVJ@kl@XalJVn@KVL¥@UWIXWmU@mVUKnUWLUKUaWUUKVU@U@anUny@UlUkK@w@a@aVU»UkVw@WmkJÅmUUVmwXalLXWWUnam@XkJ@UVU@U@W@@U@I@Wl@Ènlw@KXLWblVUkalKUUVVaV@@wnIlaUmkUKWU@KkUkLWaKUUWUn@VK@LnnWJUIVkUWVnV@V@@XK@VUIUJ@IWJkX@VVJIVkK@I@UVaUWk@m@wnUWKk@mxk@@lV@bxmb@x@VUmLkUJ@nVV@b@VkLVbU`¯Il@U_UW@UU@K¯wm@xL¯¥kI@bkb@Ua@m@kkW@XVbmV@kV@bWbUbV@¦xXlmVk@¦bkaWL@KUImK@wUK@VUIb@bmK@LÅy@akXW@kbWlXblL@ULUb`@UkUymX¯@mUJUUJL@Lm@@WX@lUVlXll@l@Èk°V°X@VU@UVll@XUJVXUVm@@VXLWlnV@Xk@mVULnxV@@bmkL@VWLUbU@UVm@b@ķ¥UnmJ@UUVkkJUlÔU`UIW@°kLUlUI@WVIU@mWKkXk@WU@bXW@J@xX@l@LVl@xLVxXX@xKnxVknbKVV@ULWlXU`@nUlX@llVXVUKlkUKlI@anKVLXKVaUIVWV_VK@VnLlU»VKVLm"],
					["@@@KlKkUUVVX"]
				],
				"encodeOffsets": [
					[
						[108799, 29239]
					],
					[
						[110532, 27822]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5226",
				"name": "黔东南苗族侗族自治州",
				"cp": [108.4241, 26.4166],
				"childNum": 17
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@VV@XkV@bUbWJU¼Vb@Vnb@b@J@bL@LV@UVlUI@aKULVb@bkJmxlLVxknVJkxnKmnnL@bn`WIXlWLU@UxVbUVmKVXI@JVIVJ@UL@W@@UmUXUlVUVJXImm@KL@UVmVXVLXblKlV@LXVLlVVnkbmJ@xnXl@bXa@VanaÒLmVnIlÞ¦°k@b@@lVnJlUnVX_@lVlKVUUxVLVWVIXJUlnnWlI@KUaUUVKn@VaVXV@na@mw¯@mUkJUamI@lk@@am@@IUmVImUUw@anUVaUU@LU@WaWUXWWwV@VwnU@L@ynbl@@X@aJ@nW@@Vn@lVLlxnIl@@UWKUnIlJXIVllIVV¼XK@aVIV@@bn@VKXLVKVVVInwJ@UWI@mX@WKnI@KmUUVJUL@VKW@@k@aU@@W@InJWUXwWI@W@¯wkaVaUIl@nValIXWWI@UUm@anwWkXWWIUbk@UJmIUamKVUUUVVama¯VkIVVUlKnXVwX@@WVaUUVa@IlaVmknawkUU@U@mUVUVwl°LVbnJVU¯la@mX@@UWKXU@aV_V@@JlkU¯@VnK@km¯kU@WUW@mmU@kmlU@wkL@WUkL@VmLJ@b@V@bknUUVK@UVKUK@Uk@Wa@LUVVnUbmVk@@UU@@aV¯K@U@UU@WmUL@aU@WVw@IxXll@UXK@KXXVJna@wWa£naUKVm@UU@mUmalm@@XkVm@U@VLmWU@kkWxU@@bVV@VkXVlV@UUk@@mI@KUwm@UmVUUwU@lwkV@IUa@mUaVIVKVa@w@U@UJkb@n@bmJ@XmlVUxWXkJmUkUUVWxUlU@aULUmbU@@WXkmL@xUV@nUxÇm@XLWbnlnVnnUVUnVVz@lbUVVlULVb@V@nUJkwm@Ux@bWbUK@UULkaJbUU@U@lUK@XUJmnJ@bU@UwWax@zkJWnUJUUVVV@bXn@xVb@JLm@Xw@`@bkb@VmXUV¯L@mW@@n@V@L@KIW@@aaUx¯@Um@XbW@@LV@bnVWVkKUzlV@bÆa@lnI@VV@@LnVVKUaV_VJVbnU@bn@nX@yVIVxXKVLlUVaXU°J", "@@@KlKkUUVVX"],
					["@@UUVUkUmV@ln@VXVK@K"]
				],
				"encodeOffsets": [
					[
						[110318, 27214],
						[110532, 27822]
					],
					[
						[112219, 27394]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5224",
				"name": "毕节地区",
				"cp": [105.1611, 27.0648],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UkV@kW@Xn@@KKVIVVIn°@nWVzl@V_VaVK@kKWaXklaX@lW@bÆz@KnL@aaVJ@UVL@xnLVJ@LXKlba¥l@nUWkw¥U@VaXa@amLkUKm¯kmkIUaKUIWkKm@anw@mlwXImUk¯@a@amU`kkKWVkxmUUak_mJmw@wmXUW¯X_@WnI@aVwkWWýÅU@WLkUaUbVV@lUVVnm@kUmV¯kKLwmVUUaWVaaWw¯wÈ@VULUVUUK@nWJkIl@Umxnbm@kbUJa¯bUbVxmLUVaU@VUUWxkVVV@bUV@XWbnlUbbUJlbUV¯b@z`WbXnmbawUwVWUbUxmbU@Uam@VkVawVaUWI@mUKóz@lUlÅ@WIb@xXxml@XklULWKUmwUa¯KUXWJkaULmKkLWbkKUVImWa@kUaULW¯LK¯@kbL@bx@J@bmnnlUlzU`U@@Ub@mn¦°bUVx@bkVm¼mx@mkmVV@bkxVnaVV@bU@mL@b²`lIVV@lXLlbVxn@@bl@XllIVnbVn°°wlbXw@mVa°lVnU@mVLVbn@@b@@WVnUV@Xlxn`VznJVb@L@bV`V@UnwU@WUXKV@UUlmUUlaXalLmbIVbnJVIlVVaUUnWVXnVLk@nWnblnlb²xxVKVXlVXLVWLlUVJna@wVL¼@JVX@`@nnx@nWJU@Vx@XXKUblxU°LVKVVlL@KnbVUnJIlUnKl£VWxIlJ@nVÞUVVnbVX@V_°lnK", "@@@UmWUwkU@Um@@VkL@V@VVkV@nbVa@"],
				"encodeOffsets": [
					[108552, 28412],
					[107213, 27445]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5227",
				"name": "黔南布依族苗族自治州",
				"cp": [107.2485, 25.8398],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V@IöalK@UV@@KUaVIVVLlaVbVWnX@@LnUlxl@naVLXVVaVUJ@lUUanWWI@VlV@Xbb@Vn@VmVVbk@kU@VV@XJ@zn`ULW@kK@_WVUK@LUb@Jlxn@nnWlU@@bx@XVVU@UbVb@n`VI@VVLUlUIUV@KmL@VV@XIV@@lVLVmXV@WLXLW@U`nkb@Vl@UL@VVVLllX@`lIXbJIXWLaVL@XXWĢb@bmK@L@°@VnxmxnK@xVn@VkL@VLakbl`VnnxVnUlV@@VVXV`@k°JV_UalK@U@aUU@mIlVnKV@U@wnaw@akU@l@nwl@XLmV@xnl@VXUb@V@JlLUJUI@UlWUnLVUUaVwV@XKWkXJm_@amKnmmLwlUIlmUwkKnwlI@aUaVKL@bVJkVUU@@KK@a@I@ama@UUaV»XIVa@alU@WUU¯IWVUbkVUKWLUwUJ@zmWm@@amVUaUIU`VbULmU@KU@@UmJ@kÅb@akUVylLXUmU@aU@KX@Wan@V°@Vwb@bX@J@LK@@U@mX@@n°KVUnW@Ula@a@_x@WnK@IUa@wWm@aUUUVVVIXmlI@ywXbVxV@@aInmVI@WVL@k@VVVaIlbVK@VVLXa@aVwn@lxVI@m@UUaVKUkVUka@UymUVVUmmUmmkXaWK@ÈnVw@mVU@wKlnXW@V@naVVKUk@KVIUW@mk@KXU@Um@@lVk@UVJna@UWaL@a@Xa@kmmVUUk@mkkamJImJUUmIm±aUUkambkamVUU@VlbUbVVxXWVUU@VUakU@UmUVU@mnUVVnUbVJ@bUW¥kLVamVkUaWJU_UVWKk@@nlUVVJUXm@Vm@UnVlmbnmJUbULU@@UUKWVIWxnJVb@xUL@bUJWIkxbkb@xVJbmU@kW±LkKUkVa@a¯am¥ULkalÑlKXUWXaVakImV@ka@UUJ¯aXmmbKWU@wUUaUaKmU@UXlWb¼WLUKUb°UlVbkbVL@VJ@nVlUbUXmJ@VX@lbUbU@@bWb@VnLVJ@bVVUzVL@lnL@bVVVULmKUkJkbm@xVb@VkKVnnV@b@WXUnVlVVXVJUXlVXbWV@VU@Ubk@@KWbUUmL@JnXV°XJ@_`UbkXVVlÆkb@VLXVV@V@kKXX@`V@@n"],
				"encodeOffsets": [
					[108912, 26905]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5222",
				"name": "铜仁地区",
				"cp": [108.6218, 28.0096],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°a@aÈbVUlU@aVKnVVVUlyX¹lWVa@UVnUVU@m@mUl@mÞw@xnIVbna@KVIJ@kwV¥UXÇVkVW@kkKWU@aXUWmnIVa°VXbmL@VVbnVVVUbVbJVbVKXkVKVanU@aWnWUWa@Unk@mVIVK@wXxlLXbVJVlKbl@VI@maXalVVVbX@@aalnkx@b@Vb@Vnx@bVVUXn¤WXn@Vl@Vlzn@`@I@KUU@V£namVkXa@aVKnnU@anVlKa@UUU@amk@»kU¯@aVWnkWmkImU@akaVm@»VUV@UKnkW¯XWlkUKnIWa@nmlIXmWUnwUwWm@wULmaUJkIUaaWaklwkwmJmU@bkJ@XUJ¯W@XbWbUKUkWJUUVKnn@UmmXUWa@mU@@UI@WmXVykwm@kaULWwU@¯lKUUVU@mU@UkmaUbmV@bxVnVUJVn@Jn@@bl@@knJVblInV°@nx@mbU@UWUbm@ULVVVb@LkJmXkmVWIUJUXUKVwVUkLkU@W`UmkVmIU@k@@a¯lÝ¥kmJUnKÑmbUb@Wbak@mWU@UbUVVkLlbUVkXaWK@LkxÇmk@@X@J@V@@X@VUV@VIWln@mbXVWXkKWbnxVUnVÆInl@XUxVl¼UV@b@b@xlLkV@VmzmV@b@VUVVLXVVbVLXKmVVLU@nnVWXXJ@V¦UK@LUmkIWbk@@lUImJnVÒVUnVVbVIVĖUxV@bnUVL@WV@@X@VKlXXaV@@blVxXVVIV@@WkIUVKUkVmlnnbllUVbXVWbblVkb°VInVVV@bnVx@l@bnVVnUUamUL@bVVÆUbUXUn@VVUb"],
				"encodeOffsets": [
					[110667, 29785]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5223",
				"name": "黔西南布依族苗族自治州",
				"cp": [105.5347, 25.3949],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VL@Vl@@IXW@kVUVbnW@XlKVVnUVlL@baVbb@xX°ÔUxV@kbm@VxkxWJV¦@ÈnVKxWXJmV@nÒ@xVbn@@blLk`VX@bla²JVUlnn@U±lw@wnw@mlwVIX@@m@klKnkaKnwmmXkÆVmU¥l@nb°n@aVwVmVIVnI@a¯@mU°l@@VnI@JV@UV@b@IUbVJmXöºzllUbVa@aXUl@U@llLnKVaUa@UmK@UwVbnKV@VwVK@UXV@Vbn@w@UWnX@a@mI@UUKlaUaVk¯VaVLXK»XaWk¯mkğwmW@mIVkwJUIÇVwUUkVKkm@UkmU@WÅwm£Vm¤¯IkJWa_lUbmJzÝJkUÇVU@bUÝnm¯LUb@`mL@VkL@VUmmk@UU±Umka@kU@ķymUkk@mmkÝmUaUakImV@V@VÅL¦JUXmJXWb@n°Æx¼nV@LlbUUbmL¯@ÞbV¤nbVx@bUVlblI@KVVUnVJUn@VlLUlmLUUUxmK@I@@VW@@bU@UJmUkLVVUl@b@V"],
				"encodeOffsets": [
					[107157, 25965]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5202",
				"name": "六盘水市",
				"cp": [104.7546, 26.0925],
				"childNum": 5
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ôyVL@nXJVUbxbUlU@nVbV@naVwaVUXVxxbnaWmXa_@y°aVUkaVIaVamkXa@WVU@aUUlUXwVV@UVbVUnKUwVa°abVIlan@manw@VklJXI@mLVVVUVK@UÇk@KUa@UkaVU@UVWV_XWVXVWlLXKlLXaÆKwVL@akKm@Uw@@XUVk@VUI@wWK@aUVI@UkK@mLW@kImJUÅVmkXUW@UJkx@nmx@xkxV²m@kmUV±Ikb@aUWl_kK@am@Ua@wÑ@mnUWIXwULm@ÇU¥XIlwUwn@laU@Vw¯ÓW@waUab@akKUmVUUkL@WmXUaUV@lWX@Jk@@UUKULmLUJmzkKmVX°VUnWKULL@mU@UnVJ@b@UV@X`m_@l@@bmbXJmnn@°wnn@VLX@V@nVl@nk@@bl@nn°WlXzW`XXVKnUlxVbUb@VXb@VxÈbVlnbmn@kVUL@mLUVVL"],
					["@@@@UmWUwkU@Um@@VkL@V@@V@VkV@nbVa"]
				],
				"encodeOffsets": [
					[
						[107089, 27181]
					],
					[
						[107213, 27479]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5204",
				"name": "安顺市",
				"cp": [105.9082, 25.9882],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lL@bUKxÅLWbkKWLkKUXUWWXU`UX@VUVlb@VVb@Ll°xXxbbXUVbVnUxKlL°nUlVn@UmVU@kUUVablVXKV@ÆXþlXUxnU@mVK@_@ml@UU@blU@KnLVyUw@@UmkWVw@UVK@VXzVK@nVVUUW@kVJnla@nKWkaWL@Uõb@JU@mU@@_WWL@lUU@WUUK@lakÅUUlWVa_@`WIU¯mW@InKVVXa@Ll@VaV@@UXUWakUVWUIUWUkUmVXW@@amUUmLl@UUawn@laIVlnLVKUUU@amK@kUKVyUU@aUImK@UXa@aV@VakaW@@UnIVWVaUkb@mWX@Vxm@UaU@W@VULUxU@mLaUx@VnL@VVbUbmLkK@kVk@WV@bUbVakkyõ¹nWUIVa@J@aVUU@@ImJ@Uk@¯V@n°@bmJUUJUnUxbm@¯mak@¦VUnÅWlnnmxLbmlkL@l@nWVnlÆUVnIlJ@XnK@lL@VJVU@bXL@xVJUl@VU@W@Vxn@"],
				"encodeOffsets": [
					[108237, 26792]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5201",
				"name": "贵阳市",
				"cp": [106.6992, 26.7682],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nlLXVJLVblJn°lnLlVnKlU@nUUa@WlX@ln@Vb@la@alJ°¦Kwn@°xLVkUmmwUmk_labK@UlK@UUm@wLmnwmw@U@¯@KnL@aaġXWW@UKbKWXJIWakJ@_kWkKUU@UVKk@@UlamV_X@WKXK@WUUnUK@kU@WJU@@UnK@LVUVJVkUK@UUJm_@UaVaV@UU@Ww@aV@Xkmmm@kw@IVa@KVLXU@`lLX@VKm_@yI@WU@UlVl@UanU@Um@UaWaU@Uk@XJmXVbkV@IUVUbWUUKmbk@kwmV@K@mWUXUakbKUUUJVb@LU@@VkL@VXKlbXmL@kbmUI@lVXUVU@mULWy@UUL@VUxXnl@V@VxUzmK@LkVa@VVk@@n@`UL@nmV@bmJ@X`WX°WVn@xnxnIl`VbnVlwXUlLl_nV@b@bl°VnWJkx@nmx@b"],
				"encodeOffsets": [
					[108945, 27760]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5308",
				"name": "普洱市",
				"cp": [100.7446, 23.4229],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Uô²a@²²Ķ¥V°Ķ²bl¤kVxl@°Ś²@y@ô¦¯@xxVxUVbVÜm¼ŎĢmºXXWÆ@ĀmmXU°ÅÒm¼Þx°w@°XêĠ°»nV°Ul@k@V±ôī@£ČŃÆ£KÞý@¥k@ya@nWVUVwm£Jknm@wmknXX¥mUUlUnb¯°nkVInlIUw°nmk@@mlanXlanmk@wVWUw_@éĠanmUaÜ£mX¥¯@@óUmÝ¯¯ÞÝlKnxô£»»ĠJ°aVUÝÿV¥ÛbI@wmón¯yÛL@WkÅmÈ`IWa¯K@¯mUnmaXmbmak¯ĢÒÝm¯mV¯KÇb¯KÛWWX@aVknċLUWVkXóW@ka@ób¯Uwmb¥UUlaU¥U£maķKXkmÝ@kwmÑ¯k±ċbUUVakaġ¦kL@`a¯xmÅLUW@ċnÅUV°LkL@b°°@¤²nôôkl°kèÒÈzV¤ÈWôônV@¦@¼Ux"],
				"encodeOffsets": [
					[101903, 23637]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5325",
				"name": "红河哈尼族彝族自治州",
				"cp": [103.0408, 23.6041],
				"childNum": 13
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°°nÞôV@°@¦WnÛ¤Vbmnğb@ê`VxUX@xÆÞUnnWÞĸĢÈ@Çè@zÛÜWÅêl²KnV¯ĖĊx@bk@@°JÆ£Èblnnm°nlUkVUUwVmKnnVÞxVLX¥laX@@xl@VzÈVmk@b°ÈĸmV¦`WXbUbbX¼°x@aVVkn@lþnXUlVxŤÅyIUkaIŎĊ@lXx@bz@ô¥_V@ln@ôy@al_l`nmÈ»@kmXwWKU¯»aÅ@wmUÝKUaUUwW@w²»@kÆV£mm£VKkÑV@@»nw¥@kÆnllIVlnLVakalknJWmnaUaVÑVVÞn¥m@¯Uÿl@VçaXaV¯UyVLVk@nJlXLlkxlbla²Òl@nVJVkxKlkUaVķÝÑU@Åm¯@±Uó°ğńķĠmUÑ@Ç¯¯Å¼@nml@°¯¯`@w£@¯Çk@»nmċ¯U»I¯LÇĶÛn@bó°Uwm¯UmÇ¯aI@ykIVU¯bIğ¼¼ó¤mwkLÝÞ"],
				"encodeOffsets": [
					[104243, 23429]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5326",
				"name": "文山壮族苗族自治州",
				"cp": [104.8865, 23.5712],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@wô@²¯maUmôUÆx@XbÞInlVUVwJVaUK°¥xmÞXnlKlnna°@ĊČÆwUmnkl@°£nyn@VV@Vak@@kÞÝbmx°Vnw°klÞInĖÞVlKl@Xa°KlVU@JnxU@ÈĢbUKlm@ak_wanWUk°l»k@Wk@lwU_@UalóU¥ÇnkJW@mVXx±bK@nV±a@Åa£ÝK²WknamKknÇk¯aVV¯ĀUÒ¥I@mm¯¯xÅW@@`k@ó»UU¯lm£ÅWlĵw@mmwÅmWU@y±UxmwU¯U¥Ý¥¯£m@kÇVUV°VbklLwUlUImk@±ÑkbkalwkWKkmI@UlUKVzU°WbbUè@kVĀ°@nm¦ÝUUUÒVbmbXnmIkllbUbmKUkkJmkÅ@l¦mx@¼U@lÒULn¤nU¤Å@l±¼@xXxVVVbÞLVn@xÆb°¼V"],
				"encodeOffsets": [
					[106504, 25037]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5303",
				"name": "曲靖市",
				"cp": [103.9417, 25.7025],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@È¦lKÞĕUV¯Um¯ÇVUnVVUĉnĊÇƾLn°°ÈJÆw@lbÞa¦VXJ°¯W¯aÞJVkUa@lKnÅmWUk¯a¯»@m±@ÑkkbWWX_WÓU»_lkÑm@U»m@l@IWċn¯l@VanVUVUVwVxKÈVmUē@n@VÝÆLwVVwnVlmkUVÑÇ°ka@kÿÝaÞUl£ċĕX±±ĉa@UnVnalónk@wlUVmkÝJaW@ÅwóVVnnb±°@óxXLWxn@lÇ¼nmk_k`@bózm@kU@`¦ó@nW@ÜÅXWw@yb¦@ÒlnUb@xlÜk@²Ç@U¯bmy@kV@bb¦U`lLVx@bLl¼Þ¤@°VVÞU@WÞUbJ@nn@lnnmxUUUbK@ÇwklkUVWakn@lbU@@ULVxkKUn°¯Ò@¼km¦m@klȰ@lUl¦@Vl°wnnþĊUÆbUxbVĖU°annaVal@@b"],
				"encodeOffsets": [
					[106099, 27653]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5323",
				"name": "楚雄彝族自治州",
				"cp": [101.6016, 25.3619],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@mÒXU`Wn@Xl±¦Uxnbl°knmKUxxVôUx°¼ôÒÈ°JlnÞKĠW°¦Vx²JVw_°¥@UV@@wnymknK¯I@²b°£V¥wUV¤nLkÆJÈwôô°l»Č¯ġVUU@@°ÝXl@U»°Å@U¯@w±¯VmUUlm@mÑnIVyUwmak£Vwm±@Çw@n@UxkwlÇnLmkÅ@±kka@kóJV¯Ç»U£lw¯Xalbl¥¯UX@aUaÈL@ÇVIVkaU¯mmakLWkUJ¯Umxn@kUx¯xmWÅīÝkkbŤbkxWmXwWk¯wKkLÅ¤ċń@¤óĬU²@@lk¯VmU¯¼@xV@k°l°kbU°nmVnU@°UVèÞÆbUÒÞnU¦V¼lô@Vl"],
				"encodeOffsets": [
					[103433, 26196]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5329",
				"name": "大理白族自治州",
				"cp": [99.9536, 25.6805],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lbKVIUa@²m@bxôÒÜxXLmbnl@K°¼kUôxôlV¦nJUÆnm@xÆwbXÆôôLUVwôK@wlmaVw@WknmIUmlnJla@_@kÝmKUaÑm¯Xw°aUaVl»²JVbÆJkôĶĀ²VVkmbVwUówVwnLlmk¯maVw²¥Wk@XmV_WnÑUk@kó»UV¥ÝmVÑÅaÝUçV@¯VUmn¯mVlak¯l¯U@@wğWé¯@¯xÝw¯¯Jċa¯U¥mLU¤bÞȤbÇLWUwmIUVW¼kb`UVb¯L±ĊÛkÿÝKkwKţêUĉþÈV¯ÞVbU°KVk²ÝmImV@kmUkVxm¯KXÈķJU¦V°ULWxL@môb@bkx±LnVUVLnkÜWnwlLÅƒmW@kkJU_VWĊÞ"],
				"encodeOffsets": [
					[101408, 26770]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5309",
				"name": "临沧市",
				"cp": [99.613, 24.0546],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xĢl`²X°Vx@x°Þ°KXağUÑWbnIl`X²°bxl°V@xVxk¦mbl@xXVÆzX¤Æk°kx@lźêlaX»VUnJVxXÈKaÝȣaV£nKV¦°Čb°I°n»ÆÑV¯nWn@ÿXÅWWn¹ġōn»ÛUaUVUww@w°ó¥@z±@ř¯@kUwlk£±aĵ¯Uĵ¦±±@bó±VÝ@ó¤w¯I@mÅóm±X¯IólK@°UllbzkKlln@@ÔºUmVk²ôÒxŎUVóLbmÈnmbnlax@z@Æ¦k"],
				"encodeOffsets": [
					[101251, 24734]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5334",
				"name": "迪庆藏族自治州",
				"cp": [99.4592, 27.9327],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WXw@akk@yk°īX¥Uóķ¯w@n»UaVaUÛ¯mV¼kÞċô@n¯xÛÒmV¯Ô@x@kwmÅa@UaÝ¯VÅyVa@ÿn»ÝVmankmmÞÅô@n£±ğzÇmU¦VmnÜmbn@°nV@xmzÅ@mºV¦k°ln¤¼õôn@xkÆIUxU@Ť¦VmVkmkXW¤XzVx@Æx¼Þ¯b@lVĸÞVm¼Xm¦VÞ@Æ¹Vón¥ÆKnKX¯x@èĊÈ±łXaÆxnlV@UÛlȻkğV¥m²ǉmÅÞĕƒƛm°ÆmX¤mznÆV¦ÞVVb°bnÞWbn°l@VÈ@VĵĊ±@óInxÆw¥@£ÞW¯ĸ£UUKk±akkkbmWmÈķaÆÇUÈÆW@wmknmU¯"],
				"encodeOffsets": [
					[102702, 28401]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5306",
				"name": "昭通市",
				"cp": [104.0955, 27.6031],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@mnK@wmUÅ¥móXǓŏmX@VmL@xţnk@mlUŻÒğŋ@L@mmLkm@bXÅW¼ka¯lÇŹ¯aÇ»ÝÝ_@m@@a@UklwUm@ak@bUmbmbV¯ĕUaVwÅaĉVmým¯xUk@k¥VUX¤VÈm`@ńÇÜ@ĀknĔkƞÆĠÞUVôƆÞI@UxÆ¦nl@ĊĊnxUÒ°¦Vb¯WUnWIml@xnUbô¤¼ÈxlI»KV@ÈÔJkUĖ±ÆVb@nVÜVUVLwĠlknĠ@nx°¥Æ²mUw@mmÅUl¯UÑÑUmLllIl±@VkwW@w°@U»kUóI°»ĢÑL`nUĠ²lmbôV@nJUxÆ¦X¦l@ŎUV@lVKVÅV£UaÞUnW@¯VU@ó"],
				"encodeOffsets": [
					[107787, 28244]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5301",
				"name": "昆明市",
				"cp": [102.9199, 25.4663],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n@VkVUn²°@x°V@¯ÆV¼k@WÞ¯@@VVUĢċ°k¼VĊx¤Ōx°mVkÑÈL°x°X°VmĊLVxUĖ°bX¦VW@kȯlkn@¥ln@»°Ñ¯VmlLUwVK@V@ka@lmXbUlVlkÈx@LVaVVwnmm@km@mIVaÝ@XVUÝ¯U@Ý£k»K@aUwkKV_¥a@alU@nz°aVÈ@@±lÛk@wVakm@Ñ¥az@XxÆW@ÛX@m@y@aWw@kōĉJlbVJzţÆUwVkmWkým@UlU@b¯wVºUVUêĠXUaUbVĊUWXUmkKWnUUUVVVÝ@kk±¯Lk±WkXlVkl@wXbmLVUIVmk@Ubma@kkaVKUkmlXLWnJ¯ÒĊ°@zkºlLUŤn@@nô@lÆnmKkÈlxVw@@mÈx@n²Uxl¤nbVxUzmJÒn"],
				"encodeOffsets": [
					[104828, 25999]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5307",
				"name": "丽江市",
				"cp": [100.448, 26.955],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l@@w°ÓUnÜÑ°w@mČóÝlU»n°VÜUbVbm¼@°xôĸVW¦¯Ĭl@zll@bWxXaX@ÆĠÆaXwl@XaÆ¦n¼Jn@mnKW¯È»V¯°akVanXVwl@VyUĕVUbÈīlaUk°k¯l²VUkƛô@I@mVwĊaVakaÆbUVLaXIWKUwaWÑÅKUaVk°@Uw¯¥XğÝLkm¯IÇóÑ¯»anUl±UĵÿlóÅIaU±Ik¼UVb¯bWxn°ÒVbnLlÞ@@`kbmIkVnJmnXl@Uxbkn@xóLUxVKóóÅWaÅxw@nÅmVôXLlVU¤b¦m¼@ĀbUzUÆ°ÞVb@Æbnx"],
				"encodeOffsets": [
					[101937, 28227]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5328",
				"name": "西双版纳傣族自治州",
				"cp": [100.8984, 21.8628],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l²°nÒlxÞ@nWlLĸnbV¤V¦kbVV¦nax°Vôa@b@lôXlWUVXČKlmU@bWXXÜ°LÈa°LnU°ÞnÑġ°lnba¯¯KWó@kmK@UĉV@k°VV¹a@y_ċl_nÓlL@anI@óWl£VUlkĕlKVwU@kVam¯ÅL@bÝk@VnUbÇbÝwÅ@ċ¥¯lk¼ÅÒ°b@¦nlUn@ÇVmÆbWôU@ÝÅōm¯aUmkWWw@±n¯UèaL¯mLkwl@°mnÈÒ¯ów@VxĀU¤°Į°Xl"],
				"encodeOffsets": [
					[102376, 22579]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5305",
				"name": "保山市",
				"cp": [99.0637, 24.9884],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X°Il@¦È¼m¼ÞaÞÅlÈxV¼lVôÈÆlLÞ£ÈºlkUUw¯UĕVwĊ@n¦mlnVĸIWÇ°LnUwlVn@lnUnJÞl±U¯LVUa°ÝUÇĊýVŤéLlxÞLĀÜl²ĉ°KUaV_Źé@klw¯lÅW£ÅyUW@wknal¥Uw@wUk¯w¯aW±k_mJaXVÒĠWb¯L¯Ý@wwU¯±Wk_ġwwōKmb@¤bk°lĖôUJVnÅlťU¯°VbnbWxXmÞWUĀLyWzÛKmbUxVKknÝkVĀċ¤Ux@¯m@¦"],
				"encodeOffsets": [
					[100440, 25943]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5304",
				"name": "玉溪市",
				"cp": [101.9312, 23.8898],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lL°xXlWxXnlwaţlaÞlÆĬnX°wVwl@mnw°VVIXllKbnnV°lbUUJ@ÈÇKVb@bW°Vk¦kaWb°kxV¤È¼U°ôI@llbl²@@ó@mm@VţkKl¹@yĉ¯°ÑIXmWKnklVULlb@lnbVal@UnVJUnKWax@lkkUlW²XlK°l²@lÞUUUVVVXmlLVnXWVUĉVaVbWğVéUVU¹W»aVaaWX_U¥nÇķ¯@alUnÇUyk@@wW@kbW¦UKÝwUmmLUnVxUVVlk¯mmnmkÇaÅ¤¯I@l@@aĉw°ĕmUL±kÆéXÜÛ@yÈç@ÇġÝķXmmÝVÅlmnkbmWkb@nl@nm¯VxkJmUJml¯°makVVnV¦WWmnl@xmnlI¤nxUVUmX@b@zl@¦Ýþ"],
				"encodeOffsets": [
					[103703, 24874]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5333",
				"name": "怒江傈僳族自治州",
				"cp": [99.1516, 26.5594],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WyX£lWlnnUU¥@ţVVwJlÅ@wmöó»£kml¯U¥n¹Æ@ny@wmU@¯mnamÛnUV¥ÈnĠy²m¤@ÆónÝnmlnbÞU¥aV£kUKWómIU¥ókwVól»¯Lk@mnaWKÛwóÑw@a±n@VbUJLkaÝXĉUV`lI@lnXÆƑkKmxÛXmlUKVmU²Klw@aaó@nKXwVKU¯V¥mUnkm¥ĉ@UxVĖ°VxVklmÞkKWĀkVWnl°Lnm@°UxlV@nk¦JVÈ°VÒ@nX°@ÆlUômlnô²nxmłnVV¯x@Èm°XblVUl°@xkXU¤WXXWXÆmkÅJmÞw±bxUīkKmÅVUĖÝèVkx@lXlnk¤LkĖk¦xUL°¯Ė@LnK@b°xVI¥Ua°Ñ@»nm@¹KŎÞÈWln²n"],
				"encodeOffsets": [
					[101071, 28891]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5331",
				"name": "德宏傣族景颇族自治州",
				"cp": [98.1299, 24.5874],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¥n@°@VwČ£ÿUlÞlmULVwnaÜLXyzKVÿXÝnWXwmaUa°¯VŦÆkUmVIókĕl¯a@£nama@¯m¯ó@óyţbġkÅm±ÛammVkLwU`Wk@VkUmÅlUUKmbkkUVUw¦ó°¼bn°ô¦lºz@x¯@U°nU¤ţU°VƆ@ÈmlnzÞl°¦ÆaxUxLkxWƒn@²ŰW@°ÈXl°Llx"],
				"encodeOffsets": [
					[100440, 25943]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5424",
				"name": "那曲地区",
				"cp": [88.1982, 33.3215],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƨʔĸbÜºÞwnxźbÞ°ô@ĶĸIÈ¼ĊJŎÈôUÝƒ¤ǔLÞŎ@ĢȘblôLÇźçÈ¤ôL¥ÞIÞ¯ĶxʊťƨƿÑĉXVķŦ¯ȂKÇǕÑ¯IU£¯Óƿ£VĕÅÞÿÆwƑ£ǖxÞĕ±ÇÝaUÑÈU¯UōÈÝwWŁĵ±ÝóĢÿ°IÞ±mÅĢ¯mÿ¥°UnÑŤĢĕĶwǬŻͪwŎ¼źÇĢĠĕˎŁ°óƨ¼Èam@¥°wǔǖ°ƨÇŤġƨŎŃôbÈÛŎĊ°@Ġw²ÑÞJÆÆb²°êĊUÞlÈ²VÈKĊÒĸĉ»ÅôťUÅÇk¯@ÇÑklÇÅlĢVÑó@°@ÛĸV¯ÇĊn¯Uĕƽ¯m¯bÈ@Ò°Ĭbĵ¼kxķýÇJk£ÝaUÑÅóĶǟkÓʉnĉÝ¼Ƒó»Þmn£mČ¯@ȮÿV¯ĸk@Ýów»ğġ±ǓLōV¼Əèķĉè±b@ÒţUÑóakl£Ó@¯L@ÇlUóȁ¯aġÈÅĕÝLķ¯Ė¯@WĬxÒÈnW°ţôU²ǓÓġ²V°¯ôǔÝLċk»Ý»Ý¯ÞVwÛÝÇōͩÈĉċ»ĉm¯£W¥ţKkóġƏW@¯±kōÈb@ÒÇaÆ¯akóÛÇ¦Ýa¯Ýĉ@Ç»ÛmǓxķƛ¯lVĀÅÞġbÇJUÅVĖƑWzō»ōWn@è¯ÞóVkwƩnkźÇÞÒÞ¯ýğÇUxÆÈnè±bĉÝ»ÈŃwwÞ@m»ÈV@ýÇ°ķxaÝ¯Xċ¥ÈóW@ôkxlnxVÈóĊkŤġ¼@°¯ŰƑL̻Ű±ŎÝVÞVÇÞÅÇakƞ@èğŎĸżƾ°ÒLÞôĠKȰĖźVÈÒĠ¤VôUÈþťL@ôǬÞlÜÈnÇÒUŚ@ĊƨW°°X@ČÇþƴĉÒķ¦@ĢôWĀôłUÞĢǬź°¼@ôV°bUÆnzm¤ƽĸÈ"],
				"encodeOffsets": [
					[88133, 36721]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5425",
				"name": "阿里地区",
				"cp": [82.3645, 32.7667],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Çƾķn£myVÅaU¯ó@¯»ŹġǫVÝóŁXÿġó@ĸ¥ĊÑƳÈý@ċW¯X¯ĉƧ@VřÈÑÇmkÛǫÝ@óŦKÇýVUó£ğÇÑŹUȯĕğLÝóK¯ÑƽķŻĠō@çlƝÈbÆÈÝUÝÞU²ō̼ůƒK°ů@¯UK±ĊƧbōÇmçÈġóÅóbźó¥kīÆ¯ólçKôĵUÅVŃķ¥nÅŏm¯¹Å»@ÑÇóxÝkʇȤU¤ķb@ƒ¯ĊÇx¯ĸĉKm°Āk¦lKnĬȀƾÛ¦WÆÅmǊĉ°ōUţ¤UŎ°ŎKÞłÆǓ¦Þř¯bmUÝl¯Umğl¯£șwÅǫaÝnĉĶk@¯Kō»ĉnaÞ»ťnkmlĸ¥UÅŻkÑťĉVôó°LôīĠUÿĉǕÅz±K¤²ō¤¯Ė¯UÝ¥VĵóÈťÝwķÈÑk¤óWýĵĕVĠVóǓķ°k±VU±ţ¦UǟÝÅJVÑ¥XUċUÅlÛƆǕÆȗƆ¯wŏÞÅ@ĉlÝóÒnUôÅlxólÝôÛ±LÛôÝL@ġ¯X¯ÇUÅ¼óaó¤¼XÒġŎóLk¦ôÅ¼ĸĠ¼KġƆô¦ÆƑÔĉĶ¯ImÒ°¦n°¯ÞlÝČnƒÒKĠÞĕklýƾťôIĖŤÒnƜm¼¯lnżóÞ@Ůó¦ôƽĖċŚn°Ý°ôÈUƜblÞó@ǖô°UÈƆ°XþôôlѢ²Ėm¦°@¤XĊblÜzkºƒĖmXŎWVóÞn°lĠxȚa°»żLźb@Æ°XĠÝȚxĊĕŤaȚ°È@@èŤ¦Ü¼WÞkÈ@V°lŤkŎ±²¦ƐUǉ°aÈÑŎbĢŎbÆ¥ÞIȘlôVÈUbkɲĶnmnXb̼òƾĖŎ@ĢȂÑôÓĠĖʊĊÔ"],
				"encodeOffsets": [
					[88133, 36721]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5423",
				"name": "日喀则地区",
				"cp": [86.2427, 29.5093],
				"childNum": 18
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĶĖXþôl£ÒĸÇÞxÇŦôUĶÞ¦°V°ĕŎ£±£²LÆyĊǖĀğVóĬ¯KóôUĊŦlÒżVÆķ¦klnŦmÝ¼bĊmŎ¼L@°lĊĵÞmǬbÆȚx°¤Ġkn°VÞkVn°aŚÝǔ¥ÅÝŁōL¯ōVŤ£ŎVĊ¯nǉÆXÅÜ¥ǿƽmīLkl¥ÿn¯ĊL°ķÈw°ĉ@ƑĸaV£ʈȣÞlôwÈ@Ò¼Æ°ºŐnmÆĸ¦UńÆVóĶLèôkÅ°lĬ¦ŹôôaÆôÇĢnèŎÈƨaĉ²VLĢ»lţôĉUÇwkmlw@óôXÇČ¦°WÞbwĸÈ¯@þÇUn¼Ý@xxÇńÞ¼Ċ²amçÅÇVwĠÈþ°ÝÑÈÝlŹƪmlxôU°Ý@çmXŎŎ¼yƒXĕÆUVÈIĢaÆÝUÿ°kĸƜǔwnÜÈ¼Ċ@Þ°ÞbÈ¥Üôl°bÅÈb@ÑaÇ¯UU¯Vġ»¯aV¯Ç°ÅmnÑŤçǬVǬ±ĉ¯¥Vĕ¯Ýk£ōw@±ġÛ°ÇVÑ@Ûa@ČLƳÇa¯¤ÝIĵ¼U¥ƿōķÅţŻókÝóĕ¥¯U»Æ£X¯ġŃÛkÝ°V°ó¼¯èWôÞĖȎkĀƧĀówm¥¯JÅ¹ÝJÝōVVÅaÝƑ@ğŭÇ¯_ĵVnxÅónĵxÇĖĉVÝÈğVÒó¯±Żĉ£ķÆÅLǈĉýţÛ¯VnV¤ÝÈ@°ÅÞÝ¤ŰğŁm¦ÝxóK¥ɱÈUĠôêVôÛ¼ÇWÝçĵaō¦óĖƧlÇĢƑnŎÇV¼¼ºÛ@m¦ƽĉmm¯ÝKÛç¯bŏłĬb¼ÅLmxť°ÅUÝXkÝmĉ¦W¯KÒknÝaVÝè¯KɅńÝKnÞ¯¼"],
				"encodeOffsets": [
					[84117, 30927]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5426",
				"name": "林芝地区",
				"cp": [95.4602, 29.1138],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VÈłVôÈk@°K@Ôk¤lôbVÒŤ@Ñ²açĸĊƐçU»ŎǔKĢ²Ġ¼ôx@ÞlƨĬUl¯ÈLVÞJ°ÜnʊwÜbXêVÞ¯°anaU°wÆ¼ɴÑWÑ°mÈýÈam¥Þ£Ť@¥ôblÞĢź¥ôxÈÅmÝĕÅV»ĉōŤōnó»ÈīķIUĠÑ°ġĸLÞ¯VÒÆ@Āb¼WôÈ@V¼ôóŤKÈÑU»wVǫżnWÒÈx¼lŦ£ĊōŤx²¯@ÆU¯çÆ@¤°£é°k°lůÈó@¯ŤÇÈĉkkÿó¥ÝXķÑÜ@ÒóŚÝ¯°ĉówÇ±¦ÅJUÒĉĀķw¯°mĖ¯±akxÝÅn»lÑK@¯lU¯UVÑ¯óĊ¯mōğVǓƅÞWÝÈÛ@ƿô¯ÜġzÅþ¯ólmôʇġĊÅUͿřŏȁˋŁóÇˡōƧÇbw°Ķôk¦ÒnUþġÒÔkǔķèó@²@ŘōńĵyzġaÝ¤ÅI¤Ƀť¦ğÑ¯¤ķbó¯ó±U²°¤ČÜVnÈÆŚŎ°ôĢþÆzèVĀÇĀÇXŹÑ¯¤ówċķk¦łUÒġzÇ@ÆÝx@²Þ@Æ¤Uô¦U°xU"],
				"encodeOffsets": [
					[94737, 30809]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5421",
				"name": "昌都地区",
				"cp": [97.0203, 30.7068],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VĖm°ĉÈU°ķÜ¯@@ôUÒġkÆkÈlÒ@Èl°ÈVÆóŦÆ¼aÅĢɄwnōw@¥Ŏ¦°ŹÞmV°wnÿwwÝw@¯mÞŗ°wĠĸkÞğlĔ²¦°@ĕĸwVóal@nĢÇĊn°@¦źUXçǔůĸVÆKÈÝĠ²ÅĔô@lÈ_mzǖlaU¼ôwV°¯¦ĬÈal@ČÇ¼nIxô»ɜ@ƨ¥ɆŁŃǪȁkƛƨȍʊȡóĭ@ÈÇVůÞĸƅmēƨťÅÈʉVǵ°ġVŭÅɧ°ÿnɛ£mķ²ŃóÑUĉ°mÇ»¯@mxUĀ¯èţ°ȁÝçġU¯ÆÇţÈ@°ÇôŰ¯k¯lê¯¤£Å@èV°Å@±°ţwĉŎť¤k»ÇwXÑŻmUǬxV¼ÇÒţLóôU»Ç@Xó»a@ÿÅUÑÝ°ķK¯ĢğÒVĸJÇĬ¼môţŎĊŎU¼ÆĖnÞÇÆówŹ¦ġkÝóa¦ţ@Ý¤n¦ÇbÇþ¯nXÒɳÒÅ»¯xVmbb¯Ý°UWéÛaxʉÛm¯ÝIUÇKk°VƧīķU°ȭĀ@ċ°nm¤Ýnô¼ƒÞ»ĊʊmlÔĵǠÆôVÒÞbl¤ÈIĸþlw»Ķa¯ī@ÑÇ°anƾ°"],
				"encodeOffsets": [
					[97302, 31917]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5422",
				"name": "山南地区",
				"cp": [92.2083, 28.3392],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°ÞUĖ°¦²ĊôÇÜLǖĀɜȘŰÞLĸźêÞ@UÜUŤ°ɞ¯Ü°WŦĀmŎ¦ĢyVÑŁl¥Čĸôx°£źÒWÈÿÈUÿçÅyýóġō¯řÅmÇÛUċ¯£V±²°ôôĸa°£ĠÒŦ¥Ʉ£ÆJÞ£ĢbyĶzŎŃ@ŗ±ô@ĸçlǓÓĢÑVýmÑl¥ĵó¯̻̥ƛǫÝһÇƧĉyţ¼ҍēVĶĉŎ°ĸmÞVÝĸÒÛaċóŹĖèÈÈl¼k¤ÝX@`Þŏ¼Æō¼ÇçĉKUÝÝ£ğ¤@¦ġl¯Òġĉ¯ómóxÝÞğVƴċK@b@ÜUÒ¯ÈĢÜ@²xŎl¤"],
				"encodeOffsets": [
					[92363, 29672]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "5401",
				"name": "拉萨市",
				"cp": [91.1865, 30.1465],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ŏ²l@°XĢƐlôŤLX¦°¤ĊnČ¼ÇĊŎͪÞÈÜxU°ÝÞÞ¼¼lČÞKǓ°óU¯Ģ±ǔÔV±ŤóX¯ÇmÑwXī°@°ĕĸÞKÆĖĢÇ°bȂÇŁUV¯wVó¥VÅ£Ý@@±ÞwÅÈ@¥nōťÿ¯XÛɝ°ţ¯ÛVVÝ@ŹéķÝKȗůɛǕÿÛKóÈǫǫUţèmÒn¯Æ°ÈU°b¼UĢV°°V"],
				"encodeOffsets": [
					[92059, 30696]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6108",
				"name": "榆林市",
				"cp": [109.8743, 38.205],
				"childNum": 12
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ýVnIW»W@»kUÇLÝU¯¥ÇIUWWÑUWwX¯m@»n@ÜÈķô@a±kČ±wÑmwçċmU»ÆkkVyImĉÿ@Ý¹WnwÇVÅazmmĉ¦ókVmxxU¼VkVm_UlVlk°IVkmJa¦kLmmV@XmKnlUôVXbb@UaÇLğÜÅw£mKnmċwÅ@UkbmaVn@m¯aUJm_k@kWXyl@@kÅamwLUÞmWÅzUKUk±@b@nnKbX¤mzVVxÇn¯@ÒknWVUbkķÈÑWkk@VaU@mUkbÝÅ@Ý¥ÇbkĬXV`kLÇVmalUUanV±nwmkJ@In°KVw¯UnÅ@¥U±bUU±mWbÛKWnUm`UƒVK@bmnmÈÅ¼@VL@xxmŤ°n@VmK²VllKkô@êÜV@VXLlm¦UV°Ș¯²ÿ@¥@ÆĊ²ImĶnnb°bKVĸLlÞ@UȮÜ°IVÞÝÞlx@ķĀWUxèÆ@°XnlĊĖ°mnV²V°ÒÆ¦aÞ@zll@bÞĀl¼nKĊ¼óÈb²±IǪÒ¯ĖV@lxnVlkJlaXwŌĉ@VnlÆĕUÆLèŌŤôxÈlU@xlaUċĕXmIWmnkVVVW_@aÈWUUmk@¯çVm»±W¯n¥VmkXw±ÇVw"],
				"encodeOffsets": [
					[113592, 39645]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6106",
				"name": "延安市",
				"cp": [109.1052, 36.4252],
				"childNum": 13
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@kkÇmImUwVkUU²WmVkm@m`mIĢĕUVa@mXÿVVkyUýĕ@l_UmnWKVkţ¥awğ@@aôWakUma¯¯a±£kxmmxUwÝ@xmUb¯KwóÝ@kmm¹Ub@lklVbmnnVUV@xUknƧJUX@LÇWkwLķƧÅwWJkLkþĉxWzJUnÇk@Ɛk¼ÜÔÈKè@°lÈÆk¦ln@l¼@l¯L°UUVÇ°¹`m¼mXkbUaV@U¯x@¦ÇUUmlmUVmnnmlkw@@¦ÅÇLmx¯Ikl@¦mÆ°VUx¯Lm@JInlmxU²mVbkVbUnÈlKU_WlīÈaÞ¦Æ@ÞlanV@VUbl@XlÇÒĸlVaUXlm@Ñ°ÈmUwUnyW£amL@ma²@lVVLÆynXÝVKnxÆb@lk@WzX@lln`IV°b@nmUnbaVlÆ@ČxmnnL¤ÆxĠÛÈKVb@aWaUókVmnL@WUnnKl¥bnIlU¯JlUkVkn`lUUV»wnwlUôĊ¥nnyÆb"],
				"encodeOffsets": [
					[113074, 37862]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6107",
				"name": "汉中市",
				"cp": [106.886, 33.0139],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lKnb@nlWb°bkxĸwVb@łnlĊ¥L@XlÈVblÈKbakVwôml²`n@nVKlk²xŎ°¦VUJĊw@çnWçÞVkUóÛ@¥kwUmX¯WÑk@UymIUwlUn¥mUk²a°¯V»@ÝVÈÝċÅÅVl»@l@a°±@_kammÅba@m@Å¼KknõĠ@m¯LÅwLVxmb@¼kV@mw¯wVakKW»X±¼¯Vkxb¼W@nx@x±bóakb@ÝmU@ķÓÛLkVUmk¯¤ÝLUlÝ@Ýzx@x°bmX¯aUJW¯k@bÇWwÛwWx@XWlb@VÈUlwLnl°VlUô¦U°¤VUxVXUxlbkVVlI°ÅVlU°m@kÇU¯xUlLUlVL@b°ĠInĠ°ÈnK@xÞa²naUyXUKVkWô¼Èaz°JXUVÇV_JVz@nb"],
				"encodeOffsets": [
					[109137, 34392]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6109",
				"name": "安康市",
				"cp": [109.1162, 32.7722],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bĊaƨèwôô¼b°aXVÞVUÞ@aXm¥kImx¯¯V@anU@UÇéğL@¯¥V£m@ÝÈbKX°wČÿb@xÈblxÈ¯ĊmÆUVnÈ@ƨÜLĢ¥Źn°VnnKaô_ÈwUaXmnW¯klLXÇō¦ÝaÅVmbğUn¥±wÅéVan¥U»°am¥£Ý@wVw¥nUÑUmmVwmķIÅaóVWxkblb@ból@ğÒĉ¤ċX¯XxkÇ@óÆÅx@xķ_kmÝÇ£kblb@`¯²@bk@k¼ÆUČÆÞÇÞU@U¼¯°±bVlnm¦kVVxnJVz@lÒXW°nVlx@¦ôÜVUlÝXèm@è"],
				"encodeOffsets": [
					[110644, 34521]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6110",
				"name": "商洛市",
				"cp": [109.8083, 33.761],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²nlôb°aVwnKÞI`°wXôw°VĊ°@ÅÞÆVzÞK@x@aLÅ@b@nLl@lnmnLVwabVVnbU¼V°blbÈ@ĶŦb@nÇ@amIyUI@ĠVmôUVwkwlanJ¯lwó¥@an°J_@nóƒó@£l¥UwmaÑ@Um±V_J£JUW¥¯@_k¯¼mUVUè¯b@wmL»ğVmağI¯¤ċIUWXKĵ¦ķaJUbIlUóVmk@WÅÅÇ@mUÅVnĉÇ°kwÇa@waċĀ¯xWLÇa@ÞnU¤°¦@ĠKÈê@VmV@bU°°nwlJn¦WbÝ@V"],
				"encodeOffsets": [
					[111454, 34628]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6103",
				"name": "宝鸡市",
				"cp": [107.1826, 34.3433],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@£@°Ib@¯°ynŹaUlU£Umĵĉ@@ylUÞ@@£kWU¯WaU£¯ÇV¥@kb¯wn¥ÇkUÇnU@¯±kULm@m±_kónUxlbaÇLkUaÇkW@Kĉ¦km@ŁUaķxlw¯aXak@mmakL@mÛ@¼m@lXV`nKU°°@²¤UÈ@VxmôxKlVV²aVwXlaVlx@UVnÇnk°VVLlkIJÇk¯V@knÆn@lznmlVkzVVVx@Uxz@x±¼VxxUlkb@¼ČkVXlĠkôV²wLUKlwJ@aIV¥Þn¯Ün@nkl²kÆ@°aVbnI@Ťn"],
				"encodeOffsets": [
					[110408, 35815]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6105",
				"name": "渭南市",
				"cp": [109.7864, 35.0299],
				"childNum": 11
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@ÈôLxU°Þ@mÈnl¤nUôLwX`@ÞÝLUmLôôbVbnºlnÞ@ôx°LanVwÞ@Vxnwnlw²¤b°°bVnlXbó@bĠ@xb¦ŤVXġ£W¥ƽɽó@ýóƝÝ»£XmƅĊkU@ókťaĵÇ@aka¯UV»maUUabUxmKnkm@kmK@xó@¯n¯KÇ¦@ôÅèlxkx°nƾ¯KU¯WķL@VÝIUbyWbX¼Ç°"],
				"encodeOffsets": [
					[111589, 35657]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6104",
				"name": "咸阳市",
				"cp": [108.4131, 34.8706],
				"childNum": 14
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@IXyĊwlýKlXIVaķ»a£¯aVU@awÈōaL²»VUln°WÈ¯W»XazVaÞJ@U»@¯Ýbğwly@£kÑţ±WÑ@kaIUn@¯ómţUbU¯lÇIÝb@¤Ý@kV@zĊ@ĶnVV¤kVbmź¯z@°a¯J@¤@bUxb@`xUÔ±ºVXWUnUJLĢ¯ÈKlblmÈXŎ°U°LlkÞK@Èxl_°ĶUÒkbl"],
				"encodeOffsets": [
					[111229, 36394]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6101",
				"name": "西安市",
				"cp": [109.1162, 34.2004],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°²@mVVÈÈl¦m°xla@U¦°ÈV¤XbV°lXÞaÈJ°kVaŤVôn°@mVJlb@XÒŤ²lÒ@¤kzĠxÞa@°¼ĸK°XV°Lƽ¯mlwkwÆç@óÈ¥°L°mô@w@aÆK@b@wÝLyÅUÝÆ@ĉ¯¯UóxW¯x_ÝJmLUx¯bóak±mÝUUW¯ba»óóxƧçĉbaĉxIUV¯¥ō±wl"],
				"encodeOffsets": [
					[110206, 34532]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6102",
				"name": "铜川市",
				"cp": [109.0393, 35.1947],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆxĸƨKlxÈXK@VWƨIlmV@wVUmUnmUalk@kVaUaóaónKVÞK@ÝW_xóKmVk£ÇmnÝ@¯VwóK@Ç¯XkmVU±¼KbÇŎx@bUV°b¤b¼ĸUb"],
				"encodeOffsets": [
					[111477, 36192]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6209",
				"name": "酒泉市",
				"cp": [96.2622, 40.4517],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÇnÅaĉ@U¯¥UŹ£WUýUU±JkkUwyÞIČxĊĕĊ¯¥ÆUkţUÅÓ±¼IUx¯UÒƑÝÅ°KÝnğ°ÅU@@Vn@þ¼¯WnŎ°XLWlnVnbWnVXxmbabóUlǕUUaIUmlU¥k¥ĉwkkÝɛa@¯U¯°mVkVnKlōÑÇÑU@klUġkUŻnUW@¯k»mWV£UKnUmUww@UIVaXwm»Èmmwn¯ċ¯LĉUJUalka±Va@Uk@ÛÑ¯WmnUaɝ¤Ûmn¯m±x@wóxÛLġÒUx¯VÈJUbózÝÇKĉ¯ōlÝUÅWl¯nťbÝ@¯ǩLġmV@Æ¯ĢkÆmĊkVťLɃmÝXó°@ĢbVóVÝ¦ɱ@ƧaġUVĠÇÈV¼UVţwmbJÇwˋaXmÇ¯KkkmbXm¼V¼ǬŚ²¤ôŰÆƴô̐ŤǪnɆӨ¼ɆLÆłUĊxŎƞȘǔˎǬǪnƨŮǬö°»ġÞÜÆĸÒĊǀbƾèôÈ@¼¯þŤĸƧ°VĀ¯b@lÈĊʠń̐ȘKǀֲॗţÿǕý@ʊǓƨóÆÑǖŃôw@΋ʈƆÅÈVVĊVóĊÅ@ÞƒĬV@Þī@°V@ĸĢ°XτƜĠ@ÈaÜ¥ŐƅnğóĕVġUůƿŋĕa±VUťÇğÑ"],
				"encodeOffsets": [
					[101892, 40821]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6207",
				"name": "张掖市",
				"cp": [99.7998, 38.7433],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÈÒŎÒkmLUlU¯nV°@°ɜbÞĠaÈ»ĸlLVUÈ@Ċ@ýUm@@ÆVĠ¯ÞmLÆ¯ÞƒÑ°VVwJ²»ÆÔVlŤÅV¦ĉ°ĉĖċwÝJzVxll²IVVVþX¤źV°¦VĊ@ÆbÈmǔLĸĠ¯Ģaô¯ĸmÆÛUlÇĸk°XyĊUǔVǩnmV»a@ýnK°n@l¥@»żĊ¤mç@£ČU@mmVkÞUƐ±²¹°ĠwÅƑŃU¯V¯aÈŁÇ»ġn_°xŎKlxklx@Þw@Æm²bÇ²LlkWXať¯ĊaÑK±w@wUÅçV±Uk@@¯¯xU±±UU°ōxVxÅÔō°ó¯UÝ¦óbÝþ@ĉÈóUVUx@VUVÝwÅÈÇóVkk¯JÇkmmL@KÇx@bk@U°ķ²ó`mn¯°UwlÅkU`¦ɛôķz@ÅnÇ°U¼¯KmVk²J¼ƏÞķô¤UL@mnğ`ÇnUxÇ@ÛÿU@kŻ@x@móJkÅ¥VŹĉóÒĉlċ°ķUƽÜ@x"],
				"encodeOffsets": [
					[99720, 40090]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6230",
				"name": "甘南藏族自治州",
				"cp": [102.9199, 34.6893],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞnKlnwX¥WÝXkxÞUn°aĊVnUUKlÞĶWXnĠ¥ô»@nmVL@¤°VzJanU@aÆwna@kU¯yX_aĉbwéXkWwÅa¯V¥m¯UI@@mb°aÈçU¥@»knwɜƇ°I°ÑÈmVU¯Xa@wW@wV¯Č¥l¯Uwnm@kaUaóKkk@Çab@ÒWa¯IÇxÛam¼VUxÒl@zÝÒ¯bÝaĉVĉwÇWzJmJn²mÜ¯U¯ĉ@ġ¤Åb@²nml@@ULVxVU¼Ålmab@°l@WIU¯@m@ó@UzţyXÇUÇVUUVLkbWakVWmUbkkKUÆ»n°Knk@aUVmnk»l¯Ģlw@_kKVU@na@lUk@¯¥mV@kmbWb¯Åõa@mkU@kÇkU@`@óóbl¼Uxn¼lVÈx@blVkVVn`XÈġÈ@ÇK£ÝJmUUnUĖmlUmKUnVÅaUwUĉ`¯n¯wW¼nxV@bĉnkIċŘkXU±ÒxÈ@X°`lVIÈ¯ĊVVVan@VaUVażVmblkÈWWIXaalL@wVbV¦lL@lĠnÒUnkL@ÆÞkÞKbñþW¦ÛċVULUºkÈlŎUxÆxÞUUxÒx@XbL@lÆ@ÒlXVln@bm¼J@Ånx@bnĠmxVXmbÈè@Ċ£ČWw"],
				"encodeOffsets": [
					[105210, 36349]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6206",
				"name": "武威市",
				"cp": [103.0188, 38.1061],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@±¯¥@klwU»ÞÝmwKm¯ç@kVÇUL¯lVUKġġm@a@U@X£°l°LŎÇ@aōVÝwÔKUÅWJ¯lm@ÛVWa@klĉUmaLUanak¯J±KkXóÜÅx²Ç@nUÒĊb°@ÆkLXÇÆ@xÝnxWxţ¯¤I@ÆnVVVlU²ÆèV@x²xLÒĉbŦ°WbXklÞ@l¤XĊ`wl@ĢÈŎm@bnVUb@ÈÆÛLèÇUÒÅ¦lĸ`°ĮʟÆǓbĉôϚĊÆĢnŤé΀ÑĸĀĊ¦@@l°l¦Ȯ¦ɆÞĊKŤĵĸů»mŁyġķŭ@Çɱȭ¯mƧUĊķnŁŻ»UaUƛɞÝƨů"],
				"encodeOffsets": [
					[106336, 38543]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6212",
				"name": "陇南市",
				"cp": [105.304, 33.5632],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÈÞ@l`UmV¼@nnÆwVlnVVaLVÈ_ÿÞ@naxÆ@l_@VxnK@llLnxmÈŎJnbUxI°l@n¦lÈIlmX¥k°@kJk²é@klaUaVaU@@ÝnIWnmnxkºÞaV°V@nwKxôbÞ£VUbþLn»mVwIJ°@nb@°°IġUkÇKV@Å¯»lLnm£@anK@ÑÜn@»mL@£ykUUmbUÞÝ@kyÇbó»XUxWVzb±mÝbXawUamL¯»@wUKVwm¯ĵJ°ÅUWVkKVk°wÈVVÑlU¥kmVamknUw¯¯bċ¥ÅKkKkVċVk£kKVwÑa@kóyÛ¯ÇVkówXō¥Ç¼ów¯U±k@xIĉÒÅVmÈnÜ@n°bUbÝVUnnJ¯Į@m¦nVÜ@L°JXbÑ@aÈb@llôLVbb@lmnVxk°ċ¦U°@xX@xWb°UVÇn¯Ò¯Jɛƈmxl@¼"],
				"encodeOffsets": [
					[106527, 34943]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6210",
				"name": "庆阳市",
				"cp": [107.5342, 36.2],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@kwĉ»VamV¯wIóVkl¯KmVō¯ÝWkL@bÝKō¦@@Lx@b@la@km@@l¯nm@UaÅ@óWUXm¥nw`@UUxķôÇ°ğ¦@VJ_nIVnalxkXJWn¯nVLxl¤nnVbklVX@xnxmV@bUK@nm@@xV°±aÅnkUWnUax@mn@¯LmUĀlU@lV@blLUblxklkIÇx¯°UXbaVUnV@°LUlnbX@`°nVmbnÆmVkLmK¦U@Xy@kl@U°K@¼XbW@bWnLVaVVz@xlVČ¥lbUxÞlVU@nÆWôn²VJlUƧLnmÜLXan@mw@wlUlV²mblwVÈlLÞ±@lVnUlxnkma@mkJ@kXVU@mn@¼VXUVlLnmVbôaVnWV»ÈUl°È¯ÆInÆU@kk»mKkÆġk¯@»mk¯@óÇlÇ@VykklUml¯Þ@w"],
				"encodeOffsets": [
					[111229, 36383]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6204",
				"name": "白银市",
				"cp": [104.8645, 36.5076],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VKUÈl@è°nLnxÝÞV¼kx@l¦²°ĊóĠĊ»@ÈxaĊxlwÈVŤa@¯²aÇ£Jk£lnUÞ@°ô@ywl»lIX¥Ǫnw@ÑÞWlaÅlL@Uwĉakl@¯mwna°JV¯nUVÓÞÑm£²óWaUÇ@óÝUçV»ÈkkW@¯xV@XlK@wX@Vmm_@wÈÝKU¯ÇwVwÅK¯VkJXkWVaIm¯UkÇlVĀV°mxók@¼óWxĉÜU@UbzÛJÇk@ÆnVlÔ@kxô@ĬWL¯K@aÛImm@IUa@UÇêU¤VÒÇx¯ÒVlk@Wbĉ¦UbkWV_y¯Laók@b@nmbkx°"],
				"encodeOffsets": [
					[106077, 37885]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6211",
				"name": "定西市",
				"cp": [104.5569, 35.0848],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@aV²wVJV_@LlanÅllŦçÜÓ_lnWaôkxUbmV@È°lènk°l¦`@nnL@ÈlÜIyVaV@ĊÛXwô@»lônwU¯ÿUÈkl°VnJUblXWIl°UV@aVVVmnL@lUUwmk£bV¥VUVwÛlaÇÝÞmk£LUy¯L@WlkKW_XaWmġU@akakXkmVwmŹVUbWónmwnWW£KÈnV¥¥Æ_klWbU¯V°aôbnaVwmaōInÇmwkK@kmLUw@`kÅ@wb@mÝĀÇ`UKUbmUUkÅxmm@»nUVk_Ý@Ç¦VÇè¯ban@@JV°nU¦°ÆbXxWlêxĊabW`zV°@lmbÅx@bmVbI`¦@ÒUVUI@ÆL@b¼@@lmxnL°ULÞğÞ°kLUL°xVnKVl@zX@"],
				"encodeOffsets": [
					[106122, 36794]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6205",
				"name": "天水市",
				"cp": [105.6445, 34.6289],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UyÈVVUnn@VU`UblzJnk@VbKU°lwW°nkVUÈl£°V@n¥VklkU±Unlw¯UkwmKUlmkUmnkym@Å@UmWÈU°l°anlJkUKlU¯Èm@kmWV»kkÝLUWUx±b@¯ma@¯IJUxnm¼KýaVUÝ¤óawLmxU@¯UbÝ¹lmwmnXmJ@ÞV@UbVbkbl@±êlIl¯@lW¦knÇJkm¥k@¯Jmbóa¯bUV°akXlÅ`¦U¦ÇmLX¤mXnxmôXaVźUnUxlnlWbl@bĢVnXWbX`lLXk@°KVzKl¤nÞÝÈkbÜ"],
				"encodeOffsets": [
					[108180, 35984]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6201",
				"name": "兰州市",
				"cp": [103.5901, 36.3043],
				"childNum": 5
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@lW²L°IlmbVbKnbĊVlk@XbÜU@kn°XIÆVLÓÞxŎUlôb°KzU`lXVaĊ¥Xal@kU°ÑÈwUÑV£ÈéV@VbJ@nnÜJ@bL°XK@īówl@kÓmUÅmK@m_k¥l¯mkçÇ¯@nUaVwólXbmk`ÛÔťèkkmÆkbK@U`UI±xUbWlXmbVbÅÒólkIWJk@zKŻ¼@xUxó¯LWb@ÅÒ±¦U`nbťĀUVbLU"],
					["@@¯lwna@mōÈ¯K¯kW¤@@V@bĢnĢVLU°k"]
				],
				"encodeOffsets": [
					[
						[105188, 37649]
					],
					[
						[106077, 37885]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6208",
				"name": "平凉市",
				"cp": [107.0728, 35.321],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆLUxÈxV°LÇÞ@xn`Ü@X@nĊÆwnJmwUxaUkw@V@waVmlLXÝl@XVĢmV°@nl@UUUWK@wÿVI²Òlm@nÝĊýVV@nJ°Ułm@kV¼nKĢÈ¤ôKblnKllVk²aĠ¥È¯ĸóVw@V_xmn¦VWôXÆ@Vbn@°m@kn@@lb@ka@wK@@UlKVaWXW²¹lÓw@_°n@@_lKÅķW@mLUWn»Û@l_Ç`Ûmm°ÅbWb@VWbUUKÇÅaġlmkUġl»LlUm¦@¯U¤ÇkVUml¯Xx¯kVLUa@mlIkyVa_UV@mmUVUÇVzUxUVU¦a¤lnVxVk@mKUnUU@bU", "@@@ż@mlkġk"],
				"encodeOffsets": [
					[107877, 36338],
					[108439, 36265]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6229",
				"name": "临夏回族自治州",
				"cp": [103.2715, 35.5737],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@ż»Ly@lXIJlôkÆÑUanaWXkW@yk@ULmUw¯KVlK¯ĠÝÝVK¯mKnwk@@»@aK@ÅVJVU@Ñ¥_Uy¯@£UKmn@ó¼ğ¦WmĵXÝkVLmVĉU¯bmÝVwWlXÞW¦xkmmLÝ±U@VÞ@ÅÈW°XÜ¼ƨyUĮnWnXÝxUx°lVXJlôV"],
				"encodeOffsets": [
					[105548, 37075]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6203",
				"name": "金昌市",
				"cp": [102.074, 38.5126],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĢÈ¼Çł°bU°VƒńÆǖŰnÆōĬǔaʠÅ¯ĭ_kķÆ¥VÑÈçÜKÅ@ÇVaUm@aōnġÇk@xĉ_Wk£@Ý±KÈ±aÅn@Ýx@kwlkwōL¯wm`"],
				"encodeOffsets": [
					[103849, 38970]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6202",
				"name": "嘉峪关市",
				"cp": [98.1738, 39.8035],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@llĊx¦l¦kVVnJVbǖVkôVabnaWwUXmmamUXkWKō¯Xm°»ĉÇ@UVKķkÇ¼ğb"],
				"encodeOffsets": [
					[100182, 40664]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6328",
				"name": "海西蒙古族藏族自治州",
				"cp": [94.9768, 37.1118],
				"childNum": 7
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@V£°@laXô±źwô@UlżaÜnKw@Uaa²LmÈLÆÈxlaUawÞmÜbÞUnJ°akôÑkwÝVğwÇ@ÝkkV¯¥@ò»nŤ¥XImw@mVwa@ÅwmLkaWw¥l»kçó»@WÑĉğ@ĉŃUwóřVómĵ»Ý@VǕ¯kÝĊÅk°ÓUklkU±IÇÞk±@ƽJ@UġIk@W¦VÑșÓÅnťKULn¯X@¯mUÛ@WÅmóKknōbxÝ@U@kw@ÿÇLţÝUkmwklċVÅU¦LkUWlÅÑ@a@ÅÑ±UóġŹ¼ÈĉmŻ@@wkwKl¯Uġ@lÇUÓ¯_Waĉ²Åló¼VbknKÇÅ@ƧĢō°Ý@ğWÅxUUm@ÝXÛWULUè¯@mbUaLbUWġxIUJWza¯by@ōÈóLU`ÇXUlUĉV¯nmÛbǕLklUĉVóaġƏbġKţnkbÝmmnÝWȭÈÝXţWókUÇl¯U¯ġUɅĀ@°¯¯VÆnmJ@ĊķnóJUbÝXUlVkL@lVxnnmb@¤Vz`ÞÞŤ@VnÆJV°bUôJkzlkl@²ó@ÆÇ°kĖÇbÛU@lmbXVkzVɅĀXˢlńĬŹ@éÅ@ĉńÆ°ğbUlɜ_°@xŦkbVbƒKĢŤVŎ°@żÈźlĊôKôb@nôxŦÆ@ôŎL@þÆb@nnWˌbÈxInaŎxlU@Ñ²±ğVUĢƨbɲ@Þ¥ôUUķWVô¯ĊWʶnôaŤˁ@£nmnIôǪK°xUXô@Ŧa°mkXÆÞVŎkĊ°ÞLÈôyVaIlwX°UVwĢÑÜKôw@nV@m°nmnÜɞ£VbmXn°ÜÒ@xx@Vb²UlbkxVnJUnVVĊ°KČm°nxÇnn¤±¦@UXVV@lVbmVVÈVxÒ°IbźaČbVw@VLƾÑ@Ŧô¯ĊkôÑ"],
					["@@@@nòVaw²bVxxÜaČVô_ĊJIVmLa°@Ŏ¥XlK@klKVbUb@nUĢnaÈ@lmǬ»Ġ¯nmnƨVyÑǖĠ»ɲIn@@ÅĢƳ@¯°ôVKÈbVIÇ¥¯@Ýó@ÑnīWKkk@¥¯ÅaX±VÅw@±Ġ¯@»nWmw@@¯VUUWçKĉa±VkkV¯wx@UJx@bknÇbmÅ@Uw±U¯¦UKm¯I¯ť¼ğĊ@ÇŹÈ¯@Ý»ÇnˡJbÛèÇnÅK¯ġĠŹW¼Ålm@¤n²Ýb@b¯l¯@Å¤W¼nV@x°@Vx@lbUblbX¼WÇ²lU@¼V¦@bÇlVxUbVxÞbVbm¦VV"]
				],
				"encodeOffsets": [
					[
						[100452, 39719]
					],
					[
						[91980, 35742]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6327",
				"name": "玉树藏族自治州",
				"cp": [93.5925, 33.9368],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɆÿĢV°°VÈklVôŤXÞWȮÇÞXnmÞnlaŤmĢLƐaĢôbĊUVlkǖKÜan°mĊUVVkÈWV_ôKŎÇ@z°abXyVIJĢwVXaKVbna°@VçVKXÜÞWn@VVÆwXĠÞ@Ŏ¯ƨġÆ@ÈLlmUaô»ÆkĊ±Xb°`ÔVkÈĢ@Vk°Llx@xż@ĊnÇź»ôĢ²VÆÒ@@bÆÒXklVKV¥ÆČUklnxlç¥ċç@±m¥wÅJ@VmÈIléÈa°U¥@kÞVK²ÑW°w²ÑK²ñyÆÝVmw»kkWĉJWUVÅwLmÅ@@mwkn¥VÑ»°°@@»¯LlaJônVUÅ¯U@W¯UmÑ¯¯k@WykU@¯wV¥kVwţk»wWÇĉĶçKÞÇaĉbIlU@kwWXU°w±@UKn£WĉKWxkĕVamwXw@Wmnk@aVkbĉLlImmwUÇWxnÝJn@¥ÆkwaXÜĉ¯ÅV¯¤mkx¯kķÜ²VWôŹVU@V£¥@°wn@m@¯@UbUôķmn@ÆÛ@ÇýVaUÇĊV@Çlğ¯xÝŤlVÈÈVx¤VxkK@@x@kVĖġ¥kIWbXŎx@nxÅUW`_@±UaLUxK¯WbkVlbbmLÛÆWIUwWkwÝV@kIéUbUUkV¯Km¯k@UmÝ¯m¯mLÞĉÛUmġ£UxkKm°Lwk@kVmKVUk@¯a¯ĢmóKUUxImlÅnÇbXèVVU°@@xXnm@¼ğ°@²ÆxU²WÆb°@¦llXLmĬ@ÒÞô°@È¦UJÇaLóU¯@°ġƴ@Æ@mɱJğ¼ǕÒUzƧmnmğ°ǫ¼knÇ@bġmmV@VaUaLkl@kLWō¦¯@bKUnJĉIó`ċUÛbwUw±axbñUm@@babÇÅXmƒÝÅôVbÞblUÞVÞU°VUx@UV@l`¼nL@ĊLW¤kXķWġXUVVVķUbVb@°kVVxÈa@Č¦ĊbaźJU@ÈVl@XkôaWĢÞ@laĸUÆb²mÞLĠÞÑôbÒĊaJVbm¦"],
				"encodeOffsets": [
					[93285, 37030]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6326",
				"name": "果洛藏族自治州",
				"cp": [99.3823, 34.0466],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞVŤÈK@ĀlxV@Þ@wŎalmôLnXÆÜ@nV°@°WmVKŦLÆmȚÔÒUX¥l@ĢJV@ƾI@wW°Ån¥kÅÝVwôÈç@lÑĊĕaJnaÆLVw°kny°UnkÆVČĊll¦Vƾ@@nUźÈÇIn°XwÞKô¦VWV£@£°ókċ±Iam¯Va»ČĉV¥°@mk¥l@Ċm@aUmwX@wÆxmĢ_`VnÆbKVw@@nUVğVmVVöIll@@çÛm£UÇw°@VU¯»m¯JōĖÅLa@»ĉĢ±`U_k`ÇçókXlK@akÝÞ£WċkÝkxJÝ¯ÅwxķxmIÅx@k±J@ýŋ¤UkmV°ÅÝxkwmġnÝVU¦ŤlmóXk¤UKç@mVkK@klī£m¯VUbW¯¼ċb¯ĵam¼mVXm@k¤ÇXÇbU¯J¯¯È@bVXVÒ¤V¼kxÝV@lVWxÛ¦W¯mKnlkU@nƑUĉÝ@ÇºÛċUĉ¥UÞÅz±òL±Ò¯xX±ÒLÝU@lV¦¯ÇbkêÇJnU@ÆIxn¦@²Čè¦è"],
				"encodeOffsets": [
					[99709, 36130]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6325",
				"name": "海南藏族自治州",
				"cp": [100.3711, 35.9418],
				"childNum": 5
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Vxń@ĊĠĊXÒ°UƾĕÞm°£nb@@LUUWÛº@nlÆǬĠ£ÞV°UXbVȂǵé@kWanm°@xzK°¯ĠVVkwLnm°kÞxÆa¥@wnĉÆ@_l_VwmĸèŤÅČU@Wn@ÑmKUnğK@°¯UÿV£nmLlUUÛé±óókkmnakV@Ç°óÝXWəÞťIţxmmVÛUVȂÓnWyȁĉkV°WnkĊa¥_K°ÿWna@mU¯wlÝIU¤UXó¥ÝLx¯WmJÇÈŹmV@ƽ@Uk¥ĉkċÅUml¯Vmz¯lUxÅKmbIbĉĖkÒ@ÇèóUxÆÞlm¦Æ¯X@x@²ÝlÈJV²klVl¯ÔlĉÆÞ°lUǖÞ@Ķ¼nUôôŚ"],
				"encodeOffsets": [
					[101712, 37632]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6322",
				"name": "海北藏族自治州",
				"cp": [100.3711, 37.9138],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ōmġxƽUm±LǿþġÔ@kxmWb¯I¯mIUx@bbŹVÇkĵblĉI¯¥Um@Æ¯È@aóUlČ»@w»wXaó°ţçÝkUaV¥ÅbÝw¯lmnKlxUğU¯°Lyw¯@mnXbl@êȁǶUWa¯VÝUğ¤ǫkÅ@mÜ¹XVV@K@ma¯¤ÝnƽĖ¯V@¼ôlèk¼¦xXlbnKÆx@bUx@nnxWJţ¦m¼ñ@°¦lUÞlÈ@ĠxÞUlxÒól¯bmIÝVÛaÝnxVbkbÇwÅÇKn±Kbb@VxLmÛŻbkVó@Źxó²Wkb@¯U¤źĊ@lUX°lÆôUlLXaV°wxUb°xÜôÈKVkÈmlwkÈKwKVUŤĉŎ»»Il¥na°LV»²¯Üy@wĢ°ĸwlwĢw°±_lVk@°bÆ¯z@l_@Ģ±lÅVlUaÞLVnKlnÈ°IllČawÞÑ°xUU@wVkmĠLô»KÞýôaÞ¥ôĀÞmÆmUŎV¥Èl°²°a²¥V@@wamm@Ñn@Æ£żVĠ£@W¯Þl@»@Uk@"],
				"encodeOffsets": [
					[105087, 37992]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6323",
				"name": "黄南藏族自治州",
				"cp": [101.5686, 35.1178],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôl²ôÜêVVkKmnU¤VĀ¯°@LmĠVnLÈL@alb@al@n°V_XmWUÈamaVIn@naV£óVWU£°axÈ¥@aĊwÈ¹@óağbm@kw@maÆw@In¯mm@UkkWÑÅ@@kċÅçVkÝJÅkVykŹl¥@¯ĢUÜX¥òýmmXÝÅlmU@£WlyXW»Åbl@aI»k@klm@UxUUV¼¯XlaUnķI@x@¯KĉUU`ólČ¯ô@¤ÞJk°xVn@mbX¯ĀL`¦ĉbml¯XUlȂĊXzmȁÔUÜVUnnŤwŦJɚÝXÞW¯ô@ÈlUbmln"],
				"encodeOffsets": [
					[103984, 36344]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6321",
				"name": "海东地区",
				"cp": [102.3706, 36.2988],
				"childNum": 6
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@Òb¤ÆI°ôU¼°UnnWx@b¯L@lUUWbXxWlƨnxVUllXVUnL@lȀý²KVnƾĢwV»@mÞ£nÆÞÑmLKUaVżĕWVk²ÆÝ@Xw°@ô@a°wóUUmIkaVmÞwmkny¹VÿƧnÅm£X»naV±Ýw@ab@am¯ĉVó¦kÝWKUU@WanUb@ôÇºĉxb@Ç¦w¯bV¤UXôU¤bmm@UJnbÇbXVWn`¯Umk@@bka@bÇK"],
				"encodeOffsets": [
					[104108, 37030]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6301",
				"name": "西宁市",
				"cp": [101.4038, 36.8207],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@kmKVUWkVkUmwƧXkWwXaVV@k°K@aXwmmV¯V»¯óÅJ£amX@ċVţÆķçnUx`k`@ÅmĊx@¦U¦blVÞŤèô¯Wbx¼@xċ¼kVôbÇ@Å°@nV°¦ĊJkĶalÈźUa@aVwnJ°°JanXlw@ĢÓ"],
				"encodeOffsets": [
					[104356, 38042]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6403",
				"name": "吴忠市",
				"cp": [106.853, 37.3755],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nLV@VLaÞbn@@l@bUVlUVzVx¤kÞVèXn@nm°a@UÑ@VXnV@VaUVKUUU@@U@@KVa@U²@wXkWnk±lLnU@UmmVKnIVWnI@UK@UK@@UVKXkmWLWUXmlkVwUyVa@ww@aVIK@aVÈwKlLVV@LnVVVnUÜ²°WÈIUÆ@nÞ¼@¦@UÞUVW@UxUxVnbKb¯ÞU`VbǬV@XXÆVVl°InmnUô°¯anam£WVXKXmkôaVU@Vak@@wman@K@UÛUWKXUÇ@UIb@alW@akLUKV@@Ukw±InL@kmwkWmk@JUIůVmnnU@m@UKVKlkUwknVUKmbkI±KkmVkKb@U@aVkUmn`kIlaUK@UUKmbUIÝUa@mUa@am@UUULUK@bmKkbWI@WXwlkXWa@k@kKLVkkK@L@JUVmzUKlwUUnW£XVlKUwVU@aXI@aWaUw@W@_nam@¯UkWVkUWaU@nwmJkUVkWVUmUkJ@ImbUa@@WÅ_mJknmak@@mXaUV@xU@@VUnkV@Vn@`ULUbWLXVW@kbUJ@XW`@nÅĖWJ@m°@xxbnUaw²lÞ°xŤIVVULÛWbbkVVXÆ`UbVL@kx°LlV@VWbJn@bl¤ULV°@lmL@£U@@aUwmKULVxUVVx@@kU@mK¯LÇa¯@"],
				"encodeOffsets": [
					[108124, 38605]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6405",
				"name": "中卫市",
				"cp": [105.4028, 36.9525],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°@Èb°KnL@lV@@UwVUUwVKnLVx@bV@¤@nK@k¯UVKk£@amIXa@UkU¯Klw@UKVaÅ_UWlUaXaÜVKUUţJ¯wÝ±kxVbmaw@wn¯@XIÆĕm@X_@WVIlaX@WUXKVaVK@_Um@lUVm@U@Vw@VUÛwm@@W@ImKUkU@UaaX@wWaUKkw@UVaUamLUnk@»±`¯@kW@UaykbI@VWJkLWUkJwU@n¤mL¯wm@Um²XVWbnV@bmxVkxUblLUV@kVWKU¼kU@mn@JnV@bUnmJUn@k@XlxLVVnKlLVV@@LkKULVbk`WL@lkXW@kV@UÞUlÇXlkaUbmV¯@@L@V@bkb@xlWbbW@±@UJ@IU@mVkVxV@@lIlln@Vm@VUbl@JLmKÛXmVkUKULU`@LĉwKUXlVUl@VbJX¦̼bÞxŎxɜĖĠŎaô@"],
				"encodeOffsets": [
					[108124, 38605]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6404",
				"name": "固原市",
				"cp": [106.1389, 35.9363],
				"childNum": 6
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Vnn@°xnK£mV@xlIXVlKXI@UJlazVbX@l°@²_@¼mlVnKVbUb@VlxVLXb@xWbVbV@VlnL@J@Xn@ÜxbW@nl@nblmnIÆ`@X@Vbna@aVUUWVk@kbWakbU@VwW@_l@nmn@@alVlk@UkmVak@@aUXaL@¯@KVa@axWI@KnkVaVJn_lJ@X@m@nVanUVb@mXLlJVWnLlaVVaVX@KXVVkVKlknKVa@aVU@KXb@klJUknUm@K@_UW@alIUamaU¯kJma@IUK@U@@UW@@aXLVVJVaXIKlaUkUV@ambUUJkIWJ@wUIV@JU@UwV@@Um@nU`@UkUmVUxWUUV@aÅb@aWXkKUUUUaWK@wnm@IVU@aXwm@UmVaUalk@anKUwlUwlkK@wmaUkmmIk@VmkUUbW@UVUnW@kV@xkVmbVnU@UbUV@ak@kkW@kLW¤@nV@VU@W_UVUU`VLUV@IUVõVULU@UUUJ@wmkUJ@WI@l@bkKkbVVbVbUL@UUJ@Vm@@L@xbVVVLVlVwX@Vb@bmUkbk@@JWIUVÅw@Km@UkWKXxWLÅ@UVUnWK@xkVW@KULwWVXVWzXVVKVXkVV@VUbV@UVV@@LXxVL@VbLnKVLVxXVmb@l"],
					["@@@J@aU@LWK¯UUxVVn@ĠLUW@UbUUUa@KUX"]
				],
				"encodeOffsets": [
					[
						[108023, 37052]
					],
					[
						[108541, 36299]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6401",
				"name": "银川市",
				"cp": [106.3586, 38.1775],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UwVK@UVWÞUbwV@knV@@KU_VK@Kn@W_XWlL@Vn@Ċw@Ula@Wanamī@a»ŋó@aÆÅɲÿUaV_°ÝaLaUmVwVwX@VUVÝ@@¥Ý»@mVÅÇJ¯XÛ±VUmUmU@KUUkKLÇxU@bLUJ@bx@xUbVzUxklWnXVKnXWlUL@V@VL@VL@mJUXmJULnn@VmVkK²mlXWlx±@@VUb@L@@VV@VVULVUbU@WmU@Ò@V¯bmn@V@lVnUnVWXVl@¦VVUn@x@XL@¦lXxVb"],
				"encodeOffsets": [
					[108563, 39803]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6402",
				"name": "石嘴山市",
				"cp": [106.4795, 39.0015],
				"childNum": 2
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@U¯ķó±ÇÛ¯ķmbXb@kb@Vĉxm@@UkKWXX`m@@LULV`@L@mU@lUxaÝVUX@VULxVkLWV@JnVLXVlUV@zlVL@V@bn@lU²WVLlLVbUVxUx@xǀLxôÒkK²VaU@wXa@WÈĉUa@bÈkm@¯"],
				"encodeOffsets": [
					[109542, 39938]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6528",
				"name": "巴音郭楞蒙古自治州",
				"cp": [88.1653, 39.6002],
				"childNum": 9
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@ÈÒĊanwŎVȮ¦ͪŃĢÜōȂçČéƐżLɆóĊĊaʊŁ±¯²Um»ˌmÈ»VʠţWÑÅ¯ǓéôƑƒğÆīŎī@Ƿwô˺LÞ¯ƨVǪÑƒĢȘV°wĢôk°¯ƒ»΀@Ȃ»ĸǔ@΀͔ôôLɆó̐ÝɜLɲōͪƨóŤK@ī@IU܃ÛmȻţǩÝ˹ÛǉťǓǫō@Ɲ²¯VçōKͿŁΗÇţ»ƽɅƑLÓŏÅÅɱV@ÝĊU¯ÑĊĭÞLÞŎJ±̃XȣˌōlUÈ¯ŎKÆƅ°XÑÜ±nŗġV¯óaUƧUōŁÑ±çɲ¥lĉkğ°k¥nğţL¯ÝÝUƽĬ΁lķ°@ōXÿÝ¯V»ŹLʉÞɱŤĉó°ÝJ¦ÝKÝ£ţÜÈĉ@xǩUċƑ@ky͓¹`U²ĉVġ»ğa¯¥ť@ĉó@ŻÛÛJw¯nó¯ġWƽʩķÝɛwĉĕÝ¼ȭÞķō@ó£Å΀Ƒ¯ôȯÞ¯ȰÆōèĉXÇ¼ó@ÝnºĸÞVƜĸȚUʶõˀĵĖɱŎÝĖVࢰӒѢ°˘nϚVˌÈmɼĵŦW¤öʊõʔ@°ÈXVènŎȁb¯ǫĉ±Èğ`ġwōÔğ»mVVÝ¥ó@ĸķô@bXĶmV²²`Þ_ɴbͪÈ°ÞWĸÈŌmÞkɲÈUÆ»n¼ǬVķĸźô¯°n¦ɄÇÈ"],
				"encodeOffsets": [
					[86986, 44534]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6532",
				"name": "和田地区",
				"cp": [81.167, 36.9855],
				"childNum": 8
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƨ¥èź٨ΘƑᩄbUࢯÞĕɲōĶĕöʿVʵķșUƛÝķm¹Þô@È»ĊWŎçÅ°ȯȰÝ°óƒÆͿĉ»̽çnmɱĵƧºóUƽ@±wóL¯°̻L±Æ¯Vƴķb¯VÇ¥ğ²Ǖbk¥ÇKlÅɱġ@ÑóK@ÇaÝXğţxĉČǫķê¯K@ÑaŹƑK¼¯VóaónġwóÞéUġbóĉğÇl¹aUóğKWVÅ¯nÇŋƑķnʇ»óxĉwçÇ°Åw°ċXób±kÈÇJm²ţx@ÒÝŦÇºnó¼n°ÇbUÒ±¼XĸĠłƽXmwĉºzÈÜmnxmx²ĖmÒbnƧêUºĊêÆVóĖóUĉ¼ÅĬƑ°ɆƆŻŚlłÞL¼nĠ¼@ÞÞź@ŎÞ°VɄɴжϼِ͈Ŏ"],
				"encodeOffsets": [
					[81293, 39764]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6522",
				"name": "哈密地区",
				"cp": [93.7793, 42.9236],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WnŐÆĶLĢ¦ţºźlxÅĸƽŚɄĮè@ô²ÞUĔƐńV°¯ĸX¦Ɛm̐bƒ»Ɇa΀ĢƐLˤȘÑnІǉĸÿn¯ĶaŎ¯ĢĕȘ¯°΂la¯¥ǕǔwˤӱlťО̻nŻmɃĕċţUw°WUóƨÅţķ°ýV±óÅǓéʉ¯ƽŁéōǖȁÝƏůǕw˹ǫȗǓƧǕVýé@ĬţLƧôͩɱŎɛK̏ÞɅôóK@²@°ōŘ¼lŦ¯ŰóƜÛlV¼ķ¼°kȰŰĠǬŚÝŎmĖ`@ÇÜn"],
				"encodeOffsets": [
					[93387, 44539]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6529",
				"name": "阿克苏地区",
				"cp": [82.9797, 41.0229],
				"childNum": 10
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VÆxˌŎÞŎ°nȂÒ°²VĊ¯VğƾˍǬƨÞÞKÈÞĊVźôɆÞĢèŌôWČ²ŤVÞĸʶbl¯ôn_VÆĸlmÞnVź_ĸ¼ȮmǖéĸW°°ĸJkʠ¼Æw°¤ÈlxɆzČºĶI²ÆǔU°ô@Þ¦UnUĠ¼ŎÓĢxĠ_²ÇĊǬ°ȂamōçUÇW@¯öʓõʉX£ĶťnɻÇUˋmϙ¯˗ӑѡᩃaΗƒɜ°xWƴUxɃÒˣ¤ɅwğʉōóÝŹ±°ȗ@¯Æƒ²¼", "@@ōгwȁ¥Ƨ°ŹÑķV¼ÞêĊ»lĵm¦ÅW@ĀôÈźaɜxÈbÞÆĶIОŘnIÇŃÛÝĊÑĠƏ"],
				"encodeOffsets": [
					[80022, 41294],
					[83914, 41474]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6543",
				"name": "阿勒泰地区",
				"cp": [88.2971, 47.0929],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɲˣĊIÈ¥ÅU±Ċýkō°ĉƽó»ĶƽXóʵʵȯƑÅȁɅ¯ĉ@ÇሗK֛@@ˤV֜ʵрƒǬVĸƑŎ@ƆϯÑóķ@ʇ»ķ¦έmlÈĸĊX¼WźÛÞÝѸĢČþĀĊôάVö¼ĊUƨ°°èŎČUÜÆóôVôô²êȘlˌç°`n²ǬĊaÛ°±kğmm»@°ÝɆÛÅÇVaÝVm͔ğôÝÈb@n¯ÜUĢÑĊ@źīżWŤÈǖWôŁÆI²ÓƨL@ĊXmmÑÆ»ȰÑkĶō@ý°m¯"],
				"encodeOffsets": [
					[92656, 48460]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6531",
				"name": "喀什地区",
				"cp": [77.168, 37.8534],
				"childNum": 13
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Č@°ĠôÓô@Ŏĉ@Ƴĸ@Ť£ĢlVôWVóřXĉŤêÞ@ƐÒĢÑlèÈV@ĠIk°ÆŘ@ÈÈĀ@ǶťÒğ@@ÒĉlŻ_@ƧĖÅĬōÆ@bźÞnƒlVÝĬWÆ¼ʇÝÅ@ÇÅÈwWóĉ±ğzĬČƨÆÝIĉÝ¯bÇÑĉ¯ʈV°xUŰĊ¤ƪ_ôÓɚI@lȚXȮŎlɴȘ՘¦ɲÆʈ_ɴźôÞʊŎĠɆxˤ£ɄÑVwXƳ¯wɛŹ٧çƧ¦ōُ͇еϻɃɳUÝ¯@ōÝŹ@Ý»mğ»ÝKkŁżřɅƅƒ¯ÆīĊ»ôVôĕÅUĉéV¹ƨémanÑ±ĕnwmwnÇÛyĉ¹ŹlŏkĵèķmōÞġKñÔċKÅèĉzômxȗÿƿI@þÅČÝKÝ°@¼ÈVº@ÅĢÆUċłnÝÆǕČĵJm£ÝJ¦@ĊxV°ƏLċ¼ǩ@m@ÅĢómÇÆğ¹ÇÆĖÞKxwô¦ÆÑÆL²ÆƾU±ŚÅŻĖ@ĬŤÈñ@ǔÇxÈÇƒ", "@@VÇţ°ğUĠ¯mk¯ó¥ķIġÿƏbĉa±ÒĸĀlKU_m»nwm@ÈŤ¦ĉbÞ°±Þżł̦°ĢŁVé"],
				"encodeOffsets": [
					[76624, 39196],
					[81507, 40877]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6542",
				"name": "塔城地区",
				"cp": [86.6272, 45.8514],
				"childNum": 7
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ήnĸ¥ʈ¼ĸ@ôϰÒ@ƅƒōUķƑǫʶпU֛܃LګK@΋ĸ@Æ£ÞġÅĠċLVÝ»@Å»Ýnm¯»nŻĊ@nķŃ@¯ómóÛÝǟ¯aÝóȭ¥ōUmxĉbÇÑ@bUº¯X¯ÆƧbVÒĉnǕw¯°ƑVÇ@kx±UɱnÅK¯ƒĠǠU°ɜL@°xnĬĀŋŎÇLğϱÞέƜkôÅĀǕłĸĊŤUŰĢ°¦ȂϰÜɨ°x@°żǠÆƈČVĠ»ČL°ÇbĊÑ̐óÞlĶwÞɆVÞwǬxǪţÈ¼ÜLŐĶˢ@", "@@óKĵĀV͈ĉłƾǊÆŤzXl°ÆL²¼źôÈĢǔ¦lô°ɜÞʊĠğÅm»ʵƳƑʝȗīV¥¯ĉ°Ñ@ŃÅI»ĉmğnaċƨbVğwġ¯@UōaĉÝJğÑÆŎkŎÞĀlź¦"],
				"encodeOffsets": [
					[87593, 48184],
					[86884, 45760]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6523",
				"name": "昌吉回族自治州",
				"cp": [89.6814, 44.4507],
				"childNum": 7
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@መL@È°ĊȂɆƒÆĊ£ťôWÓɆbĢÅŎÆ¦ČÑW¥°ķU¯ƏŃVē±Ý@óçĭɃƾřÆķkwŹŤ¹ġ¥ĵKŏÅXmˍщwǓ¤Ƒ@wóōVķ£ɱġôÛa±ÒȁóèţIVƽ¼k¤ó¹ġJmx»ÝU²@ÅÆĸǫŎĊmŎǬ՘"],
					["@@Þô°bÞǠôÜôn@°ĸńǶkł¼UÞKğČÆÝĢÅ¤ķ@@ΌڬL܄K@ˣȂ˭lĉÅW¥ĵVÆý@ŃÞēUŃȗƅ@ŹƩǕĉ»k»ÇVğóřXŻKƏċêȁèÛŎġͩń"]
				],
				"encodeOffsets": [
					[
						[90113, 46080]
					],
					[
						[87638, 44579]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6530",
				"name": "克孜勒苏柯尔克孜自治州",
				"cp": [74.6301, 39.5233],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ˎǫĠƽ°UUĉ¯±ȁÑm¯ÝōˋōwUÅ±»ÅƑ°Ș@²¯ɳʇ`ɱÅ¥՗ɳȗōkȭșW@kəJóÔƩ`ĉ£Vů¯wU°ʇĊÈÒ°aĊÞÞJÅċƧīĠyĊ²XôÇxÈÆÆ@ÞʈÅ»XÞīUƑkmŹÝ@aŎÅÆīƨĕ@ż`Ċk@ÑĠ@ŦÑ@ǵÇÿ@ÇÅŗl¯ğJ@ÇUkçġÒƏÑÝ@ţéWĊôŚUóXUġkţ¤ķ@@ƴōĊó@óÔğ¯ċ@@Ò¤kôˣŰ͓k»KX¯ċwƧôğɐÒôIVÆ¯UķǬķn¼ôb°ÒȰVVÈÞ°ĸó¤V¼°V°²êlĢÒUƨ¦ôȰƴĊVV¼ǖIċĊÞɜénČW˸ǸařÈw±īçĸ¤ĊôwĸUĢ¦éǖĬĀô¼lÞkÒ°x°ƆÞxÆV²ǔ»b°wÞȘ¥°nŎV@°ʠèŰȂb"],
				"encodeOffsets": [
					[80269, 42396]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6521",
				"name": "吐鲁番地区",
				"cp": [89.6375, 42.4127],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôKĉǪa²¼lÜô@ʠê°ĬôȂ²ÑÜbĢóɲĸ¤ŎUô@xƒǔ£ъxˎmÈÛ@_nĕÞōřǫğůlȯ¯ĸ»U»Ükôƛ°ůkť»Ŏŗ@¯@±͓óͿǓ@ķȁ¼Ϳ@Ƒ¼¯°ólġ¯xȗUġƑǩÒƧUÝ°˹Kóx@ǸōĬÅĬƑĠóƒǔêÆ°XÒʟŤUÇ¼ˋnn¼±V²°ȂUŌÝbʟǔɅô@żǬaҎÈ"],
				"encodeOffsets": [
					[90248, 44371]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6540",
				"name": "伊犁哈萨克自治州",
				"cp": [82.5513, 43.5498],
				"childNum": 10
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ĉÆŘȁ̐mÞ¯ĀX°±¼@ƾ¯ƴ°ŎÝþŋ¦WÜÞbȂĉźUÇmwVUȂóô@ȰÝ΀nÆJnƾʠŌLČóǪ¯¥ǔaǖŌaôÝĢLxÆLɲm²VlwÈ@Uƒ°¯ǖxĊmUÑƨa°Å°WV¹aÇɃÈm¥°¯ŹóĸķǫUm»Å¼ÇVɱlÝŋnķÇÝX¯ͩÇɳaÝ`±_U±ĵnWa@ĸóķ¯ǓV±ÅĵJċ¹ɅykwÇ¯£Åxʟ»lķI¯X¯ķêǕȭnķ»Ź`±kÞ@Ýô@Þ°xŤŎIƨÆUxō¯²ǔĬǬlUŚ"],
					["@@ÞĀlź¦¯ĸŤKÞċƨbVğwġ¯@ţƽJ"]
				],
				"encodeOffsets": [
					[
						[82722, 44337]
					],
					[
						[86817, 45456]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6527",
				"name": "博尔塔拉蒙古自治州",
				"cp": [81.8481, 44.6979],
				"childNum": 3
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ήƛϲÝĠÈKŌōÿmīw@¯ɛKV¯ğǟ°ƑwġKóÞŋbǕǓb¦ǩ°ċôŋKʟƽmÅImͿȯÞó@ȁôUVnxÈŹVȁĊÝabŻ£¯°lóxȂŤĸkĊÞyĊêĊmĢxVƨÈĠXΘÆĠÔźɆţ°LXƾŤŤb"],
				"encodeOffsets": [
					[84555, 46311]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6501",
				"name": "乌鲁木齐市",
				"cp": [87.9236, 43.5883],
				"childNum": 4
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WôŚUĠÈl¼Ċ¼ƪǖ@źȘƆ@ýlÜXVŘÞ¦V¼kĖóÒèkĊȁˮ֜@ǫ՗nōĉǬōķÆÅ@±ÞV¼nwĢIôºl£ƾ»UŤJôçó¯īʟéó@kÛ±»ǩbĊóLҍÇǫb@ŻɆóʠǓaŋÞȁVʉłĉbĉɅô"],
				"encodeOffsets": [
					[88887, 44146]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "6502",
				"name": "克拉玛依市",
				"cp": [85.2869, 45.5054],
				"childNum": 2
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ɜÞʊĊýVaÅm»ʵƳƑʝȗīV¥¯ĉ°Ñ@ŃÅI»ĉmğnaÝţL°ķóKĵĀV͈ĉłƾǊÆŤzXl°ÆL²¼źôÈĢǔ¦lô°"],
					["@@ƾIŤ@UUwōaĉÝJğÑÆŎkŎ"]
				],
				"encodeOffsets": [
					[
						[87424, 47245]
					],
					[
						[86817, 45456]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "659002",
				"name": "阿拉尔市",
				"cp": [81.2769, 40.6549],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nIÇŃÛÝĊÑĠƏōгwȁ¥Ƨ°ŹÑķV¼ÞêĊ»lĵm¦ÅW@ĀôÈźaɜxÈbÞÆĶIОŘ"],
				"encodeOffsets": [
					[83824, 41929]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "659003",
				"name": "图木舒克市",
				"cp": [79.1345, 39.8749],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VéVÇţ°ğUĠ¯mk¯ó¥ķIġÿƏbĉa±ÒĸĀlKU_m»nwm@ÈŤ¦ĉbÞ°±Þżł̦°ĢŁ"],
				"encodeOffsets": [
					[81496, 40962]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "659004",
				"name": "五家渠市",
				"cp": [87.5391, 44.3024],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@çôÑlĕU»¥ÝUŗWkÛ@þVńÝĔ@ńÅþĶUX¦Æ"],
				"encodeOffsets": [
					[89674, 45636]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "659001",
				"name": "石河子市",
				"cp": [86.0229, 44.2914],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lŁǵmĉ@mż¼n°ÞmÆ¼@"],
				"encodeOffsets": [
					[88178, 45529]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7001",
				"name": "高雄市"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PiWckQIUH[jYreVuBQ¹[q[][{cGiRiUcw[GqRW@aisQJyX_nmJc]C@@gHaAomhy~yKqi¥p_qs}SÉHMcIqSyDqAk×@sTuDyÓSHK@MEO@¥º¢­KtO^@@KVil|[^KbPbJ^KhUjevcG`BVLZBPCJIFIJEPUdENO¢pZBC^}fOºOFG`J\\TrRp`ThVdjtpnrfztr|º¬Rp@@GnKbBb\\ZtEnF tbflz^bd\\prÐbElObiDM"],
				"encodeOffsets": [
					[123924, 24000]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7002",
				"name": "屏东县"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BCB@@CLMCC@CSKCAKIWQ@@@@EVJT@@VZP@FD"],
					["@@z}ngpbBhG@@\\mFchGlYU£@eOa]eS{Ki_Qo[mWuE©HoPiHs@eVcdgS[iWO[C_V[ZKX_@iDiXkdaadBFƳKuSiYQ_[B{JAicpsf}Z{NCoQQYF[XAPJrkAR@NBX@FXRZDTÙƶMTiraOTnWNIBGFG\\CHaVbcVe^OJCBÔCzSv@tlØBCrTzJrNdÊG~Trt`¦orjzL"]
				],
				"encodeOffsets": [
					[
						[123261, 22893]
					],
					[
						[123632, 23437]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7003",
				"name": "台南市"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@CIQNM^DJD@HGDMROAE"],
					["@@Uq@B^ BAD@KcAI"],
					["@@A@\\FB@M_y"],
					["@@AQ@@DDAEw"],
					["@@M¥L_dY\\@jRhD\\GEQo«¹q{ysqeomisUcSgo_qQ[S_IHE¹PeP]~ADoY@@GlMZ]\\fXTlGfqFIKGYMQY@IPDrER_NQOMSUEUREZFXHPXL\\BXHHVIJR@N~@ERa\\UVF\\TLTFLRG\\IVHVJZRTCPDPZLLTF[PL^hMIxKpTTblZtfdbp`~Z¶TBxO`QP]LcHu"]
				],
				"encodeOffsets": [
					[
						[122927, 23603]
					],
					[
						[122929, 23701]
					],
					[
						[122943, 23747]
					],
					[
						[122967, 23828]
					],
					[
						[123431, 23863]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7004",
				"name": "新竹市"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@AAcGaLU\\_RuR@@J^jRTFLALCLGPJVNL@@W¶ajS^[PYGYQIiEkO[_QgQS"],
				"encodeOffsets": [
					[123864, 25309]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7005",
				"name": "新竹县"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@QmKaF]]i­£_UFGECCbcxYXI^e\\¡UeDsC{M_FFdJbG\\ETFVHXB\\Ef]Xho`]`aRTRh\\`lPjFRJHZOZ]\\iTµbX@BLPFZFTPVTNTFAJFTRjPX@@XGªHdU`}fMbG`MtO\\]GiZYtM`UXU^C^B\\YT_bMZSBaLsMucmD_h[pYlE`Sx]fO"],
				"encodeOffsets": [
					[124327, 25186]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7006",
				"name": "宜兰县"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@B@PAFKFCEO]@IFCD@@INHATJ@BB@@@"],
					["@@@KYBWASEMITcJmEgmWCQFSLSFSSOoYwwAWDoGSIOGUCmCKGGCIHKBAG@LÏ]EQig_q@Vµ\\qVSNmbe@cO]C]RaReHKZFf[H`®¤^jE^LbRnDL^JZCZHR\\Wh\\XFnLfL^XfXtV^TCNGX@\\Ndf\\^P¦f¨xpNhZXdX\\^N\\HbVNZSZLTP\\R^nJZMFG@@ikaÑßUaQoKuCuBsZ­A[K[ByZkt[|I"]
				],
				"encodeOffsets": [
					[
						[124869, 25450]
					],
					[
						[124808, 25195]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7007",
				"name": "基隆市"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ABS\\[CQQK_IgD^WP[XUXMZUZCTXPxVbT@@LEFGLK^IQ"],
				"encodeOffsets": [
					[124684, 25747]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7008",
				"name": "苗栗县"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@b^_p_g^WFeA[GWEUFSH[IaEc`E|NtDfC¢Vf[J]ZWdwDa[QMgeMi@_Sc_mUuSakPefmRFiWGsgSCnqHyZ³qfcd¤@@xzN\\HpPfnNnLRtNNPJRJR`^dXlJxGGfVZ\\ZPjFL\\NBH@@vQ`QV[bKdHBB"],
				"encodeOffsets": [
					[123864, 25309]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7009",
				"name": "台北市"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@_MmBeF[X]^k`_pNtIlmh[^LTNRP`\\\\nVP`N\\GROEWDYLUNYR^WN_MmBcdQ\\WM]{"],
				"encodeOffsets": [
					[124538, 25577]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7010",
				"name": "新北市"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\uHDVFXBPC@EGIGK@OHGRK@@aSwUWODSVYNYVW\\WXO]hC`JRLDR[\\ATBŎ{XMKYCUFcT}T[PEvF\\AbG\\MPQ]@@EHYNmI][QOKSTYMYaU[G]MW[WcgYoM§w¥e]Oe[Mc@[HWDM]SsUeW]WeKmKQf|IhGdZZJfgNyCgTJpGdgdIdJjAj\\^¦ZZZH\\C^gtaP]FYTcVqV_`@@NdNpdNFRDX@\\GNSJQLKZJ[hkjWNFRNLPFFFPdXjtjbRIdW¡", "@@MQKS\\]ngJkMs`ol_^]\\WfEnA`N|N^[XcRAdNnM`]XQMZKVCZFXQP[H_MUOm[[O_"],
					["@@OIATRI"]
				],
				"encodeOffsets": [
					[
						[124556, 25829],
						[124391, 25743]
					],
					[
						[125010, 26246]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7011",
				"name": "桃园县"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WEg[XQ[YGYD]ICKePw^_TkFoZg\\C`dnNvKtAbYTaNS`[Z]A]DWV_VsNYZHj[^sP_NaHeN_~cV©GWH¤vzxlÐjbT\\VdRVÜZ`_rUdUZS^EbOhsD]G[YY¥Y[]BiIiJchcHcIohSzDhMIeYYHcJg{Re"],
				"encodeOffsets": [
					[124399, 25274]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7012",
				"name": "彰化县"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@YaIIUF[O_Me@iImEPk\\W^IlSGY]IQOSKGCPm@jÙP`sLyDëS{`@@FJNrHVxpPTTx`vn´T`XVTLPHLJFVHRh^JVDHTTR nM`YTkHubeYbYXaP[@]JW`ClY@I"],
				"encodeOffsets": [
					[123564, 24597]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7013",
				"name": "嘉义县"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@MICHRVHRHJFC@GKMIU"],
					["@@EG@NPZHDCMMU"],
					["@@@@@^DA@SCG"],
					["@@CKAB@ACPHC@@B@"],
					["@@CIGLADLC@AB@"],
					["@@YK^h¬¤¢RD§a_WY[YWOaY"],
					["@@¤_\\DPfWR[rFP`J@XBdD@pEtQ`GhSAeWeJaTmDiHY|IĆAHAÏq[oacy]kaesmEsF[YAaLaHm@@F[HgCiQ[@cZK`N¦GvKdO^_RwPAµS}Yo_casekYSaoSwLJgN^BZJJCEXQKMDS@@XTh\\Bj@[_zNZ@NWJDLNPFR`fCA~F@BBHap@^VNdPTjFvjbP^\\ÀvN¤RtBjafi", "@@]]FgpOvazItRdDXPSrS\\_PiN}CK"]
				],
				"encodeOffsets": [
					[
						[122989, 23871]
					],
					[
						[122997, 23916]
					],
					[
						[123016, 23949]
					],
					[
						[123022, 23983]
					],
					[
						[123017, 24005]
					],
					[
						[122901, 24001]
					],
					[
						[123426, 24170],
						[123278, 24074]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7014",
				"name": "嘉义市"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@sQyJuboPEh^^L~DjM`OT[TqWOcC"],
				"encodeOffsets": [
					[123372, 24018]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7015",
				"name": "花莲县"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@@FEFIFIBGKOkiq{cYIMDOEIscSQUiUyI_@aNcLOJGHI@UGY]gEYAmY³o·ŝcȉ@@[He]eNqDo[qYeUmQ{]wcYkBoGkq[J²kLqFgbmT}VezItARUvqfiZG\\JVlRXdOjpXXTMlLTL\\h\\zLzBhbL|^d|TbXLdZJ|GrIhW\\O\\lBZTr^|X~LDvM`OXRvh~BZKbgXUTA\\TtPjRAXKn@@VNJNZLX\\JdXbzbRlD^dbTMrU¶[Ur@h`Rj^FÐKH@"],
				"encodeOffsets": [
					[124686, 24910]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7016",
				"name": "南投县"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LmBWiQsO[SBVShWLaAY}gQuPWN_CuKW}]{SqAYkP[X[JgHqI{YKcaW{S]cK{gayAyKg[K[KSNkWSoWCNajkPaFGBąB{JGZCjSnIbXfBfgT_HsRoFSXEuMkR_bHhNdGxHrPbOtTLRP^JHZkT]J[XOlF Jn@jNfP`E\\JVbJ@Z`@ÌQbDfbz¦^|rVIpBlvXNoZFThf\\rAhN~vfTdFbpBpF`dBdG¨G"],
				"encodeOffsets": [
					[124256, 24818]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7017",
				"name": "台中市"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FDHVE\\GEeLYfGbQ^Q^DdPf@nacaC]QkyaWaIcW[YKIMUM@@§HcHcA_oEoAacEeS}ugMqBe[SgYEpWMkuoAJqU]{y¥eaaCËR_@@JkZ_DIX@^O\\WbaZZafGvSl_ZmN@@FDFXZTPlV²VZf¨¨£dcre´zYrGmDhTHtjXEnQfelObvTnVd``Tj@fNNh\\R"],
				"encodeOffsets": [
					[124173, 25020]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7018",
				"name": "云林县"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PsOaGqHwMcGg`alQvNFTWC@Ac@W_IOqEQ\\eXO[C£`ejibsA£QuM¿][aOuiiEOSMc]Uo@bGAAE@ddA¶FTbvJR~JVpzHTFJl^FL@@|_ìTzCtK_ÚOin@OHD"],
				"encodeOffsets": [
					[123543, 24346]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7019",
				"name": "台东县"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@EIIHFJJG"],
					["@@iMyVsb]\\HR@TGPMPÚ@@MCGGOAUHQdYPOCS"],
					["@@@GEBM@GBADUHUbI^DFDJCDME[EKCKDK"],
					["@@OOcWQOGOKie{UQi©IS«Y[ASDkASGWQWcke_»UIOSgScWiOc¹·IgK³B©cAbcbWlCj@jW`YLU\\D`P\\jXT\\chUd@fGtOjGpFªXv\\nRpj`|LfT^Pb@fV¤kZgHEd[n^DIdmnW`IzRtbj@XQHrx\\VdQjHj|d^\\r\\º\\Jsfy~UnSharElK±Ir\\HlApZld^xR|VnZf\\rCpMr^ff\\GcûQcuUcOkI@Ge"]
				],
				"encodeOffsets": [
					[
						[124525, 22481]
					],
					[
						[124506, 22543]
					],
					[
						[124413, 23182]
					],
					[
						[124295, 23666]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7020",
				"name": "澎湖县"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@MEIJKbHH\\JVEBMAKIGKO"],
					["@@KUQDORARJHXCNU"],
					["@@A@@@A@@BGHDBADN@BBDADCACDEG@@AG@"],
					["@@A@@FBC@A"],
					["@@BAR@CGD@GKEK@@@@CJEJBLB@@B"],
					["@@@EB@@CCBC@@BA@D@DF"],
					["@@MEHNFG"],
					["@@A@A@@@ADBBDA@C"],
					["@@AAABADD@@@BC"],
					["@@@GC@ALFC"],
					["@@EAE@WKABBJHLFDLBLGAG"],
					["@@BQDIFCFEEIGG@GDEKCWBKDJVA^ECOCCPPdLDV[D@DC"],
					["@@FABBJCACBGCEOCCD@@EDHPB@BB"],
					["@@SKCAAAC@KCQGAB@@EBCLBB@@@@DBNABBHBDB@@RHRC@@B@"],
					["@@EI`HXARBLRd{J]CUMPSLUD_OUCICEKG[EGcSeEeNebJRVU^EbH\\TSHMHKLKNCE@AAAGCA^B\\N@PCzbdJG]"],
					["@@[@DPJHNDTBPFFN@bZXV`YQIMYU{@ODMAIWCO@KAICIG"],
					["@@QCGJEZOTa^l^XKZSJUQOFYIO"],
					["@@AGAD@@GRBDCFNJHPDFDC@CTICKOIOO"]
				],
				"encodeOffsets": [
					[
						[122292, 23752]
					],
					[
						[122287, 23795]
					],
					[
						[122477, 23806]
					],
					[
						[122482, 23815]
					],
					[
						[122532, 23823]
					],
					[
						[122524, 23825]
					],
					[
						[122373, 23830]
					],
					[
						[122194, 23877]
					],
					[
						[122179, 23883]
					],
					[
						[122194, 23884]
					],
					[
						[122401, 23929]
					],
					[
						[122368, 23953]
					],
					[
						[122176, 23973]
					],
					[
						[122404, 24062]
					],
					[
						[122480, 24162]
					],
					[
						[122324, 24128]
					],
					[
						[122456, 24192]
					],
					[
						[122466, 24301]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7021",
				"name": "金门"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@gIUHfJJPDR@NINKAUIOK@IGCGIE"],
					["@@dG}]_s^gLEu__kYK]NSBSFGPBDRTFJ@N@RE^M^ANLF|\\ovFH~RhzJxm"],
					["@@UIKHFVRJNABKEO"]
				],
				"encodeOffsets": [
					[
						[121078, 24999]
					],
					[
						[121293, 25094]
					],
					[
						[122342, 25581]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": "7022",
				"name": "马祖"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@OOMMEQGTfRABFHB"],
					["@@OMQX\\HVIOG"],
					["@@HCbRV@@KUUiSMASLEPDTHNH@@GBERE"],
					["@@AGAGDGAEIHIPIDQGGBIAIKIcGFCJD^DLHDTFFFPJTAJMHCDE"],
					["@@GAC@CBEAEEGOADIBEBGDHLCJHDPNVKDGHG"]
				],
				"encodeOffsets": [
					[
						[122870, 26593]
					],
					[
						[122824, 26596]
					],
					[
						[122812, 26788]
					],
					[
						[122895, 26850]
					],
					[
						[123400, 27009]
					]
				]
			}
		}, {
			"id": "810000",
			"type": "Feature",
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@AlBk"],
					["@@mn"],
					["@@EpFo"],
					["@@ea¢pl¸Eõ¹hj[]ÔCÎ@lj¡uBX´AI¹[yDU]W`çwZkmcMpÅv}IoJlcafŃK°ä¬XJmÐ_đhI®æÔtSHnEÒrÈc"],
					["@@rMUwAS®e"]
				],
				"encodeOffsets": [
					[
						[117111, 23002]
					],
					[
						[117072, 22876]
					],
					[
						[117045, 22887]
					],
					[
						[116975, 23082]
					],
					[
						[116882, 22747]
					]
				]
			},
			"properties": {
				"cp": [114.173355, 22.320048],
				"name": "香港",
				"childNum": 5
			}
		}, {
			"type": "Feature",
			"properties": {
				"id": 3681,
				"name": "澳门"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@áw{ÎNjF"],
				"encodeOffsets": [
					[116285, 22746]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Aichi"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@PHJB@SSYWPRT"],
					["@@`@Rg[COCMBAT@ZJ@"],
					["@@DEEEMdDJ^AEWCEGA"],
					["@@BJHHRAKcGGMBJZC@"],
					["@@BBhB@GV@@GO[YGO@ED@l"],
					["@@GEEJKCAGIFJRFBTGJCGE"],
					["@@CCUCK\\ZHDINEDCIG"],
					["@@@UUD@LH@@HDHJ@@I"],
					["@@PIHGJMDYYCDMM@ALKrCJPD"],
					["@@CEQJPTLIEM"],
					["@@@@HINHJBDEHAJQQK@EFM@CJCP@DMCGDGV@HCFDAJFHdEHERCNKPOFDHCLDNBPOFIAGBKPKZAFCXPTBFGLJPHJABHL@HJPDCHFNLBHADFRAJBV@LDHA\\IHGfMDEKMHKLAXHNAJFDGTADMCEBMRCLDLGDEPLHMFEDGJGJBFJFBBHRBFLHAJBHLFAPPJBDFRDH@BJNATNDJJACPDFRADCP@HARHLAHLJ@HMGCEEMEAEBOIGGACODADONKLALOHAFMFACYBO\\BVJBDTD\\FNBNEJ@@JH@JH@RFBVALHJ@FHLGNFLCLDLIHBNAAGBENANDPGL@TFRGBCEKDGVGJFVALBNH^LJBXGEAM@@MMAAKGI@IECMDGIDGJGPAPK@EGMLEBGMGOFCMFGIEGKI@EHI@AMLC@OFWKGEOM@OHEMAODMOIGAEEE@GG[QIIAEGECIKAAEICAMEECGIGK[BINGQSDILOECQBKO@MMCOQIFMCGCEMKIDOKMBKOODQAEIGEGYKGA@EO@WEC[OQSBGAQD[@@EMGCEG@GDUEKKS@QGAIFEMGAIMEHKHIEKBQGEMAIODGCG@UCAAKHGBK@KDEDUJEDK@KDEG_EEBIAIaC{IOgGQgIKAkKS[GqQI@WEYKEDQE[KqOQA]AMBIAQHKAkGwKKEKFSAKDPFHJHZlN^XRRBLEJGKGFG^EJCII@GJFXEPHVFHJGJODLFPE\\FHARDTJPPHBHEJFNPLBHEP@LF@JFHFAHHMPZPNCLOHDJTIPn^bE@U@BEIKFGJFXEJBFLKHHHRAJNLDJHADT^HDCLQGSDOF@n@\\JDDHP@BLIAGL@BEFKFGPIJOJO@CKMDKABJI@BGMCKDKCIBQNODKD[NLKOQKKQPHHCBMKEICKGIHAIIFCCGFEAGWSO@AHNDDVEFKFKAGGO@KLU@AMSDCHOHQACGUQICGHAHKFM@MC@CUEGCOCO@MDMNCBIVKFKLELAJK@]FWHGLSICFHDN@EJE^DNZb@FNCBFKDN`N@AHKCBhBD@PFJEJDLLXEHEBIeEiIEHEESGQOWNICCeLGELE@IKOWHDMJC@OIAECHECGBSECC[I@@EDMEKBIEOCKBCCONILA@MNEFGLE@CNMNAPGLQECKCFEHBJEEKFGF@IMUDICWBGDGLEA@IIHMDULYJYHIHMDKPMDGNKFKPGNN\\Tl@LJXFTADDTK\\GL@LOPIDMFHFGLISIBKP@JJJGRAHDd@RAFHR@TFPQJTZLEDHIDHJRXJ@HJUBLL`CH@BHcFBJ^ljD@DO@CDNfEFLDBd_DKACIDCGQOAFICQCEQBIDFJW@@IEI@G[@@Bg@@MF@@_[NKC`WCMOJICGHMADFW\\O`CRBTEROLUVULKD]`IH[HI@GNAJ@JFP@PEZB`VVCrCPATBFXRJJVhHJRLNNDHRb\\jRjFHLLPFfACIXGZAdETJbPHH\\DPFRB\\A\\DHDRN`NLBJHDNCPFNT@XFL@MM@KKIAGHAL@DEDKH@HE@IFGX@DGNCJ@DIHEX@JOGW@Q"]
				],
				"encodeOffsets": [
					[
						[140093, 35854]
					],
					[
						[140099, 35891]
					],
					[
						[140131, 35881]
					],
					[
						[140154, 35905]
					],
					[
						[140605, 35557]
					],
					[
						[140340, 35558]
					],
					[
						[140618, 35618]
					],
					[
						[140615, 35578]
					],
					[
						[140090, 35715]
					],
					[
						[140106, 35792]
					],
					[
						[140336, 36188]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Akita"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LDRBRHJIRGLDL@RHPBJKJAJIFDCHJDBLDJINJLJFBDPFR@NH@HJATDJIJF^QLKCEDKLEFIZ@ZDHDJCJ@JEVHdDJDDENIF@\\FBCRIXFNFH@PLBA`APDJFRAVBFELABIXD^@HDJXARH@BLHBDHLHBDXCL@DFFLHDRIBGH@JENBJHTFTIEIAKHCBSLIJFH@NFNEXAFAFKBIJCPEJILEL@JFR@FIAKKABKAEPBHCJMNBFERGPDAPMJKRJJ`BDFZBBLJATIDGLEL@LBDEPGBMDAGKDCNFHCRBVFDJN@JHNBDDBRH@PDFC\\@BKLIVADHCHDJGDFHALPCVBJNHDDHLDFC^LHEFITAJR@ZFRAFBJHDJNN@TRH@JFNCNDjF@UOÁjYJDT@HCRHPKL@RRTGVBTHZGBKKGFGCOJEBICSLSFABMGEJYEEWQMBQLCEJSAGII@KGAAM@QGIOCCEBOPAJKECCQKMAKHIJE@EOAMKDWOES@MEO@GACGOIDGQQFQg[G@QIACFKNKNBNCBIQU@GOMBCNOEMNABQCA@MIMEAKKKDKIAGMEFSHG@OHM@SIIDKHGEGDGKKAIFG@KEKAWD[AGHAJIACBMGCAKJIBEEITMFI@WNKJUAQOGMBMCGGIDIHBDMDCHMLI@CEG@GEO@MDEGIEG@KMDUJIBEEI@QGGBGJACEPEJGHCTFTEDIH@FETCLMBIOIKOQMKCGSUKDEAKCEMGQEO@KENGDKHGHKFKVBJC@SLONEGGBQDCBOACCUDEMGESIIBMKKFKQS[BEGAIBIIBIEKACIKMCIOCKGUBEMDKVM@KDGEECYIBMGEGDEAME@MI@KDAHOJGOCiYKCEGGEKQBGHEHI@GCKBEGKKCIBWE@IHABIIEKSPIJCTDHEASEIZSJAIM@GHCH@PCDIHQUAAMGCAMHEGMBGRBLERABIAIB[JATKFBJGJCLDDIHEXEBGLIBCXECGBOOESAMSFIBGCMLGPBDEPERBRMDIQEEBOGCKEAIFIAEOIIAEQOMGDMN@HIPGGGUEBKJADCGKEKBEGEAILAJIFBLENHNE^EHK@GIGBEJC@KGECIKEFKECDEIMICCKGCAKIEICIE@GHCGI@GJGBKHEBGEKDIUAIBYCCEWGKMBEGC@GMMI@@GGEG@EFMGOCKGAIKICMICKAOCDESAIGSJSBIHKCEKOAKDMEAGIBOEEGOAOFANKL@DWTSGCFO@IAKGK@IHCF@JYP[DIHBJEFALMH@LCDHL@NGJDRIBANODCJGJWBMEEHICW@MFGAQD@FGLGBEHC^O@SDIFMDIHQE@MOWODADOBCLOH]JGAGFICIIG@EFKAECSAIHkJFHADDXGNWBAEYAGKQFIIM@MXMJOEIBIHE@CTWLQBUBSBWNJNGNCNBh¯USMESVCGL@FFFAHDBHJNEHBPDHVPJXH\\BXCLUFDHEDDLRTHTLTDLGTJ`HJTR^BDA\\HNFJJNRPZFPR^L\\PfFR@JHVFFLhVRFbBPBPFhBJJDxBX@~ClEEJAPKDCRHXCNDDAHMAHSEAKFFFGFETJBDJCDCRQhWdSZST]ZeZWNWJ_LWDc@GEOBiEQOLGICGQ@GPDDKUEWA@HQDOI@EEEO@EBONKD_E@GMHUEIIINUP@JEBAL@NENBPMJECQD@NONDHIBBJCBBLEFNHRAFJANCDMBSB@^OFHPEFFLCFHHBJJGDGJIHMPKR@BDRKpEJIVCHOXGXBRFlPXNTLf\\TRVV\\^^dbtHNb~VrNbJXJ^ALOBJdLAFVPBIPFFHT@LFLLjJHnB^@XARCJGHGDCNIJOBAFSFOFCF@PCDIFGAGJUNKBITOL"],
				"encodeOffsets": [
					[143295, 41399]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Aomori"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@MCKWSEAEMGKBOIOEW@IACGWAKCKKC@CKGE@KFECGHIIG@EQGAGOGOAEEKECGMEMFKAUFOTOAELQJEAIJ[BECMACCQDGDOGCIIE@EODYMKTEBGGAEGCBKOOAEIAEDGIUGKGIPIFIBGFDJ@TKDKJ@FQFKKGAM@OOBKGE[IOJI@CG@EWAEGOEKMK@EIII@EQAICMGW@MDM@GEMAOIQCMBGK]IGEWKGATeKKS@GEMBMAOGQSICQ@SGSKAIGC_CIDIAIHWGGNMDAJCDAJKDIH@D@FIFGJBLLNDRFDILOBAPDFPDHJ@RBNHB@LJJBHITDFRKNAXRFFIZHFANEBKTDTAJIFDPEHLHALYHSGUASHQQK@OLQGGDS@ICiZPÂ@ViEMCMDIEG@SQM@IMGCAIBEEQ@YIQSBEJGF]KEDKCCGGCIMUAODBKEGHCCIDGCGUBKJAL[@EDOCG@AQCCMAIGM@CIUEQAGDMECDHLCBANOHCFKAK@KFCHSJIBAKYACE_AIILQNIBOOCQHEFMAINGDOABFALLBBLEJQ@IEK@KFIJOFIDAJELEBWBMFMEG@IEKJATGDBLFJSJSEIGMAIFG@AHQJGCEKCEK@WDACKGCGGAAKG@BQIWGC]@WCAJKBEFUAQBIEOC_BABOKG@MEWEQJAD[EE@MJCFICcCUGIFI@IDGCYCY@EJKFCLDFKL]RIEIJSCIB@GMGQ@OEACIEIKJMCIAKICDGECIJIBILOAQGK@KCQHIJQGQAKCHNAZFB@RFLAJDDB\\FZA\\CDBJ@NIlIVOFFLKXQRWBUIWFQEMFEL@HIZ@RHBHFbTRHCDLJHJHBLGLFVECJFLNDF\\L@LDRRHFL\\AFJFNBJPFLCHHFJTHFDHGFHDL@TFFDNBPTNHTDFFXCXOPAJC@GJEDEhIjLNFj^JJ`LLLLFJAFDHINCNBNDVNJLJHRXNVRbTlJXPpLjNxL~HvHDh@XA^AXELKFMTSRIBEHQDUAKDKAQFDRNNPIZHJEL@DEJCP@RN@PJAJFLXBPHNBLAHFH@JGJ@HFFEVEHDJALFB@JPFFVILHLNEFENCFGZCDEJCFEPCRQBMLGNCLKLEJKAGNCDERGXADINAfDRHXPXTFFANNLR@FEJFLLJEjANCPIZANODILKRGJARSFM@IIaBKK_BQCMBKCUFW@SFKBUHIFO@QDaH]L@ODWF]N_FUFQHiHUPWVWPCXMPMLEFGHBRANBFH`CJARDVJVNFHPLDLF@HHJD@FFFN@JJBJVNAPINT@JZIHHLCL@RJBAHI@GDGEUHQFRFL@LBJH@HIDDPLBBFJ@@HEFNRHX@HTFZEZUDELCT@PDDCLABIFILIFGRIRKFA@KGMDIOEAIJEdDHDRIVCJABIXMPEZFTGLSPOHQNI\\SP@HDHENDP@JFTFNH^ZXXTXPX^rP`TtFXHbFbDd@\\AVHFDNAVDLJJDLVNNPHZAFFPEZUpUfMV[dWXQN_XUJSBMDUCEECKGKSSEKIGBGTBDHLJLFGSOIEGKESQ[QIBSASIEEMCOIaaYFO@ID]RMDOAGC[JIA[OOK@EUOODOEMDMBMCQMUGIDQBMASGI@KEGGYISMAGUWGDQAMJQCKJELGAKNFFAHDHBLCFDFC\\EN@JHJVN@RHLBLBF@REFCPLLL`CFLHAFHJ@JHBGJDNLTCFIHPNEBDHNFPVHd@LFB@PAPFPHN@JJNEF\\NJRZJAVJHRFCFPV\\TL^HHEFHJAJGFBFKLELLBJF@RHNLANSZKF@LKNAHKNE@ETWPEZIRIP@LCxA^@RAHETIHATIXEPQLC@GPQROL@JILONKHAZUBEPONIfWzYnMhG^CX@lHrNnT\\J^PXTNHJJLFLNdZJLFCAKJGMEAIFQI@GEAKNICEBIEKKCAIGGGSGYGWWOsI]CGCUE]@EI[AOCKESE_@eFW@GFEBGCGASDWFAAMEOCYICo@m@QBI@QBqDGGGSD@EZEAMLAEMJFoR¯NDQD[DIJsH]HSDCHQHaDILeZuACHILYHEHKCALSLDFKMGFGLBNABULFFGICFCLDBIRK@EVERBDDRBFNNFDFVCJCAEFOHKJG^GJIAEHENC@GPEBKHC@EFGRIDKJAHEdYPABC"],
				"encodeOffsets": [
					[145084, 41422]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Chiba"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BFTJHV@ZCHBLNHVBJDJLJNCTQLGLIHCHBJFLANQJMPITHNTH@LIZFHCNBHBREJDX@PLRHVIZCRENSZGLIJGTMNULGFQZCN@HEJIDCHBPY\\FLGjHN@FELSLEJSRGNGJGZGPDPRLVONSH_LQTO\\YTOTGlmH_DEXSFCdMR@NAJEBGKWBGLKZI\\SXGRONGHAbBLAXQbQPALELMPI\\PJ@TGRGTELENWNMJKJELAVFVHRFXNNDTBZMJAVBn^THTA^KPCR@LBZNNLLJJRHHNFbJ`JXBTERBRH\\FTXZMFEVMZEBFOLGR@HHHHCFHDVHLPP`ULKJEZKNC\\MVOFIHA@IVERMLMFOXaDKVEtETCVETKTKNMHMRmFGZWTKiZQ\\ONC`ARBHDDF\\EJQEIHSKI@MEG@IFEQ@MFGAENCAEPGDMBQ@YCGA}QkQYA[DGLIDM@_CSC]KG@kQq]cUOKYQIGWM]W_YIEc]]YY]KIKQMS@EIGE@QQMQUaUeGMSmOyGWE]@U@{BG@OFWDCPGPYDIAIIKK[IcDKFICEHCCMDIAEGG@IGKCQEEDQIEGM@COQSCGDIBOAECEKUMCI@GIMEUKEKBARIFQBEIGACIEKMAQHGAKDGA@EQ@EQKAIEFEIG[DICMAIGMLBJEJEDICAKKAKDKFO@KCCGK@SH]KYQGIDQKCEODMIAKEGBEMBGMEEEUDWCYK[OOOGBGCMGSOYYGMGUCQEC@IIICOFGAIFMGUMGBEKEGGEAAKYIUEGGKBACMAODKKGFW@GHE@cECA_LMLBNHFCNILWP_NYHWA_VDHEJFHTENDLCHBJEVBHDXFLAPVEFZAJB@KPAPRBL@TERELIDK@AFKFIBICOJMDHJD@FGHANHFJCLEHELGLBJbLHJ@JGREFSB@NDFEFNLFHDLF@ERMNANUFBNHFKHAHFdFFDJHBDJPFNDJJJBZJDHDPATGTCJKNQPALHDBNEHOLaNWJyL@DjB^FGLPF`PEFQAKP^^TWPHHKD@QZULCHNPbOhKR@FIFBQZJDDEJFDGLDEHKCAF`NH@GRMCKZBDIN@ZHBDNfRfFRAD^XDFOOEELEAFOZFNBQhbNVcDDKVJDLKHDKNRHLEHIHFGJDBKH@DTVVIFHULRVRIHHQJZ^PGFFMJNRLEFDAJJF^UPGJFEFGAGDHFGJDHLB^IDFoP@HLDr@KDCHEbIHaBLHBHHFCDIESTKERQEI[\\EBWVkdidIBGCaCAJPBDCNBCL_CAPNB@FODDHUDAAU@GEMOKTSOG@EG^HFGMCUASKCIdWHG}_WOIPIE_H@X"],
					["@@BCsAIflADSJABG"],
					["@@I@DNNBHBNA@EMB@EPA@G_D"]
				],
				"encodeOffsets": [
					[
						[143230, 36493]
					],
					[
						[143474, 36427]
					],
					[
						[143323, 36528]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Ehime Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@K@EDICIJZBNCAG"],
					["@@JB@GI@CKGKFKSGKBGCCOJKHC@IPEMGEDQACGIDCJFHDTDJGLKHBJXANBDHALDDP@BJNA"],
					["@@JFH@JDDIUAMISAQLNHBCNBLC"],
					["@@KA@KOC@GO@FJIHJHFJH@LFHCLB@EGG"],
					["@@IAEEMBTNHAHJHE@GIECD"],
					["@@EJE@CJJBJJAJFFJBAMBCXHFKCCFKMDGFIEK@@MDGAMGGHGGAKEEMQDECKD@FPDJ@JDDLEHDFL@DN"],
					["@@LIDHPIDIPAGEODIHK@GJBH"],
					["@@DAHLFGLJL@GMIMGHIBYAALNFHI"],
					["@@BH^NBEFEAGM@MGKA@ICC@GHECCIDAJBHGJTH"],
					["@@IFEJJD@FJJLEDBRUIIOCGECJ"],
					["@@K@BHHHBFALDBJWKC@G"],
					["@@MGKDHPSJHB@HNBNI@IVDEQM@"],
					["@@BPJ@FEBIJCDKHAEGDIQIKFENDJIFBJ"],
					["@@FPF@XNJG@EJGAEECMSMAUMACHKHBCMQMIDARJTIBATJDNL"],
					["@@ERHR@HLPLGAOICAODCGIGA"],
					["@@KCEDMCANFHTFJAFKGI"],
					["@@PFLMT[GMUOQASGAD@NCNDRFBFLJL"],
					["@@GEUFG@CJJDFDNIHBDI"],
					["@@HA@KW@IJGBDJHEH@JCDB"],
					["@@MCEMSPADKHHHNBPGPDHCGK"],
					["@@EEIDG@ANCFDNH@JOBGFG"],
					["@@E@CFAVJBNS@GKA"],
					["@@D@LKH@JDTLJCJ@FHJIGEFIGQHIJ@HFR@JEMEAEIAAGNGCIMBKGKJ@FGHKDIGMOKFITEFK@GCKLFFRDBFIFEHDLLF"],
					["@@AHGHBFHHTELFHLNDRGJ@HELMCEDKV]NEJAGKBIEODMCKLKAEMGIBGGQEYFgCIEEIWEUGSEMDKXKCDJD@P\\FDLADHJBJCLBDERBDVCJFDDJCHIBHJCHGDQCMEGBEJLLNBNCFLAD"],
					["@@DBVGAIHWOHGCCEICKJCLFLNDBH"],
					["@@LOTEPDJFNMLIJDJANDTCJEDELEBKNQECCIIGAQJ@BIFEGKNIJEIMLO@GMIGACGGAAMVAFGAIKKIAEMFGBKaMAIaDQEKOCASJMHGBUCEGOICEI@YPG@INM@MGE@AGGEBKSGAOECIIQBEODIQKOFICGDSBEFKCUDGCQAQBMJ[@KEI@GKGEAEaHMBMHKBGCCGIGWEMMOBQ@ONQLIBGDOAOICIKSBKIWOIG@QKIBWEIJWRUAEMBEGKIMDEGGQMMAMKBMBSDCSMKE@EKGBIHE@EUIQAKSDECMDIEMCOSESDMAKEMAEECYEC@IEQLOLEBESOKCACKAEEBEKICGAKPIBENMCMFQGMYOQGBOMSKG@EIKOKDS_IM@KEO@KE[GO@IDEHI@SG[A_FKDSBECO@QBCD_JMGKACDIGIBGMGCGDGKBMJERCJEBOEEAIDKPK@MCEHOLE\\@BOECHK@GHUT@HGTALIJQLKDIAEDIIKDGEMYMYCACQKIGMCKEUACCOEMBEEIASGMAGICOKICACI@IKKFM@KGC@IFEAKFGOIEBKEO@EDOCCKFKIGBGKKACIKMCCMMMWMEE@IQEMRMLUJEJQPGHODILFLCBQCME@OIGJMJEFKJIG]BCRA@GLIFMNITCDSHMBMGIFSEIGEIKFCLMJCFKHE@OEO@IJQHGFMKGFG@GFG@KJEKIBGGAAODKAEKGWAIBOGHMAMQFQEUCECWIKAOEEJFHGFEAMVFJHFPBADKBIEO@EGEF@HSDOAACKDCCBIH@FETCAGWFGAMFEFGBDNKDGEEFQ@GDME@MPAXKGCI@KIEAOKBKJ@NDBDL@PDAMG@AGIKQ@QDWECDO@IFLDEJFNIDCXMDDDVBLAJFFCJHAHJBFPYFMJGNNDAPH@HHLADGCOFEIELELHJ@JMLBHCFLNANGPGDNQDEJGD[@ABYHAJIHGPDDAHHJGHMHALEACMIB@JG^FFDPAJEFMEAEGGALDFIDOICFM@BQSHDJIFEHNBFPHECCDGPDLLXCFHLIDNObGASLLDTHBJKCEDHL@FOF@PE@ILFDJALIVDFDJGV@EF@JAJBHKBMAIDGFAMG@CLOESHDOGESNDREF_LDFN@ALFBAJNERLJCDELDBDKFAFOLEJKCGFDFGJGDCJGBIFKIKDRHBDPARERKNBLPFEIGFG@[FGJ@NGHLPEGKHAMIRIJBBFFJDLDDJCBGEIHAHNA`CFMGMDBHPEHHEHNJHNdBHDN@@FEHDHNGLBETUBKJAJCBOAEJFHL@PFHDDVUIYE@HICBEKAKFBJGFMBICAJIBK@HJFDCHBHLDBFPHPFFJHCNDJCHDCN[LMCCGM@ARIHCMCAIDCEYDEKGEOAWDMJEHMKDEEEAIK@GHGASH@LKHKCCDKBQCAHDLFBDPPDJCHF@JNDXAENTBDFGJG@CFBPPVIAWMBII@SG@FCLEBALIHDFLFF@PLADMJJD@NGFODZVJGN@CPJJHFDFWCI@GCMDLHFCLHJAFJLBBF@LQGKDICUDFRREFD@HQHQ@GKAGGKEHDHELONODIHIDGCNIHMOAODEEIDIAAOMQILAFGHAHMDEEAMOCAIIIBECGWAKGOAAEIAGIKEEGa@MEUOYAMAOKQSSGGGA[M@KGIAIMGD]CMCCPDH\\AKNHDHABPIFIC]CA@UMO@CGK@IIIESCCCHGUQKCUKEHNFDLPHFNJ@PRHBNJ`LAFJLNJFCJJH@LHHNRHHBFI@OHGJFBP@JDDRIDMFEHBFHLABJFFILOHQHFHLDPORGFRITTHJEPGHFEHBLJBHIJGLEDHPGDDCLBH@HLFHEHB@HHBHEGGFCHBFKPAHL@XMHNDLFHGJD@JJCHF@DNJX@BJTBFDBHLA@FNFNABHVFHLJ@RJFBLJXF@FHFdPJBNHHRJD@RPPHFHJLHFLABfZBHLJFAJFDDXNJHDEJD`PXJBNFNBLHRJTLDHLJRDLJJJRF\\XFL@HFJT\\FX^R@HH@@VHFGXCJIDCJHBCPMLDJJGFPGBHLEDDHIHFFJC@JLAAPCBAJRBJBETFHENODADFHAHHFJVBNlGPBRFNJFNCLHHDTFFFRBPFJC\\BF@HHL@FGP^TLBJALFNNPFDFJDTLHBFNHFLFLBBPPHHENBHDN@\\RBC\\EJHH^GD@FTBDNEFBFERKFCAODO@GGGRDFZCJFFGJCLPNDDFDRHDHABOTQLCJKBGJNJABSFEDKHCFGHSLONEVMHIDQNFFGIENMBITeDKV]AAPWKGDGL@JK@CVSDI@GDELFFKHCNNXMGGBEGGHIFXPHCQDUNLL@@CVJBD`LHK@GLFIRPDCLPDDKPDDSFBARL@JT@HH@HAVNJL@CED[FNLJBHGBFHNE@HFDPSDLLC^FLHJNJAFEJ@@MFGTFP@DGbDDDZFLJJ@FCH@NDDIR@RBTCFGN@FFVOBARAPCH@HEZB@FN@FAL@CFXNJJLGBFJ@PTUPJHRM@HMLHFPALBDFEDFJLCLFEHDFJCFLHAJHFL"],
					["@@GDDFGHRFDDNCDHLDLGOKCOKI@EICEMOPHDFHAF"],
					["@@AKGBIGQFMBGAOKCMGASTBJYVVDDJXPHHCHFFTCJBHF@HHBFJTHFFCLPIKMG@COBIDIDMAEQ@GCAIFENDFQ"],
					["@@FSCEMGGLMBBJHHLCLF"],
					["@@D@NKBQBGLGN@DH^BFECKUMUAKMCK[SGACGIMQECMKAIIIDECUDCBDLF@JHBLGL@LGHLFFJDNJ@JOLBCHBLIL@HCFM@KLBJLDDPPD`E\\@"]
				],
				"encodeOffsets": [
					[
						[135540, 34174]
					],
					[
						[135882, 34741]
					],
					[
						[135720, 34748]
					],
					[
						[135700, 34799]
					],
					[
						[135631, 33735]
					],
					[
						[135583, 33841]
					],
					[
						[135465, 33959]
					],
					[
						[135451, 33969]
					],
					[
						[135541, 34005]
					],
					[
						[135697, 34021]
					],
					[
						[135655, 34056]
					],
					[
						[135586, 33986]
					],
					[
						[136364, 35101]
					],
					[
						[136408, 35100]
					],
					[
						[136381, 35050]
					],
					[
						[136364, 35057]
					],
					[
						[136339, 35101]
					],
					[
						[136203, 34970]
					],
					[
						[136524, 35001]
					],
					[
						[136080, 35006]
					],
					[
						[136125, 35006]
					],
					[
						[136470, 35004]
					],
					[
						[136261, 35058]
					],
					[
						[136178, 35100]
					],
					[
						[135844, 34789]
					],
					[
						[136805, 34861]
					],
					[
						[135721, 34794]
					],
					[
						[135827, 34778]
					],
					[
						[136568, 34823]
					],
					[
						[136261, 35013]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Fukui Prefecture"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EGIEBGCIICAMBCPHFEKMJGLF@HFDLKJA@TFAHHKFGPALH@BGNAPDBEEOCG@GFEG[GADKGADIHEBEVIXELDFFTER@VDBHXFJFVZTHL@DFAJXTLBJDBDRBDFH@JGEMLAHQGCGFCJI@UISMPAIGJI@EKCKOCIIAODWCMBKFMAAER@HCPIbDLGN@BC\\CLDLRBH\\ILAVBTLBGL@JMLBFHAHN@FHNCHJIDDFHBRXB^LBJAFFEJWEOBKACOOKUADFCNDJCJ[HI@GCIDDJJDPNHLJBDJNC^FLAHKJDDOCEHQJGJFJCDFGFELDDPML@JMHE@EEEFEPKNHJCNDDPJGJ@NDCNKHIRIBENOBCJNFL@LDDGHC@ENELD@JFDJ@DFCHRLEHHDEFAVOCENG@MIIRXJCNW@@HEFPDEFKDMICDBPJDLAFGNEJDLC@GAMJEJFJCCI@IHEHAHCPFDJLDJCHGFFCJLHPB@OJGBGXB^LJNNLGHNB@GLGDERBLHNPDPSPAHGBK@DH@PDBALHDJTAXILDHGHKCFE@IGCMHFDBVGHAFPNJFBDTELF@JVRPBNH@FVPFGFKJADEBIECMLAIJE@GRODIEGBEFICGHGAMHA@KODICIKCIZQJEFKCGJEP@`HIJPD@VFDNDDHIFE\\LJF@JHALHFFLCHBHCFMD@FL@LJBL@LIRFJBNSZELGHMVIXKJGBSPSTSREBQPMJgfDDCJFPEXFPBRCJGHKF@LKNIDQR@FIDGJDDEHLJEHJBCJJHJFLDLFZVLRLH@XFHHDBHFLBZJB@HJT@NHRHFTJ@NJFBLFHTFPJTNPPFLIFJJhxHCEKOWD@T`VHEDNREDIMIDV\\ALFFEFBHMNJDBFOL@FTBX@BDP@HEJAPDRHdRv`fZDFLGRCCE@MHCBINGBEL@^KJBPGFMFGNAFICCBGNERCGKFKGQDOPUCKDANUNGHAFEPBFFJBLCXANFN@JDHKCMFETCFKJKLAFIPHPIPDLNHDFJLJJDHAJON@DENATLJGVDHHHALDHCJ@FM\\GJKF@LIJBPGFOLG@GFIPAJEJITAFELEFKFCCMFEBKHAXAHHdHFARLPFT@PCL@NJRBFIFAHM@KIAMIOCQWAKBSEIDMGGBGEG@OCK^GPADGDQAIBIIIBGFELA\\IJBPEH@JE@IMMEKFKZCNOJ@FCTcAMEMLI@IJGDOAKMMQESBGBCMAKCGBMEWECEOKASD@NC@OHSCQIIEQJODGOGGGCCCIAKFSIQ@GFIAKMQAEDCL@NORGGEKKCK@BGIGUBYTGEI@GG@MSEGGMDGAKDK@IC]JKHIGCGIIAEDICQGACME@KVAHUPADUCM@KLE@MCKGIDS@WPI@KCMJCHGCM@@HYHYMMCACOIAGSAIDICKS@GCEAOBEJEAGFQEMECFIAESCEEBIKGOSKC@KPIEGMGBKKCGI@FUNKFM@MJKESRMCQHOCELGAKFKVOFMCGDECIB@KIBIFKCAOCGIGAGEAIQFGVEFGAGDMHKDADK@SFCHIHK@GHIFQIMKKHWGKELK@MDOCGJKAWBSHBKGMDGAGIGHKBGGMBOE@MFGHSFMK@GOIMDAHYFCIKDYECCFGIGGMG@AGEGAMIKQ@QBOKQ\\IFICIJI@AJIRMBCSEMCCEUICEGBGCKKKDGEMBEEO@QDC@KMEK@AGOK@QEOSCIGUEGBMLBRQDOFKCKDOCK@CE@MEODEEMO@GDIABICEKAIGAOOKAGIBGEI@IFKDIABGGEIAMDKFMCCISIQFCDIAOFGFGBAFMACFMBUNKEOFIFQBEAIDYAKCIDGHO@KF{AQHAHDNFDMTJLCHALKJIAKDIGSL@FJFELMBITIAUNAHMHGN@HHLNLBJL@GXHHEFMBEHGBSN@LJN@FJNBJNHhL"],
				"encodeOffsets": [
					[138739, 36412]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Fukuoka Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@NOAKIOKCE@ILBJFFBLARLFHEAI"],
					["@@NJN@FGFMCEQEEFYIIBEJBDXLD@"],
					["@@HDJAHEAOK@KN@F"],
					["@@EGGLFLNAPGEEKDCC"],
					["@@PFLAGQKBGL"],
					["@@Q[@OIKAQBGFGTMFIDIG[USSKFOAILGFGACQAGFO@AC[COBEEW@MD@DKBCCMAGF[CSBMHSCULMJK@EIOCGE[FGCOAECS@ICEIMEAGICKGOCCEUaAKEEUEIIUAIEDCBIEKEEAGBKEIFQIC@GEWDSoEEGDSWQOGCGIEDEJGFDLCHMAIDKN[ACHMBGEEMIIMJE@IHENB@GGEQBKAGGMBEAM@GG@CFMEGDGLEjCNECEE@KEG@AGKCCMNEHIXIJILBJIZECSOC@EGGFEBIDMGGGAAKGQ@MGGEADGKIEGQAIGYFK@@JQJIAOJSHGCGDGAMBKHAHKAEDCHGDGHG@GFEPMBIEUHEGI@ODEEEHDJOTIDCGBEWOAK@ODGKIESBMCEGBBM_JKASCE@KCKBQJWAGDI@OGCIQEAOHIBGSAGGEDEGIBKGEW_@GIQEACMICEHILMAEDOLEDKFEGMG@AGOFQEMCIDICKBK@MDUCQFW@UEAB_G@JZJFANAITIGAJ^XGLFT@LFDMbKVBJGFgLCDRRCHMF]PAFJLGNBNMEWB@\\G`BVKDILC@AZ@HHHXBNLLDTFBDBNQN@HFJJENAJJBHCPFFPABEBOTDFDJRCLFJLAHHBLALEHNDHEE[BKNKNBBJEJBHHHL@NDFFCFSFAPFDPDXALBLVCHIBKJBHLF`MLLBTLFPGN@JHHADXFTBD@@dGJEPDHEHWHUFCIKFOCIIUGEDEEICUO@IWCIEAIGKBIQEMDEDQKEH@FFDJLYVGDAHQ@IDKEEJIFMDOCUXQ@ALGBWNK@AFMDECODGLE@WTKBMEMAIIK@CFM@AHEBMCGBcFOCEEKA@GKIM@WFAFMJO@MEEGSJW@QBK@AGGCQCGBKAKBKFMCUAICKFJ\\JHAP\\DRJPBJFP@NFBNRMVCPFJHDNCDIBHJN@LLVFBJJFFFFNCLOA[WKNSDKMGEBPFFLHBEHAHH@JMHEDKDGEOCAEKEE@@LAJIBIHBHPFVCDDELDFLARGJARDXJPNLPGHGNFNTHDCNAJHHAZNHF@HLBFJEXHHXQREDIHC@EOG@GIGFKHUFE\\E^APDJEAMEMIBEL]GXOJALMLCNAFFLEZHNHDJGDFFV@@IH@DLVGPA`FBFNBDHPCDKDEPFIJGLLDJOBFL@KJJRHBTECHQDDLHJKBHPHDTEBLIDGAMDCDjRPCBLGHINPHALCDWAECOAIGDIMEOCiGSOAQBII@IHUHKEOV[FGESBGFAFGJANEBJL@DRDJCNSH[HEJA\\BTBLHRDTFbRXP``@FLZLEJBPHRNPNNVL\\D^GXSJEGMBCLLTCHGFCLLDFKPALDRRJZDV@JNDVBZJTNJLFN@LGHHBbBRDN@HCBKTGTA^BbF\\FjPPPNKNEDHOBKP@HFDCJJBZNFFFNRLLB\\APENAHIJCBJ\\@@ZbF@MQA@KR@@IWGIBBKH@dNFN|EACLEFBHGCMMD@GN@EYMCMOKCQBCI}OGI¢XLJDQIKJ@HHCFATTJ@FJFFHCFDTBBjPTBJKWGDIbLFEcOE@AGJCDJbNZUYKDCNFPDJKIE@IH@FHN@HDXDRNNLJXFHBPHLRHPLARBLRAFCfDTRLCFEREHCAIGEAGHCAIM@IACKHGOKCER@HGAEQACGBGGEEHCIMEBK\\CDEI_KDDTI@AIEB@QIKDEJJT@IcG@WQCO_JGSP]DK\\FFGLFpRN]ECMJICKBDKYIAIHCFJJDHCGEJO@EQK@CJGXRNScUHIXCFKCYJGFSFOHMFABIJMVIJKFMHGFI@MCGRFPQHWFANO@GNKNA@NRBCLL@FGNADBXAHEH@RKN@HF\\BDC"],
					["@@E\\TBNSAGp"],
					["@@G@aLEH@JDRTDREFHXBLEUSIK@KCE"],
					["@@G@@Jn@PHHCDGfLZUmOQFGCuF@LC@"],
					["@@IFCH@FNAPSFCEKGBIJBF"]
				],
				"encodeOffsets": [
					[
						[133435, 34438]
					],
					[
						[133539, 34479]
					],
					[
						[133351, 34502]
					],
					[
						[133495, 34570]
					],
					[
						[133862, 34830]
					],
					[
						[134336, 34426]
					],
					[
						[134173, 34656]
					],
					[
						[133561, 34701]
					],
					[
						[133921, 34756]
					],
					[
						[133628, 34718]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Fukushima"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@L@JDHAVPRCBMFC@EBABCFCFC@ADEBAF@FELO\\DFF^JTFLK@EJEDEHAFEDOJEHBRPLBFDP@NJJDLHPAPOJ@@GHELAFDRAJHJBDA`@FPHPJAHMRKPAJQEOBEROCGLOLCAOJCHGLCLFHCPJFCL@FFRFN@NLHJH@DGAGL@LEDGDKXCLDJMJI@ELKJ@RGX@LJNBHNDLPBPFJBJAN@\\EPAJIFBP@FCdAFFDJHJVL@HJFLPTFFNHFANRFDFLHIHEFG@QLE@KFMV@LJPCN@PJHCHDHIJDTHDGLER@LDLLFJLFPARGHFLCHE@CTLRFDJGNEVAPIH@FKF@R@HKFDNELCPDCFBFRBFCbGDB@XFHLHJBRADSH@NEHGTEH@NFFKP@LDJGRCOQDQAIBMPUXMT@HJN@NABHJBTGJFdDRD@LFJHGHADEJCHGNEJ@HJT@DJHAJKDKJGdGDHZDFAHILCRCPCDKOG@IHEAGJIDKCGBGKCBIOKJKDUAIJCDKLIHBTEPMHAHULDJHPBHEP@dGZMPAPLQDOPMBIHCFDRPCdMLBJEJFP@NGVDVALPGH@JHFGNDNGBFHAPGPRNFNAHKPLJGHAPPDNFVDRHPBFIXAFBHEXBDaLUDOJETBBEOAHQLBBKCGDIRIN@CIGA]DBM`@BQEEBQKK@CbSBRADDPDF@fGFIBBHREBBYFUNKF@JYFAFSB[AUBIAWBUFYLKBIGC@GLY@MAO@aHWCeD]@MDQ@MDO@WFMDWFKBaFGIQAK@UDGCOC]@MAI@cBI@UBI@YDIKU@SGEC_DC@QC@CMBUK]G[EaBUP@@KI@@IGA@IKWGYAQAeAEFKCYDIEMAI@[DCCOQQKWKgGk@SAG@YFWHC@QFIQGKOAMDGEGKBAEIIGAEKKAGCYWBEEEOBALMHIAEGOGGFECFGGCGIKLIMYOEDWSMBGAKDSIGEUSMUIW@MBKFAGCG@BJIDIHGAAGIAKJKFSDIHMGIFQCK@IJGBEJG@GLCCQHGDM@QHQ@QHCCOA]JODBDEHKDGPIJIBBPILEJECQAMIFKEK@KCEPK@CNGAQPSLMAKK@KMIDEEOGID]KOB@GIIICBOSGCSKIMDCIMAMB@SEAIGAG[QGD@HQLEJGDMVGBII_XCHUA_FSH@JEPGHCL@LFHGTEHGBKAIDGAYHSH@RCLGJSNKPIDIHMDKAMGQFCJM@CFSDEF@HHNRNAHQLBLLHALKF@HGJHBDHBHJ@@HEJDHCHKCSAOBKKCFKAEFIBGJ@HGHFDBRQTHFCLOFM@KBOTKBINDHIFIJQPCEM@EHMDSNADOJMBGEoLQACDKFCH]JK@CFUEIDI@QDIAWHI@GDM@EJKBOAEASBGCK@OGSBGJOASEOGUBKKIEGAGDQG@CO@GG@EQIGKBIJCEYDGAMQAQD[HSCEHGQOI@EOAEGM@CBM@GEQBMCKBGIC@IIQH_KG@AQECAGECQBGGQCEEIAGDMACGFEMKBEOEQDGGQBCDM@CSEEIAMIO@EGI@ICQSEBcGWQQAUNUGW@EKBKEKSKI@AEMEBKIK@GECM@OFIAQKCKGGSBCDOJQ@GCOAQPBDKFIGM@GDKAQDGAUPO@IEMFMJMAMK[ECJQHDFHBJAFHCHJNF@DNERHD@HIFLHDJCDC\\IJELJR@NJFBNJFMhKP@FDPKFGLDFIR@XDLLPDdHN@JHJMJBFGBBVGF@HI@ORCB@LGBCJC@ISOKQ@@LCHOLGPUPCHIFAPRZDHPPRJBHPJJLJBFFDZDJAFLNDNEDEVHBLPL@BPALHV@JENEB@NIBIJMCEBIH@JQXTJCNBJLP@DJLJH^G\\PJCFGdLJEJFXFDDNBFEJHXFBCPEVFJJVHJADEVCL@NELARNCRFHDJEFBLLHELHLRFJFL@JAXHNB@CLEFILCHGPJDFVDXALELLF@JCHBPCFBZKBCVCXNNHDNFPI@MDCJMJBJIDHHAFATJNCTMRDJGNODKP@HHJGFCNBLHFBJENTFHDLAVPJDHJLCNFHLDNFFPJTABHGHEHFRPPAFNDJNNBFRHFDTAJRDDLRNFJRLPHPVRHPTPHTFFDKTEFC@CBCD@BEDGFAD@B@@AFCBAHAFKBUKI@GAO@"],
				"encodeOffsets": [
					[143034, 38756]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Gifu Prefecture"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HJLDALNHFHOJ@LLDPTLHAJFFTDBFEJFDFNERBHIFAFBPDF@HLTJDJCTBBHPJBDNDZNZG@GN@HDDGNILDJ@XOT@JCLHNDF@LKN@VDBCVOBGLUF@DNHBDRCJBFJJDHJHLG^IJDL@LCHBNCHHTF@NHHJ@HFZSVAJHAHL@LDFLHHPQ@MDKFCRBLNJBHER@TJLEJBDDHDHHHPPCRIJFRJTDPGD@@MTCLBFPFDFXANDHBLDNHATARFNNBLCPIH@JKJFNBNSdEDI@MPYDELFLNN@JIFG@OFIA[JKBEFAHJJAJBJCRCHOB]HDL@PFHAHHHCNFJATBLRXPDNJJB@LGNEBEJ@HDJ@HRNLTADFRLFDXIF@HGNDDOHDHL@FDT@LHLDDJAHHNDBLNPJHBEJBHVNBLFFHNJHHTHDCFIDAHIHEBEFeBAHOL@PINKDENFFRHJGPBTAHLDNLPHVEJCRNHPGFDTBAJFHDJHFBKF@@IKEAGLBBELIXLRPJJJETETMPBNEHMH@NWACFMPEBIEKGYIIBEGIBCP@DCP@TN@DHFZALFFL@FJNJHED@JFFHCZBLHDFNJ@RNHSFBHHFP\\GFFLJBJJPHXCJD@REFHFL@FLHFADHLTDFJZ`LBAHZLJPHCJBPI^HFABMFADGJI@IPCBPJBHJR@RRFJJJHGJONJBF\\LH@HEZEFFJFVEBSIEAGDEICGGDGLMNAJHLFFAJHXABDNB@NHNXH`HLCBIAE@WJGHINENBFE`CLKVDPGPHLRRCR@JFPANCDMNUJCJAFGNIBEPAVERDLFHBTE@OAKBILENDRGH@NEJQVYTABUJEBUCAAMHIKOBOgSCMKIKGCKKGAIGAKIAIGGCIKC@MUCFGCEBOFCFM^IGG@OHKEEAIOGKASK@KCCKCIGAENMGQ@GIAAMNMHABGJAJQJEJ@PGFAHIVDLACEAKHIAEMGCOGAEG@KDQCMCECMGKSIKKK@MKWEMGDIAKIMMGGOIQBCKEKBO@GEGQIGEKKEBOGEBIMMSAEGG@SHMNE@AJEBUEIDIEMCSGYCICMOQKDCBKAIBIM]GGQ@WDGGCUEGBGGIBINEHUP@NFF@LIFDL@JDPBJEL@HO@KIGDENCVBNADCJ@HEL@@ELSTBHFLAJIBMFEEEJIBENKBELCFQCK@IJCBELCBEAMJGNELIH@LKFAPI@GTUKIBGCGUCCGEYKAEULI@ENGLIAENGPFhCD@FKCIGOLGDICGHI@IJCBGPADCNAJGJFHEPKBGLKBEJEGMEC@MFQDA@MFEAGEESBOSGA[UROH@TODICEJKBKVAAGHGCG]M[D]@]LBMBERABEVM@[FGDMEE@SHI@GEEU@BEGGYMEBWOE_JIGKKBQGGBO@CDQBCEDOIBCISMMBAIG@QCCEIAOOEBGKIAGBEKQAAGEAEIIAIHCHEFGNOKCFKHKCQDANDFCNSBCHIEMBWGKBGLLNCFeNGH[JGBKCU@IAQBCEGBKAEMDGOCGIK@AGIBOGKIEHSAWOEDYBOLALBHEJOPMAKCGDECOPMLQDGFcFEGBIECGDU@CHDHCNO@ID@DEN@FRLIRGBCFIAMGGJ@@@RHXIPW@GFCJI@MDCHW@EH@JGFG@CLCFK@GBBHLJ@LNNK@WES@EMDOCMIGKA_MQMGC[C[BQAOE[CGGaOSIcFYBWHDJeBOEKKEGQi[iQaCGMMQKGIUgIIWQAEBSDODqUUA_FY@OEO@IBIECCPKPKXSJAEBK@QCGGHSDKEQFEH@LGFGLBHEJK@KRMFBJGFG@EJQFGBAFGXOACFFTADIBGDAHDJIFENKDOEE@GGCI@MIGK@EFMAOFEIKFIIEJYOEKSOMHAH@HCBMIMGCEEBGLSDIJEHK@CJGB@NTDJHFJGHFZ@LITJHNRHD@JLLAXHRFHBHFHALIBKEAJHFCTHHV@VLNRELGBQLGHGPQL@HNLEJHDHJAFHJCLEDAVeH@FGPIJKFBPHPJJJHH@ELGDFJAHaFEJARIJCPOBECCOCCCQUEIBALENOBGC@EGCGFCRFTHHAXFHCDAVELGDLJFLONSAOISFAPILGDHPAHIH@HHF"],
				"encodeOffsets": [
					[139552, 36515]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Gunma"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TCPDDNNHATLJDCLBLGJAPEPKREPBLCLAFF@JFLVLHBPGFFLPCHHJBJATCHALGP@JP@NCFBXIL@PHVFHLLDd@vLBJKTMDADBLJHAJGJ@FJJBJNHBJRFTCHD\\GHGPHBN@NKRFNUVAXCTFJAVDJALHD\\AN@TANJJBFHNCREH@HDRDFNXNHHLBDDN@BFJFJLERFVAJN^PELAJON@DMJMFONELGJQXKTCFMJICICYBGNOHCNDJGFBHERDHFLBJ@DKJGDIKKCERGDI\\FNLNBNINEJFP@VOHBRCLBHCN@JHLEACROPBHDR@PIDCTAFICE]IKIEGBKGKI@II@MEGBEOKJGVCFIhMJELDPEDIIIOEEIFGKIUACGFOECBGCCMAKECKMABIEKHEAMDELEH@JEEE@MEKDICGIGIMBCMOKCMKFMEEFGIGBGAIGCGMDGCCHQEQDKR@PGBIJGNAHBREPBNARQHAPFAHNADCZIRBDDNFL@DEJDZCJSAGDENG@KQI@KQEIUG@GGQFIAE[BIJCCIIGAEMQKCDGGCCOJAAEN@CKFEFSLDCOOMOCKHGEDOOKCOQEBEEG@EKEOMCGAUKCCIMQJIFWTOTIFKLEbQHAJGHK@CICCHICBQVWJEAKJCDHNG@I\\BFINGQGLIf@FFHBFCPDFJLCH@DDL@JHRKTEJJNGEEPMTBPALDH@jAFBHJH@NEPADI@EKOJGFIHGREHGAEJAFMFAJO@EKIANI@KCECDYCCUDSEIOUNQTSJMDIAQIQESAgO]C[FK@wIYBMDWL[VIDIB@JUNAA]L[ZEHQDKLGBGCMDAIMEBCMAKC@QOCUHCDENEFEEWFQDUF@OI@OFUAKD[XWC@HGDU@cNULKHIAOB]@MJCISSGCKKFEk}OYSWMICEDMCEGAEGF]@CJKGMY@@EIAAQBUKCKBKNIEIFQIIGM@CCEKGCM@IHGJIBMACY@KIEAGKIMCMGSFIDICGBSCWKKA_MEIMEG@ICAKCIKMICEKAGYCCCW@WGGFIDADWDQGK@AMEECMGGAGMGBCKKKGQCIOWFEFM@IHBJKJANeB@HOFOBAHQHI@ZlCJB^GNKJEL@JJFTJ@HFFCHGDATGFANCFWCCDQAKFIAILEXEDELMDCJDPHDJ@@MJIVAPH^FHBJABHCFKJCRIJJHRLETUCIJKTBXKLIFFJARDHCF@JGHNBLLPBLDH@NJPBBFJDFHKXDJFJ@JCFARBRADHJALHLIHCNDL@TEJAPAFSNI@KCIBEHUFGAGDS@AEKBUEOBSEKGGKIIMAGB[JUN[AEI@OUHe@DFGJAPIBICIFkLIF[FANDXCFALHLGLBRGD@NJVHLERBLPJDLCNLHRPFJEHFHAJIHEJHHFNAJFJLDN@ELFJR@HFDJHPCFBLNDNNPBRGXFNHHAFDTDJJJVODQRDFCHDPVLNBLJTBNDFAR@FDRKLLFBDJLBLMJANJADJNLBFC^JHFPDfDNH\\H"],
				"encodeOffsets": [
					[142025, 37621]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Hiroshima"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@GWCQG@KDGFNN@LDBFRLEDG"],
					["@@Q@MBKTBLENDLRCPGNGFBJG@GDGGMOC"],
					["@@@NBHJHHLLDVSFGOSUIS@AL"],
					["@@ECMBCDBNJFJ@FGFEIG"],
					["@@EBBHPD@FPCACJM@KKAEFGEGBAN"],
					["@@QKMDMBCJDHNFHALMLA"],
					["@@PDCOGIGMKJI@DJEJAHFJLCLG"],
					["@@FJbPHCBEAGCUKEMBOCFHAJED"],
					["@@GDGTGDPRJFRFPDDIHC@GPHDFRBIUCG]AKIYMC@"],
					["@@EGEAG^JBHEBO"],
					["@@HALIDQAIFCCMEC@EKKKEIFIT@JCLJHDHAPFFL@"],
					["@@BJJDJBHFNDLET@LA@YK@AGGIICEKAKAKGCWGKBIEKDCHOHDJCF@LGPDJJFT@NB"],
					["@@LDHALFBHJHLFDELCAKLIFAAGBKEGGAAII@IKGAEESKSYcOIAIEGBGRDFGJIBDJPBBJHBLNDVLNRFDHH@"],
					["@@HH@JTbBJJJHBFML@LHTAXLTAHELU@GES[OSCQKCKQEQGUEKBOJCH@NDJ"],
					["@@DEAGNMJDBNFF@LVRJJNLRGFEEIESEMAGY_E@BSCKDGHCMGSFWCKCCGKAOBIDECEFIAMLMRCJLD@JKJNJTILJDHPALDADHJHDDFH@"],
					["@@I@BHJFHG@IHGCEMF@L"],
					["@@VHLC@GOOGDODADHH"],
					["@@LEDGCEE@Y@CFGEEDBLDFJAFELJDC"],
					["@@HEBGTCAKEAQMMGCCOAAAMEUIUFEAIDCHLF@FEH@HHJNJJBHHRAFHPDHDPI"],
					["@@PHDLFAN@JDFJJAHJHAHGEGDKPGOCKLAFI@CM@GCOGEAIKM@CMACVEF@HQCAPKCGKY@DHKJKAGWEAUBGCOAUKKFERK@BNAFHPNHFAJDAHHDFGHJLHH@FFNFP@FFDPEFSBEL@NDNJLADDNJLNBLHRPFEJDHACGEEDGZ@HA@KHA@KEAIHMGCQKECHGAKMPICCFE`DDATBSSCK@KEKKAHKCO"],
					["@@NIHFFCZCHERDNGKOTABIIIAGUKKDBHKJYACEKHCLEDOCQDABSBFNANF@FJLDZBFE"],
					["@@OIOJGBKIK@HT@JLPTLJ@FHJIAILADIGGGQ"],
					["@@CLHHDNG@@LBJTACHMD@FGH@JMAGcIFIBBNALCHKFOHmlDHFBAVEF@HGHMBCHJJFIH@FFJ@^CNBLALGHQLUD@BQNETFFFFEHSLEBIF@DXFJ@PIJAHGJOHILIA@MMEI@IDELXTDHCFIHC@ELBJJDBFLIJDRBXADENFRGAAJIJSEI@QECDSAGDKGEE_BSACMCCGK@@KCI@MJCHOF@@IHEDKCMCKEFWKE@KGOAEBIAIDGGM@DHJHAFLJDH"],
					["@@HAJLDEAMSOCJG@GFDNL@DC"],
					["@@AFPLHADMCSKCHG@GMDCEOJECMA@FJBPJBFHD@H"],
					["@@KFILCLYJKDGN@DENKNCJMD@NNN@HNFBRNANBV@HICEBKZQJDFEBGLM@IN@@IGGOCIOBERABIGAIIHKGGGAIF"],
					["@@RPJADUJQIE@KKEOBGFETJV"],
					["@@@ILIVHBFJ@FDNKJBLCNFPBLD`BXKJDBJNHR@JEFKJMHAHGCKLIDCVIJIJKDILGDKVEHGBICIFUCIMECIOEDMOSBETWBGMODOBGCIKECKF]FIJCBKDCJCFKNCAKREAMJIEGHKF@FGV@HGDMRABGLAHKAUCGKGBGLGGCEICAAKCADKIKHADIFAAIIEGKBOFEHAFSCGHCBWPKHICEBIbEDCAIMWBGIEAIEAAMJIMKCGDILIBGHEDQAARKJ@DCP@FC@MHMAEJEH@JMLEDQBCBMHG@IEEEOBKGG@ER@FKAKMKEKBEAE@I@mEIoVIH@dOJJWEGCKBEPIhSCELIOUcXWNGELEHI@GWCIGKCEY@CA_FKICAIMEIKOBMGKBDJAHYJUA[JGFSCECOHGT@JGCCIIEI@MJBNN@JFDZINDFAHYFAJI@DSDGGIENANK@HWKCEKGIWEMFIA[KOGeIEDMEUCQGYMYBEHIDOB]JRKEKNGGCGFK[BICEASGISAMDOCCIGBIEBEGACFIEOCI@KCOBIJOFGIMAiLECQDQCACUMOCQJGESAKBMG@IECI@KGCIOKCGKFAEOEAJGAMLADDJQJaADEWCIGAOIKAICGEOOFK@OHQABOHKAOJDNCFIIKMAEGFCMGIHKAEBUEe@[KAEIEEGGCBOEGGBWPMAEIHGEEGBGEG@QCKHIAALIBECEJ@RGAEIKDBFAHMDMQNEEIIDQKEGKGEEIBOCCC_@LX@FWZNNT@LLHFMJKEGFKBGCCFIBLJAHKJKGEBDPEHFJAFFLGHKNIVONCLJNHJBRIBCEG@CHFFDNLDJAHIFBKP\\LMHQMSBIGQBGFSGQ@ECIDEK@KKACJG@DPM@]NIE_LoEDOMCIEIRBDQAJOKDWI@GNDDEWGGNK@MQDEEI@GKKE@IIIOYO@CMMBEOMMGECKAIEGGMCQIISCYGBCG^KF@RWCIsCKIO@IHGEIDLRHPQFSDGDQIARQ@AGGACJIFI@AHDFBNALIHKNCJDLJHCLSPAHDLGBELDDAJJFBJGNG@CEO@CEGDIN@ROLE@GFAHQCIAAJBNAHHHCFHNBJKBCDFPDDALEDCNJF@HH^FLITGJERCJKNEBANFLOLIDOAEDVVDHCLJPNBRFNBBDPBJH@FNHJNNDFHHDJTALPJAHJPQLGL@JLNAFJLHDBHILBFNFDJTXDLNN@HJNBFEJYBECKJMFFFCHVHDLVHDFTJLDNNNEXJALPHLGLBNHADFLCFJHCLPFPPDFAHBJ@LGHHJZ@XGDGLBHEGKJC@ITKH@JCDPNJAHNHFHRQRCJ@RFJJJAFF\\BJCJICQLELBHGDHPL@DPLL@HD@PEJRDNNRKACXK@ERENBDCL@HEVHNCHEPJNDNGVGLBFLPL\\CBJXJJNJADJNJLANFAHFHLDX@DELAHCJFJ@@EJCDEP@FJBJHJRHLAHMJ@HHPF@PGHIdCFOBGBM@CD@JIFUGGDCJMHICQ@GFBFNADJHDHRJHJ@JHDHH@JDLVDFBHJDRBFCJFPAFGFCNLBFJBPH@IRHDTKNPDFCZNKRNJNBJJLDAPNNLBTPHNBJ\\NFCLDDHIHKLHJPJBHJDBHLHPNBHTHFFH@LFJBRC@ELIDIJIVEFBFENDVIHEPFTBTHFFBJFLRHDEPAFGVKDQPAJGFABIV@RDPXNAJDTCHCPLFBHEN@HFXAHG@GP@DC"]
				],
				"encodeOffsets": [
					[
						[135721, 34885]
					],
					[
						[135583, 34968]
					],
					[
						[135958, 34987]
					],
					[
						[136455, 35216]
					],
					[
						[136351, 35207]
					],
					[
						[136656, 35167]
					],
					[
						[136471, 35204]
					],
					[
						[136462, 35169]
					],
					[
						[136500, 35167]
					],
					[
						[135667, 35161]
					],
					[
						[136308, 35184]
					],
					[
						[136391, 35223]
					],
					[
						[135481, 35118]
					],
					[
						[136264, 35101]
					],
					[
						[136081, 35084]
					],
					[
						[136058, 35086]
					],
					[
						[135982, 35101]
					],
					[
						[135487, 35018]
					],
					[
						[136043, 35010]
					],
					[
						[135721, 34927]
					],
					[
						[135900, 35023]
					],
					[
						[135861, 34996]
					],
					[
						[135624, 34972]
					],
					[
						[136106, 35116]
					],
					[
						[135612, 35141]
					],
					[
						[136384, 35101]
					],
					[
						[136261, 35150]
					],
					[
						[136332, 35917]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Hokkaido"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@GCGBMJNLZKIG"],
					["@@AH@LGP@FFJJD^CXBNAPUAKSI[AQEECOD"],
					["@@HHAJGHHDTX@DLH@PLHHN\\DTEVDHJP@^HNBZFP@JHDAN@NHLBJNLDDICE@WQQCKDCIGAEWKWWCIEIAaNKGGAMBIGOEWKUASKIEI@IKEGIKGS@YEIEKQGNQFQJIA@JFHBZCFDNCLKNBLJR@PQ^CHKJ@J"],
					["@@@GPIEIYYUA]CCNHHVHNNPLLD"],
					["@@ODYBSAGHNHRFL@PFdDDYEIGAOB"],
					["@@BcMEKIMGEEDGOIKAEC@EMKBGMEGHGEI@eIEEOEUF@JKBMJSFWVYH]RGTSJ@HEFOFGRDFGHJHUFBHJALD@NGHDJEBGPHDLRPBFF@HFFPHN@RR@FJFFEHPPBDEVILAHENEBQLCT@RBXIHLNEJGCEHEZEPKPQFMJCAENS@OFGBK"],
					["@@FCKG@CGMCIFUCIEEHGD[CKDACKBMIOIEDOL[Q_AIECFQCKBGEGOBIAI@OLAHHLH@DNCLCD@JEHQPMLCHDHIR@PEJCNIJAHGJALNHCLGHDNJHAHGHNL@JCHSN_FRJDHGJK@AJDFXMBIJAAGRMTETAVDRHJHKbNCTINS@GJOJI"],
					["@@IEEIEAGHHJFLPK"],
					["@@APSHHFTANAL@PFVBFKQAOI@EUCS@"],
					["@@IESB@RLLPML@AGGC"],
					["@@OZIFQNDH@PHHBLFHCZRNEFJFBHGBBHHDJRDLFHAFFTFBGTGLNDRELBPANFVCDFNDTINCLB`LNJBDLF@LHHFN@JKDFFPDN@JDTGL@JAHGBMFEN@PDFACINONCDIL@@ELIPKPCPWZEFIfOPDHCNAHQRBDIOKAEHKHE`IZAdILE\\BTETMNAAIHCNDFINAFGX@JBDEDOEECOLIXEJGj@dD`FLFDFGJLDIJRBFGBKFCN@XFLFNAZBNHENH@FHVAdFTJNHPDTBJATBTCFGBQJCMIBKMEI@AEBIHDHGJMTKBGR@JGLBVAFAVEPGT@NEJA\\IZOLCRAPGZGnLXHvV~\\VLHHED`VNGFWJ@I^DDCNLCHFJ@DHEDFLRAJDplddPNHN^ZTRJNHHBFLJX^EZBJHJDREFANHXFFBJCFApCJMRMXMXOREPGD@JIJYTEHBJGNKHEJAZFBAJFPFFNVFDNfFZKd]VCLIVMN@PCLAZMXCJAREHEPCBCPBXPTCDPNNVVNDRFDHLBLEBFNVVVJLJXDRHHHH@NHZFFFPHHCJ@X@JFV@FDPXNLRFRC@ERCNFDLHBNGJDFNJDN@LH@FLNRDPZBHJHLTHHHBFFFPFJBLCFGBHNJKPABDOH@FJFCHHL@JMACHTD@JHPBRLJFLF^CLDT@hAjCnC^CLEjBVHJBJA^@VAL@TEhFPBVGfBHMzBJC^DD^FDFNHNRFVPhJLHBPRFZDF^XVTNVJTN`FVDTFxBVAjFNBfJPLDJLJ^DfFAnGCZG\\BNOKhG`GZMnQrGPMTFDAJI^[~iUhEHYpmWhMRGP[jYlS\\KZGXO`GX@NFdAPFPJHVVLJ\\\\LRJ\\ATENNFRNVVT\\FJF\\ALGJMNOTG^@^LfFDBLHDTQHAPOLSNCIQPAFELCRBHG@ITAdFPFHF@RRGJGPCbBZDTF\\JXH\\PXPNLRVLVCDEPBLJJANBLLDPN@NNBFFTF`BLHPAHGTALKLY@QFKniNEHBJGVEJMAKBGVOCGDMPSXSRIdQJCa_jWROLOZ[~wlgLI\\YPK{PKRQpiHALMd_ZSj[b]f_PCVBFEGCBINUHCLADIJEPCBMAIDKNKGGFOJC@GPCVMDOZONAKIBONKHCGKDMEGJKdcPKPIRAHI@OHABIJE@GJOLKACHMRGNADGLI@IROVOAQZOTUHOVUbSPOTIJQNCFKLGXOTEBGTKNKJBBGPELOVC@ETUJAFEPEJEFKNKD@\\WJATICMNKJCDITGHOHEFIVWXSNGoJAHGRCVBIIFGhY`QjSpYÌRGPAFKECHMHCaNCjSzYdORCTWHCGIHUFGNDDGAEVO`QvYarSnOFA[rQRCZI\\GbMnMYS`I~OZCBIJBPE^EzM¾]tKPAfGOjETAdErE\\@FDNBNALEHGHC`ExKnGX@^E`@bJDHJFNIHS@KFOIYFGEORGCOECAQJK\\SLARGAKKALGAGLMNIEEHMhU\\KjMZGQMtIvGbEGGCzArBHCFHTCfBxDzFZDrHXFRVRFbHHD@RNJPRH@NDjTJLPDl^DJPLJT@JHHBFHFFGJ@ZRDLRFXRRDBNNCPLJPCJBFLLPHLD\\D@FNJF@FHTJHAFJfVLJDHXFRJPTL@HJXHNLVHVJ`LPRRXPXDLJFFN@LNLHB^XPF@JLHFJFATNBJJFFFEFLNFCNBHFHPEDHHFPPJBHLFNCFCLC@CGKDMPGDKKKHUAGPW@EHGBGJACYGGBESIIIFQGEDMKGGIKS@OGISGCKMKEMGGKAIQSMMGWMIIGO@IGKAKOUEQDG@ODEBKKM@GMOCIKGCIKEIAMEIQMEGIQMEM[WQICQGEMEKWKKGQ@EKMCQEGIEIWSSCIFSGOJUKmGSMUWKQMFS@IIKJ[AKDQHSNOTORMDKXcZ_JSNMBOFA@OHGLGdKS^G^ElOtGM`I^KPKHML]IOSI[E@HJKHFDLEP@@NJ@xJHFATG@SEEHP@HLGFSFKC@JQFKECESAQCLNGDWOKJNBBJK@@NYDcDO@AFMFWFSAKENEBMMIBIDE\\ONABEII@GLGHKCSRQJOH[F@FK@]JmHOJWDSDePiNW@CRYHEBGNWTWTU^YXQbUfSNQVKXBvOJE^GVCNERBLEBIJ@LRLHBNLJBHVJDFEJLDHJLE`NBFEH\\BHHLFHHBHJADFGFLFRNXDRJLBHNPDHF@JHJHBHLXDNCDGPDLEZEp@PFHPHI`LFHLMJALDJGL@FEpDNEAEQIBOJAWMGBMCAGKGkSMIKCKFKA@GCGKDKHI@ICOAIKCBSAQGGIHGGGONQF_B]EUGQIEIHIUSGMUIINIASGAGBKOSCQAQCQGIBOLESK]EGOFIHB@OKIGDMAEFIAEKBIL@FCNEECDGEESE]EBHEHTFAJKPMHYD_BS@aCO@W@iEM@kC[GGBOAGIIBKAUKSHMAKDSC[KMA]IQIIIG@KMK@AEaESBQDBHKD@FQDeII@WOWIS[CGAWBOJUDECEUBOGSQ@IDGIIHKECIEW@QESQW@QE@IG@CEDIJEIMCIQEKGG@IEIFIEOEMKM@MCMLKEKBKHWDAKKDgHMEGBOEKBANKHYHFJCHIHeHJLEPBFTRLFDHSDCDcJ]BWAaGGIKGSQaYKOAEIKMWGQAOBGLGREHEBGJKRCFGJ@VOF@PKGCqAG@QBOAiDSDQ@GBO@UBSLUDSAKBSJ_@eE]BKB]AQESFYDOEMA_KYEUFG@UFSAQJCFaBQHSBQJCHKFK@OCKDEDNJATWTECMHKAGEKDiD@NIBCaCG{KsMwQgMOGYO[IU@OCIEOCiO]Oy[UKcQgq[[QuiGC_[MGk]UUGAke]UKqcYQOGAWQc]QMmgwsSUgcu{WYW[BCQUOU[aQY@CSWUccuIYMQIM]wFKJCKMI@CIFICCM[@EGKCaPU@MJGCUJKXIEQFECO@OGE@EGIEMBKI]BEEUBEJEKWASECIY@QFQAEDKGGDESGKACIIIBIYIOKQ[EKMaI]AUEMBOHKCCFKACOHQTKFELIHG@GFG@QHCLMFE@GL_TERBHEJSREPKD@FKLEB[NKJQFON_LODSN[LODGDOBUJO@CFKDGH@JKDGFUFEJONAHUHSBGDOB]BYLiBUA_HMFWB]@YDYPWJCDYFGNEAMRYFWAIDOLMDa@MHKDQBQASNKN_REFQLQDE@QLaRIFQFK@_FWDQHOJgPO@ICUJ@BOFKLMJUTENUJSDWDUCGHOHMDUJKDSRSJ_JaXYLMDKJeRBFUV_XSNOJOHENMHOF@N[TcPGDWHgHsHuB[@GNEDYBUDcDEJMFEPWLEHeNMNOLCD]VQHKNQJQD[`SLWH{TkN_JHLKDKEOQgJDLGHGCMF_HcDIB}Hg@]DkA[CRNPFdLPBBFZHHAPFEJ½iGAIPIEHK@IOEBMK@ALYCS@eEQKA_I£_[IoUyWmgUSMCGIBk[WKUOqq_SCMBGCgUMDOISKwgWQGCSQYW_]OSBISASQAESKSUCGGGDMMKUBMFEDMDKCEDDJUHKBECKJCHMLELXHAJRBFEPQDFJCDGAIHAFEFHJAFLGBETD@tHKHkEEBAFTBBDUFGAID]BOHU@YLGAGLIDGvEVELEPINYfKNKJ}POJILOLQFBFSJODM@I^LFYDABNNIPQTSPQFUPGHMHCDW@DJGFYHSBaAMB[CCBQAuQICKBUECGMCKBMFGHKDMB[TKBaBIE@CS@EDIEUHMDSGcY}oea[[ksSW]m[ic]GQIYI_CWCG@WC]B]RoRUNERKH@\\GLG^GX@XCJBVAPKLEFIPQPCNMVELObKJQJEPKJAdSRUJIRKRGL@NKRETCP@XERDrJTFXHHBdLR@XCNARD\\VRAXSNGJAJC`GFELeNUVIDEPANBDQAMBKPGDOJGDIPIJCTKTQTCJGP@NMJAJCHIHCROBOJKHEHILEHKAEJUJGRCHUNMpULCLEZGFCXETH\\CTElGJGXGPEJ@TK@ENEHENEVAJGAEKCBUHOVGJGPCJBRKCEHECOSIUECGMI[@MACHGB]AMGYWEQKGMCEMDGQOSEOACGDIM@CBMBMK@GUHKAMKQAKFOEQCMCK@WJANGJWPMHXQDO@QJYFGCKDOAMDUHSFQFcFYBQA[EUEIEMKKOFMGB[KIHAHIN@TV\\JEHMFCRPFV@LEJIC@LICEHDJOHILSHcDUBiIOGMIKGGUFMMS@MGIKGBKEM@KMGKBEEMCAEcKCCKIGBQMKKEAIMOB]CMBGCSAKFKES@OGQOGIGOCOE]CwCi@uD]LE@UOUQKAGMKMGO@YEUBMCIBUGCIIAQDOKUEOIQCO@MCSE[GIECGBMAEMCEC@GGMGCCQKGSWAKGE@MYKGKK@UJQPIJMFEFKHG@GFUAOHGCEBMEEBKEYACGKFSBCHYTIDOLMBKRONFJALGHENIFCJDPGF@LIDARKLBLGJAHKHEJGZDFEJBJC\\DFEH@LDFAJJPL^@HJP@HCHLDALFFAVBHHN@RHJJFDHLHDJ@FRLHHT`LFJNJTFDFLDRB^APEF@FLHPBJCFDNADER@LJPXF\\@RCHFNCJINTHJZ@HHJC\\HLBJAPGhGVKNBJJH@JIJE\\ITIFWBFLKPBHCHGBBHGFS@HFCLIFILE@I`EBGJEN_bc`YLKAMFMJUBO@CDM@ICWBSDGDWAAFGJBFIJALILELQTARMDKJCPDJCHMLMFEFUEIHIBKASH[ACLY@KJ@FEDCJILIBALELHJLFBJCNGD@HGFALCHKDFT@LFFDLEDHN@LJXHAJFNBJJDLJDFJHBHTTRPZJZJ\\BLELFN@LHHDJALKPF^KHDHETH\\AJITEZCH@TGTEBAJANENDFGXJRLJH@NFBLFHPJBRFBJJJPJDJHJD^RVBRFNHV@NB^AHDXBVELHJATILBPDRAZF`PVR@LHJ@JDFP@FJHALJHBHANDHFJBHLZ@LFNJJLBNEHLTHJHRHB\\bR^LGDIVQPER@JEDKRIAOFQLOjAXDXF^LHP@LDHELGXDZHJRPJBHLNDHHTLPZHFBJRPRZCFJJVXALR@LJNLLRJBRJF@\\J@D^N^PTHJHVFJJLCLJFPLJBTB\\CJGDKAMFILK`KHBLKHGNGBMJG@MFBHIVCNOD@JGBELCPOFMLHFCFKBAFSL]R[H[VWJUZCL"]
				],
				"encodeOffsets": [
					[
						[143167, 42349]
					],
					[
						[142684, 42494]
					],
					[
						[142753, 43178]
					],
					[
						[144720, 45509]
					],
					[
						[144809, 45495]
					],
					[
						[144721, 46251]
					],
					[
						[144451, 46517]
					],
					[
						[148358, 43989]
					],
					[
						[148612, 44102]
					],
					[
						[149099, 44246]
					],
					[
						[143715, 44236]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Hyogo Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@DGHC@MOQWBFTJ@DHCHDJHC"],
					["@@DTCFIJHBNRNZNDLNBHRMLBHGF@TJHFPF@FJP`DJFJLBHHHRL\\HBLPJRPhLBNTJDFLHAJBLCFBVTHNNXDBTbJFHNHDJJRA^NFBLPNHJAHDJNPJFJTTLVFFNRFBJHPHXDNMBINMF@DOFKOWIIMIUWAGA_MWECGMMKYMQS@CMOCKQMKEYUIK@GGCQQCGAKHKGSBiDUCE@MCKDGPMP@FIAE@KF@F]TONENGN[CCDQH@AMKEUCUGUEOAQEQISIWEME]IaQIKSQYICEg@GBSCYGQCMEQADVERKDIJOBQBCJFNHFHNHDLJDJGJIASMHEMEAFIFQAIDMGMHJDHLGHBLIJO@ABDL"],
					["@@ANLJJALKEIY@"],
					["@@JEAEQBGDCL`F@OID"],
					["@@BFR@BWUAAPBD"],
					["@@VABKUD@EVCBK_CiCC^XJBCZD"],
					["@@HDPAEOIK[FLXHC"],
					["@@D@BO_AAH\\J"],
					["@@AFJN^BHAHDDGBK{C"],
					["@@EQWN@LJFRHFAAIIBEENE"],
					["@@IIMJBRADNLZENHCJDFLABGEIHA@KFAFMEEIDCFSDQI"],
					["@@FHTDJIQEDETHFEWGDCZHFKUGDGVHNUyA]TA\\LH"],
					["@@MV@FFHJDAFJ@PMFDJEBMOMIBAGIAEF"],
					["@@FFHDFKJAPIEGFKGMKBADOLSDED@HGDLJN@"],
					["@@HEMOiPJJNADFMDBDNCRK"],
					["@@ZCPEXMJFHJHB`@CJTLJBLJDLFFFCJLPDDFVJCF@NGNDN@JHFGHKHGVFVJJBRFFIDGHAJaJGHOBGLFL@LFF@JHVGHFVEHKBQNSAGDEHKD@HCT@HEDALHJOfEHHLGLE@KLI@@HNV@JFBBPEDHPEHANMBIAIPDRAJFFMPQF@FKFKAMJEBCLJAZ@BHLDXGXH@H^EFHEJJFHAJENBHLF@FJTAPJPPZLLHJEPDHLNAJDLFLIFGPMDGHB@HRBPHPABELANDLCBILGAGJGVDFNADV@FDHNABRJVB@EKMAGHGBHLNJDFKHFJC@NDDJ@DEEGJCJ@JCDFAPJ@ZDNMT@DDJCFDJ@HFHGJAXDFJ\\BLGJDJCVOLAJDHCEGECLKJBBJHJ@DRHHCL@GKHCCI@KDEH@AIFSEMGABICSOKGGDENBFKFCNKLK@GNGH@RGDMXGJMCG@ICCPK@KNIXFV@LAJBDLRJJAFJLBLJP@HBFCRHTDTA@OFCBMDC@QFEIIOKTG@ICMICAENG@KDADWHGFOEECS@KDGBMAKUDQ@@GKIIMI@CCMAEGWCGHDHEFIDSBKJADKFG@QJ[OAGGCGQFKBOMQCGJUIGASPGFKGIDGIGFKTGNBJCBE\\KL@BCRAVELGHBPGF@JICURCbKNDNCPDBQFG@EFCBIFGJDDHLBDDFNHBDHFDLARNFCPCFBNELJF@HEJDVEFEBIFIFKAGIOIACEPMR@HKNDLKBGPGFMACK@KGFMEUN@TOFGNDR@NFBNDJLAZDFC\\ANDNEJEH@BMDEGEEKMCBGPGLCJFJAXFRBFD^B@GGCDKHEXBJGPAJCT@PABCIKBGHCDGGECQF@VIFIGEAIBKKEM@UMBIKCEGBMDEGAOLUB@ISEKG@GJIBINBRCBQCEBMECDGASNOOEGGBGGIRINOFDXANBJK@GJKHHXAFGJBFMND\\BFDVQJAHELFCSECK@IDYBIGG@UMBEJ@LSAGTFHFDCCKEAGSBGGGBEIQBIYMDCHQAQAEKKAEHQJMJAZYBGDGBKAMLCAKTOBIA[U@EGDOCGQEOGIKWGIIAB]c_GAHNDVLPVIDMQEBICGDCKBAIIc`TPGDQPC@SPI@UH@OcGAHUBEGSEIGOC]DCCBMO@KDIEFK[AIHKAJIUKGFEEUEKBDMFEEQOENIBGECGSISBaAWI[EGCO@BE]EQBKCQJ]ZEBMAa@AFI@CE_D[N_Z]P]HE@GFEH[VKDKHKFUR]JAHEBMYOFCGcXHZCB[BSNeVKCKFHN@HOHQFGAMBSFWHIBOADGQCIBDLIBCKKDGFKKOFDFJ@HFKHG@OYEHHJO@@YY@AVDDTBCFg@@GLA@KI@WIENI@SGSCDM[GE@WLBJIFKBQ@MJEJQMCEQIKMIXKCCIKFIE@MOE@HGRFPEDBLL@OPDJKNCCLGEK@IGBGEAMHWHEKGEGGECJHFDLKDYEG@EGDCKMPKMEEKMIAEKGGACHUAMDCISJJJMBIPSPAKJ@BKMAECQCIFWOMQANFDEJEAIHHJDZFJXJBFGDAFK@ONFH@HCRAJI@INBDKHEAEHOHBJIFUEMAGL@HDDETMD@PHLDJNPINJBDLRLXFJJBJOJGHBJM@EFBJEFSLEGMJBNFDFJND@FTLEDBLDJIFAJNFFJDJGJYHCXJBAHNBFLHJAFL@LDJJPEFJPCBFEJBTDJHDC`TDPFZDBHJJCFARBHPLIHJJFLAJJNF@HHFCLHJCFDNARIJJDNEHIFBHLP@NCFUBIFWFCZ@XBH^LFRFH"]
				],
				"encodeOffsets": [
					[
						[138061, 34999]
					],
					[
						[137894, 35101]
					],
					[
						[138574, 35544]
					],
					[
						[138565, 35544]
					],
					[
						[138541, 35548]
					],
					[
						[138525, 35531]
					],
					[
						[138087, 35540]
					],
					[
						[138532, 35545]
					],
					[
						[138455, 35462]
					],
					[
						[137746, 35477]
					],
					[
						[137700, 35477]
					],
					[
						[138453, 35510]
					],
					[
						[137800, 35486]
					],
					[
						[137752, 35514]
					],
					[
						[138118, 35528]
					],
					[
						[137629, 36087]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Ibaraki"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FLFBNELCDJAHRAHCNC@GlTXP¾jJPJdJLJH@DGRCLHRDBHNJHNCLFTD@FDJN@BEGKHGJBJCJBDGIGTGNFHNGDD^ANFJPJZD@DPDHDdD@JBH@PRNXMVDJCDFELRAN@T@BBRBHCR@RJNDJNEJANFDRBNAJIHHFETGHFBTHFPFTBJCRAHINQTDVADCNBBFNHFJFLJJCR@RJRGH@HJDBPHF@HHPNFNRBRAFXBBHNBCNZFONBDKPBTCHJLORFJCPBNCDDTHJAXENKPICAVRDANEFDJILMLHFCJSHHFCLEHNLFLFDXEDJXATBFHXDFHJ@EL@NGRKJQFCHIFELGLDLHDONHFGLVFDJCFFJEJ@NFDA`GHALG@CHBLGBAFFP@TDHCHCPDLGVCNDRCHJRHFN@RENHLBNCJGJCLOTMHIDK@QTGZGHBJCLBHAFGHSEG@KDKHGFO@ITG`EVBDG`WJJHANUHCFIRK@GHC\\RBHJHFB@TNANBDJNCLJDTTHAPJDJJ@HPA^LJCPHFFJCLNL@BLKNOTBRMH@DOLDF@LFLELNJRBFDFIJKAOJAJIHOLCFGACPC^IPBDDRGR@RGN@HCRGDDHKH@FIHAJIL@RDJENHJGTCLELIJBBHHBJGJCAIH@HDJMCABOJGHOCEOCIFICWEQUO_AGGEIO[}IaCWBIGIIYEQEgBSEMGEIBOOGQCSAQQKMUCKMMCSQOKWGWDKOMAMGSBGEEBKEIWYLQGCGFGIGuBODEHBZ@@Uc@DIN@@IQ@AOBQJ]FIRG@GCG@IGOUMGUIGIDCGBECSBGOSQ@KIQQGMAcDqDiLuP}d¥ZuLWVmTgfPaPYLOLG`DDEUC^uKG@IaS_LOHAEdOFKB_F@PWDGHDYdAX^PPJFGJHBI\\ghuCCLStBAZaT[tHIRKFCNMHBLECEGCQA_BMD[PYRjSLYXEHQnGNMNSLSLUFSDsFUFCLWbEPKNQNUF@JGBEJUP[NMDYLIFKL_VOOGKCUEGGDGG@GHQPKAEYFUNEFYNSW[EQGQASFWA_IaIMEGGIQKIMKYMKAQ@OD]LSBSGm]UAIBYNSAMCWMQEUGUEKBIFILMNMXKFSFQHSHI@[OOJKNKFOBaRWRKBaAGBMHQPWH[TYJKLAHLXAHIFMBQ@cNEDWTCFG`knSHSP[ZSPKRG`MTUPQKCOEAAMKCSDSJ]AGHCnGJQRETQVKTCTERFbKJ@F"],
				"encodeOffsets": [
					[143041, 37069]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Ishikawa Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@KHOHUIKBUAKAOJSBEG@KCKOOEHOBSNI@UGKAIE@GGEAGOMKAEESCIKGCIOECCMDMDIHEEGBIKOICAGQEBCEELGIEBIMGHUU_BUHMGQMILKDOCQGGKUKCWECQWAACODKE@IGIHCLKJAFGLCBGEK@ON@JICIFKICIOEAGK@IKACCBQMIOCACAYDA@IJICCBIAGLEBMCEBGGMDCNDFALMHAJO@IGO@CIOGOECCIGIDQCKHKF@@KCCIOFKEIFEQMBMJGQKQMGDICAOHEAMPBNIPODADOBQDG@UNKBICGSEAEOAEGDUEILGBQCGHYFMLCJM@OPKBGfAFEFAJGBGJCDEGCGSIGGMEEAKUMAGFIGAOIKMCAGMBGCIKCKGS@ECK@CGPGCCHM@GJECWKEEQBCKSQM@GCI@GQAMIK@ODS@OEQKEBcGGGWBGBALEFDNEDELKFEFSBIJIFOBEJ@HKHEPOHIAKJE@IL[HENI@GDKCGBGGUCIHSKMBCFM@IPGBICKIEIGCKMOCOJOGEJKBILELSDEFDNGLICM@MEWBKDIAEEOAEFGBMHMVCBDLOVCPHRELHLQDMFAHDDEJMBEHENOHIA]LK@AFMHAJGD@NDFQDKHJHRJd^HHAHHJNJFJ@HRNLBZB^JjVVRvhXV^ZBDNLNPNLX\\bdHLPPBFLLNJ\\ZTTRRJP\\\\z~PPLNFPCDRBXXDHKFVVDANJXV`jPX`jRZbvtVhRbN`PpJhHfA\\IJOBIJBHRPHJELHFJPF^ALGJHLANCDULKHGAGFAHJXOH@NKDDHAHMBGFA^GH@PPLEFFF@JHDAJCFARBRDFCF@LUVMFS@GQgCEBEJBTDLFLEHHNCPBLJD@NBFEFHLLHLD@LNBDHBLGFFTHHJARNLT@FNXBREHMBBTCH@TCHFLPPHBFHCJHDDEJ@LFDNIFLRR@VHVL`JPNXDF@LDVTrJDDV@DEXEFD@HLAEIHGJBLEZ@LHTD\\PXHFANJRJXHXJRFX@`XJHZDTJRRJDJTLFPBNNJ@LJRDZJLB\\FR@PEVJXDP@LDVTFCLHR@HJLBFFLDFERLFIJCLFVGRFDCbFAIJMPCJ@FCEGPOCKKEGQLSZSAIDEDMSMKCUCoCWJ]A_GMIKCKMMeBQGCEIAIF[HC@MJQLAXJBGIG@IOCBIRDFGIIBKEGQGCMCEKGIHEGBEAGUGEHMCKDBHSAGCQDAAQDICCFKF@MKDOGIFOIUGSCQOQCI]EKDCKCAIQGGIEOEAAQFISIEIIDOAACQAQCHEAMEMQ@OGE@EJGBCJKJUHSEOHKLBFGLGFPPNDCHEBKCQOCEIDKHKCNICEIDEEIBIJKIJCFELA@EPKGGKF[ELMCEIAAKWUGIBGKCQmJCHHNBBGJEF@IaCCAOC@MHEIIHOEC[FO@EQK@IPCNGTCJDBJLELDHNCFFJTFBCVGFDNAFKKCBMJG^@PCOQ^OJCBLPINFCJPHFILDDLKBLZJ@@VFLJHBHPDL@PJXCIKFOCG@KHOCM@IEEBGEQ@MCEDI@GFIBGIQBOJO@IGGFMAGLQGIAE"],
					["@@NB@JJAAGXDN@@FJDDNHCJKHFJBDG@IJEL@BGPDDHH@FFFCHFAJDDBNTRJ@PQBKHCIEIGEKHMLC@KQMEBWACCUEQLW@KISQ@ISAENOGMG@CKGDPENQ\\GFQBGFCLM@GBBJIFBHANJATD@ELGB_RFAJDD"]
				],
				"encodeOffsets": [
					[
						[140341, 37847]
					],
					[
						[140220, 38032]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Iwate"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@CJGLCBIDCBINCHMXHJGJBJC`DHDBJTLTHR@JDRTPHNBNAHFT@LLSfHBXLHF^JHLNARDPJNBHFN@NCX@NHJDRB@FJJFJL@LNPFFHXB@FDHJ@PI\\JHFALPPN@HBLLRE@ELILC@SCIHEJAJEJOLHVHHJFCJBBFPPALHDBFHHFALSZNPC@FJFDJPHHCRCDDNBFD\\AJIFBRIFKPBPSVELBNENFDHLFFFPBPHBHRH@FJHGJDHEF@LHFDLD@LLLDXBDHJBX@PFPJLANHBFTFLXNDLMAALOPEBKDGPCFEJQBUNKBEHGH@HKLERQCMBKTG@GNC@YFKBKJCBEJCHSHIFKLMHCFKPQAEHIACDMFGAGHCJQAMBGGGSBMIGAIKEK@IHIEE@IFEXCHCHBXCLKZGNIJQJCHQF@KSUEQFIAIGKQBCMIE[HMAG@MHG@GNKTY\\IJDDIL@HEBIHI@CXOBCDSJAVIPAHDR@HSJE@CLI@CLICI@OBWHMBM]BECCSDQEKLIHKF[DGLIHAL@HWFA@IDEEEC]DIJCCIBMJDFGDSKEAULKIQNELOL@DEMCOMAMBGTMOAECEOMIGFEMJEJBFECOFE@EKGG@GO@IIGDEPALDFIIO@EKG@IGCFIGGBCPFBMIGKFEM@KJOICAKEEBEGCIKSIDM@IVCHHNZXXHBPTLPPNBJNLHLR@CG@EHECIBIGMDEA[LBDGKEBKHEAM@QEGNIf@HBDECIHIP@DECIHSKGAMK@IC@EJEAGOHKLOAECIMFECECOEGKGOBBGEC@ODQCEGFE@UJOEUBQIKAECCOHK@GJEBKPBFQLAPTPHLIDBANNTZNRLHJN@NABCTSIQKGAOGAKGJCGMJE@OIAEGKIIBQREBIACGJIKC@GOBACYAGBDLFDENEFICAKEASYE@AIQMSSNWHCNH@DRDHIKMIG@MUIOEGFMBQFGSMACGI@EEDOHGLHDIH@DJNH\\GL@@FXPDEP@HAPFDJHHJBDGIKE@EOKMFGIGCGYHGGKDKCAGIAEDU@CGWA@H]GGFEIDEXARGIGRCZG@YFACIIAUBKJU@GDGCBKPCFC@GHKQGLAFDJELD@OH@FEHBHPJIFFDHNCLFhBBEMCK@ACM@IGDCHYFAMMI@IL]EJCAEM@IEOIQCGHGEDMECKH[LGAEGDELCKGDETBFCHGJCRBHCLFZ@DCAMWMGAOICI[IKBECS@EFKBSEGEGMTGNKTARGBCEMJIZAJDRDHE@GFEPEKGQCIII@CMM@AIG@BLSNKAGPQBQCQBYTKBGEBOECNOMA@IHCVCECFONBRCJFHEPADAZ@DGKOOBQEGDM@UCCBU@AGFK`MXEHCBKFCKG_AMDMGOFSCGDCLHRCFIMMIAGMBMLKQCCBGKAQDGHECO@GBCHJNHBCTLNEHDFAJQNIMBEGSFUEGICEKIIVKFBRONOAENIAOQ@KFIBGLM@EGHGCKGAEGMECOLEJDJBXKACHIBGOBIAAKOACMIBEJAHMAHJIRBHGHYJIHAJDFAHJBBHLBDHSLY@EDSAEFUBEGGACIJIKANGIGFOLGAEO@_VGFYDODGCKBOPMCEDGAIDOCO@SEMNDFSBCEGBKCG@KICUAIJSDUFCGKBMIM@GLUCGDEEOKIaOBKAEICOGEGFSAEFEPAFEEEMECEIS@IJUAILCIGOASFOCDIJ@BIISLQMBSGDOKAEEI@@JLNANGAMFKBALEJO@KGEBKTKDK@MFIC[ECHWPGJOCEEBSGGBWM@YHIIIDKA@II@AOIGCKBQSCUI@KGCaBQPBJEPOJCFSFIJCEKAAEIBGFE@OFI@KFGFDJB\\BFCDIAK@AFIBFJEHE@IEMFKJDNRBNETJDJLDDFNLATMX_FM@ECKAKF@HUFEGE@UG[JMEM@GIUDEJQAIDEEG@IECFOAAGGCKDGNKHGPGHINMHO@EJK@MF@FMBGIKBBFINODSCcHEHONQBMJQFENEBULY@UCKDYKO@CJFLAHGFALIH@HHJGD@HJFJDJFBLHDDLJDJNCFFDELLFDJHF@LIDAFJH@HGL]FMFMGKFEAIJKBBJHFAFFLHLCDIBALVFHHOHGJM@CNNHRPBFJJFPJBJEFBDLPHFARFCJQNQAOFCFOAKHDNAHEJNTTBPFAPDHWFADKJAHWFGFCJKCIDIHEASLIBA\\BJAJQBKFQAAHHNGFBNHDBNVBGRCJODG@GD@HJNIBYTFJBTGFSCIDOJLTJFAJGB@JXFJALDHLAFDL@HGJGFAHLRHFFHLDjZPDIHGPCB@LNJF@BNCFFHNHJADZFFCH@LUNCLFNVALHPDDJLNDJLBJFJAAJBJFH\\ARTELLLANJJFTNHCFDVBDAPCDARHHMFKP@TIDUAELGLGHCLMHLFP@RFNHDFBLCFVLHTLDRNLPPJAJKNSDEFG@CJSFSEGDIHOFDFIBAHHH@RFJAFIJCVLNH@JFFHNCP@HFH@DFJ@NKDGNCACJGJCHHNDNAPHBRIVML@XEJSNFJAFIJBLHDANBDIJGBBHC\\BXFL@LEHBJLLCHFHGHCLJJ@TGN@PGHETNFBHLJLCLLFBJN@NDBARMBFNMPADPN@HRVAJMDMAMLELBDRJH@h\\ERRRCHPJDHHBP@NFT@PFCXNLPB"],
				"encodeOffsets": [
					[144338, 41214]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Kagawa Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@EEO@GVH@JIHDDI"],
					["@@HABEGIHGPCJFAFZFGIDIGEQHECMAGOGACGIFFTNDBHONFJH@"],
					["@@EHCNN@JGNGFMEGM@EDGL"],
					["@@BOCCAQMECEBGH@@SQGKOMAAJGBGJG@KGQDCNOAMNUNO@CACQCESFKC]HEEEGO@GDGNIBUGEJ[DGCKAEAUBa@GGWGKFGGSFWDICIIUEKAEMEGG@CGDEB_KEEKOIaCCCU@KHMDGEOIKCGJODKGCGCQQGKMDEKEKDK@OKAIOEE@IJWGIPM@EB@FEFYLBPIFCFDNOBSAUUOEE@ONOEIAMEMAGJQAIIMGG@GFYMBMGI@GeKIBSROAEGMCIE@EMOIECCQGMIIAAEIIAMBGCGYMOFWKS@ALKFCFIFSDMCIBICKJMNIEOCSFKP\\BBDTFJHHLFVEF@PJHFREBBhMDJNHDHrEJLJBTBDARCBJNANOXICALEDSFCHGFCAKH@JIJG@SJMJIABNKFDFMJO@AHJAHDXGL@FA@GbIFBPO@GFGFAXF\\KNBJLNBJJFEGCEOJKFTLENA@HN@FEXRRRNFDFPHDHKN@NJDHIBGJBCJEHLHLOLHAFHDDEJHAHIRNHHMFAXJDENF@JVJ@DRJFFLFCDCTBTALHD^NBGOMEAAKPHZT@HRCBIAMSMSABGQAFGBIRDBCN@LLJBLLVPHAPPJFGHDJIXLNH@FMN@DNNIBGHCFFEFFLDLLADGJGAIJ@JLXGHMECFGPFJLDAFKTKDGRGDLLC@CTCJD\\ETHFGTA@FHHAJPAASHBBRJEAQLQHAKTFHJRDLAHBXNGRQJMBGLDGTNNDLHBCLGEELDFJCTHNCFE\\KHM@IEI@EGIFUCEEWHIBGNIP@HB@LNBDN@LE@ALH@JKLANCHDJJEFAJCBEPDFJ@@GHAH[DGJC@CNGPBDJNLD@LKAKDEN@DEIE@IFMIACIMAIKHUJQLEN@HLHC@I\\ONAVHVMNMTKJ@BENEJ@LBFENAPFDFCHFFFGVINWEETALCBEMEBGFE\\SZKH@"],
					["@@@ARWCCCKIAEFBRERJB"],
					["@@NVBHJAAEDMEOKAKOGCEHDHLN"],
					["@@FBHJJCJGH@@MEGKGGBKGCIMGKB@LFHELIFDFEHJDDKFALDFF"],
					["@@JBHKCKMBEPFD"],
					["@@DDNIAGNOLUAGOMEAGFEAGK@ISA]RJJBXPBDPNAFDANDJ"],
					["@@KT@LIJGBBJJEZHJCISL@@KQKAG"],
					["@@JIMCGEIBIEEQKEUAGNMDFFBLLNJLVDNITEH@"],
					["@@JDBECEOESDHHTB"],
					["@@GEKACGKJDDHEFHEFAPNDVELHJEF@DHANCHGDQ@IFOME@SGOAAIMM@GFEGCCIKG@EIKBGFEIIKEOAELIJDBVHDDELQAGBFHPDJNAJJFAHGBANOA@FJHKJKCIIKPIBGAKFGAOHEAIFCFGBEJEBBLKHHFDJABFPF@RQJCNLNATBJDRLNCVFDLLHRHBJJHLBFKNBNCV@RFHJNJJBRHRCTFHAEOHBJFL@@CO@MMAIECBGNCF@JQIMBE@QKIEGHGBMQGBITMEECYKMKEAKHMCIKDEP@FSXOCI@EDGA@GGE"],
					["@@APHPJBFGAMKEGE"],
					["@@@JEDELCVHDFKNHFCBELIDIRADGCEFEPFDAEKMEQDGCIBIHGAEJ"],
					["@@LALHJE@ELGTCBMGGQMCKIIEAKFIJIFK@ODUNKDNHAHR@DARBDHPJ"],
					["@@JAJ@LHAQCOIEALE@APEF"]
				],
				"encodeOffsets": [
					[
						[136747, 34948]
					],
					[
						[136835, 35110]
					],
					[
						[136875, 35138]
					],
					[
						[137667, 35029]
					],
					[
						[136830, 35177]
					],
					[
						[137261, 35220]
					],
					[
						[136981, 35221]
					],
					[
						[137028, 35220]
					],
					[
						[136920, 35225]
					],
					[
						[136876, 35209]
					],
					[
						[137408, 35314]
					],
					[
						[137341, 35308]
					],
					[
						[137520, 35277]
					],
					[
						[137273, 35243]
					],
					[
						[137189, 35281]
					],
					[
						[137289, 35326]
					],
					[
						[137224, 35326]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Kagoshima Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@N@NELIHMHGAQBQFOWIGDO@IFIAEDAHOAEHAFEHQBBFCLBFJ@JIJBHT@FLLLD"],
					["@@DBL@LFJBJFF@HFBHJBFFX@PCDGOMGIE@GGGAGEUCOSGACMEAEIIMMMQUI@OGMKCGKECIIASMSEeIQBWPWVCLIRIVFXBLLVFFH@HGLEZCfJZAHEFHNHJ@HHLEFAJHRBHHHBJHF@DH"],
					["@@CXIBARDFCFALHHBRI@OLDjFMD@BLJP@JBHIFDNALBJHFLPJBnKTHRCV@ZF@MLSBGUAQO@IJANBFG@QGACGJGBKEACMJOTGFKLCPB@EXQLMAIPIXCHM@IAMEECMKIIAFGIYDMGEK@IIEIDGMG@IDAEMU[ICM@QFKIOEI@WESJKRBLCPEPKJKDIJMBMRIJHDNNPJ@RDFAFFFFRAFGFKL"],
					["@@@TJJYPIGGD@LEHODAH@NCLMJCJAJLFDGNBFLHFPFJEFGRCDFJ@BFVE@GFCEEMFEHKAUGEEIACGLAHIEKDGVDEGFCHGTCDELBLFJHBHCNFD@OHDBJJEF@BKHG@MI@CDOASBGIH@DGPDKKQ@EE@EL@BGGC@KPBFNLFDAFFPNDCAKIGOGFCP@ESHCHFHPJDDEGKDIFEHAHFHXJM@GHANIBGNJ@NJELAJHPKJB@MKG@EEKGI@OOCOGMQBRGBDVPNCJEFKAAGSKEFI@IDAKG@DSIEBGHGICOFEHG@AFML@FHD@LGB@TCNQHGKDIM@EAMQEC@EGEEIMA@LLNBLDF@JEPKDAFFHCJ"],
					["@@@HLHDFAJHBDELIPQCELGH@HFHLJEBKLBLLHIAEDGGKFEOUI@CNKHKDEAIJQDM@IGEDANGHAH"],
					["@@FBCJHDD\\FBHHBLLDDLHBFEGGP]IBKCAIJGEEEKAIDEMGKBCGMN@N"],
					["@@N@JJLDLLNBJLJFJJJPRJFJRJN@NGLKDMKSOKAIEEYGK_USAKS_EBCIEAGDCII@CCKCOCIFQ`OEEBGLC`DHPPPFZD"],
					["@@NCHEDFNJL@HMCKMAOHQEGN@F"],
					["@@QVPJJBPGLFJ@FCBMGGBMAGHKCEMJCDULIH"],
					["@@QHAHHNHHBF`IFULKBKMIGBSAKDFNAD"],
					["@@OGAEKGBMKGQBCJDDKNCJAPBHAJIHJNKFTPNAHLTHPDPEDFRDFE@KEGCSDE@MKO@GOI"],
					["@@EHMF@PHJHBJCAMBAEU"],
					["@@R@RC@GPEJ@LCLIJOGKDSTSPILKAE]@SDMAQKSDQLKT@FGJG@ML@JGPDNFD@FLNBFHD"],
					["@@IASDC`LFPCNIHSCGKB"],
					["@@TEJKHOQDIGOHCAOBAHSJHT`IHB"],
					["@@PLF@HFNCFBFJNALHFBHHPJJBFCXFJARBHDPJCFBLJHTDFPLJHLLBNI@GLEREFBNPLHJLRKFIAEDGHDDJFHGBDLCHIFGLRGJDFFHCJBBDL@FIJCNBFCHDCJJNDJ@FDRNFNEBEEKRCHBJPHHNS@SAOHCDJLVNADFNBUJAJFZJD@HEJRZDERJAJH@LPTMHOJFANP@FLHFJDNAFHHHJAZDFBNCGEFIMCISGCAOFMCEQ@BMKEDIGGAGJAPFAPFJAHPFBEL@DH@HINLFPGCEDKDAWQDQHELARDFFBLAFFHFIF@BGHBFPAJGDCF@JGDHPEFBHAJJ@BMFCHSAEHKFCJHMJBJNJBJEB@JEDCJSNANKLGF@FDFLEJBBJLBAFZbZH@KFMBOCCCKR]@GHEDGL@NK@OHCAMMOBGJGUcEDOMGEO@GEQ@GCEGAKWACHSBWJQGKGCBGQGIGCMSCQECK@CIKKCKGEIM@EGE_CMBMIDKNIFGMKG@GCGBMGG@OEO@MEAEKEK@KLKCAFKBGCQAGCDIV@EMLYCGI@IEKUFCEEM@AD[DEAUDBEXKHBJKHBVOJAJFHAJGRK@EJCBKMCAHMAMECQGCKBECODEIQGEEGFOHECAIJEBKAOEM@KK@WJGDIBCCQDIEBLMBADIFQIGBAEVQNCDKNCLQDUJEDIAEFKCGIHECGBDHIF@JGFJBDFKBAHGBOIENMA@IKCCJK@IDGLUHCFOBGFLHAHQBALLCHBBHIHDFCHOECFJFDJOBCGIA@GMAIDAFHHCFRN@PNBJJFCFJJFAHMCM@MIMCKBBFN@@HNFDFAJKGQ@@FQ@CGFECG@GGCRK@IKAKBEJANEFMDCCSHALICCKMEKNIFGAAGGAQJGR@HEFO@GIMACRMDBHKBEFTF`EJBDNLDJHHBBIFENBNAHORCFLCJFLFAPLJAHEAIFAHFFAHGGCBGHBLPF@JGDLTGDJAHFJLAHDNIBJED@JQCUBGBEHECAEFIAIGBQAQLALMGSRFHADKEGJIF"],
					["@@DDAJH@NNIRDHJDHQDSPQHMPEFIDKEMSGKDGHMBKFMLDRKBDJ"],
					["@@QFI@IFAFIP@FIJCLIJIBCVDNEJKfCHKBIFALGTANCBERBD@JKbBLFPBJLCFJf@HAN@JHHJNHHL@NJDFJLJPAHJDT@HEHBDJBBHH@JEFBNA@EHCHDGTDFJCAIFCEGBEH@PFNC@CHGLE@FJALDJCHIDBJCFE\\KDE@GNAZKLAAKDCREFBdMV@TKPE^a@GI]AKDEGQAaCKIGFECKEIQGKKKOMEEKGCGIGAIGCEAMUEKGAEKAOGEBUCCGGDOG]HCGMCEFU@MDIIKA[NKCMFS@"],
					["@@RIDEAUEAOLQCI@ICIM@GG@QBIEEHKFEHGDGHALEPLDDHAHGBMGEEIAQDDHEJAHMFIHIDALIDFHRKFBNHF@EONDP@HEDIJGLBADJLHARKVAJIH@FDFMHGH@PM"],
					["@@FTL@BCCKGAAIBCAIGBQGJNHFBH"],
					["@@JCDMCSIBCLIAGHJVLC"],
					["@@YAEDDN@LV@DCBW"],
					["@@HNBTDJGDBFRRLEHFCLDF^BFHHIZICEHSEEKACGI@KE@GQEEGJCCGEBSLUOID"],
					["@@HFBHEDCRDFNIAGDECEFGH@HK@KGCIFGKKRC@DL"],
					["@@CFIPBFNEALDHNPDEPLAFJBDEKGBEKEEE@SCGEIKA"],
					["@@JKLELIFGLGBGJQXSAGRC\\CJCVARFJEFFLDHELFFHALDL@JJ@JGLCNDLHHBPGHALD\\@ADFJ@LHAVJLBNAFBT@DJJPHLHFCNGFhBJUD[JMR@LAHEVABIFIAKPEJGFB\\ULGRONARCLEBCEGCSGGMCCC@g@@SNMHABKRCLIAEPIPGBEB_DIBSFGTKBMLKCG@KLANILGhBFBNEVCBENANKLKHABMFA@GJKN_JGOKCKIWBQAGGEOAJU@GEACM@KHADOPANCHERALJDCPQ@EHIzGRAJFLCFGNBHEBKEKKD@GIGBOJ@FCHDNKRHFCLBFGCA@SDSCMEGFGDGVOIKDGCEFEEOHKCCJGLATQDMAGJCDMFBBHNRHFHPLDJELELOLANOLCBIFAJBJGXBFFL@FFJBFFT@BGREDGPCBKGQDKJKLEP_GYCEGAMKNI@KFIAEHOCOBIGMYGIAGGE@EKDEKICIBE@OGWMHMFGAIIAJKFKBGHQACDUOEEDIGGOJGC@EDGHCIEKTWM[WY[MQQYGQGWCe@KPI\\CXGHELAHERAJ@NGZCHCNBFEIGBGCIHCSQKCIOCCUG@GFQNGLDFDJAL@HCLFJBFDBJRCDGEGOKE@KEIQQCKIMEMIEI@AWWU@IEMHMCODU@SSAGFG@MIICIBGMIKAIEFQAESAKCAKLCFECIGGSKCEaMKGWGMDEQEEIAMBIGIAaSGGO@GCQAKE[HG@CGKCCDQAEAAMIHGEIA@MGBKEKKIBKAQQGBCFOACOOCOIKAIBAEFUGEODEEG@CIGASFHQ@EIK@GQLKACUGBCGENALHBHHAFHHBHNPBNFJIDDF@LEFFHCJIHIAMHBHFFLNJDVDFBAJFDJADFNFZZR@PDHHNTDBHPLXJbRZAJITOL@XHHJFNN@HLTTLHFDJELFT@FDH@NFF@RGDATJJAHJNFLBRGLMH@JGTGBAJILDFIRINEVELILERKLMROLCJKHYJWDIFENATG@AVNNAVADFdAHN@FFARAJORGEI@AEOIG@AHQLECQAOCCEKAGDBFMLKGEF@LIDOXKAEHOHBFAHDHN@CJRBJVNJFHPHPAZDDDbFNCFHJIHAPAJABI^aICDGLA@MOMLICIBGHG@GNARDX@LA^JBJRJLTJH@dHFJLAJDLHRNPVJFJBRENCPIJAJQLM@HLINSDGAMDKBEDYAGDQBEEMFEPOFKPQEIFKBCHIFQGMGIDMA]QMKKEIDQMKSBIGICODGDSLQOAGKGIAI@QOKOECEQGAQCGSKBKHIEGJABMQeESMAIHEGHCCKGDCGIMHAFNDAKWK]WDM_AEDOCIHADK\\AAOaDCKLSCEBOFG@EFK@MFSFCHQFAFEAEXJPSSMEGJ[NaPmFILMXMJAJQFATCXUBGRGVCf@@GNCOOCIKOAKFMLWEEOAKBOGGEAGBIHABJFDNADGCKGC@IKIG@GGYDYAKEIGEMRKKAEGMP_TUFGGSMOCECWDUZDJ@NAHNJERMVSTSRWRKFQFEAYDSGECEDKCIHGCUJGEEFQEIDQ@ACQDSCMDIFg@MDMRUEKFQDCMBMMKWNUBIECBICANIAGCGIIFKIIPRNPFAHEDQCAHFDHEPLGFQ@ANG@@GKEKBBDEL@HHBVFDDLCJLAHIFKRKDIIGCEBM@AJG@IFGGCDBHLHFANFJEJJLF@JFB@HIFEPM@IEBN@JEDEEUBENMBINSPIRCHILIBAFQJK@MEGAFRLFNAFEJ@JINJFNLHF@HPDBPIDIBSJALHDMJKHHBKRAFCjEFEFPFDbPLBFFXLLPPRJDDN`tZvNlH`FlDdAjC^E\\K^IVEHIF[DDHAHKZUZMRKDMBBNMBNJCBQ@GTQDSLGNWRGBWAEKEEG@EFFPEHARGHAJOLKTHD@FHRANHHFALV@FJVFBRAJHCFOFCFFRFBLJJNHR@RJDFV@JILBRANEN@P@JGR@FEPQLCFFDKLGBKLMFAJDJANN@LFDLBXPDFTANFNIXEHICEFANQKDMUJCD@TFDD`JJP@FJHB^RJALFLBXAHBR@LELMFDAJDFNEAMCCZMFAfAJBJPnPJJHBLLDPNJDLCFCNDH"],
					["@@ELGF@JCHFDRDDEVFIJFBJRAFJRHHCRJJHADJGJLHDAFJHDRFFAHFVDJJJBDEJ@FFHAFLRCDBJVADKBDFN@FDFP@FOHLNCLZIGKHGAKHABIOBIKBIUMAEDKEII]EGWC@JGFIAEKKKAOJA@QIAGMMGEODOJALEAEUKDIGAGEGIIAJKCIC@CJ@NEFIAGCBQEEM@MDBLGFG@GHKC@L"],
					["@@AFJJDVNFXFHIMSPE@EICI@IIICBGJIAKMBAFI@BJEV"],
					["@@@HGDIGOFJJBJAJIBQKIKAGKHLBLNBTON@DTADHK@IJFFELIOBGGE@KBUIDGHCAIPCXNFHHLZfDTKVQPULGP@FMPEJANHBHQHCJFHKFHHLEP@FCCGLEAEDMOAEEBKVCAI@OEGQGEJOAG@EMWEK@CESKFNEHDH"],
					["@@E@YF@DLDAFIA@HLFZENFFCNCNOJCFDMFANPFGDDNJA@EFKFCFHEDDJH@LH@OLEHIAGFGACLIPCMKKCBCMSJ@AGHUHD@HRELKBIIKUAMICEKEAOGGHEESGGAGGMFEMIO@KLDJEHMHIEORMHCACLID@JHPEFFRCJBDKHARGJK@ANMBJFDHVACJNBMH^F"],
					["@@OFOBIA_KaKUMMMEMOFIBCNOLAPCFBRJLDPADDNAZCRIVINALAVEPDFTCJEH@JJFRLJAJ^PJNZfVbXhN^LZFVCD@LAHBTAP@VEFALCDAJDNBLDFEDIDDHJLPJHND@JPTXABFTBHHDLGLFCLEJDJLBNRAHJRDBCXINPJFLPNRXDDBRPCLPRTNI@QDC@ORGCWBEHEH@FKBKCIOICIBUAaDMAKBKAIDG@MFC@QGGKBEEBGGEDEAIMICGESAQLCFKGICK@SBECE@IFGOSMCMGCKHQECDKMIBGICWOGDI@GEGM@SKEIIIOCOBIIQKMGGCGNQ@MKBIIFIRMJCEINECMGCIIBWFILICEQKCCEOBGHMOCEB"],
					["@@JHFGAIDQF@FOESIIEAWDO@DVHR@HNNFJ"],
					["@@LALDJKREJKNADECGQOCCWIECQ@OHEBMP@FEHG@@NVBVV"],
					["@@AJJBLCbZVHLIH@JGHOCMKGQDoICFOCM@EFHL"],
					["@@PIPACMCEOHQBODIFUEI@BHNAFB@JDFLELAJJHG"]
				],
				"encodeOffsets": [
					[
						[131510, 27718]
					],
					[
						[131741, 28081]
					],
					[
						[131990, 28441]
					],
					[
						[132317, 28800]
					],
					[
						[132307, 28711]
					],
					[
						[132244, 28701]
					],
					[
						[133063, 29009]
					],
					[
						[132070, 29495]
					],
					[
						[132297, 29843]
					],
					[
						[132706, 30163]
					],
					[
						[132840, 30335]
					],
					[
						[132646, 30389]
					],
					[
						[132967, 30601]
					],
					[
						[132656, 30613]
					],
					[
						[132304, 28981]
					],
					[
						[132315, 28981]
					],
					[
						[133021, 30699]
					],
					[
						[133586, 30961]
					],
					[
						[133381, 31184]
					],
					[
						[132551, 31939]
					],
					[
						[133659, 32259]
					],
					[
						[134181, 32117]
					],
					[
						[133336, 33031]
					],
					[
						[133318, 32998]
					],
					[
						[133290, 33003]
					],
					[
						[133490, 32941]
					],
					[
						[132779, 32401]
					],
					[
						[132931, 32558]
					],
					[
						[132991, 32581]
					],
					[
						[133245, 32974]
					],
					[
						[134100, 31102]
					],
					[
						[133994, 31501]
					],
					[
						[133045, 31591]
					],
					[
						[133393, 31527]
					],
					[
						[133561, 31556]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Kanagawa"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@FDFEMIHKGEEFFFEFKIIFRPL@"],
					["@@L@TKN@PBLKDSLCHGJAPDBFJFPALEHEAIBGLOAGJCHEBKPKBCTCHEJDPCBJPHRDTAHCFGHCV@NDRCVBHEVCDCLBTIF@HGRCFEPAHQN@BILQNCBGHIPIJGH@FMVOGMREDMFIAGRAJHGLLPHBBPCHBHIHCHDH@PCHSBCFBNHHFNLBFFJAGICMNULHHLLBAFKLKDBHcZKDADMLKCIBEHHLHBJLLGPCBEHKLADGR@FDILAJRJNBLDBJLDCJHLLAJEXEDCP@LCPONERALEPBLEL@LCNGNERMRINIP@LKNeFEVKPAJEBGIGAGDELCXBRLRCJHNCTBXIxaBGIKFAGIULGGIHKCBITAFK]MHGANU{YMTCBORERIEJQECOC@GMCMEAJDH_@MLOGGILEEG@ULEFKJEJNNIQEVSLJHNLGKUFANXLEKYG@@GEKFCCGSOAHI@ULSASECGVDFGYEKDGKDGNDJGQGNELDLJNECIIGJILA@KK@@MHKDA@WUCKHMMDGKEJONRPEXBBMK@[cSEFIHAFHJGFODBRK@JGFRDERLBLCLIEEFEKEFMRGCCLEBIZCfAJBPAVK@GOGIQKAMBROCQI@CHE@GGFKN@DKOCIB[AOCOE]QUSEMBMHC@KDINER@FI@OEKK@GHIGMAMHEGK@@FSAEEODGDODFFLDSLRDEFCJPCHHIBALF@@JGHHDENQDQHJF@HHFBHJ@FANAHLAFIHOFIAKFBLGH@HMLAFYNGTQFHH@NCNJFCJGDICI@AFIA@ROJGBKAEGICSB[FQAIFMGKNIF_H[Be@SEUDICOB_CCDMESB[AaCMECEO@aGOKCwUWGGAYUUMWIKISMICIGEICyEG@ODGEEAGFIHEDKGGFG@OJCBEP@BEGGUHKJKDKCGBMGGIEBOCU@MBUHMASFI@EFQBQACJDHGDFHGRBDIH@FWBMJCFQPIDAJBNKJDHGXGFFHEDCLBHAJBPNL@FHJXVLBFL@FHZAFPRDNOR@LELHPIHCZBBORDPBNEHIBSCGFU@EEeACAOAMD]@AHFNNHBJH@@LGHBPJJnbJFTBHFLELJHLRBVANLLANDFPLDNRFTJBDANCRHLALFJARTTJFJNNCL@JFJNDNNBHCJ@RGDCJFJJDHZKLLFGDEJED@THPSZDLHDPT"],
					["@@NBLRHCO]QN"],
					["@@AJjNDE@KSGFETHJIMKePGF"]
				],
				"encodeOffsets": [
					[
						[143039, 36261]
					],
					[
						[142471, 36529]
					],
					[
						[143010, 36293]
					],
					[
						[143026, 36312]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Kōchi Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@RPLCAOUAEF"],
					["@@BNGNPHJAXBLHBFCLBPHBAHLJIF@LEH@HEHLHENGHIR@JFP@PGFELIDKNEDJLHFFJETHJANGNCTSDMJENKJ@HQBADH^IJELIFINJH@PNFRDDAEKJKPCHGROFIVINKNQRF@JFFXNNNDNNDJLBDLLAHJHELDLPDFCP@LFFAPJEHBLEF@JHD@LENLL@JDJDBLJDPHJNBTHJBFFNAPFDDVBLFNDJHRLBDZDZNFNCHJLCJBFCJKLIRKJSBGHS@GV@HGLFDAP[@KFGPDF@NOLCLBJFFAPIFQDIFANHLHCHDHNJAJHDCLBNH`IDCRAP@FDTALC`E\\BTHJ@FGJCP@\\HLFP@LFN@`JCTPLJL@FLHNTAPRHZPHNERDNMNAFOJBLDHLJAFFFLBBDLDTPAFKFKPFR@JFDDZFFNBLFNBTCTFDPFNCJDNCFLTRBVJ@FGFAJLH@FLFTNCDATANNLNBRNHHCFJNHLAFFNVBXQJIXFJARLH@PJJXALLTDJPJPBHCJARKPMR@PANNXFJHDHHDLANGNAbGBFHFHLJ@LF\\@NIRARBHDVCLDFETAHCJDPERLCJFPRAJJFDBPTHALHFBHF@NHN@JMH@ZOJ@DFPJFHVDHANGTIDBLPRFbCDUHIJALKHBLEPAFGHCLDPAHCTDVEBINMR@VHL@FDVADIR@DBPADDRAVPHALBLMHELAFMTQLQ@GZEVAJONBJGNLLFVAJ@NJJX@PCJRLhFHFJAAEFK@CLMb@VFHFLBHO@KEKLIBCLEASJGJAHO@_CEAMJUBKHAFKGQJOECESBAQIDEPCVDJ@RDJ@JDLALDPANBNCFENGLAXBFBVGBOEAEIDIHGGGZQQKIAMMIEEBKEAELIEGHMJBHCPAHEKI@IRELKHMAKJCFIEMFANBRJNBVMFKNCJFLER@JFNAHLJCRBPCDILBDKKMM@BGEKIACK@GLACEIAWYEOUSIMCIEEKMAIBQIMCKS[[oAMFI@MCIKS@KGKDEGEAM@[KaAKCEAMEIBYCS@KES@GKOGFK\\CLGFELINBDQJIPOFQBIGOCEHDPEPATMN_NEBIJCLMT[VSFGAKPHLCDDLKbELaNWJSDONWJYFCFMHO^FROZKFYHRMBYBCBcDI@IDEJIBiD}BYAMHKBAJFLOHUF_@{CMC{G]E[E}KOEDEGGGHIAQUM@AFVVALGDGA@RDJJFCHS@AGDE@KYIAODEJILAEGDKHCJFJ@@G{QYIiOOMcKMGKC[OKDCDQCGICMIAOF@HDLG@MIGCIJGEG@POBESE@CSA@HUGMDCCG@EMSGFEPBLMFF@JCHBFVKAGLABRJGNLH@PNNRJEFMJBDEHBBJJFHFTOHDHEGEEOGDOACMODYEMECGIA@KKLIACEKJKEEBKIGFIAMDIEOBIGCIOCCEBQFEAGI@@KKGEKENGBBFNGJFAPBLMHGMG@AHMCSFBFNLH@SZK@NS@GECSAGCDOMAOKG@EMLGEKDCGGJGEEG@@GGGIBICAFUIAEBGJ@ROXCFEOCIE@IGBKE@ENEEEBMCMHAND@FHBHEIO@EFKJIMEAGO@@MLCFEKEBIHABGQGEEKC@MGG@EJCCEG@MCOCGCIOBGH@BIJABEEIBSFGOAEGGBDHINFFCDOFM@MGCEOKMMESKOAGGAAMMOBEOUCEOGCBYOACQODGBMKCGEAOCA@OEOHICIKDGAIFAHGBIJUAGDKAIBUCIE[YMSCKEUCGAIEINKKECMCEESDIJCEGAKGDEIVCCE@KJALSCK@UDIBQMCKQEEFEGCKJGEaBYEGIHKFACKFIGKHAHGEEMAACBUD@HOJ@FKTAJI^EDEL@@KLODMLEDEGMBGFGBSFOEIK@MEKDKNIAEJOEKBMEATLLALMF@JIAIDANHBBJPFMFGKEAGKKLCFDLJCAJMHKACGOBMHIB[ACFQBWCJIIQFKQA@LDF@RCDS@OAIIO@CICOCEGAKIQBDEAIO@GACIYDAJEFKEMNGBUQQNCNGLI@KLG@EH@FEFAJGHGEGJEG_CGCRCCGGFGCIIKDQBIGGBGEKAAGFOWAADOICHHDPBANIPR@BHQDKPFHLCBFVAFJQP@LLA@NHFFIFLHD@FIHHFFANFGDMN@HNL@FL@NNTFDTNBJFNQTCENMLMJDDLGPBDJIDGNHBCJGJALCDIGAGFCIIICOL@FLDFPKACKIDSGeL"],
					["@@HFAFFHAHFFGHHFFADIN@@IRCDIEK@IJOAE{WAFJLJFCJKHADMHJB"]
				],
				"encodeOffsets": [
					[
						[135660, 33587]
					],
					[
						[135840, 33716]
					],
					[
						[135721, 33516]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Kumamoto"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BFAHDJHACRXF@INIEIPIHGIIKH@FILKAGOAIGBAL"],
					["@@NEDKIGKEIBEFDLPL"],
					["@@BFhBBKKAMBQ@@D"],
					["@@BFGJDHGTDJJFFFHBNMNQci@GEGIAHJAN"],
					["@@@DKFI@BPQFZLJBVEN@BOAOOICGOKEACNLJ"],
					["@@CGKGAGKBDLHHGFODBLCDHNVGFKCMLC"],
					["@@LLJ@FDNKF@JFF@DE@EIGCGG@GS][O@MKQBGCGDSAJJL@LJNDBMJLAFDRIA@LHHH@HN"],
					["@@HHKFO@EPJHLIFDDLNDCIHETA@GNEAIIAIDGCAGGCQH"],
					["@@GFGA@LDDEPGKENIBBDGF@LFF@JEDALCJJTPTH@FD@JKDPNDP@NLJCHDPDD@HPRJFNVDHTXAJJVGAFRLABHCNITIDANEFIAGHKDIH\\PL@LCDCGEEIDIHGFAFGLHLATBLJVFTJLLTJJBJFBJXEPBTFN@`BV@NGJSJAGKAGDMECJKBMIOHORSAEHGEOOMJG@KDMHGBMNK@EICCKOGAGB[LHLALMHCMKJEJQICMQGABGGI@MDGAEICGSGBSSKGO@GNBLAFHNFBDJEBEIMIMJCGFOMAJO@CQ@GFGK@UHCRLVAFKGEGIMCEEKBIJGB[]KMKEFEGM[AAIJGJFCUBCIMEDGEIRFJEDKAAOHIIC@MF@@KOG]@GGICIGGPGCENGA@GFMAKGEKABGSBARUKKHI@BHLHBFAPDFJB@GHABJLFEZEJKIG@AFSFDFOFOMKFDNFHBHLVJDDNLLVLHLLLVB@GDIAKNMFFBFIHAJHPHEHHDILNBGIMBGHCBMHCJABJJJGBDLNJIJNHADMIOEGL_HCOKCCLUB@HKAUO"],
					["@@EKKBAHGD@DPH@ILC"],
					["@@COQEQB@DLN@DJDCFBNAJEFECGHKKE@M^OJ@LIJATNBLJL@BDLDHAJFBFNBHFFJLHRBJFRBRLFPdZHNVDRFBGHGFN`LHIHLFE@MXCAIDAHLHCDMCEDEHCHFAHFHD@HLRHDJHCFIPBFLJDLABER@LLK[GGBGS]KMAOBECEDGKGEQKEKICOMMPELDKSGAIDEANQOQEMUIMKKDSBGGAKKEIJDPEDENPREFALIB@IMOKCEEIAUEGDCCQFQDICOHAHKHU@AQKM"],
					["@@DHHDFJJBJMHEJAAGGG@IIBK@BGFEAIVIDGKE@EGGIGPC@MGGLC@CKCCDIBAIOAMBKCCHU@CFFNBJNRJBELEDQBIAKH@FJJNHNRNBANFFH@JG"],
					["@@VFX@REVDNCL@LAJDJCNDRFPEBHH@HNEFCLKFCPBFKNGJDFNJBDRFHJ`@FXLHJAFHFCHHTBAHGJBPRFDJPHJ@HCXBRILALDF@TDLB`IANHADFANFTLJCH@PBLXPAFDHJCPSCIFGFFPCJ@FHVGJFNAFOHEH@HGHCDGFCLBBGLGNAHBHCHDTGPIJBRI@IL@ZE@GHKZ@PBFITDHELCHGBOLEFQNBHELMNEJ@NFDETBTKFG@KPSFGNB\\AJFPLBNPHDHCJDNHJOLHTJBDJFDCHE@ENMVIBGNMFAHDLE@MJKPLDEHDHCHFJBPFH@HHBAJFDRGDCL@J@XPFAJFFLlBPE\\E\\GHFNCTKFSFEPAHCBIH@TI@ITOHAJYAQCEHEAENKAIDECODKHGLEDENHLGCEZYNIAGFGF_JKEMJINGLOD@JIAMBKRENECOIKSAAGLCBEI@BKHAMMFQJM@I@QBE@OACHUNOTDCIDKLAFGJCNM`GZQ@GJGDEMI[@OBSCKHSEEIOFEOGAEQ@IGEICCIBOOCEGDGTOGOKEEUCGYQGIEAKBWIIEUYFGECBGIK@MECFKAOU@KLKFEEKA@KEKSMEGGQMCAOFCBGGQBYHCCGBEGCCKOC@GDEEEKAO@YFGFK@KDI@KBQICEBIEECMFGCMEAIBMAKMBIJIBIAGBOM@EGKA@KCgFMHEDMCSFEAYHK@EPOJUPKFMJ@LBDCXBDOFG@IGE@GLEJOECEKBOZMNARODMNKAEICCKCGQ]EKEAAGOI@GO@EFQFO@CEJW@IGEKAEIBSHGFBP@TKHICI@IJAJI@GHKDETCLE@KHGCKDGEG@INOBKMCKICBUBKFODCCQCMFEHGAMPYDECG@KJSIKOEGBKEGMIC@QKEQDOKAM@KGOBGFWEILWFCJEAIHIAGMQCC@OECGMCMYKCOHI@IFQCOICIYHg@Q@IFCCKBOGEBEJCBKCGGEFBHEFEBKMOAKFQDMBQPKH[VEAIHOFBLEJAJUBGFKBQ@INC\\IVgAHEDMGEGKIOCIS@EAMBKAUIGB@KEIBC[@KCGBOHGAKGMCKDIHI@@ICKBKEGKEGFKCEEIFQEUBID[DQDBHWTIRAHKHEHKJKFILDLL@GJ\\ECNCHLJQTDFJ@DFAJPBBJLRJBHPRIRHLBLIFD@PGBGFCLLFDNCFRPFEPH@NDDGNHDL@JUJNGTJARORVEFWBBPCJBFKHFFHPNIHFBHIDHRLDHHLBPH@FIDGCIFM@HNPLFHNLFHDJLDPNTNHJPTPBZVDJFBQ`HRGH@PaBEDEJ@RBJD`[NBFlU\\ILDUFOJeRPZDEJLLDDIFA\\lPVNNfbFAHGFF`X]XCJLDdDZUFLER@DND@FKBEPWIGESEGBMCQGQEKBMEIBCC[DQBCCO@IDGGM@KEG@CISAKDCC_BMGK@KGKBCFDJ@FMLGDFFPNVFLFJJLDVNVBHHTJ\\BHHXfXNFJJF`FRNHBHRDTE@FXAFCVIVBJCLH@BNJLNDELODBJGLGAKHFNMLK@@LGNDD]BRIDAXBLHLGJUH@DYLG@KFUPGBGGKFECIHLLANKGIAECIFDDKHFPEFARIZE`AbEFCLM@IR"]
				],
				"encodeOffsets": [
					[
						[133138, 32941]
					],
					[
						[133266, 33053]
					],
					[
						[133707, 33552]
					],
					[
						[133597, 33335]
					],
					[
						[133625, 33370]
					],
					[
						[133561, 33157]
					],
					[
						[133470, 33121]
					],
					[
						[133440, 33121]
					],
					[
						[133122, 33081]
					],
					[
						[133484, 33144]
					],
					[
						[133381, 33173]
					],
					[
						[133561, 33397]
					],
					[
						[133544, 33795]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Kyoto Prefecture"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@gKMGAIIM@EIM@KTMHAFGNAFEGGHWK@AIMKGK@GHMNGBGVMJBJSNAFKIE@ETKJHLCJBLIBKDGIKNSECCMBGRG|BLEP@HGJCLDZBJCFBRAJEPELFVMNADENBBEHAHEPEJBDCRETJDJNDLENCJBHFAHJBLCJEJ@HFJAIWTANEJSHCBIZML@DE@KFABKNICIT]JELDBDRFDJFFHCDGCGGG@EEEICEKDGGGCSIGDC@WMEAMFCAGHG@GHUFCCSFAAIJWFCLABKCACMGGBMDAEOBKEKGI@OIIEKHIAOGEEGFGBKAMEEIDKIICAINMF@FMAIFEJBBSU@AER@HOGCIQ^AND@ML@DIIQVUBEXGFMCGHQSOBCEIFG@KQKJM@GPMLEFBJEGEHEVGTJFNXDXNJOAGFCBKEG@ILSFCPFJC@EJEJAAON@RDJFFALFJCEK@IFKNCFDZIBG[QISBGJALECIFGVE@OGMBECGBCR@BMPIDELEUCEE@KCOKEIGCMODIACNMFKG[DAHBNIVE@IJEAGFGGGBAHEH[SIBGCOHAFLP@JI@GGG@ISECKQKCMkIHQBQGGGGBUC@FOBCDYDMCMHADKBEHWF]CMFQ@MDBLDDSPAFSF@LGAE\\ATFJRLAFFDHPS\\CJEFO@CJIJCJEFCLIJEBMGGH@ZAHQHBJEHFNGDITKHM@OLI@ANHBERKHMBEHS@IEGI[FDLPHBHN^EHERICIDMCGEEBIPOAKG@KFGJ@@I_CCMBEIIJAFINLRC@MBOQKSBSCQDECKLBH[JCFG@CH@NOBEBIIQBCHOJHHALCJNBCPGPHFLFIJKFIAK@WNO@IHUFE@UKGBILGDMIIHGCIFOAGVHJBLCPIJGBCFANFHLDAJVNN@LFALBJHFEJUJE@DRHFCHGDAHJLADOBS@IDOBIHWAGFCLHD@H]AECQAWEIBIEKDOHAHNDFLHFCFANG@IFMFMC[BEDYCKBCIAMMEQ@MCEHSPM@FVENLHL@BDENOHAHKLMCGLQ@ONDFJBJPBHELEJAJEFUFICGFE@KIMFEAODEDQMKBECCGGAEMCCKACGICEHAJED@FEHAROCMDMCaLQDDVIJE@OHGAKHUFQBADK@[LAFIDMASHELJHCHHJELOHBTJHIVDHNRAPELHRHDBH\\PRIH@LEBCLITAJCFECGHGXDFHNBDDJ@JNLJ@HR@VCBLANCH@LDTFFEPGHCXCB@LMHBFJDDN@JSHPLJJEF@RCDANED@PSBSCQGEDGAO@KIKAEIIBQICKIAKBU@WEMJ@LOLDD@JDHINWHCNQHG@MH@HKLMLEDELMACFHHPLDTAJHBFNETBJG@CF@LDJGDHLXFLICMHEJFHEDMMCGKVFRCIICKKOICHGFB\\EBBKLBHRFDHBJJ@LHENOFKBUCDHjBhNPF\\NFNEFLHHNHCFFJPLCRDDDVADEJFHENDAJFHHBLCFFJBTHPRNDTNFLKNNDXBNFFDJCVFPHBLJBDKJCDDJ@XHDFJALFL@NFFHF@HCNAXJHHEFJHFIJEJKTQLD@QJKR@DEN@CUJBHGLCDOEOBENEJGNCFIIC@IGQCIJSIEI@CHG@NLMJGIK@IGEBKGIOGGGKAKIUAQGEIACIOKAEUICIECKSKGEHQGMGQCMGIBEE@GNGPL^KDG@MHEDGREPLBRMFBJFFL@FFTDHXCHTCNNBFJFDLHC@KCGMABOFECCDIFCP@NABEJGOEKGWHDHO@KKAGDQLMH@NA\\A@EHEAETGHGPA^GF@LPFJJADKJA@MFGCUEGIACGDEGKE]MKDIJBFFH@FH@JLHHHNDFPDHADJDDCRAFFFCJFPMIGI@AGPBFETPDGH@ELDNBPG@ERJHCJIAII@KKAKDQCGBIESHDHELH@@JG@IFEPBTBLLH@MNALLZHTRVILDHFH@RP\\EAHDHFJJB@LAFRDD@JF@HNDLFDEGGEAEUIG@MFMLHNCFECGJAHGLDLA"],
				"encodeOffsets": [
					[138739, 36412]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Mie Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@TD@EHGEIMCIEEGMAGIQBEGIAQDCFFBDHLDV@DBBRFD^J"],
					["@@LBJALCFDP@PCFETADOHLAFXCCMPDFGNNNANCBIM@IIAMMFM@SCM@UHQ@MFCAKHKBECQHCHGDQBFFRBFH"],
					["@@LDHHHADEGMOICGKAIEIFOBAFJNDB`F"],
					["@@HF@[JENABFHFANR@JENBBPFJAFOP@GCOIBCHHTOLANBBDCXCDDDJGPHBVENBLEBCTDDHADI@IEGDCHDNDDNBBNPENBFCVGNKLDJXFTALCFFNPBLELQHBFLLDFH@JIJGN@LMLAJJAHDDHGFHTPJDRFFF@JGHAHPFEZEHDNEJBL@TKFBVKPHKdKHJRETBPBHEHFHNEZCDFIDUTBFJHGFDHCJGD@HJFHFM^HF@RJDHLENKHFT@HYFGDBLFFBHTJFHLAFJAPOBBJJBDHNPLBANFDIJSHDLDBGHGPQHIJCBCJAPJHX@FHPBNLILCHMBMFMN@LGFAHBFEPIFDLKVONKBGD@JLHDPHHF@NNBNELPL^BFBHLTBHBJCPCPBBHLFN@JCPANDHFRAPAFNAJDNJLBPHHTH@LUDGJBLHFBLGN@JMB_IG@MIACUBGF@HDDDPCHSPDFGFCPIABEI@OFIG_QI@EJ@JS@cFAFMFGFKAKFBJWLEJHBDNEDEJHLLHJNBFNFBLHLELEHEPGAEDOASPHBjQLLNB@HHFBJHJGLEFI\\M@ODKNLBLDJJETID@JOPKFCFOJANQ@ADDHAFHN@PUFEHDJNALHHAFJTBHFRAJFH@FHL@HFJB@HJFOXPTJAHBFJBPLFH@FHLDGJFFEFSE[BWLCDHHGJBDRAFBHNHHLDHKBGHABEH@LIJJPEJEJDZH^CEGHGJ@VQXCFC`IPB^GdNBFNHZCRFBFN@PJ@NLDPAHHRFN@HHNDFFLBAPFH@LLBCXHJED`VNAHXJFAFZX@FBPEHPJAJGLBRHBDRI@CPBJ@NJDDLJADFVPM`NHCHALFLALDFELJDFJEFQHDLJF@LFJJ@HF@RCHGBIJG@GJWPIASJFH@HHT@RAFDFNHNJDA@GBGNGTPFLZPFIJJLEFJPENBFEL@JH@NDJHHF@PFLCFMJECIBGHCJABCESDEPBHWBEHAREFIH@HEAINELQL@FIAGHKHE@KFGRELFTCHGDH@RALBFTILWLODOFDHMJ@\\GJG^_LCVKVUPKFQASDQP_X[CEO@UXY@KKICED_EOCKMFO[EAHQ@QIE@QKCITNPFH@EKKBIG`KAGGAMSSDKAESCQGMEEBGJBHH^A@GJ@AI[@OEFQEK@ODGCIKKEEAQSaIKKOBCYWOQIE@Gy{Y_UcGQKcBOGUIc@KDODIJDLGLFJEGKNGJLFIEGOCEELCCUFWGADIISI@CII@EGBKPDFEFDLALHJCFJDMJIXDLE`ALATARCLGPANGPaLKFKJEfKNINA^AjUVOBGJFHKLIXI\\@NE\\DDABOHGEGJAAGRCCLJBG\\NBHICCHGEGFEHDHEAIFCXEHFHABGHK@QCGJCDGPCBKPF@JHDTCRB@EJIH@@GIEHCCGDCGGBGHC@GMOBEEGKGBQEIHEBIKAQFBPAFI@III@EGEFGCFSSGI@GGKNKDCIMA@EGCKFICEIFG^BHHALJDFDJAAMJ@R@HGGK@KHADNPJFHTLDCNABMWMGEIAEMAKDOZWKMAQRIBIHCAGFGACIBOCG@ICQ@FOEEO@EHMHFDAJMAGGIAMBAJDPHFEHTAFETCN@DDAHICM@KNOAEDK@ANHDJGJFAHHDGFGIKAIBIJOGS@@JGCIIREDGLECCOACGMAACWFBHQB@NDDEHBLIGEMIB@GIBCELCOGWPSBIDM@GE@GEGU@GGSAEJLABDELBLLXFDTJGJNBLK@LLD@LEFOAIECJFHCFMEAFIAHICOIEIOCHHJODBHH@@HOIUNG@EEBGNBFCBIGGLCEEODGMKDAEICMEFILDPNHGGGZHJAQKAGOGCKJEECgEAQMEMBGAOMIOK@ECUDIX@JAFQ@HLJDBIXP@HMAIDBIKBKAIEG@GEFE@II@@GFGKOG@FKGEGHGBCLJLADARIEGISFFKK@KFDFAJQBACDM@KDWFINMOD@JQP@FSIDELDFSIBKAAGNEDFTMSACABGIAWIAHDHKBGFUBBFEF@LPJCJI@EMO@CDQCBENDJAFGCGBGCKPGECSEODG@OEGIWE@ESAECEJGDHHKHIIEOICGOGEOGAHIJGGEHBFCHIBKCAMSBDGPDBGICAGHGIEMLMG@CSCKBMMDMOACKIJIEBODCLAKMGGFEBKJCFBFCQKFINGPLZA@CIE@EKSBCMSE@@PG@ECIBCCDGCGKECDCNGBAJPFKFOGBSGAKJ@LCHLDLFTRHLKNCIQIIOSC@GUEGERUAGM@EESEA@OEK@@ILCJKZAFDNA\\@DGK@ACBIAGDGAMLAJAFGPALIRGBCaQQAEIVCDFJGMSGERAFCCMDG@GEEGBEGM@MLG@MGEJDFAFHFVEBHiHIBQPBHI@ECDEFYIAGMKGKDCELKF@ZLHJHGHOCABIFC@KFGSDICHIIEFEQGCJLDMFEFECIBSGGENCTAGK@EFCGIMBMKS@CRBJIFKDO@EKJCCI@IOCGEFIPEIIQFDKOOCDGTKDEIBGEAKBSOSUW[Q]EIOWGUKOGOMeSgIc@CGUMOEFUH]LG@KAAGFEDGGCSBcPGFCHAZ@JGBMEOHALGFMAEDGZILBHENGHUDOLOBMLCJFTELBLHNADMN@HLNAJ"]
				],
				"encodeOffsets": [
					[
						[140176, 35364]
					],
					[
						[140048, 35101]
					],
					[
						[140180, 35326]
					],
					[
						[139119, 34687]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Miyagi"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@FHED@JFDJEFMFABMHCIKWF@LCH"],
					["@@GNEBCLDLINFHV@NHJBBEJGCIFEIGKAAGJCIIHGNCBOIDEECIUZ@D"],
					["@@E@FLHHGFDFJEDDNANIRYAIPGAIHECCIJGCIBGDKBEVMLKA"],
					["@@HFPFNJJCGG\\EPECKIEAKDICCJGQKIAINGBWTAPEP"],
					["@@JCAMDEDQEGKBKEGFDJJLEFBNLF"],
					["@@DCGGFGIAEJE@CJHHV@EE"],
					["@@MLEKKNIRNBTCDHONALFAFFVGLALEKCLE@IEMLMLACGOHGFG@QG"],
					["@@LKBMPEPBFHPFJABHNFLCPBFLLDJGTATIJHTBCFPDLBJDDNLJBJLHPDNHFEH@HF@HJ@NN@HHDAFLNXHDFZDJAVBP@ZLLCVDZ@VKFAFMRENIRAPMFGdGTDPCJMAELAHJNA@ENEL@FIP@NGJMHGHOLGHMLCHDBHPBDEJFH@FFJCRBFIVCHJN@NF\\IVHF@FHVE@GLELBFDN@`ENWBSMKCEKCCISIMFQACMLINEJFF@FGEIJABEL@JBDCAEA[CIHELEJ@PEF@HEJABFLBDFJITEDEPIFOAIRObAHD@LVJTDARDLJHBPJ@@JLBJCJJZGN@AXHHATFFPDHIXODG\\FJDNEL@LCLSFALHP@FIBKLANEHBBMKM@IJ@FFLBCPTHNAKRJTAJI@CJPDTEPBJHKDBJIV@JJTDFNFFFEFOBEFBFETFHPHJDBFALbPLJFPCFDHKV@HJNANHLEDCVITBJDVLJH@LDHADFTACENMTFP@PDJCHBFCNDPOLAHDPCZCHE`UP@RYEEMD@ELKFMJAEIBEQCHGFBRKBSEALKCGJCFEPGIGBUNI@IFADIGIEFODSNEVEFKBGN@JSD@IUI@KGBEEE@O\\Q@C`I@IGHCJSPGBIG@BKEKBGECAOEMBKJMFKPBJKQAGKKDOCEGFKKGIHOAECAOUEIAIGG@CEKAEGCM@ECK@IHAAITAAIFMNBFCCIBCP@BMJLNCJBBGIEJCBEQCAIBGPGAWIGIDHHAHQLG@GEKDILQ@FKGEDEEEEKDCEIMCGHE@EJOSJKGGUACFIDKMGBEGI@GFS@DG@KHKKMEGDGTBRCFLLEL@LEl@DGJCFDLARBBGCGDGIcIEQAMMBGWGIKOCCFMEMAGUBIIEBKFCGG@QBCNJFCFNKLKJdALEHGBGAOLMFCJ@@FRCFBCHFFRCHNLDHEAIEG@GPAFMJEOMEGBIHMIEDKQEKF@JKECJBRGNUEEBGEEJKFCH[BRONEDIAEFGNB@MKGJGBIDCSQGDOE@IL@LEFDRIKADG@EVGKCI@IEUGCFYBMJIIFILEFGEIPBHKGEFEAGEG@EIGHIF@LJF@LNH@BFJFFHJC@GGEBGNKFFFMJDZFDHJA@UQQEFAJMAMFSQQACCM@GGJMFAJFLCFFTALCBQHEDSJGFICSG@CENKLAFCBKAOGEOAGU@GAK@MWFEN@`YIIBJVGHQ@IEIH@FIDBMKAINUFLJVDFHLDALSBBJCVI@AGGGEJIFEAEKEEGNSGEFCLNF@FLLJBHANNP@FFSDMAGBFHKFCEKFCDTTEHMGGDGIGFAPMEKQKACGGCKBMCKDAHHVEFBJIHQFO@KCqAEDKB]ABSOAAJDF[CBLVD@FUACDMADQCEQ@yMaMaOaOUMKIGMBIG@MH_BJXKLKFSBSJ@UDIM@EPO@GFKEMAIMQCB[EISIGHKKEGJA@ENBHIQOYAGEfAGONFXAHJBFXAFI@GDIPGCMEEUDKEIQgK@EGASFQIQBQDIA@EzCGGOUW[W[OWMQIQMYGO@OKOYqGUQyIeEyAQBMIaAOAiA[BYHcH{FYHEBIWAGFEAWBEJOAQGUCMEOCBOHGKILOBGEMQMHOBOEGHACMHMGE@IHGKOUBUCMHO@IEIFKAcNODCQDEJGNAPORCOKOBYNcHO@GFOAIGKCGVGBONSFGAKJCLIDBJCVILPLAJLDAHDHCLIJBHGF@JPHCLODQDKDGJEBYCCGcHIHCLILGBCIS@GII@MFGHIDCFGBGHEI@KQCcCIESHIAAGMBM@GIS@WNOVANBJCRPRQDIHKCO@ELMEG@SFGHMFG@CTQBIAKGEG@WCAaHEDQAAEDEOCKDMFECGLQ@E@ELG@OJUBMFIHINDVLNNLOZALGFANLR@JINJFN@HEHBHEH@HHN@FCNANBRAHCLBBFJBRCTBPNCLHBP@JANB@FTHHFFJEdPXAJDHJF\\JCPNPDH`LD\\LLJLCTBFCLILBFCJFTIHAJFDCP@JFJEHHJCPDFNDPBHJJFGT@TPDHH@LNERCHPHDBLGPATCPHPPHN@JDNZXBHPVPGHAVEFBJNJFZAHJFHAFFLILNLFFLNFWFCJDLCLEHBFIFCFOFK@SH@FMHDFKLNJCHBHFFGDKAGFGJ@LVJBLHHEHXRGHBFILBLGHDHWF@JHFCJOHKPEFAJIJN\\DDPERBFEHMLBHGVALJLBHRCDDJNNDPHFBHDH@HFFAJEHFFMBSFDLADATRLJJDTLDFH@JJTNFFHINGDSG[JAFSD@LGD@PEFDNEDHNAPIDERG@MJKBIJKBGAEREFKDK@CFAPFJLJCJDF"]
				],
				"encodeOffsets": [
					[
						[144913, 39376]
					],
					[
						[145013, 39780]
					],
					[
						[144855, 39187]
					],
					[
						[144946, 39223]
					],
					[
						[144811, 39232]
					],
					[
						[144515, 39257]
					],
					[
						[144540, 39244]
					],
					[
						[143921, 39823]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Miyazaki Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@IAGQ]FDDEJFHJDFEP@LF@K"],
					["@@@ICCKPIPHLFB@JJACGHKEGDK"],
					["@@PBLNFAFEAGFEHHLDDAFIFAPHLADDJER@h@ZGDJPJRDJEJ@PGLDNZNDDHPFD@RDHNJBJGFBDIXEJKXFHEPALHN@LBCPFRRLD@NJFHALFHLPTJLIH@FDZCNOHBFGNERDDDPCLEVADALJNDALMP@JFHCHDLGH@LKFSDCFGL@HIJIB@JDJGJSLO@EAGHATFJLBHF@JIXDFP@REFEP@@HPJBHFBFLR^DHDLJDBFMLCNQPMBYNAPFLFDIPKF@HHF@JEHCPWACDKAI@ENOLIVOP@FGLBZEFDTCNGFENDh@LLBFHN@APBHAJIJAJLNNBJAFBDNEHDNFFAJDFRJLAJ@LCL@HEZEP@LBFFCF@HPDDLHDAFDHGDAZHRAHEDBPNDHRFHTNFL@LLBFFLELKV@BPELFD@NJLAHFDEHVZJFXJLAFBHJZRDHFVLFHPSPCHFHPDAPDJJDHF@JFRHBFPPEFJTFLGTDPA\\@NJV@HCLMBOCKNKPC^LL@JFLAJFLCVBJAHHLFBFJNNBVARFRHHBFKJKTQJ@JCAGJGTIGQCCEQDGCGHGLCLGRAHGRCDBPET@HAVNRRDHLBJEHDZAPDHEXCNDZEPEBDN@FDXDJFVELDFL@LFJTNFfHDDPALLFLANF^BPALEJ@@KLKJFRENJVFBELEFGN@NCNJHA@KBSKO@CIKBCCKGKDEBODCBOKQDIBMVDHDXBVLBAIEGIGEU@GKFIHAAKKDCFK@@KECAKDILABEGMCFKIKNKDINCCOCCKDGAKI@UGCGIAESDGMA@NCJMABEKI@MQA@IHIEGDGJDFCAMGCGGGOFGMMGADIACMEGCAIIAK@SCKDMGSWKOIQMc@SHGDGCC@IEGDGLCBHJGH@AJBJFBFCH@DKCOFAP@JC@OEGQBFGCG[MIIQ@ULHJEHGG]FEGAKDGIGCE@KFAAGHIMKG@EEPEDJVTHCAGKKDC\\NHEAGFCKGMD]E@CbBHMTJHEOKWA@GICGDSAOGAIKUIYJKEEOKGOBCLICSWEKSICIMWmK]GWCWGIHI@OEOGESqMm@IGSCEI]C]BGEGCSEGMYGQSG[EEK_]ESSyIcLCAEIBESJAEMCSEBG[BGJ@AGG@GGCa@gAEFY@EJMLILCAKFEHAHMPCIMAGMUIKEQFIDMO@AKFCAEDIOEDEGKBSEABIRCFIcKDGCG@GLAJ@BKAIBILOK@CDIC@GGELCHEGGCII@IMSEKGOCEEMSIOFQEMCRG@GE@IEWDEGCIFICEE@IDOHEAGEECMHMEAGDKCDKCKPEJABGEG@GJCBEIKQCAAWIAODOLIBMDQCOECCKQAGGKAIG@MBIS@ASFQRGLIAKMGMAMHK@GHEHA\\KJKCKGEHG@CGKGMB[EOBQLEHEN@LGDBF@PPJCLOHKKEPMPKHILGHIBYDK@GGAEKF@DEHMB@DHX@PAFDJLJCFFLF@HHJBZHHNAJDPGPBFEJ@LMJNLHBDFHZO`KFILCLHRALODCHQFAHS@EEIAEEK@EEWAIHIAEBAJKDMPKBKPKFIFKCGOGEMQAGEACNIDBHCNSRKBIHDDGLFPEFDFCHJLUPCHEHFHDNCT@TDBEHKAEDQGMLGCEDI@APJH@HLCFLALGFMAEHKDIEQByHGJ@FORCDKIQBGFMDOBCPGB@LDNFB@HIVPBHFBHARJXDLPLIHM`IL@HEBANGBKLMLMBAFUDMFEAgAKHMJKB@LDHKLANSLEHATCJA`AFOHOJBFKJQDALGBMNT@@@hDDNDHHDTFHAD"]
				],
				"encodeOffsets": [
					[
						[135000, 33450]
					],
					[
						[134570, 32279]
					],
					[
						[133858, 32872]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Nagano"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@J@RTHFALFHDJRBJJVDJLD^FFDLJ@DHF@@JDNKTBPLJRB@NDRLDFFLANBHGFHRHENLRADQDWACBJ`CRLNJB^NJLHBFFLDR@PCFDFJEPEFGRBJDNJDBRDHDP@LEJLHFJGTDHALIBAJFDAJGDAHD^CPJHADJPGD@FGLPRFLJJRFLATLDPLDjTFH@HPDDFCNTTHDBJLFLNAJZ\\JBFDAFDJQHCTIHFJHBFLQHBLHFN@HE^EPDDFPFRDLANGHAXAHEDIREHFFLNC`DFEPEVAFCAQNEHDJADIAOIIIKAGIE@QFCBOKGUWPELIJBDEJ@JOJANDNE@MJBPFF@PLENJLHNHJJDFHLFNBRLHCN@LFTGNDDEZCNBNFDHV@NDTJBHNLHCXE\\@NDJHHKTEHKAUHEZJDNLDBFGHGNBFHD@JLRGBAJGHHHDTZTLDFFXDPCLILRF@LJDLJHATJHBNJHDHLHGJLDNLAFHHNDTBBHPBFDRBPHHFPDJJZCJ@PHDCR@LNHCXFBDLCLDFIPGHBPAHFLAPCHKBSDAFOLGJKDSEIDCCYBGCkAEHEJAESNQbDPIEM@IHGHKTB@ELCBERADEJGRATBLCLIBEHE@IEGDICQQQAGNCFILG@CMQ@IIKYGCI@IHGNGP@HO@WFEBI[GMGeCOCGE]IEDKAIMBCMIIBKNKACIEAKKQLECQ@EBMCSAKIMAUKCODGCERQPCIUIISCECGBMGWEQHOAMMMCAKDEGOCIGEQ@EIFKM@KCEIBIEMGGFIJGBIEGFGEIQOKGDMCKOIAKFQGKIU@MHCAQHKGKBKDECWBM\\EJElKJEJDJABOHICEf@VG@PFJ\\BVM\\IHANBJJHLLHTFPAVFLABFT@HCHBVEFGJALDJ@TMBEBOFI@SCKDMJGGKBKGIBCAQBQDE@IEICILWEGICAEOAMIG@KCOAKKMAHG@IDECGBQEIJELKAWLSJIVDFSQKIGJIDQLIDEAGIBGA]EOGUBIJ@NI@GCCODINCFKFCFWJKJBLERBDCXDDEBMHEBSHCDGEE@GSIIE@IFKLIHMA]DIYkJ@RGBGPAPE@GfABMLIAIJGN@FEXEA[FKJEDEJCHMBKPKAEBMSWDECIICaDCGKEEGIEKCCKAMMWKB]JGCSBOIKHMEUFGJA\\BPHJEHKBCHOJM@IAGKGBQJKCGHQIK@QBAAQHODEDIGEKOABGAKIKOFUEUPKAKTGJ@HFD@LHHFJGPOJ_NODEAOHcHSJU@AGOICM@IOEMMBKGSEAOSAGGOCAWUIGIOSYSOIDKHILGJ_VMCGCIKEMEWECIQECGOKKEQDE@GYWIGEQNMPGLDFCFILIH@HIPEHK]MEIKGMMKCEKUIIGAMLMHEFK@OEEDI@OLENIFQFGJEDGMSOEA[FUGGAIIGAMKMBIKGKDKNIBKACKGEGCAIIQDEPE@EHEOQGCAIGEIIPE@IEOCCAIR@RINAKO@ECK@GHC@EGOICGDMAKIGASFCUFKBGEIBEPAVIAKGE@KHCJ@LMFACOIMI[WGKDQE]UE@EGDC@OSEGBGJOHS@KE@GIIM@KEBMGAQIDOGMIGGDSBGASCOKCEQBKQMCQ@OM]@EMCQKKKAKBWHYS@KFMISOMOFKBIAQAMQWHIA]KMGKAUBIEUHCHFLADQHSEK@OHMCMBAFBHMBGAKJKCKDMEKHEGI@KGUBEA@QIGG@@II@MFMA[ESCACUI[AAPDZEBENGBKPKBMLCPCBDPHBJHAPBFNFFFHDGNI@IJF`XPFAZNHHAFV@FF@HGJ@TFFCNEH@\\UNAFQBAFAN^K^@\\C^NDHGHBHUBALILDFCJSPG@QP\\VHBPTTAFFBHEF@NCBER@NFDHNIFAFKLAHOLGFIEIHMBCDOBAHID@JGJDHCJKHHPDJELC@gDOEMHBFKJMH@FKJFVLBFZDHVDDHAHLJSV@HOJEBKLG@KJMFIHBNAFKDAFID@JDLERKDAFMLAFIJFFEFANIJKBGESAKT@FK@GFI@CDMBUAMDCFJH@LGPK@IFOAICK@ECKJE@MEO@GVMFAJHJAHFHDVHHXCR@HHN^AJBJALCDRLNPJDZDTHNDJFJCVFFABIF@NMTGH@FHTBNNAJHFAPLFFLJHHRHFP@LALFADJRHPNHJNBLCJNHXFNLL@LLTJHLDNDFDNCR@LFHHBDPNHBFGJBLDFKBUCGJEBOHI@IFIRIBAHGBMNBNJB@HHRMNBFJHLDDD@LTLLBPHBJFFGL@PHH]JENEDAPDFEHVD@NLDDJHHBJLJHBBJLHDLLHLJDNhTAPLPGJBNDBAVIFAVSBUZIRMFG@QHMCKFAJBL@P"],
				"encodeOffsets": [
					[140890, 37264]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Nagasaki Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@DJKNPBLD@GKK@MGD"],
					["@@L@EICAGMMJQGI@CFLBHNFFRCH@"],
					["@@BEM@AFILBJCNV\\DLNDDGHEKEJKQ@EALIKENA@MGEEG"],
					["@@FHNNDFN@BGEGMEFUCKECOFBFAT"],
					["@@AJBHFJP@FKHADI@GHANJDGGCEEKJMGKHE@GD"],
					["@@DPAJDFJBJAAIOQGC"],
					["@@CJGDGRKAEJGFKBFHOFILEIHIM@GACPIDJJRCDHEJBDNDJODALJHIJBHMCEJEFGDOAGDEF@BNDFAHEH@JGBGJAFFFFEBELKAEDGNKBPAJHH@LDDCJKDBHNEHMLKBKFEBSO@CGHIGMNGCCG@KFGBGOJMHBDCEEGK@KIE@LAL@\\GEEGQBEDK@BHJEP@BL"],
					["@@L@VHDKECBEOCMBCP"],
					["@@DHVSFDROEEHEQIIJ@DMLBJKJ"],
					["@@GIGCO@AFXPHABE"],
					["@@DDJDBFIF@HQ\\@JT@@KFCRAFKJJF@BKHG@RBRMIKDKPJBDDCHIDEFHDJ@BJCHHHRKDMVLHCDIHCFI@QRMACMCBKJFBGGABOEEFWIBFMHEEOGDGCCJJJUJLD@FIFIKMDCHKEGDGAEMK@@HJJAFQ@I@"],
					["@@AJFNLCHGLBDFVK@IDIQSKAKDKHKV"],
					["@@FHVDDIAQK@IIGCCHDV"],
					["@@MDAHNHP@DGEIKA"],
					["@@DCGIFGEIOXDHP@"],
					["@@L@DE@KEASDCHNH"],
					["@@HCAIFCHDHEGECDYDCDGRVC"],
					["@@EDJJJBJJCDMJKJCHFN@LJFANEBCHBLKBCFLFBJRVNFHCP@PECEFGJEJ@HABMAMBCAMG@BIHCFBL@BDCHPFLLDCJHL@LDDESAEKTBBKPJHHAPHAAJFLH@FMBILGCOFABSJ@FHEXLLHDXFGHMCSMMBGFHLHBFTFBNENDCJJDIJ\\HFJFGBKCC@WHGNGFGFCAEM@QEDIHDJARHCDRHBEMEEK@KJBCLLB@KJFH@BHNAJMACOBGBAWGMDMCGHQLADGGGNIFBBKXM`YCKHKJBJE@EGSIBKCUAAHCBICGB_CKGO@ICCFICEPIF@LCDI@IEE@KGGBIGW@GMAMFCCGICDKLBJKJBFEPEDODA@MGGSEACMSUFIBGDCXEHONAHUDICI@CCUBcESJGAQFMGGILKOGMJIEQPCJKHMBEAIDIBAFKCDNFBDHHHCPHJ@JH@BIDGHCMGGKHEDNFBHEBGHCJILIJ@HIPLIPLJTDBFQBKCEGMEKFAF@LF@BLPFCPXCNIDFEF@HKCGDJJHAHDEHBFH@PLM@OAELKBGFJHALEJ"],
					["@@GTBJFBNEBKOM"],
					["@@KFEFALVKH@JGGGKD"],
					["@@PEFFCNFDIJ@HBHLBGHHJLIRaIADQAEDGGGQBEJGQ@IKFG@MFKAAHNJRDBF"],
					["@@BGEEOBCDCRJHHKJE"],
					["@@DINB@JJ@HIEEFICABQDIEKN@NI@LEJJF@NODINDLEHARNGHERKHOR@JGAKLCCEAMNIACI@CGBGQGGIGGAMKKCDO@ICIHAHGBINK@OPDFELBJHLAPCD@VIJJNPIDB"],
					["@@JAAGGBCGKAENBHTC"],
					["@@bEX@BCPAHDJIIGEIBECG@KGGHIGAGDEGHIJBLMJCNCDEJEN@JB@MWH[@ECKBAEGEAIFAJKLBBJJ@RGFKN@DCCIGBICCYG@GEQBMCIJGAQGS@EIDCCKG@AGQKBEIKKFY@CPOJGJIBFNHDANMROBKIKEBOGB@NKPFFAFKLAFFJVEJ@JEN@HGFPKH]@GNBNHBEHGDJFP@EHI@KFBNFBRGJIDKJLL@HFEFE@IP@JGDALDBCLHLVPFHNBFJPADGFCLDHAFIFA"],
					["@@KNDHAFPJJAJHLCDFLEHGDGGCJIDGW@IKCDI@AGGEBIMBACLE@EIACGBGEGNMHSQCGG@CMCAJCBKCCIJGBECK@MM@ICEKNDFGFBAOI@CGJ@FEAUKBKFECFKGCBKFIQCJQAGOCOCKDGCPI@ICEMGGFGC@IMCERI@AKBMAIQDECDMOG@HJN@JKJHJ[IIBANQFEFCIIAEEAGKGH`@JGPBBARDLJHCJDZJDENFHARBhDDARDPNFDNGHCJBJLRBJFJHB@HK@HREHDDALFPCVFBCHLJBNH@FEL@JFLKBIKSHAISBEREHB@LRAJNRFFCMKJ@DKJTPDL@FEGKNCEK@IFAHVIFBHAPIAMFBFEFIFBFTCLIFJFELACKRAFIEIFGISBIRDNKDA"],
					["@@GLDHCJNNRBDDJKBNZBNGAGIGGMOECGKAMGCEIN"],
					["@@MDMHELGDM@CLEDEII@BHLRF@DIDAL@FGJABJHJHBDMAKDOL@CMEC"],
					["@@EBMGBCYUIJJNE@EGUDFPKLJJT@CJDHIJR@GPFHMJAFFJFDEHFHAFMQGHII@NNJEDQSGAJOGABICIGDIK@GEASFCLHBFJILDHGDAF\\\\MBKISQCIIBBIHEH@FICACOOCGDERMDSAQGMDGCMDAFGBANJFL@HCFILIDJCJPHHAXVDJQFHHAHHVERLFGFEJHLCHBNNHLCLBLJBJNDFJ@FUKIKIE]PHNGF@FHFFRNFLR@HFD@PHHFPJPFECKDEHBEJHRH@ALBFLEAIJCNFDNI@@EGCCHBLERKGIHBNG@IDFFEHKGEIECM@ENBLHBLJDPPTBJCLPXBNDDHPAFBZBDNBL@DODGJNVJLAJIAIFARRHILBDEHBMNJFADPLDFLLBHHFBHVELHHCFDEFKBGGIFJLEHDH^GRHBLLBFGJIFHJCN@@EPABGO@ASFIHHJCH@@LL@BGKBAECEAILGKGEMEFOBPMGIRAP@M[GEGDIA@EHCHKEAM@QAMNGFDQKDOAFGRBBIAERBHCLBLSLIQGJGISJEMEDMAKFCIGEFMA@ODG@GIIKCDMOKMGCCDGSK@CUOQA@MMKGK[UFGUKIFAGRSHIAEHGAIYXKEAKJ@LCFK@KOOAEICBEQEFGTBNLNCNLBLLAEGAOBEMEDICCMJCCAMLKOCLGFJJCGELEFGKSQGPCFBHXLBJFNG@EQOFCDKIAQEEEKACHGBOBGKL@HMCIFAGM"],
					["@@M@@JJFNBFJR@FDAJIBHHLH@NNHILANFFJIHBRKEGLCIKDKLGDIH@RCCMMFMAMDI@MSUBHOIIQ@KAAFE@AJ"],
					["@@LGNEHGM@BIIBWGOEBIMCEHFNRHLDJN@J"],
					["@@AD]H@FMNGEKD@GIALGAEUDGEIDJNLFPLHHLHBDXLF@TLFCBGCIDECC@INCJFDHFFNAFCCKE@EMOIEGOD@KG@"],
					["@@JAFGJB@HHFF@GKAKECBOGCE@CIWGLPMHMAEFPHLRJF"],
					["@@ALIBBJLBDTBNHFP@JBLRCJHLADSDJRSTHHCJJFADDPJLBLAHFJHBHE@GCIGCAKFEIWIOFCJKJ@HOEWBCCQE@AMGSAKQMAGDECMKCBOHA@KOMHWFG@EGIAKEC@GNFDIJB@FJ@HEFFBLHADKNLJDFPL@HHRGJBDLHDLIDFHBNIKE@YFADO@MSACGOIMAAEMA@GIKAQK@INEISAS^KDCGJALSAGIEFE@ICAGFKGKCJIEM@MEAKBCSREAMCGNADE@UFKIC@EOBSLICMF@MEGKILGDKF@BKIIDCEOKFKAMFDPHRGDAPDJEJFLIXLD@JVAEJBNOBKAEFANDFLEBDPBJCAEBKHFGVMBCBCVSBIACEOBBFHFAFFHJGFFCF@LIHAMMBAGKDCFANG@KKE@MBFHCJDPHDMJJJJ@HDBJPBJGAIPMDNPRPEAGTNAHMHCAGFAHLDBFIFEJDFCJHHEDAJFFCFPRPHRFAGDYFOJFTBAFGHAHDHEFLFEF"],
					["@@QEIIAEMUBCGII_CKJARSHOFIVSPGXUH@DGEMECFQEEEMFQHGFMAEBIHCNCFENELFJ@JAJIJ@NCTON@DKNHHCN@LJLEFDPDL@JDHAAIF[FEBQJCFG@SIQUFOCGEGCDGIWVCDMJGAGHCXKTC\\MJ@JKLEFGEEBGJKDKJADINEZFBGAGHCLCJGJENSNK^DDEPKBGDANBP@LEL@JCFBREP@JHFEFMJBNCXBJCRC\\BFCEIDKCEASHCEEGBQGCE@MMCGDSCDEEIQ@BGMMOEG@EEUKDGFA@KL@NIFQECNK\\QR@T@VN\\DHF`JLLD@DJRJNEVAPFN@FFTALFFCRAJC@GTGNIJARKFSDKLYDAFQLGFI@EJULGAGFE@IGKGQFSHMAOMIIOKKOM@CIGBIJIHCDGIMDGGCCKGCSCOMMBBGeQmBIBUCGBECNC@CKIGGHGGKMCGFMGMS@IGAGEKCKBOCAHUBGFEEHGNABGQAMMGDMGEDCLRJBHCHGJ@FKLEDKECLOLOBOJ@JCHDJARDPBHDFCFGFHDBIL@bDHFBJJFNP^LFLLFNHADJLFLDRGZODGCCJEDAPEHNL@H[V[AU@OFE@QKOE]FQF[@KBEE[GQKGCKGIIIGOACIKEGDQAKACFIBGGAGE@EJKHOAOFQ@CCOGAGLKHMIKKAIGDKGEIKGLCCE[EAKFEFCSHEAKGMQO@IIKAMWMIAOEAKQCKESCKHAIIIBKDKGCGKKEAEWQCGaQMEMABGH@CKGLIHGDK@QGCGKAKIGLAJNFPRFABGEEFCHRADVDTPHDBFEFVHBNAJBHLJLTBFFDDJJAFDBTATBPEHE@@IQIELIFILFBNBHENDBJHHDJTBBIEMKARMJD@PN@JACRJ@H`LB@HHHNPATEBKMCA@OCEOG@I[HMOMLLRJBBFKHHHEFUKMDELNJDHGBGGGNM@AHJHDLEFQBARMBINAFQAAHFNLRKHEIGDFHGDIIMBIDIWEGGDCNQPEACXGDMEO@BRMDELIFCNMRBLDLEJGFMVAPKJBJAHIDETEBKACUGFGLFDDLARKHIBBPDF@LCHFVFLZF@GL@DH@RBFANEPGHDTCNFHTADNCFHJALJFDHQDLFJADHODDFJ@LRI@@HHLZIPIDDHKLFLIDEHAEMJAFHHAHMDE@EKG@OEGNADNHHPHDGNGH@BKEEGCEEI@GSCAEKCSIGHELCKGLORFFLDAT@CHGAID@HRPCHHDJIDGLBNKHCHFTALQH@@MHKPIAIDIKBBIOBEGPUFMEWEEDKCMGEK@GFAJFFAPIBDRFLQ@IEEO@MDAFYEE@MCENKBJJFTCCKBOJAOUK@GJEIHQLSJAPDJCRMf[GAHKF@DLHBDFGFBPLCCCFKP@BJJBCFFHAFPDBLEJBLJAAIL@DIFAFXNEBIPILBNIDENGNJRAPKAIBER@HFH@NS\\BDAR@IPMB@HGLMFELIBEFMDCNBHPDCHIDKCCJMBAJHHe`GJBDCHAJ@RFVELFJGFPLNAFNHJCLBHIH@JDVSNGJEBILKAMJIFEACRWR_PG@CGIAAFOAGEEII@GDCC@GIADGEMICG@EJFRJHNDFFMJCAIJKGOJMAENJBUPDH@HQXDFLJBFCVFRILI@EH[@IDIAAGKDAFGAGGBGMGGHIGFEEGEF@JOPDDAVPDIRIECJG@[ILKBE@WFGBYIAEDEAXMECGBKEMHCEUAGLGCFKCKGCEB@HGHGRHFILL@FKNHNDHFFJHCN@DJMA@FMBOVDHGNMBAAMDBH[BUCDJPLHAFJATGCGFANHHEDKX@HG@DMDCBQEEDGSMEGOL@JFJOCCHMCGB@JJF@NGCBIQGCFK@CHIBGCIHYGKFHD@HJFJ@D`G@AEKF@JL@HNEFJF@PFLLDAKRDHFELFHEFANHALHDLHJRJIBOEEIECMDOBGNUVALDFJCPBGH@TFH@JFPKHEHBLHAHJHENBHFJCKG@EHEFJJCBGJDFFNA@ELGBGNFEJ`IBNFBJCHDAFTPBFGHDHHJHBJSJ@FEEEO@CaCGNUN@DD@NT@@OHEFG\\BJFLJ@FN@FJPFRALIFMVDEFJHCHDJJDTEBGCGAIHCBSEK"],
					["@@EGM@IKGBBHHHJ@BHLCPF@IGCCF"],
					["@@OA@GKACFBJCRFHTDAEBKNOE@"],
					["@@QAIHFJJCJBHJLK@MKAED"],
					["@@AF@JUCEDBHEHNBDJQBAHIPBDGL@JJCHBJEFDJBALEHKFBNHHHADIBKHBALDPPCN@QJG@EHPNPAT@JEH@HKGMDK@MOQBEPSCQMBAGOEODOHHLHBELI@BKG@CQLIRCAONBFKW@IEBIMBCD"],
					["@@AMUBCIGCIBEHIBEAGHRJN@FHP@FFLIDE"],
					["@@FHGF@FGLDHLAHCX@NKGEEKWGSKKEAFDLPD"],
					["@@HBBHNJBLdELHPCBCKEEKBMAIIMKAKDEECMO@MHK@@PLX"],
					["@@FIEOW@@LHLHAHD"],
					["@@BGFALBDOGEEHKAEVHB"],
					["@@PDLJCFDJLADERCIEFI@ULGFBPGECGBWOIBIIJKMIGCaHM@IFINSLG@IJNJDFJDRPFAN@LHFE"],
					["@@HGFONCEGKAEE@IFKAIDEEOOH@HANEH@NHHSdFJJFFAHK"],
					["@@NDRARJT@AOG@CFOAGAFQ@GRAFCIMKHGBKEMNKC@MEBOEG@@LDJCB[AEDAHRRDERNJLJCIEFGPA"],
					["@@@JGBWNPBHCL@JBXIDKEI@MFGHALFFCJDLEDE@IIGMEEFO@LIMGMBKEEIOOGDAHFDMNNJALDBCPJBKLAHLJ"],
					["@@DFNN@NDLEVPJDFFB@MHCEEIEAGBEJBKUNI@KDGGMESBGJO@EGEHI_II@MJWJNFJVDVFLAP"],
					["@@EAENEONCBICGDICEOECBFNL@AJOLANBNJANBBQ"],
					["@@IBAFOJKDGHFHJD@HIDDFGFBHHFLGBIHKLGECJEFDRCFFFENAHHCFJHAHKDME@FQHILDFCPBHNNNFBHHDT@FCFGTODFIJAHFDDIJADJQFHHIFMBIAAHFPOJFHEDJLJANFDTRDJDLEHPIFAHQTLJAJJBDNGNFHKD@FNFL@HANFRDNEFFHDX@FAHDJTCJFRHBLCJGICBOAKECDGN@@HDJNLCJ@FN@DCRDFHBLCDGACDKAU@IAGHRB@JG@EHHHL@@EJ@HJHDRAHCFMCEHCCKJKAGGC@ULEHKMAOIG@GCBQIIFIODWCU@FMJEHMLEEIIGKDMEEDGEDMLGOGGBIGMLEGHKPAHIFCEG@OEAIKIAGSOSICIWGIQBUU@ISOUEGGGCUCMIoM"]
				],
				"encodeOffsets": [
					[
						[131429, 32761]
					],
					[
						[131491, 32820]
					],
					[
						[131716, 33424]
					],
					[
						[131677, 33512]
					],
					[
						[132030, 33702]
					],
					[
						[132052, 33705]
					],
					[
						[132024, 33616]
					],
					[
						[132074, 33751]
					],
					[
						[133020, 33716]
					],
					[
						[132718, 33677]
					],
					[
						[132063, 33661]
					],
					[
						[132704, 33724]
					],
					[
						[132890, 33346]
					],
					[
						[131993, 33343]
					],
					[
						[132872, 33450]
					],
					[
						[131926, 33388]
					],
					[
						[133095, 33546]
					],
					[
						[131738, 33481]
					],
					[
						[131991, 33481]
					],
					[
						[132885, 33489]
					],
					[
						[132075, 33547]
					],
					[
						[132063, 33555]
					],
					[
						[131940, 33623]
					],
					[
						[132751, 34552]
					],
					[
						[132841, 34663]
					],
					[
						[132422, 35100]
					],
					[
						[132460, 35101]
					],
					[
						[132435, 35131]
					],
					[
						[132480, 35135]
					],
					[
						[132840, 34217]
					],
					[
						[132636, 34256]
					],
					[
						[132660, 34273]
					],
					[
						[132344, 33811]
					],
					[
						[132180, 33840]
					],
					[
						[132906, 34141]
					],
					[
						[132121, 33804]
					],
					[
						[132464, 33796]
					],
					[
						[132289, 33801]
					],
					[
						[132871, 33850]
					],
					[
						[132661, 33940]
					],
					[
						[132675, 33804]
					],
					[
						[132704, 33841]
					],
					[
						[132121, 34011]
					],
					[
						[132161, 34058]
					],
					[
						[132211, 34087]
					],
					[
						[132229, 34004]
					],
					[
						[132162, 34007]
					],
					[
						[132929, 34200]
					],
					[
						[132519, 34201]
					],
					[
						[132705, 33981]
					],
					[
						[132480, 33965]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Nara Prefecture"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HBJPLJTFBLHFIJK@CFCPRJHFFLBJJL@FIH@LB^CHHHKRANIFHH@XAHBHIHIBIAERAJICGFLJDXNNRHEJVLBDGHBFGVKBOASDALLDFRAFJLAVFHALNV@LFFHR@JINBRAHTRJ@BDTPJDGT@FELDJAFJBHCHPCF@TCFLTFCJIRFBSF[HB@KTEBETOCCAKNCR@NE^DXEFGLABCNGNDZCDCPA@EVDHAHHRHRAJGNlLDLRFDJTH@HHJ@@IKOBEPGHDJA\\TFGBGHAHHHEFBJIF@JUAMBG\\CLHNEDMJBPCDNJHLFDP@LFFVDPO@IJCFSIIKCKALMPCN@J[FEHKGIAIGE@GMAKKiRGATOPBFCHBFOFGFKGKAKMEAEIMKGGKFIFCCMGAFIXKAILELBHENEBEdET@@IFIJ@`RJHPEJ@AFJBDOHECETODGCOCC@GHEVABDNJH@`JNA@IHMAKGEAKHIVC@KSGGGAOIKCMBIEMOBQBGEMCOBIDM@KEAGOAODIDGASAGKEA]AOKFKAMMME@GGCOKG@IHCLAPMLUCKJEFOAEBGHE@KNMNENADGJKMKOAEGW@IGBODIDAJIRGHOHGCACKTGJIECBMKAMOCGIAAIPABOEIKBEGSIAGEEAKHCZE@GESLGFMGKIC@QGEN]GEIE@GHCDICGHEIGAEVSJCCEYDMFEGFGAGAOFSIQLGLcOGULEASLK@IAMFGCYFEFGOGBIHE@EECQOIGSEGMAGEAGGG@EOCEGK@OACEICMBEIEHW@EBUQ@GGGIA@GIKG@GGCGBMJI@OJCDBJEAGUFGAHOCICCWDCDDJ]LBKKM@EGG@GFSFDNAFGH@HKAEMECIDKAEMBIF@\\GEIHAJFLEJKHM@ECiVMBKGAMSAQGKEIDMBSKIHEAOFURKFS@IBI@g@EGECOFOCEADI@GKGAGGAGGY@KEWC@FJHHLENANED[AIHALTHBLFNAJEDDJJ@DNEJDLPGLCLDCRFDDL@LEFDNCNKBCNKJDJGFS@GFWCEDCLHJ@HJHKP@JEDE@OTKFOCELWFAFI@MNHLLHAXBHRDAJRJJBPFHXDHBRLPD@NHPFR@JFBHCHNPBFRDJHFPGBMN@LNJ@HNLPELDLLTAPEFEL@HKHBLGLLHBLJHBFVMPBFGNC\\]REHODGKKCKJ@FIHFNENEDEXFLCHBNOBCPFHBZBHOXCNCLAH"],
				"encodeOffsets": [
					[138907, 35209]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Niigata"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@LLFPMSKGH"],
					["@@HAJMRENGJBLMZKHI^HP@JGJ@BGJCAEHCNALERBLCN@RATBFELCBCP@VE@IHCBEUOE@@MHIAOJQCKCYDEAOIQMICOBKJMF@TNHC@IJKCIHIVMFELERDTOHBRALGRFJF\\BFGLCDIRADAT@@MRGRMBGRIH[RCVOBKCSDCIGMEGGOEASMIIQ@GGGYMQACCIAYOOAGGIACGSIGGK@IHKAKDKKIBMFGFGDOAYHIDICSCHEGICOIIG@AGIQFE@MLGBUGUF]FGCEKCEEQaAGAUTAHBJEBEIILQEIOECKIEYAICAQEGAGDKCWDEAGUCDEIIAEJGKSJEDIEECMFKGWOIAGECCMFICGLSEIDINK@EZILG@OnYDGP@HBJ@VLLABEBGDABE@@@ABCHEFC@ADCDAD@FELSECSEOGOSQGOUOGQKEIQMCKQCBICSGEEQMAIMMCBEOOEQFGHGAGSBOIEECMGKMEKDGIICUOKBGCSEFMAIGEAKDMHEGI@GLOPCHMCINQDSIMBSBEGGJCAINIDINCJ@EOCMMGWMUDADYLEAODGAIDE@KKKFWBUCCEOIGHKDEJKF@DMAWGIBK@IEQEGKFKKGAKFECIEGDQQMKBMFK@UDCFIBUGIIUEOFADWEIGEFMACCWEIEIFcKEHID[O]HIGIK@CKOAIDMSIRW@IJGFANDJIJA@MFAFM@IGUBKAOK@KOGAFUFCCMKMBECICYEEIAIKOIAGQIOOCGQYBOJEDGVOHOPKDG@KR@PLJTD@DIHA@KDAPQJ@@GHEAUHAAENIGI@IGMCcKOCK@WJQCEHKLECO@ELONgIEAMIE@MIQFKJID[DCCIKGJE@GGCFQCME@IMDGEGIBGALLCJIHCLI@KAGEQCGFEAIHMCGDMPAHDZDJIJENSDWLIRKHMFEPINCNM@IPKBOFM]BIEUFQIKIEAEM@CCKAGGWMEMQCGCG@QFMDEGIAMISBM@[BGCBKCIBUEIDSBWVUEMLQ@MAMOGGH[HGCSDQEAIMGAIII@EHIBIIGAKBCNCLSAIuKc@KCGKUEOGK@WJEAMDO@@IHOBKDGBSAIGIDGKOEEOHGAUKEK@IEEKBKDOAQFOLOFIBKHKACDKIBSMGCMOCSDAJEF@XGPO@MHGH@JDJZHJL@JNR@DKHEJMDBHRRDRCJFH@JGFAFKJKDSAQBIHCFQBAFKD@FSAGLGH@JFNOJaCMRFTIBGFBFDlAHDZCDFJCTILKHEPCBATGLODKBGEOBGAOHEJKCKDACWEGDKMQ@CDOGI@YDIIOCGEOGQAECOAAGSAMCGGBEMKKCHIKGCGIGAMIGBSIGCKKIE@KQKJODWCEEKCYSCSGGHGBIHAKQ@IGCAEHMHGAEKCCMYIGFBVGLSFGLIGMC[@WFGDMKAGSIMCU@CGMEMAYDCFMCSHKEM@GDQKMAKEEGICGIGMIKFMOKE@OEIA@NMFMCIBIPI@CFIAKJOFVXLHAPED@RJFBHJLJJBPCJIBGCMFBREDUBOFEF_CMDEKGEQFCJGFWBGBMHKBQCOECEOC]FGFM@GEAKRGEKGAEIJGDSRGCIBEECIAY[BIKMKEAIGCSSDMCEOC@GEGiSKCCOSKKBQEIIBDINKDEHDRADHJGHATGDAFYRCFJJCJBLAFDLC`BDCJMHKREDELBLCHLHAHBVDHMRCRIBOEWBMLODKA@HQLKT]NCH`BBDNDTBXJjHVH^HFDZHXJlN`H\\HRDLHXNPDDCLHR^JZH\\RVHFLPLVDXLDHLFPFNLTLP@LCNDNJLBRLLNLJBHFBRNVNRZRHJAbEJCHGbAJCXBHATDdNTADARBXFVJDFTDFFEFJHVLDERF\\Rpbf\\NLXPb\\\\VDDTPFJRAVRJHNBjXDHTAZHJJLBFHNAPJNLF@LLX^bjLZ^nXj@XPBLHDNJDHHJJFJJHBLLHHJVRPFBDRFJHVJJJTZP^DJNLHFHJDLRdBLNRKHNDPhT@HDJEHBNFBDNHHBTFHFRR^HTDDDTb`BFNNnh^RZPvZJ@@HZJNHXJPJrZ@B`NBDbRTNPJFFTJDHLHFCPHL@BFPDTBBHX@dHRAhNPDVLFBJVHDEH@N[KIDC^FGLGFKVJFEJ^PHEfV^Rvfd^\\XprRNBFr|RXLLHPZbHL@LFHEBANFNP^FFP\\BJSJFN@JFJALFJ@RAFBPCDFPBNCH@LDL@^DTCL@NHLLZGHAJDRJF@JFDFPADJLPLFJALLPRRJZFD@HFDHPBHPXCJLB@DLLX`P\\BPED"],
					["@@LHBHGJH@BNJJFAFNHNRXAHP@RDRJHJRHRNHNLDJHHHADRNALHFHIFAPF@FX@NLHJCJNPGRDJHBLP@JHHNHBHIJDDZCXNRHT@NAJBBKLGSOC]CIBUCK@OFKCCG_AMGIEQEE@MC]KEGMAIGI@EKIAIGCKMAGSW@IEOIIKUAIFG@OGOBOHIJE@CLGfMZEFBLLL@FFTAZBTFPJ`DNJHEH@HICKDSIMISBGKI@EIGEMDEKWKKCGOOGOKI@KECEMEECMOUBMGY@IU@OOCGKIEKOGKBSIIK]EAEaSBIUEKKOKIIGAKIOEGGUCIGEDaCQFWAKKKBWKO@CIMI]EIDCCMJICSHK@EHGFCFBRLDHNPCNFZ@JD@FJBLCJDHHV^LXCJLLBNCLMHELFDFLBJNHTRFNFD`JLFDLNDJN@LER[\\YRQHMDYAMAIEASMGGGIW@GEGKFcPGH@FJ@FDCJDF@XCHIHODHHCJL@RFDJGPFRCPEFBJVTFJADMBBHPPBHJENJAHFHJHJNCJPJFJFANJ@PHD"],
					["@@H@BJ@PPFNPBJHNPDADJHRC@CKICUEKBEEEKQWMCEQIIJBN"]
				],
				"encodeOffsets": [
					[
						[141590, 38096]
					],
					[
						[142897, 39479]
					],
					[
						[141615, 39061]
					],
					[
						[142561, 39371]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Oita"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@M@ICACOEIMKCOJW@YGCFFFLDJLRARNLHPENAJGH@JA"],
					["@@AIKASDHPHCRC"],
					["@@@FNNHADIEGECMD"],
					["@@GJFNLFFAT@CKEAEIOI@ENDP@BGWGIKSGGFCLDFND@FJDBF"],
					["@@DGJ@LFLALCAELECGP@VGLB@JPJJIFB@HFBDSCKVIAEJCDGHEXCJDT@TDFCLFFEHBJA@GPGVBJH\\AFHFGVAJBTGTBVAHINFGLE@EL@TxLKLNBTPJEHLPFBLGFNCHRHOJFD@LXDJGHDFHHEFDCHBHJIHFLGPNHCBJL@FMBITBCL@JRLH@NIRCHDBQREBHHBHKH@HNL@BIHEJCCEBKJCDLNFJCBMNKBITUJFFAJWFWFKHKHCHBJKJSLCHMAKFOHGB[FOKSCOGMCWASFOFB@JH@@yWBGSAKIIKMK_C[CGKBQAKHSF@LIBKFIBCGMBYF@OIAAGRGBORMAGHCGGEOKDEEWBOEOAIBGCEMHECSKEGJEABGUBUHM@MCMJ@FIP]DKEQCCAOACSEWF@CSRg@OAGLqFMJCN@dOLAHBRCHCtOJBAHRFCF^LBERB@HTNB\\HVB\\ITMKKFCLL`S@EPGTAIIPC@VX@HC@KJD@LHBBO`EZ@NFVBLDHANBDHL@FFJ@DEVG@HELPJJ@FD\\FL@BIIGAIIKAEMCK@OODMHECGCACKKEIQDCL@MMEBKCEEUICGIABEGEAKIECGBMJA@IKAEIKEGEBEIKG@AGVDDKRBLAFJREGGLIJ@BHJ@JDJP`FEOPCHDNBNJJADCJBFG[KGEDCGKOBEFOI@KOGIMEDOCHIJCCGPCNDLCJGDDKFJLRMNALLLI@EGKHALDDCNBBLLPALGJPFCMDAAKDIRSLAFNT@@GDC@INBDHFAPFBLGJHLAJJBLF@ECKAINOBMFC@EP@@GYEGFMGCBEKGAMAUDOFMAMHKKIJGCCGIEAKDGCIBGQIKMGC@GJOGOKLEGKEHEJACIPC@ENELIBJRCCKAQCCLCBNFDJCAGHILFBHHABERQJDAJVECGLKHCPFHN@HJDHJBIKIFIGMJA@GLFDEHFH@JHHCPDBNGHFBVIPFNGZBHEL@BMAIQDIFIESLAGI@DIIIKDDLIFSCCEMAAOOBDMAGBOIBSJCFBNS@OBPQBMCMHCCEHEHFJ@JGJAOI@MIAGIIC@IGEIJIAHICIE@EIGAGGMJAHGA@GJK@EMIG@CENARFDEBSFIHHAHDNLKLENJ@FONBLLBZOTCDCEOKISEKEGIKEGKJIIIQDFPEFSFMCBKAKEIKECCMBCNGDELEIFGAKMF@FKFGSOJLJAPKBEDECE[PQAQGBBHIHGPGFGIJMQKFGFAJMEE@IG@@IXABEABUKWAGCUCANCJLRAPCDAPCFHLDLADJL@DLPAT@LGBMIMDM@EHKFAFUEMIQFIEKL@LI@KFOB]AMEKBKEBKCOGCEeSMEI@KEKKCUFIEWCECM@ACOFYFMCWDGFOCYBGCIFKACGQQUMGBS@OFCAQDGHQBKHKDGHDHCHFRDDHRSJIHBHIDI@SRILELGAQGQEUBMAIMAEKEGGIBUAKDIEKBIEK@]KODMLDLAPKNGDU@CFIH@HYR_HMNIDEHKBCLDJSCMPGVBD@PAF@R@JINERNNGBALJ@AFKDBHTBJLDPMFQFALBNIJC@KPMHIJFNILE`EHBHMJYZDFKHMGCFKFGHCLDPCFBJMLBFGFDFBRIZGBSP@JSJG@AJGDOBEFETSLMDGE[H[FOFkAEKIEEBWOI@K@CDQHECBIGA@GEGAOEIDGCGFGKCLONIF@CKBGNEHMJANUFMF@DGECCIIAGSPKGICMDICGOGAMOKIE[BMAEHOT@LEHSLSACFMEI@MFKNGFMAERKFAPGHKDGFSCEJOAY@GL@HJHRBFHLJCHFBHH@NHRBLHBHHCNAJEFHH@FPDDTYFIJKAIJWJGJMFDNLDBHH@LFF@DFMFiDKFCHFHEN@DHHN@FBNAHHLBRAHF@HMAGF@JIFJNNJFFAHGNBDM\\CLBJGNKDECIHCFJFDHPHXRCTFHpFCTFX@HJDERFJALBHFFFLAJCDJFVBJJVFFFBLVbDFPDLHJDBHNFFJJDT@FDPBHD\\EHFPDFJL@NIVKTDNGTA\\DHENBDDLA@CNCX@FFPA\\DBDP@HERBBDEHKHBJEPTLVTH\\CJEJSNEHAHBRJL@PR\\"]
				],
				"encodeOffsets": [
					[
						[134858, 34542]
					],
					[
						[135091, 33562]
					],
					[
						[135237, 33751]
					],
					[
						[135092, 33795]
					],
					[
						[134336, 34426]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Okayama Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BJXD@JJDHABGMACGEEMEGD"],
					["@@IBOJCDFJJDBEJD@FLBDNPBLOAKKOBEXCFIAGMBGBECKHGFEACH"],
					["@@IH@FGNFHHAJHJJHIEEFK@EIAAEKI"],
					["@@WAMHEFDH@JF@LGDDAHLLJ@PANENSHCRRNEBENMEGWDGHGABIEEK@OFCPGCBGMA"],
					["@@BGVFDFTDHAIKKGS@SEK@ADFJNF"],
					["@@GEGGKBEHBHFDEHPDJAHKAE"],
					["@@AMKBIGGDGGEBGNHDJADFLATB"],
					["@@AHNBJFPKNBBCWMKJQB"],
					["@@JBDGMIOFDNLC"],
					["@@AEK@_JBTZ@ZGFQMB"],
					["@@TC@W_@BVJF"],
					["@@LFJBHGIGKCKBDJ"],
					["@@HDHLN@NJCH@LDH@LCLDHRHHIJ@PEHCLAFDHLLLRAPIFBRPXJH@JCPBJBH@DFLHBXALMH@LIHBLCJIFAFHFEHDHLDLHDCLBJGDILBTGP@DCRDFJH@HELFDHP@FHZDDHPBDELBFON@FHEHBFGFBFELBJMTGBKNFJLFFJRAFEL@NJJDRCNN@LLFARJNEJHHCJFD@HHJCHBZJF@DNLHLEF@HJFFJNCDCXCJERFP@DEP@bYR@FIL@RD@FHFRCJ@HAHGP@DEP@FDJCDFHEDKNEJFJCDGNKNAVKN@BOPOCMPIFK@MJCTCVJRRHLD@PHCJDFALGFBHHBN@JDHCND@DfTV@P@LPBFGHFXLDREPL@DVNJBVITJF@JJJCL@BCN@AGGIHMEGOGIURMHATCPDHEH@NAHIL@PJRGJHLAHDBFJCNB@EJMVO@ERIR@HDJGBGGIJKPGBCKICIDKOGDCJK^HFCFICEBGAIOUCKBINEHGHOAOJEJ@HDRJHPAJLDJCRDJAH@NNNFTAJDJPJDRC@IVMjJ^ALBLHLNFBDL\\HJF\\LLJARJBXLHAPKBIEGEQ]KAG@WDYXEJEVADE@MKOAGJEFGCMIIQJMBECIDKGEDGGE@IMBIEKIIJGOKAGBQDEIIAGYCOESCD_GCCIASFIAEODEIOFIIKCK@BEGIEKMABGIADWZGHICIEIMEBIJECIAKFCSK@EMCEIECAMNIFHTKFEAIFEN@AIHGPIAIIIWEQKCKIAJMMOCIGK@ONCFSCC@GHKNBVFJEAIPGFGFBLGACJMJ@BIDQ@GEGPML@BEHCAEWIEICYGIJGFBFIECBMCLIHYFGDWCEIIHEBBMKCCMKAW@OECFSJBDGLkASFUJAJMKBCTALGTGAGUCBENEFFNEII\\@PFDFLA@GLIHIOECKQA@ESGJCGKIEQADCGMUDFMKOMFK@GGD_JEBJHBBKMAAMC@CKMIGHQAKBAIIEGDGEHQGCKBGCIOK@MDGAQOQAKLUEQBKDAJ@JJNH@DJK@USCDGZOAAGECWH_FMBYKDIOEEFMGSCIJMEDKVQDFZNXBX@BCZF@BbDLADOFDFI@MLE[IEQBACSIAIOE@ALK@IIEAKUFEEEDMHGHBAIIFKDCNGLSDQESMFGICHGAGGEPUEGW@@GCESGBKICNOFACKBEIAAEG@IJEADIOAEDKASLk@WVO@EF[@EAGD@HMCIGSEFCEGKBD_HOFCFGMAULM@IFGGKHAJKPGFHFAHMB@ROC@HCHDPUHKXBVIJC@@QCC@OI@ODEGdKNiKBIFETYHY@B]@MENG@OMA@G[@@LND@FO@@NIKKBEGOGFGEEO@EEI@MACKMIGJUAOGKQPKHAKKCD[ACIOBODOGMCKASRANIDCGIHBFGPMNQHRST[BGPCBEEOFMGESCYFMOKEWFEEAPFHLDRJMJGAcQK@@`ANK@EFAFFLNLBLELQ@@FHHALFPFF@JGHANADCRKFING@IFBFGN@NEDO@CDI@QLBBCRGFAHKJCJDHNLIJBNFBBJJFAHNXBJCDaFAJDFGJOLAXGDDHETGBEFAPHLJFBJEBCJGBJLCLDBBLDBFJHDKHAHLHDHBVGLKBAHQBCNGHU@EHE@GLFHIJBNQFBLMDELIDCDALIDEJE^DLLFDJAHCPNPAHSXAFPTCNPFDJNFDJEVDJAJGHUFCLKHCJILIJUJCDKJDL"]
				],
				"encodeOffsets": [
					[
						[136775, 35175]
					],
					[
						[136736, 35202]
					],
					[
						[136719, 35216]
					],
					[
						[137520, 35541]
					],
					[
						[137395, 35444]
					],
					[
						[137489, 35531]
					],
					[
						[137467, 35512]
					],
					[
						[137470, 35513]
					],
					[
						[136981, 35253]
					],
					[
						[136936, 35304]
					],
					[
						[136883, 35333]
					],
					[
						[136706, 35257]
					],
					[
						[136468, 35900]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Okinawa Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@JJBdP\\@^IHCDEAGMQKACCU@EBMA]DIDCFBJ"],
					["@@D@HIQMGIGACFHNRP"],
					["@@GLKPCH@LFFNHNGRGJBFFJKBMEOWOOCIH"],
					["@@GDILJHHAJDDIAKEEEB"],
					["@@@LXJBJNJPGT@RDLFJEJHN@\\IFCTGFGKEAEEEUICGMIGBKFEA]FEGK@ACOBEDODEAGFQBKHDDHEFH"],
					["@@DEEIKCITFBRA"],
					["@@MDGLCN@JDLRP^HTC\\GLIDK@MEIQMOGS@]D"],
					["@@EAKIOCGBGPAJHDBRLHNGLODQ"],
					["@@RHNAJEPGEKJIPGBISGGBAHIDYDQ@CDOCBHJATFBJKJBF"],
					["@@HD@JCFDHJFFNLFL@BLCHOFDHFFNALDVUPI@KLGLCBEEGAGPQJBBJND@LFFNGJCJDLA@GLGF@HFBNHARGAMDIJEHDREFB\\MDKHKLAV@DIECCSICGIBGCIDEEGBIDEAGGFCHGFIBCKQW@GEEHOBIAKDOGAIH]FAIFABIEGBICIKAS@[NKL[HWAQ@IAaJQBIACBMB]HEFMHKNGDSFESBECOGAWBMJKCSDGDOVCJKNTLFEJDFIJFGLBFGJFNHBJGREFKAIRBEF@JELEHCNFJDIHEDGFAZVFGCKBCPABKFGJCFOFDCJELBPFNKHRVALK@GTPFFLIJENHD"],
					["@@GFKL@LNCFELCHGBKGCMH"],
					["@@CD@J\\JHEMCCEAKCAGF"],
					["@@HDLGLCXAAKCIJMGI@GEOIIGACIUGGKIIAOLKGKCAOSGAEGICCIAUBGSECEICIGGKEEEM@QPQEIGAAOJOFUCCEUCOBOBGAKEKBOMSOIQBQJEHO@QA@KFGGEKMWGY@IHCAEHUDDHILBD[JK@OJMNJNPJFCLFNPDHLDCDEPDNAFKBGDALOLAJIDGCM@OAWQGOOVMD@HFNJJJRN@JDLCLG@GJANDAbRJCNUJHHTINCNIHOEICKIIFGHADHTNRAPETAJFHHJDNAJBHCR@BALBDH@JKNFHBJJTDRP@LJDJNNFJVKHIHIHFCDDTHPFJ@HHHJDAPGDCHGBAJPLPFHVNPFNAJBT"],
					["@@HDLBNMF@DSUHWPBD"],
					["@@FFRGFGFICGKCI@MJ@HDN"],
					["@@PKHOK@CCK@CFMHELPHLA"],
					["@@VAVILODKK]@QGKKK[GSAKBMHOJHR@bHRAPJLVDP@"],
					["@@BJlIZBJANEDCIOGMAGGEWAODIHMPENAN"],
					["@@XYBELGAMGGKAKBEDIBKDCHIHDHGF@NAJJF@JFAFODARA@D"],
					["@@AFANJHJBDDFDPND\\GTBJHFFAFFDGJEDBCHDHAHKRG@CRKNBDGJEBALBJSTNBFATQFSVKFBBIJODIAOBGFEHQJIPETQGGAKBKHEDIPAJEDELCNBJFXIPGDOFGRKJBJGJBDCNCNBPMDOXWAGGC@EIACFK@IDMGCBaF]AKAEEK@IHYGKGOCEBICUBKAIIUAKHGJDJ@DALGEHOCGEBGFcLEHMFANCJILBFDJHCPQJHJILDAZKNGPIHSD"],
					["@@DJNFREH@TM\\IVKJ[DEDKCWEGUA[BMJM@GJCBGLUVCHHF@PER"],
					["@@FBT@NIJMDIJKLDLICINIBIL@DIMKEADGKGEGCIDCAOCMLG@GHIECIBI@ONYLIJ@HORDDCJEBCHaXcDE@QJCFKAFNELFJJDT@ZHNHTJFDPB"],
					["@@HRFBBHJACMECHQHCNFAIMIMCIHBDIPBD"],
					["@@NHDFLDJ@RSFKMQIACFSCO@IEGBDJBJLP"],
					["@@CIMKAKIFBNCDCNNJLBHCFGCC"],
					["@@JGFOGAKDSLEAIIGD@FKAGHBLJRRBBFP@HB@OLQ"],
					["@@JCROBOEIGC@GBMDE]EGFIAGHGBEHDPAHMBCDJRFD`JFFJE"],
					["@@EACIGGIFEHTJNC"],
					["@@GHHPLCBIHGJOEMUNCN"],
					["@@ICAIFA@GEEO@QCIGCWKNCFBPJFPRBHJPFBLHNNFLXPNLDHFFFLXBXJDIKAUSGICKEEDIEQGOQGKBKCCE"],
					["@@@IEOEAMDEFEPDHNFVGAC"],
					["@@AFLZLFRANEPAPBNFVDTKFIJCHIBGEO]CGCKAAFUDO@OAa@MFGP"],
					["@@EIOLJL@RN@FIAE@KEC"],
					["@@FFBJHHH@LHHGIC@EL@FSCII@MGIAI@CZ"],
					["@@CIGBITJDDFHFHEGU"],
					["@@CCKG@MIDEFCZJDZM"],
					["@@LJLDLJNDNOBKIEMNECFEIG[FCD"],
					["@@QMIDOADNKTPDHCZNDABMHA@GKI"],
					["@@EBALJFLAJCFIOCM@"],
					["@@AJJLPDJHRB]SUO"],
					["@@AUIDGFDF@HHLNIEC"],
					["@@JCBKOEGNFHF@"],
					["@@@TJLCHNJAJAHN@NELMAGDE@MG@DMMUGAAOFeGAIBCAEIEEAL@LFRKD@LENH@JFEL"],
					["@@BOEDCIQBDHJHLD"],
					["@@KF@HDJTBAKIM"],
					["@@FFDHTLJOPSGAKGIAGFBFGDGECL"],
					["@@AFJRDLNLFGQWAKKC"],
					["@@HBFCHBRCLIIGJEUABFEJG@ICFUKI@GIBCRIGKFO@CHDFP@FD@HFDLGJF@L"],
					["@@IPALKNCJMVCP@LDZDFEJ@FVANSDIFEP@FJdVNPFGLEDEHALDFAJDHNELjbJBJFHPJALFALIRFJBFNDJIFHH@LLJALEJGJDFPNBHDFFVCFDDLLJHLLFHCJBNPJDDIJ@FTRPJP@HFHAVIFOFKBUHSNIAKFKHK@IKGCcJ@RIJGNBDIRC@@\\AFLLLBCXILSL@PFHDNBNLCFEPEH@FEJBDD^BLDHC\\JT@VMGEJEDFL@BCTEVCNEDIUIGKBIAGIODGKAAENAPGJK@ILCJBTEH@JHBFLBRCVFFFTHN@TNRXFCFFJAFJDIJGPFCHGHWFOHAJ\\^JNR@RFTHDHRJJPAPGNI@DJJEL@PHXFJHFRPHH@DF@LJDJJHFLJDPJ@BFAJFH@FLRHJADHHDLHDBH@PMHCHDRVPLAAOPOVG@EFGJADKD@LJJ@FUCIJMLCDMHEEKFSGERUBGGQDEGSJEBGGCIIBQMCKE@GGIKAFOOGAEHGMEKCDEGC@MCGDEIMOEMUGBAGIG@OEBEMSMEBKAQAIEMAI@eCOHWBEDWACKJSDADOEEAIQDCDS@MDNYLEHOJOFEKAGCDSeCIEK@OIEEDIOFGIE@KHILYLOAEEGBIACBCJIIFKLKDOJIDI[BKCEMUAQHGCGOEFIBGIDIPKBGCMKEKBFKWGYEC@IJMBGGDGICBKIOBMOEWCMHAHUFEAKDKJQBMCIFMCIEE@KGCKIKFCKOSJGSFGR@CIJOH@FGTGJKHEJANSGCBQEIFKHGDGPQHCNKHAPKPWDWD@COI@EJKFKBWREHUXEDMVCHCBQEGGICKGIMPKH@BGM@MEG@CGBGICODGKCKJGDKKSCBKKKGEWIIAOBICSIAGKGIG@OEKGAGPCJCDONIBICGLKFBJCBTHHjNJ@DGCKDENABIAOEBQQKEIIGESWMEKFI@QI@GOCGIGBGCOQCKEIOEEKG@IEMFUEYOGGGAGHG@YLDRBVJVEBBLDFCLLFOB@DMADOEAIfTDDDTFGNIFK@CPG@AJIAEDHF@VGHGLJF@LPRHBJGL@CHHHJ@DFH@JDC\\G@COK@@LJBEHAPN@@GPGBZFDHCTVHDHLVBBILFLLBHPBLLJBBJJ@@LFRIBCFAPEAEDGR@FJNENEDETDDIL"]
				],
				"encodeOffsets": [
					[
						[126725, 24636]
					],
					[
						[126924, 24825]
					],
					[
						[126979, 24806]
					],
					[
						[126904, 24791]
					],
					[
						[125894, 25039]
					],
					[
						[134342, 25059]
					],
					[
						[127677, 25232]
					],
					[
						[127080, 24904]
					],
					[
						[126940, 24936]
					],
					[
						[126720, 24977]
					],
					[
						[126704, 24935]
					],
					[
						[126683, 24954]
					],
					[
						[127296, 25201]
					],
					[
						[127677, 25353]
					],
					[
						[128247, 25323]
					],
					[
						[128251, 25537]
					],
					[
						[134394, 26494]
					],
					[
						[134435, 26579]
					],
					[
						[128161, 25430]
					],
					[
						[128265, 25380]
					],
					[
						[128161, 25454]
					],
					[
						[129810, 27024]
					],
					[
						[130190, 27001]
					],
					[
						[130271, 27232]
					],
					[
						[130942, 27286]
					],
					[
						[131100, 27303]
					],
					[
						[131014, 27600]
					],
					[
						[131000, 27647]
					],
					[
						[131299, 28543]
					],
					[
						[131041, 27686]
					],
					[
						[131100, 27350]
					],
					[
						[130816, 27361]
					],
					[
						[131015, 26877]
					],
					[
						[131041, 27001]
					],
					[
						[131072, 27021]
					],
					[
						[131040, 26954]
					],
					[
						[130906, 26962]
					],
					[
						[131040, 26978]
					],
					[
						[130717, 26780]
					],
					[
						[130954, 26780]
					],
					[
						[130296, 26802]
					],
					[
						[130344, 26816]
					],
					[
						[130402, 26821]
					],
					[
						[130836, 26843]
					],
					[
						[130299, 26839]
					],
					[
						[130321, 26829]
					],
					[
						[130500, 26830]
					],
					[
						[130363, 26877]
					],
					[
						[130802, 27001]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Osaka Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@XJNIBEAMmHBJFB"],
					["@@FDHGLEBCi[BCfZP@LKQGm_MIORNNIH_SIJLH|fFF"],
					["@@T\\NOAGGGQKIJDF"],
					["@@f@DMEA]@EP"],
					["@@HCFYSGSECHS@EHNLCDOKK@@NdNPCPBFA"],
					["@@I@MRNPjEJESSECOB"],
					["@@JJXHJLPHRFDHCPFHV@B\\AJSPBLKDBNALCHAHYZIBINGRBFLLBFBRGRCDZNAJJRAFHHAHHTFBDLCDGESEBHKTI@AFVNH@JHZAJCL@FDDTKEGFIBUREC[AMCENIAEHWBGGIL@HILMAWBECMPQJHJAHHHPFMPBTCHFDANDFARQDMAAJIJ@HLHTF@JVAPKHBHAJIDOAKGIHUPBJEHDJGNJHCJKHAVLF@VEJGP@XML@JBLEJIKEGEHODOMADIBKGGPIDGRAJJFAPA@MDGH@DE\\IAGLKFDRCTDTARLAP@NQDMKEJIBJJAFDN`D@JI@EH@LLHPBJOFAHFNDJCJDFQFGM]AGOGCK\\EHJJFT@FGNALGFQGABMJ@PKN@LGJSHCEMFGAIRGBG@YHGNHFAJIDKFEDIJIDIP@FEDIT[GOECBEQKEIQEIJEDKSDE@SDEGOGDIABECIFK@EHSICSOACI@SQBGAQJM@IGQEE@KMUBKEGBUIKBEEQKCBKTCPBLAHUAEHGACUKFIQGMMCWKIHEJDBIFQJBJAJGAGBG@WGGJEBMLQGGDGA]@KJG@EIKAIEKGEQIDODEL@JIGEAKSEKIIOGAW@ECGDYBCAIMQBEFIAAGQ@EBM@GISCCGMKKEMBEAGIOAKKQMQCDJEHAJYLENMIAGMCACYEGFWEKBOEGIQ@KDGQWEKDAEMAKDKBMCEHYEGJGABIIGMC@IG@UIQ@@GCIIGKCIP@LGJSKWBEFG@OEUSUCEFUDKKASCEMCGBCGSEQB[GEHQFMGEKGCMLIGGAMBEJDHSLBHEJLJFHEJKEGHLHFHPDjHHMNADFJFLPT@JHNDPAZDNHZDRHNNHLPPNRD@LHLAZXd`@NRBHHHCRLIFHJJEDDGFHHLENT@DLHFCHHF@JTCFLHR@MTDFRIFFAHBHMF@ZFJHDUPJLLENAV\\HHVdBNQ\\KJqRBEfPE@GP@F_JBDRCVDJOEKAYJCXVEAAXEDHSFBBR@AJm@@PFA@IN@CRTJDQDBHJANLAALG@CLEF_N@HOLGFBJEHK@FHVFIROJCH"]
				],
				"encodeOffsets": [
					[
						[138641, 35501]
					],
					[
						[138485, 35281]
					],
					[
						[138579, 35280]
					],
					[
						[138650, 35451]
					],
					[
						[138686, 35475]
					],
					[
						[138634, 35475]
					],
					[
						[138658, 35530]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Saga Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@LEJDVBNDLELALBHARDHDBHL@RAX@TIFHNFP@NIBEXEN@LJ@HLBFFPDdEHANDFABGN@DEL@JJNBNFLAXSF@HKPCFDNCBEL@XMHABKR@VWPDNCJEFILFJCR@BGHCZUIKEC@EFGRLFCNCRFAJHLBJJFXD@JVPJDFFFCVHJJPDLEDJVEXGFGCGFOHI@c@ACESCWGBIGM@OHKEASKK_NKEAGLIJADGKUKAWBOCECBOTEDEEEMCK@GGAGFIAIMAMLALF\\GFMCFGBKAKGGKBEIDKIQECSCAPAFOBEEDOAGIIMBIFEI@GRMAMACSEKCMKWAGG@GBYD@JKLCAUH_@[_DHeBGTBJMDALKFWPQTHNALO@@UYDIGFA@KScgDGoYgaOeJOEMFEAGHA@GTMFKH@JKAIDI@GPKHaJCAKDIHABICIHAJFTKAKL@PKDMCIDMIACGQLKBED[AQDIDWAMDIAENEFIGO@QFEAIDK@KFO@MACBAHOLCF]CMLMTIFIHKDGDBHAHYEMFCJIBCLILAHFFEHKFILI@[NSDWLGDBHIHCNUDJXCHHDHFPDVEJR@TEHIDAREFE\\BJGBICK@OCECKFKIM@GDMGCLM@SPMDI@IJIBI@KEMFEFMDGDAJBFENGHERFNFFERFDFNCHG@WVOHUTEJGPQTIBDLJ`HJADNVBFJJRFHETBFCGGBGJEAEJKJCHIT[@EHCFEHCDNHATQGTOPMFKAIL@FN@BHJBBLJJMJMGEPDFJALFBPLAAPDHCFTN@HPFCRLD@FIRFDCJEBBHGDCKKCUHQJICI@CJJJEFIBIHGJMDAHGFOBCJCAEHBJJDRAJGJLCFOBGJDNF@JHDNNMDJLABCJCEKDIXGDKECCKNAHIH@HHEDDHJJ@JGHGPKIOBAHNF@JCBGLLBAFKJILHD@JGJBFNADCL@JIDIF@DLI@IHBFKFHDJCLTQJFHGBBLHLLEDEAIJAJIRAJ[BPAHDFAFPB@JLFHGHFL@@IPCTJBJHCGUBCdQHDLACGDGAEJGNAAIEEIBKECGOMFKAEQCLOJCRHFNL@LMIGBCMCLMECLGT@BEJAJEVChARDPFJNIHAJHH"],
					["@@DEAMEEMCEFLLHPDC"],
					["@@CFANTNNK@OSOIACFFF"],
					["@@HNHHEDLDFAEUCEDKNAGQMDBFIBKLFH"],
					["@@@HLHBELCFHFBR@HKCKICEIO@IJIBIFBD"]
				],
				"encodeOffsets": [
					[
						[133161, 34274]
					],
					[
						[133096, 34347]
					],
					[
						[132994, 34355]
					],
					[
						[132968, 34410]
					],
					[
						[132856, 34381]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Saitama"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JPRDLHLLADNHBHHHDNFFBNL@RHXCBCJCHEXHX@DDZDBHFLJDLNDJBLJDH@NFFJ`NLBXLTDHAJDJCTENHNDLJBHJF@LDZNBJAHIJGN@HDFLDDN@JHRJJEJFLMLALDAVBRJB@FZ@HNIL@DE^FHHBDFCNDFNJTXPZl~EFLLHDTTDJNI^@PAJBLGVKdMV@HC@GXD\\WLCVBPEJ@@PVERCXEFFFEFMDCVGPD@RLDNBADNFBJNCHDHALKRCFG\\Y^KBBVM@IJAJC\\UXKNCZAxJL@\\E^DhPTBRFRJJBNCTIRSVMJPTFVCDDCZFDLDJ@BMJANDDMJAJFBG@ELIEaFQDSLSRUFSRQHIDmHG^BTITCLDBNFBHOHYHIHMTQFITKFK@EGMHiEKZ[AODGJCFI@GDMRYHEVKNMHSJIHKTYFMDQJYGUKQ@OCWFIAQAGDMEGJYI@WEIH@FLNKFOEGBGIQJEHOBGIICIDEHBLHJCHQKW@OEYDUTIAKGSC@GTQ@EIICEM@AGOEBNIFMCOHSBIBMJIDYAWB]@KEGDECGME@EGGCEG@SCGI@@F]BBH_HIGAGG@GIIAOKG@UKEDFJ@\\aK[ALJTBVN@RKDNNFJEHKASUSMKB@EiKOBIAQMS@EEMAMCMBMCQDEC]FIAAGMAEHGCIBAJDHAHUFCFBLQBEDM@EFICG@KECFIBGHI\\CBBTIDGEIBAXKCIHOAEFO@WEODSCCHG@GG[LMHI@GIUAQFSJUFGLWLYFK@[AYDMFIAQLIBIGWDEHOBCFUPOHKHKBOAGE@IKII@MEG@KHMEG@EIUEIIICDEGIBIQGQCGDWDCCSGIMC@MNK@KJGJGDMACNWFUIKFQ@KEKNG@MFKFBNARCDYPK@ICOHQAUHGCKLDJCFTXANBFOLALGNIDCFIFELB\\"],
				"encodeOffsets": [
					[142042, 36849]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Shiga"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BHPLBPJHLBDFAJJBHCP@FNCFFP@NDFL@PDLCLDPERCAQNKHAVFJHTDFP@RPLBHL@NF@LCD@RFPAFFNCHLLDLAHFHJDFVDDFNDTNAJQBIJ@JIJDJER[PLRAR@JLBNFHBHH@HNJHEHDDZFLCDJZEBGNCPJ@HNLTEHGNEF@APHNAHGLJHBHCHHNALTGXALBHIPDNCL@FKHLGXLLJNERGJ@HGLGJED@TCLCBGLCNBHEHUFEHJRFBBHJHDHBPLDJEJA@LJAFDHCNDPELULEHBFKPDRGNDTQLFNIN@LEVM@EGE@GJGBGGOHCJKBOTEPJTBPMEKKIHCFKBUDCEGBWGGESDQHEHD@FHDPAFMBKJAVFDRDDDPFDPADOJIBQFIbEBGEIHCFKG@IGIIGOAOLEJIHO@EfGBUFCDKGIBEGIGCFIMK@GRKHOHGRKHAFKMQUKU@GGDSGEBILFJABKEGAGEGGQBWKK@IGCMQIGJS@KEYHGEIIGSC@MHADIL@FGJITCHKFABE@QGS@GEGTIJBXOHIH@JIHADG@QGEI@EI@KIECKRGFEEIICFKCEBKEKBKDGMGN_UOCEIBCKIC@MAIDOJ@CQGAAQHKBIOIFGAO@EYWBEIEGWMB_UFCGIDWKA@KEGBOKAEEMCGGM@QEGGOBKC@MOIM@AEQEYDMGAEcM]HOA_JEDWDURI@GHFH]DYGICIFOFIIKJG@AFGBAHGLKCGGGMEAQBACHIGGDCXK\\ATFFEEEHIKCEGG@KEAOEIGAIBOSPWIE@GIAGEK@EGG@IEQBGESAEIGBKGMBKFIBAHJT\\RAHYJECMDEL@JFLIDKEEBIEQCM@BPIBIF@FIDOEEDKT@JFHALEDBHIPWMWCEMSIUHGFHFIFEAKFON@HINRL@LEHFJADTPGRDHENWHAFUVJRCJK@@NMC]BJRHDGPQ@BFV@ATIAEFBJENE@MNBJJDLJJCFFBNALEHFHHFBPGJFLJJ@PHJFLALFPCBANHHDNDBALKBEDIXBJEBDTEDGV@HGHBHEDBNNF@XCDJHDTHHCHFLJDFF@FHHDHCHGDEECIQEACKCIFS^DJMJALEB@LCFK@YNAJGDITMFSBJX"],
				"encodeOffsets": [
					[139028, 36205]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Shimane"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@a@SEQKQIEMBET_P]L_uZOzSRIXi@_KEAIJGJK@GKABGEEMBMSKOAQDACUFGKGRWBGJCOUPUDWDCKCEEGBMEQBOIUBKFIAOMCEOAEEI@CF[OK@QCGEYCGI[OIBKGAMDEAKJ@DFH@RDBEPEHMEONEJOBOEMEAIIYEIIQ@EIMGEQDOMKHMDKKIBEGK@KHEAEBGIACDO@@HGHWBGEM@GFEAOKGDSDICMBOWQCU@AJEBIHOBCRULEHOBCFQGEKAIEESGSAOEGFUJMCEFEAUFIJCJKJ@FQDIAKEG@EESGAGOMKGAGICAGOIGILKJGCGKCED[MAIGMSOKAMMBOKCIIMAMILQYMEDOCLMCSQG@JOGIAAEMKEDEHOBIEEDQAICAGCEKUICG@CGIGI@IGGQGCCIMBAEHER@JDNGDIHCVHJE@IDCN@HAPADEJcHG@OOEGGI@GNKBQGGIAIEIO@CFID@FI@IEGDKBCFW@KCEGBGMEKBMICIIBIMWIAI[DOKEKKAUHMHMCOIGFMDUGGFK@CDMAQF@FWLBDQLMMQCFI@OGCK@OK@COKCGGHKAKFDRIJID[AEEIBIIQEI@QDQREGMGBGMICOIDG@SL@JIDHLGFKACHWHY@GIHG@KAIBGCEOOOEDKIGDEEKBCMGKAKHOGBKWIMFMMKCSICEUGCKUGDGEENELIFDZAFIAEIM@GMMCKSWCIMEAEJKAGGCIKBEKM@IHKRKIOBGOIBKISGCEGMCIMMG@EIGOAACMAQEMAIODKCGUUFCPBJCPKEKBMFALMDIID[EGFO@GKWCAGEAGIDWAEIE[KKWCEPMFSNK@ILGAM@OIEKDMI@GIKKAEGAGKCBGAQGIOACCFMCKK@AFIHOVMDONKBEFEECIGIKEGGSLKEDOAEYEEEIBICQDKJGEMFEQOFGCENGDM@GJKD@PKFEAOJCAEJJNCRMFIRBFAHBFGF@HLJHBDPHHLBBLDDAJNTDVIFGCMDMACDSESJMIEIGAOJQIGDICCHQHGAGRFDDLEFBHENJJBJGLCBIEKACPBDMZMHBLF@LNTHNFNNJDILHHCPEBJR@FP@BFLNHAFHCJGBC`BHEJBPWAMHIHBDCJJHCVDNGNKBBLKJJLDP@GPCLEJFJCJFH@DE^BnJTFzNVHjPbTJHFLRJNREFLNIDITJFLDXGNLBHCFHNDCLDPEFDBRNJDMJFHJLANHFRHJ@HFFBHF@FFNFLAPJLDFVFFJBPHDJJNKDEJVJH@^TH@HIAENCPDFJGBCJJBCJRFJ@MN@LDFXBCFIBFJRJFRPHRELJBJEHLHZHlVFF@JDHJB\\L\\PVR@DRJFFf^NLNJRBLFDFJEL@NDTHHHH@RDXNPbRDBJEBANJDJNHDFHHBNLLAFJJBALPDDHR@NJDPIJNLBLL@HHCHBLTNBHNFJLNDLHH@TJHHRLNPTFNJ@HHDHEL@FDJPNFLALDAJFJJDHHHDRBHHN@TLHFJCNJT@dJLFVNJLTPT\\PbL^FRD`@^AH@LGJKBMNM@ILI@IDIAOBLTAJHDHELABHF@BJJAPF@FX@JFHEP@GJDDLEFDPCBGNELBRHZATFNAHFCLOJWJCFPFL@NHHARFF@JFJCFDP@JFJ@DHHJVLRABHHHTENHJ@HHHEJLJCNAJBRAJDTAZHFFJCPBNC^FNEJ@JBHJANKBBTAHFDPGBJNAFBRA@INBHEJDBDXEHJCNJLBFH@DIHAJBCHHBTPAJSFFFNHLEFJN@RGJDHEJDAFIBAHNBGFILGBAFVDBIVAJAFEEIJEDKREBDLDCKDGHGFMTALBBLHJJGAGTBDFNAJIF@ER@HCFLDDI@MJDXEJFAJDHR@PB@COCAIPBRCVLFIFHH@JHPCFGHJLELDFEN@HDRKH@NCOIYIKAED_COCQ@CAQ@QGAA"],
					["@@LAEIICBQGAI@CFBFCFKBELSKIDU@SIEDBNIF@FHFKPCJHB\\AJC\\ARSNCHGNEJD"],
					["@@CASHJDJFGJFFL@BHCFKDGEUAMJQJAJDLUFG@EFIEEZNNCHHVIHU@ANDFHBHNDN@PEHBHLEFIHCL@KLLLOAEAFTJATHEJDHH@HFNANNMFAFFFN@FFVFRMFDHCJJF@RPBJJGDIPKDCJEPFCGBKTL@INK@KLDFDPAEOFAHGFAPDBCCMDCL@CIBINDHELA@KLGEEKCBGIOHGEEFKBMEEEK@OCQ[CAIOEQDVRAHEJHFMHEC@MGCFGKKSBSDGIRATDBCNC@GDIAKHYIBSEOFSFIAEHK@CFG@@IWT@MDIAES@IBMC@EGGGA@JJLGFKDHKIE"],
					["@@FFEHJRCFHHDRFBAJQHJBILFBIJGRJDFLJ@JEATFBJGEOLCJPKHHJLDJCLFHCFGHDPMEELCDEOEAGFCEIOEBEVDLFDCPCBEJCGGURCKCAQACDKDDOCIOAIOK@NMMASHDICEMBGCLGGEG@MC"],
					["@@EBCJG@IFUBOHHFBJFHM@BFHDDHNNP@GLFHJLJFDFNFDMHHPBHKFFNHAJDL@VREFFJ@LCH@LGRCVLFPHCLDLGLCBEEGOSMEGGIBCCIBICMBGCEIDGRKLOBIMIBE@SQEIAWFGCCLIJGDK^DDLFAJGAAGGEKCKDBGEESBEENWAELIJMAIHKHCAGSFGLOD"]
				],
				"encodeOffsets": [
					[
						[136443, 36403]
					],
					[
						[136261, 36877]
					],
					[
						[136441, 37036]
					],
					[
						[136262, 36901]
					],
					[
						[136170, 36917]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Shizuoka"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NRRBJBLAPEPNJTEN@LZTXGLALBLLDRFN^@PNR@NDLRRADFPLTDHBTAHCJHHNCPRJHBANLFN@JJ@HLFT@PGHIHATF@PCDFHF@^VRFLCXHJ\\JNDPEBKNI@GD@LHFBLUJOBAFFJAHELDVTEHBLJNBHCJDHP@FGD@HDL@FLPMBQJQ@BJDDFP@JOFJJHFBJHDPRGF@FOFCFJRBJHDHFDLLBJALMLCLHAJLNBNJHBJHHEVB\\PFNTTBHKGYBCNEBGEGDC@MJAF[GIAEDG@EJOAKPMNEBUEO@GJGFMHKQOAYBICYEECOMCEIBGHONC@GHQ@SCOBMKEKIBICGKEKQCOJCLGHBJE@KHSAEFMQMHCAGHCAGHEXELGBEREHJJFDJN@PFDFLBLHVAPQNEPFDIJALMDKKQBGAKFGEKNOJQPO@ML]AIFYLMPDLCLEJOFMHETC@B`AJBVEL@LCHIHAHFBFJDJTLFDJFJN@JAHFCVELJLEPEDERANCD@JMNBJJH@HDRKZBDGNAR\\PBHPJ@VGHAJBHALBbEFPVIXBPNJNDDFPNHPH@PLNBJJLQHALGVRDJ@bFr@PIRRBTBDFZBLDPCÔZRAPBLCNHHJVFPHJCNDVQLJR@JHJDJHPDLF^@NCPBDBfBFFV@HETDJAFGAMCOPQAADYJGGOFK@KPQCMOQBEGY@EEKKAWUGI@EMKAOBIAGDKFCEGHEHWCGLIAMBIJCRODENIXA@EJGACHQEGHCCGDIRBRAFEJ@TENBVGNAV@PDFACE@O][KCEGBGIKGAGMLADMOIBKFC@GOSCILMJBNGHJF@NGCYBMAEAQFKGAIBI@GOJMNIBIAGBGVKNFN@PIDYLGDDTBAQEIJICMKO@WAEIGEGBEPCAEGEIUGAQI[AIMAKKCIDCGEA@IKMBGCKFG@OIECGMMEK@SGKGCYQNISEQDMK@GEG]COUHIOOCG@OYOI[AQNIGKDKHGJBAMKAEKM@IASDHN@PJFIHUE@MQDGEJGUAWQCGBEIK@IIEIAIFMBEIDGICMBGCCIIDIGE@MGGBEUI@CDI@ODEJSLANMHMIK@BXIFMBMFGNBNN@BJRDDBCNG@CEMD@NOLCHUN[GEFHFCJDBGLFXANLJAHJFJCDHFDCNBF`JBLALEFIFEHFFINEJEF@FGFBHNCHL@HGDIAGJAHBHRHJIBNGBET@DRJFAFFANMBAHO@ILJFC^NLJLJCLFHNND@FGL@JONANETMLAFANCHARZEDDEPIFFJFVJFCTBNJH@H\\AJETADF^BFGVAFIZNXBHFH@@GRDAGNCDBJNKF@JLL@FJLEFQBAGGAGPGJGNGLGDGCGDIJGPKRIHSNWLUHoR}NaFK@WDU@S@GH@JMARSSAOCMGWEWISIWBSAc@YCSAgSEEKQEYEEGSIKAEGCWMDMKCCJMCDOOGKOGEJCDM@[JICCFGLDDNAFQJBRFDLAPBAHHHXKAIEIEUGEGIcYoU[KUeIQSGESAeM[KCMIKCMQOAMKKOEHSAMCGJELMDSAEoUWCMK@ELGGNITBWSGIKCaO]OaUQQQQGO@QEIGK@EQ[GSCaDSTYJENOBEJEZAAIEGGEODYH]@QJ[LiJOHGFGB[JXqN[HPLWDmBe@YAM@SCuGeEwMWGQCI@MD[BQDAB_JIDgFRYD£JW@Y@EDSBe@m@CsEBJAJFFH`CF@LCLIFCVCF@LALGHBLDB@VDHCHJPNBHFARFLGJGLNFBJNHEFBJRHT@LLVFHCH@DFNH@F\\@RCHBTAPRD\\XFP@@FHBZLFHJHBFCRPPALLNCPLJFNHDNDJEPRND@NLPRAFDKPCJRTMHAJL\\JHDHFFBNJDBFLBDJHFBFJJ\\RHHF@FFHBPJCNBPFNPGN@FPLHEX@PKDBNJ@FGJ@HLJFEHDNPENHAHKFHN@FOLOBIHCHHJNCFD@JHJBLNB@NN@FB"],
				"encodeOffsets": [
					[141147, 36058]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Tochigi"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HHDLRLJBPEN@FD@HJLALNFBFJ@TLFLALFLX@VHVMRBXRdHFARTJDJ@FHP@NJJBFFDTN@DCRAHHRCPFAFNLEFDHNBHCJBFFRDHHRAFDBHFDBRH@`LRGJJD@HJLANDRAHFN@DAN@FHPB@FPJHRFGTD\\GRCRBBNCHFZIDAJHLRJ@FHHP@@DRHHCHBJFLLVAPHTFPBHITAPHL@HDTAFBPBLAFIN@HCJ@XGJBRCJ@JCVFDEL@^IDGLEDCRBpKHFNAPIBCTMNCFGN@DFROJIJECGJMLAPSLAN@PEDKGERSAQECHG@GHIJAFELBDELLPATBLDDGCGFI@GI@AGCGGAHI@GLEBKKGAKRKBGQMGM@GFETCDEN@DIM@GEIQDGCQDMHUCKDODGCG@SEOBEHAAKDGH@BKHGB_EC@MFIEIDECIUEHKGEPMGCCKHKFKJEDGRELIHQ@MFKI@EGWCEGSAWBCIWFECEKMKFGDKGETGDIGENKJKCIFEBMQCBUJDLOFMBWGICSDCAMDOEIPQIKDGASLOACPMYEDMMAAGWABEAQMQMEGO@GGEAOIC@GHGIQ@QDQIIEKEIMGAEMACDUBSCMRGJQBIDSAOEGEASGESHEFGGIJMBQAECBMFIIMMCQIQ@GDQAAAS@M@QBFKCEIDUCWNQM@OAG@IcCGCOC@CYCOIEIBMC]HCGMMESHJHCHIAIDIAGHHLAFM@CI@ESCKEMDIGGMCAGQDKHQ@CIGIKIcIO½iWOkS@HMDGDQBBGCIKDMFEAEKAHIEIBCNMCIBLJ@FIPEBENIBBFGHQFGHEJIHLP@FCJOBMFG@GIEAiBG@KCOBSAONFFMHIISFQLIGK@CCG@KDEIOCEDGAEEe@KJRHMHEJ[A@JMHCGIDBLIFUXARJDDGJD@DGLIHGBaRKFELSJSPEXIJNRDJLDBVDHPNLF@FFHAFRFDPPLCPHFLGPDPNDPKCETEFDLM@BFIBDPHDCHLDNRBFJHDJIDAJF\\JBREHHH@JVRF@LRJ@LMHCFBHITYDICCFK@MECCQAYJCDMBBGOEGBQRMBOAQFGAMBIHAJOHQ@CLFRGRDDCHHNHDBJAHJHEHFFENNLLDNPADJNJHDHCJFL@NFFIFG@KFCFBNGFFLAJNBDLLFNBDDAHFDEPDHVBLJEHFJPFJJCJOFKCIFgNEJUDIHPLAFFH@NJJJ@HLALFHLJ^JDFEJ"],
				"encodeOffsets": [
					[142739, 37797]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Tokushima Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@NLDCEWMGKHFNHB"],
					["@@@J^BLHNAGKGFGEFCLADHPDDNGAKDAHBHJHT@LDFJFEIMDGMKAIGMAIBMAMGCAHIHIBeLGJ"],
					["@@E@QEKIBGGCGGCNFHGBCHHLDLLFLLTAFMEEDO"],
					["@@HGRFEKIGWDERDFH@HE"],
					["@@HBBFPAIWOAEJFJ"],
					["@@BJbNALEHFNJBLLBJEHUBBNHBDHHBNJ@HKPJNIFMJHLEFAJI@BRJHDJFDMRT@XLPEZNDHAHBNJJBFJBNJRHDDJFNP@FJFNDFHPBTQJAfL@HHJANZNHEH@NHJJRBHINBNFJBPFPMF@PFVVTBPACMDEJEAOZKFE@EFAN@JOXHJIF@PFBJPLL@LCLFCFLNRHDRDHLHPCHILDPJHFNCLGV@DDbDPJFLLFA`CFDHH@FHFNLBVFJJJDXCTEHHLEXHHHb@VAFBLBHD\\CFIVHJAHMHCP@FHFF^GLDTEDFDRDBP@VMNMPBDMRCLHH@HIHABINBLPRH@TG@AHDFNFBRDDAP\\CJDZBLFFJLHJBJFTDZ@PALDTANEVCLHPE@HMHBHHHbDFCGKBGFEAKMQLULGNEVCNILI\\@HAO]GGW]GAEHQAAEVKLCNCCOM@ACMCKQAOGFFJKAFU@ETDEQBGQc@KNCFEGKICSBSFCGPAJEAIFAEKWHCGLGHDHCP@ACKA@GJGHADIGEIBDQLGCCHELCJIRABCLFEJLABJCFIBHLF@LALIP[HWT[LGZETM@IJOHAJWMOBIEI@EQIEEGOSIE@CKUDACJGIEKCGBYIISJ@LDDLHBAOHIQMHELDJADHX@HBLCNHNADC`FJAJEBEeEE@QCIGIA@GJ@NFHCLJXCPEXPXD@GNECEUCGGQEEBEGYGCCQCMMIBOGUCMIUKK@EIED_@GIEBIEGMGGBIMBAJMAGFECBMGCIJEGJQCECMGEBGCGUDFFCHE@CKIDGCCKFQGIGAQMSEMMKBEKOAIIMCMGSCIIWIGCCGEAS@GEEJI@AQKEGDEHQGAIK@GSMCGMGDGIGA@EZCHDPABIIA@GKAKGMOEKFKGEK@QCO@KABEPDZ@PCMEa@IBGFKCKBCII@CIAIBGVOGAFKHGCIEDGHQFCLKACJODQAIDGKMBIEQ@KFIEMDELUNMAQIMAEBFNEJIDBLGNKLQF@JLJGFOBGDIAGNFHKJBFLFFAJFNNJBRLYRHHGHCJFJFBAPUHEAWAKBMHEFMDMAOBKCKBICI@QCI@UCODCFRJABFTFDIPHRELGBALIVBNDF@`GPIBIHBTKFADKJFL@LGPKAGEUEa@KN@DELBFIBGEgEQKDI@OIWMII@UBKEMKIHMAIPUBYF@HKRSRENKBGFKNKAGBUOQBCCOBCAQ@CJUBECK@UGQ@MNAJUFSCGDOBKCGDEHOBKFGAKLIBGJCV"]
				],
				"encodeOffsets": [
					[
						[138049, 34665]
					],
					[
						[137819, 35027]
					],
					[
						[137848, 35055]
					],
					[
						[137721, 34450]
					],
					[
						[137881, 34677]
					],
					[
						[136869, 34695]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Tokyo",
				"cp": [139.380895, 35.75994]
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@FJFF@VGAOEKUCG@AHBT"],
					["@@DMGGWHLLLLDI"],
					["@@NKLMFKFUAGEGMG[A[S_OIKE@AJNZDP@RER^NJNXL@FN@"],
					["@@GEKAK@GTBV@DNLHBHAJQ@[AC"],
					["@@BQIIIFHFE\\RCAG"],
					["@@KA@HNNP@DCEIOE"],
					["@@FKEIK@ALGDLNHABE"],
					["@@ADOH@FKJ@JELIL@NPI@ERINNHAJFJI@EMCCII@AEDKJCPHN@@KGK@QDKPGNALF@EIEKB@KEIDMHCFGBMBAAQDEGCKBJJETKPOCALBFOECREHETHJAFMAFT"],
					["@@FDLFL@HEFFFPID@PCFUGDCKCADGH@LBFJDLAVDBEJ@NIPQCEDIJ@FG@ICGBICGPKGIIJIADGEIJKBEM@ELWAAHMBKGMFDHBNELPC@HCJIHGA"],
					["@@JFIHQDGFAFHJCDBPF@BKLILBCKJBNHFA@GFCNWLACIMDKCOBEAIDEH"],
					["@@BVHF@HEFFFEHFFFELGCKBEJG@MECAKIGGA@KODBJHABJEH"],
					["@@N@LEBK@IMEOF@PAFDF"],
					["@@J@FK@IKFMDETPA@E"],
					["@@JFFENFLGFWEEIBEFBHGFGCGFCH"],
					["@@EOCCUAOLGHDJJLJDRANO@E"],
					["@@TEHKFCHG@ICKMEIAMHKJBjJ@"],
					["@@WXU@KJKCEHQHGJAdGPECKHQ@EDGL@LMJAHGNALBPDFDLHFVFTCHBNKJGZMDQLANGH@DOLAPCN@PAFGFMLMEOLOIKM@KAGMGC@IAOHKEEGB"],
					["@@O@GCGDGPKLPJH@FINEDGDM"],
					["@@GAWJGN@\\LTRR^FHCRMNQNYAEOYGEQD]B"],
					["@@DFIPHNLDNBJCNDFDRBTCPGTOD@JMDOAIGQFG@KGOICCGGCOCYSEFMAI@MAMCIFC@IHMAAJEL@FHFEHGDCFRNAFDJLH@JHD"],
					["@@JDBFENFF@HLDLIPBVKFEDWFECIFGKEGHQEIIHIIEKDBKOEGBICUJDTVDBFALCLHBEL"],
					["@@IIUFAEIBEFDFRHHFEJPDJGRCCKMG"],
					["@@BHHHXBLGFGEISOIAIDEH@N"],
					["@@E@SPGBMHUD@TOPDXFH@PEDALGR@NFFEL@PFDDJJHDJNCJDFEJAHIN@LC^AFETIRKHIHU@GDIJGBGIQBMHK@KGEAOLKKOBIKBDICCQBIH]E[FEH"],
					["@@PTHRDVCLXP@LDDNAHFDLAJPCDE@MGIJICKICMSCU@EEAOACYJKHGLGFBLCX"],
					["@@RHXcYMKNOGYNfV"],
					["@@RVXLPGw]AD"],
					["@@GG[bIF@HRNPKGEX[CG"],
					["@@KJCV^DCeIB"],
					["@@F@QSMHAL\\@"],
					["@@@KSGGMJSNORIBMEKAIDGJGHKRKDSIMIKICUAMGAKDG@YGUSIAECDY@QHBFQBA[eAABZBBTWACA]CBEKAAIDIGIKPICQT@DUXMBA]KDCINAB[FU\\eOMBCRJRMIEu@CDQGECRODEJDLGNR^B\\eTYKEHIZXFDHEqiEDBHHFGJKEBQwbWJSAMDIGQDQKWAKDCFBHJHAHIFOBULEFMfKLO@MJQJQNMFMHKDK@KFOAKFQBMFOPKDO@CDWFIFKBGKDIKCAIKCMAQIBIJKECQ@CHKBGLAFODKHIKGAGKFGJALDNKBCLCdYAGLCLKBEKAGKKGMVDNHJIBEEKAEMGGAMDETADG@OCGDGJGAGDGAOGAKOHKIGQBBHEJCNQFHNUPENG@IHOJGJAHMDKRAJM@GROBEFQDGHE@SJKACDUDGFUAQDMCU@GDEHGDSBQCOGAIODICGFSDADOLALGFIDBHKPAHBJGFKFOBIEAEOCIBGHKDCTKLOAM@SLK@IJMFEHGBMLQBIAGBMHS@ADK@CFUHKJODGHKBKLCJMPGPIPMBKHEPIJD^CFOF@HINCJDTCD@XAHMCQNKNBLILAJHJCFJDJJVFFJH@NFLGH@NFJ@LJ@JHFPBLALGPGVODEPAFGXCJHJARKJBNEZC\\BL@ZEXKHKVETIREVBHJJ@NG\\KHHH@DGTDPCXFP@FEPBJGLDBWJAHFJCASDAJ[HGJADELFH@JDFEN@FCRAAKDEVEBGCGBIJAHDFGNBBHJB^EFDRCNDNANDNBFFT@RNJBPAjL@FLATNTVLBFGEIMMLC@QUMSAKI\\BbL@[EIFCVLH@PLJBHJH@BHJH`GAG^A@EJ@DH@TFHHDFHF@HNFDHCLF^@XAZBJCNIJATAPGNDJEAMPFBHN@DFJJ@FSR@HTDLHJBVSZCPFX@RLDGGIAKFGJCJDHJPAFGRIHJHAPFLEKM@EJGXFJ@"]
				],
				"encodeOffsets": [
					[
						[144850, 24821]
					],
					[
						[157681, 24875]
					],
					[
						[144721, 25408]
					],
					[
						[144683, 26034]
					],
					[
						[145572, 27195]
					],
					[
						[145621, 27192]
					],
					[
						[145545, 27246]
					],
					[
						[145557, 27316]
					],
					[
						[145597, 27721]
					],
					[
						[145615, 27766]
					],
					[
						[145596, 27811]
					],
					[
						[144255, 27909]
					],
					[
						[145591, 28294]
					],
					[
						[145537, 28351]
					],
					[
						[143682, 31216]
					],
					[
						[143115, 33252]
					],
					[
						[143187, 33841]
					],
					[
						[143054, 33913]
					],
					[
						[142947, 34668]
					],
					[
						[142841, 34921]
					],
					[
						[142471, 35045]
					],
					[
						[142560, 35145]
					],
					[
						[142611, 35353]
					],
					[
						[142740, 35520]
					],
					[
						[142586, 35191]
					],
					[
						[143168, 36458]
					],
					[
						[143146, 36451]
					],
					[
						[143146, 36461]
					],
					[
						[143190, 36470]
					],
					[
						[143126, 36429]
					],
					[
						[143251, 36643]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Tottori Prefecture"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JBAHBFGF@LHLAFLJCLGNNLCPFRNHFJR@JJZFJJFBFNAPIPMFFPGNOFAFQCG@CEI@BLCFBNLHJA\\PHJZDHFRDL@\\PDEJ@FFPBDFPNJBLEVAPJRANFHAFFLDCDCXOVPVIDAHQXLHEHDVCBBRLPNTNAFFAHLB@HILIHBJLF@`WjQJyTYPvK`O^S`AFFNRJRLTFb@BEJ@RHLAQQWKDMT@HOQIBERUZWbUbMbKREZAJC`ADAhG^ClLHJDPJPCDHHNFBHHF\\HV@ZNNHJLZBLDHFHCN@JHVCXFHHNFXAVDJIH@JGNCL@NCR@^GRE@CLADCRAbBHAVBbGjC^A^BVABbB^F^@dDX@LFNCdDRFHFNFJCNDJHNCFDZA\\FFDAJFHFDPODMHEZCfBpDLDBD`@tDLBpFtJBFP@@HLBJEXBpLLDjLZJFF@JHJHDJADHDTVJNADDJBJEHAVDJLCRHBHKHAP@VDDFAH@JDKFANILBLE@ERENOEEBICQJOJBNABMFGGOFCAOEA@IMU@GJ@LKF@HKGKFGPeGIBKFC@GDS@GLCFGHCTBRMLAFGEUHGGU@IEE@KEKHKPAHGbIBIHGJCEEAQIIEUHULGHGGE@ICMHM@MDEUICEOCIKEDEECKKIIASKDI_@GAGIIEWNOFYDAJOLGBWKIABQKI[KIE[GCKEAKMKGKA]BiIUN@JQDICIOICSBMEMMG@IBQCIDKCBIGOQIGCI@IFBPGPGHMFAJDLPVBJAHDFEJED]GILCDPHCLDJLJADOHILHJAHIHGCQ@QJ@FUPIN@FMAIDAEGCKBIGQHOIK@GJMBG@GFOCSDGBQNJVPHFHGNHJBHM@ADK@IDIIE@SIUJIAUM@COKQFKCEWHGAEKOO@U@eS@CMCGDICM@GAAGHEBKCEDIOGC@GKQQUISDID@NELOJDNOPAPM@ULMBMLCHIDIEMFCLGFCEIDECO@CFO@GHGBI@QDGE@EQCK@EJQ@aZO@CFO@QEIFWDCDMDEIIE@GFEGKMK@CIEAYDGGI@GECDIGGFIIMBQKE@KMMQDICMIK@EFQBEIKEEILMHANSAIFKAEHEAEFGEGM@EPKACFOACGYCEGO@CGKEGFG@EIQCCDO@SHKACJIHKACDKGKCCGFGGEBEJEDIAKJG@KNGBKAWKGCEG@IAOAIDG@WIQOEAOJQBKKGKECKBGDOFI@GJQGCGDK@KCG@KDGMIM@GKGCGHGBINELIFQ@MGAIICWL_AKCOAMEKDIAMLECI@AEUGKJ@J"],
				"encodeOffsets": [
					[136332, 35917]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Toyama"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EAGKMGIKKEBKHM@IEAGMMGEIYaE@KMQIBQDCFYTURQPIXOdSVULHJIGEJIJAZQTCHH\\EGIAGWDDGZEDEVMTCCHKDOHBRDJ`IAGZGNGdENEP@DDJDJCV@RDJECKF@HXVBF@bEXAdENENHf@ZFBFRNDLDFhZTFDFLDRLBLCRFHJVVVDNGLNNFJ@TGRIL@FT\\BFJLHLLFTHVFRHFDRF^RrH`BNDzDRBTLFJT@^BjHF@DG^MLSRK@GLBPCNKXAPFJADQNQCGAUBGKGDGAKFKFCLQNGDIACD_CKBEAKDIIIDEZQBEHCBSHGGIBCCQFGLCJMACEKOQHK@EHCIOBCIGDOC]BGHCBIECBIJABKCGHSEIKGFI@KCOCGAQICCMAIHQFEFOEIECODQ@KCEEGAIK]MIAKMDQI_DAXBRCBCKQFMQGEGGHMAKBEEKCCQ@MQAKIAOLSCM@IE@CGI@CKEEC]IKUCIIQACIEGBKGEQSI@SFGAKEQCUFOBAFMJEHIBIDMVCNMDOBIEQ@QDKQOGOHUCKL_DEFMAMFGJIH@XBFAJKD_GWGGM@MMAACWBIGEBKEIGMBKNCHHHJDCFBHJFATUFIEEEYFGFG@[KAEMIIPGHIIEIQQQ@GIIAAOOD@JIJCHEBANEB]GOJIAGDIOYKBGKAY_EISCGKBCGEEKK@GEFE@QICWDOGIIIAEKHEO[GEAGTEMG@QMICEKGYAGDEE@IFCIGIM@EEKKEYBGE@CSMO@CDO@ADHJAFJJHZFLAJOFENBDMXG@GNMFOASNSFIFIIQOWKKJAFKABHLF@JE@ALGECIEGBISAECOHMGDQFIGUKOCMGKSBOAIHQGEEGZDHARKHFJCVFHPBBFTFDHAJML@VCHARCPCBOPMJOABNGFBPJDHCRNRLIHANRNEFFJELJPDD@LE@GLDLCRHJDJFDHPJP@DHP@JIPGBKNEBMCCDHNAHDFANKFBHAJDDIJ@JCBBZBDPDNJARDDLB@JHLFBJPJDELDJIJM@@PFLAHKDEHIBKLGDHJ@JLFPCBDXBDRXFLDLVHHDRCPKLNJHRGNAVV`GVNHAJJFKHFFADRFBHJDLPAJFHGFCJCNDNFDJPHDJLTDFFLBPNBHHF@HJFLBVHJ@TMPAFGPPDL@LFHTAPILBVBLAVJPGLG"],
				"encodeOffsets": [
					[140341, 37847]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Wakayama Prefecture"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@IDAIMBBJCJ[DMEAPNL@DLHDIR@LDPABEPBFGNBHAAGGC@EMEM@AGIA"],
					["@@JFHAJDHAAGKC@EKBIJ"],
					["@@AABMPKGSDGJADP@HPOBEEIAOMAIFQ@BMGECLDJNFBFGLG@EHMBECET@HHH@FLNAL^KCI"],
					["@@HGLFFIEGKIFIAGTKCGFINAHBJHNKHDFLNHREFG\\HRATFDHHANDDFBTLLVCFEVDVTPFH@FEXATLHI@KJOLDJHDJ@HR@VJH@@JNDJHAJHBHIZFFGNDLALCNBBFLCXFHRLCR@HJPFLAXFHEZFBDNDBHNJFMZKBIFGCIRDRNLLPBHJFBNALFNLDHTDHJN@FAR@BHJBFERAJNDBZAHCFDX@BGDKDMPWAGAYEGDOPAAMDGEKFWFCFMEMJG@ELILDHLPCFG^QD[HMAENOEUGAKIGAKKKHGAGLK@EFOFSBKKKCOFMK@GMI@KNMHAEOIGQCAEMODGAGIEQ@OEMGC@KOAQCGGWOEIAQIBIQCAGBWKGGKNMJ@BEXEFKPDLEPSF@FC@ILOIG@GGIDKFCXDHET@HECILIDMLADMCMFE@KCKECDQKCKDOHCKFICMI@CIFCBIEMAKSGBKJG\\BFCBMFMGKIG@EXDLFZ@HHHBBHLH@HCJFBPDPEFDFHh@J@JAT@LEVQPEFBJGTLNAJCLFRHTBBNLHNAjUFDN@LGFIEKBIJGBIKM@GNMBCGMAKFKESDINKPAPKVCHGFMAGJKHYFCNBHEBKPGNFHA@IBYDGHEdOTAHDCHEFBHLBH@^KVGFEY]KS@GKMDISGEMGADQFGJBHC@EGGEHGBGCBESFEAGIMBWM@KHERAFAAIDKE@CLG@EG@GIKABIGKEHGFICELE@LPJJ@EOJMHDLHAYKIIDK@ECAGK@GHKCEMGDKCIGICSIBCTDNHRBLABEK@ECDIWIMAIIWKGIGFQGCGEBEESEKGBII@YDMG@EOIGBSMEI@KW_AKPMJKKMCMGDELEBO@GQEGQDFRKFFFRLF@VJCTKTG@KFMEIBIGIDDJI@IKGCSJ@FIBADI@ILEIMAEDS@ODGAING@QHI@EFUJEKM@ADWHICCGSFSDKNIDSEYDEHW@OFKAQHFFBFIFQDAHQ@HHCFIDMGCBBHKBKIOBELKIKDDFCPGFWLODKROIGFGNIBGFIZFNPNOD@FHDHJGFAH@LCFOJQJOA[FMHG@MNGBCHFFLFF@FJ@JKPVBHCJOLEFHPCCLN@BFEFJDLEALRFEFAFJDCFHLEDGCDII@ULENSHG@IIGECLBJLF@DMH@FYAOCGNEBDJAHGHMJGBMCKG@JEFMBONQF[@SACCUDCFBJFDANIFSHAFGD@HMIGFQDCDMDGJBHMDGHBLCDQHADDLIJCVEJMNMLUHcHG@SIOBACO@GHMGGIOEGDBPLFBJMHFJZ@DELHBZMEHREFIGIFBHL@DHP@FJEDNNHANF@FJFR@GLOBMKQAOAKHTDFLMD@FKH@FTBJAFFCJHNXADGLD@JNHLCFFLAFBLLJAHHIDKRNCHPN@NFHADHGLGAANGHMEKBDPEFMBEPQ@GD]FEBWCI@DNRLJCBJK@IBDLNJJDLXCHDJJBHCBEZC@CRBAHKFI@CHFHGHECKDHFAFRDnBFE\\B`NTAJNKAUAADDNGDA\\INFPMBAGOHOEQABFQDBFGRHBLMFB@JI@CDETJDAJBPMCa@UDGBMPHB\\CLIJEHFQXMJKC]RBFQJ_AQBEHHH@HHFFADNCNEDDRFF@FLFJCFBLJ"],
					["@@HECGGCIBBINK@KHMJI@IEGKCEKGAKRKFOAEMDEBKESIWKCMLUHEDMAOFAMMACCCMDGHCJFJ@BCCGSCADKFMABHIFCAID@PIJANDHHHH@JL@HJBHH@HVRFAX@FGFJNAJDDFPBL@FHPD@FHHBHHFNBFH"],
					["@@P@GIQESHFFXB"]
				],
				"encodeOffsets": [
					[
						[139095, 34258]
					],
					[
						[138241, 35105]
					],
					[
						[139142, 34724]
					],
					[
						[138336, 35136]
					],
					[
						[139268, 34827]
					],
					[
						[138290, 35123]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Yamagata"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@KDH UFTTN°VAgDMHMIMXMTAVARAXKDSF@JGJAPFNINWN@JJREHLZBBFXAHMCWBCEGlIJGTBFDLBFEH@JJJDHEHB^IPGDKPABCPCPX@NRFJGNCJETCP@D]FGHAHK@ERCHBNEX@JDFGNFXAHIDIPCBMJACQHI@MGKDC@KNGBKFEAIJG\\CZO@IDEJGL@LHJBP@DETHXS@CCEDIKIEIBODEL@LCFEFQHBLAJILANIH@FQJCBOGMFCCMFE@OHC@KTCBE\\ITHHCJMEGMEIS@IEGKCCSIIQKBSBCCKTENAEEFGBIEE@GCGAGGECOMMCIDCGQKAKIUBGHKAGNEFQAOFCCM[JIBIFELOPGDIGE@IXECGHGAKJKAEHGWQFGGGAKUI@KHIHELBHCEEAGDGMILKCENG@ETGL@PEDEJEAEFGDKCKDIXEMEEKKEKMKJEEGBIEBGEYMIAIFEBUHGUOGOWAMYICM@OGGODOBSHOAKGCGOQDMF@KGGOC@SHSIEGIOAMCCEDOGIFGEI@IDOECBIJGESDIAEJKDKAEDSIKKKC[_KCGMODO[IIECGBIOWFcEIGESG@EMAIBO@GADKOMSAQDIAAEKAGDQBMAMBEDM@GGG@GFGAGFM@IEJM@IKQBMHEBKPYMKKMCUJMECKQDSF@DGEKHGBQEOIKKECK@KFQHKGCCSJICGDGIG@ODMIO@KNULEF@RKH@FEJGKGCEQEBMGEEMSEKOIE@GUKGICIEEcBEDO@EAIJOB[FM@IBIAOEOACKGMMAKIW@QHI@KL@FIJINKCWDCLCHKFK@BHCHG@GIMKM@QEEEK@EDOIGDKEKDGHIDBPKDKPDHQPAFFPIROBQLGNIBGOEO_@CBIAIGQBECKBGF@HI@OPOBKGICMIO@ECKAQOGAIFCPEFGBCFIF@FKLSE]IEE[CKPEFE@ABCF@BEDEDADAB@FEDANQDUOGBICK@CHmZ@PKHYJ@FMLCJFJKTDHEJDNFDBHPJHXELDNFFCJIFLTIHBFJJCFVDBHCFDXCLBHFHBRJDZBJFDLPFFJKRJJAFIFGASBBVBHRbFFLDDFEHE^HVAVKH@NEFJRBHH@JJDPHJGFTDJDJCZGPBHCHENEJALLLCLBJGL@HHTJDHJBHHPBZPJBDDRBZNHH@HJRNJBTPFHHNFJHCDDTALUPQDG\\QJAHQNQH@NS@CBQBCJKDEH[AIEQEKHQBGASPQCKFEFUNGJDJIL@JGDSME@INALDPNJJRBPCFDZDLIRBPGJ@NF@VPAFGD@JUFO@ADKDEFSAQBM@KDQAKFMBGDBFIDAHI@IHO@]GGJYLKNIAMHQFINGBCBBPDJHDLNDLAJNLCFLHCFLFBHHLNPLVDJFD@NHHLTJHAJJD@FNHBHJJPCNLPJHPNBFH@HPNTCHLNDDFJFCFTVD@ALXNJDDFHDHHXNT^Td\\xLbNdLbPjBVHRPIDBRSF@OROHMFGFFLJCFFDLMDFLPADHPBFFFJGDGMUFN^NCFFJRHXJRRrXzFZIFJHBRFFFPCF@JGB@HGH@J"],
					["@@IJADHPHDFHAJLCDEPGCEKAMGIQ"]
				],
				"encodeOffsets": [
					[
						[143227, 40058]
					],
					[
						[142895, 40123]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Yamaguchi"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@FHFG@GEKFQHIGKMEEEICMJLRFDRB@NID@PFH"],
					["@@HFNCHHALBHJHJ@JCTQH@FO[IKASKUFEDEN"],
					["@@YKCF@LJHRFDEN@@DLHH@JHDCXE@GHEDDJEAEFGJAHEFDTS@INGNHBEQIMEMFOPQDECMBOACLWL@NEFOBGE"],
					["@@EBEL@JHDHEBMHBPEDOOJMGCJ"],
					["@@FFGPJA@GLAFG@MEGIDKEOBOIBEIEMFENDHPCHBL@HFJDDF"],
					["@@RFJ@LJLBBCNB@GLCBGIKHIODDF@FQ@ECGDOCGIE@@JCDSOBGI@HOFCYGMBOAAFIFODCDBJCVDFP@BEV@DHJEd@HH"],
					["@@CJAVAJ@PHFDGPINBDGIADKJATKCQQ@EIM@KDGL"],
					["@@PBAIFMBOI@MEKPDF@LJJ"],
					["@@AFLTJEJAPEGKUCAIE@GN"],
					["@@EJH@FHZQJBDNLADFLC@GGIDIREJQGMAICCOAUFCFRJW@BLGBDHGJI@QL"],
					["@@IAANGF@FJJHAAIHEBMEA"],
					["@@@JNDHGDQOABLKB"],
					["@@JD@FRIPEBCIEAIGMMGCEIAWICNC@KG@LDDLDHH@PBDTL"],
					["@@AODEEEINUB@PNHLDJO"],
					["@@IAGCKBEHE@SL@JFJHHRK@IVLDLTAHIFHCFFHEPLJBLJFNIHBFGAOEDMCIGFGAIIIUKACKICE"],
					["@@JC@MJFFKFGO@EEIDSAECAMSEEUMBMC@GEEDMQGKJMEGDBLZFBDPAHJCJFVP@FHPJ@LFFKHKFCJ@HLHHE@GLGR@NC"],
					["@@KBOF@FRBDEPB@FCNJAAEFGDOW@"],
					["@@DHNCJLDLIP@LHDNCPITH@FAHBHJB@GRCLHDJVIHOVIRCLDTNDAD[BCTKFG@SLIJARJFEMUJEFDH@DEFAPHJAPFHHKJFFJAJHJNLERDHCPBJDJJAJEFPHNPPDLGR@@MNCPDHEGKEEOAQBAKWACKOC@IKAAHKDI@GE]AGGBEAGG@IG@IJCGIBOJEAQDGI@IEAFIFMFGGUICEG@CDBRFHNHDHILGGCNOHKAI@CFUDCGKBHHCHG@OISMA[HCGGGDKJSAKCIFMAOEEBIEAKMQEPINJB@HAFKHQF@HEHKDINDP@RGF@H"],
					["@@GTBFZFLQJC@MKAEDWB"],
					["@@OHFJCDHHDBLEFGOQ"],
					["@@IHJBPABLCHBTDLPCAGGE@EHEEEFIEGBOLGFIREHIKCQBBNOFCLG@CJMD"],
					["@@HNLPJCFHRCYQMGEIGAOMOEQFELDJNH^AHE"],
					["@@COIKLIAKLAHMCMDUIGDIACJGNGXBAOFIAGD_HADIEGGBKMAEO@@EIQFADOGGJKICMMMESGKME@AKNGNYACDOLBJFDAHKAIIIFMAGFECKECHQHBRGDGJDHCRJPIHBFJNJTITFDCNBNCHDJECUMSBICCAKKAGGCOGAKI@GHEAEBGAEJQNEDQIMFIDBPIFBLE@OLCHIN@HCFMHDPEFRNEHFLIRCJDJAFFZFBFCPLFTKHHLFHJDJFFFELAPMNCPUJGBEL@DLENDDPBHJBRAHLDBHFHLBJL@HNJLCJF@PBNKH@JMLETONDFLX\\LJFBFCXHJFBBHXDHLP@HE\\FJCFQHIJSEKG]@GIEDMFCBKCCEODCLAAIGMDEGGBGAMBIJBRDBGHEF@PK@QJMHCDFP@DFH@HMAIIEBICCFKHACKBGTODKIGCKDILMJGBKAMCEBGJ@JEDIHBBHR@BQRJHCTCREGOKQJCHFJGP@LJtDBKKOOAAQLFDCKEBGHBNUF@DKQAAEXGIqDE[BAGE@SHCGaCBSG@F_JUFKCCDSCG@QPWHACICWBQKeKOIICGBEIOGIGMECKDWEECWCUA]DDIIKGLCGDCJQ@WBEDOHKAICAEGHICMDILGXICOFETGBQCMKCMK@EMC[HOEBLAFDLCHBNEJHFDLAHGF[FOHMJSFAPCHK@CFSDAFBPGD@MK@GGYIKIMJSHGHMF_XI@GAGKFKMDCD@PLDERGLKJQ@CESBMHCLGC@JINEDXMNKDARGBCJGGCBFJQFSBEAMDACFEMGOS_GQAJKL@DDTCAIJBGOMEMJCHOBIGODGFI@AFLHRBDFILLJLNJHJLP@HFAHJBN@AHG@GP[POG@EQOBGOFLNFPLLL@INaC]@CFIOOAGBMNXVS@EISBQIKD]IAIECM@HHCFKCMDCWSDIGYCAFMJK@WMIUOKEBKH@LDHIBWMCKSO[K@IQEQKIAODI@ALGDIIEDIBBJFF@JIJIDAAQDILIGQTOICIFEDKDBNEBGYKGEKBEEDEHCFGCKK@@LCDMAECCG@KI@AHEFQDDDLZGPSBKICIIOKGLdNRDBYJGAGBBRDJ@JDJIDKACEGWHG]EBEVE@AI[OOMEKSKAGIDKBIJIOAACOIEGKEKBKDGAEGK@KQIBEOkQECKDYDEHFJaQEFHH@DRFBNILIGBIGIQGMFBFVJCHF`CAC][D@KaEQE@OM@SZIH@DKLBLHRCHBHL@MP[RHRM@S@@IHGGCEJQLGHENIHCNIJOLWDCGeLaF@PGFCFIBEGCIGEHEAEQIWQCCECBAEGBEGIBGJCEGI@EM@EIISGGGUMOGKKSKEGKES@AILAAGU@EDBJJLYNLLANHJ@JMPAJBRFDFJBTCJUJPTFL@LEL@HGJKAAJKFGMGHBHKF@HIDHFEHGFCRGFMDALJHBbCFDHPBFCHLH@@KHCPDNLBJID@FLDHJFAHDTVDPCFJDDLEpWBCDFJ@FFFBNERQHCFSLALELIDCJSHIHAFKFAFHJFBPAJPCHDLLCCJDJHFGF@LCHDFCLBFPFDJALNBJOTEJEAKJFHJJDT@FFPBNNPDBENDHHNBDHLBJENFFALDHEPAF@A^KHODALOPGIKAW@QDGAKJK@OFMEAGLGCEBIOCODINDDFLL@PHLNCJHPRBFH@LFBJGL@\\KHCAOJKXCJ@PAJDLCJBFFLBJJNBLFFCZEFBPCJIF@FIJDRBHBNKHOEKBGJI@GL@JMVCZHPJJDJLBLFHHUJICODCNCFBNPCLBJFFHIJFLGDETELJHCPFDFNA@GFCHFXEFALB@FNBHHPDJPCJHLNLLEJDHIR@NFTIFDIHFFAHJ@HIL@LLDJPBBHPFIFRFSLOEIDIN@DNHHCDILGH@DHLBBHTRDHJBJPKD@DLFRINLBHHLAHI@CHMVDFBNPLFLLGLBZAPALDDNPPBHJDTLHAJHHNNFLNAJDHGLJJBHEJFLADPJNDPC@JPCHCN@DHJHSDEEEJJJAPF@BNJPJBLJPEPDDCTCFKEG@INMDJIHFH^DFDDFH@HLEDGJXFLALN"]
				],
				"encodeOffsets": [
					[
						[135315, 34561]
					],
					[
						[135115, 34591]
					],
					[
						[135360, 34613]
					],
					[
						[133920, 34921]
					],
					[
						[134009, 35188]
					],
					[
						[134371, 35256]
					],
					[
						[134280, 35601]
					],
					[
						[134562, 35340]
					],
					[
						[134423, 35333]
					],
					[
						[134021, 34759]
					],
					[
						[135237, 34681]
					],
					[
						[135434, 34819]
					],
					[
						[134737, 34836]
					],
					[
						[135532, 34768]
					],
					[
						[135000, 34749]
					],
					[
						[135270, 34656]
					],
					[
						[135180, 34667]
					],
					[
						[135346, 34741]
					],
					[
						[135584, 34831]
					],
					[
						[134158, 34828]
					],
					[
						[134858, 34821]
					],
					[
						[134916, 34851]
					],
					[
						[134852, 35514]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Yamanashi"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LKHDVGRBPGJDL@ZODCBQAMLENEH@LMLFR@LEVJXEDMNBHCHILIL@NMD@JNTHDDXCHCRDRHJKAKLMRMNDBG@WDCCSDIJM@GPEDEC]JIFOLGNAJOHONODILKLAHGPCLIVGDEL@BCT@NGHAJBRANKHAFGNEJIOSGCCKTYGO@SFCFIHCKELKGYICEIDIHC@QDIAGMMMCEI@IDKMMEISIQSIBKEKBQGMDCBIAESMQKCEOMCKBMKUBQAGKKIKFGESAIEmaIIAOHG@KG@AIMGEMBGKEOCIGICIGQ@KIURMCIDOGUEGIMGKDOAQBÓYODKCYACESAQAQOJq@aEI@QCUKHGBKRIIMAOKG@GOOMCEMCMIAOJWOUFEAaBKAGBIHG@UOIAG[OBQHMACLYCQ@GIGAINM@IDCBMFQFCFOIKFKDUGEIBM@EICIKEISICAEGEGBGJKDK@UFIA_B@ASDGFENIPKFKDOCKNEZBJK^@NOPIRMPFLEHBLAHLRCLKNIBCJOEMFORUBKGKACEOEM@CIIEGIQFAFKHWFGFBHGDBHGDRNENBFGT@LIFGAKHIDDPLRLFDHAJLJLFANDP@TGR@HMDGPAHFJNDDPFFDZAJBZRPGLENIH@HFPAVMFONBLIP@FCHBFHJE\\IB@NCDFHAHMFADHZGLSACHIFEHERMJKF@PCJFF@PELGFKNBNJHVJFLLDNNLHFJ^NGLOFGJG@KJEJEDKCOHMNFRJHZX@HCFFRLLHPFDJRFDFXFNJLHDND`UHIJKLGJCTPTZJPJHXVDBHPBHPTFBHTALNNPF@JDNPJBHV@TIdGPGFBPC`MPIHOEIGG@KEC@GHILSLBVOVFPEJLBLAHPBFLJHFCPCRGBBRAL@RJHGLDRIHAHLJBN@PIDGLAFGGIAOB[HIVENFLGPJTAHD^ILANXBNDLLDJFFHLFDHbCJD"],
				"encodeOffsets": [
					[142059, 36772]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Busan"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@cPYTERpNZIXWRkPIOQaTMR"],
					["@@@\\LFPMHA@qAMVLJQ@[_yNEQ]UDDlYFBlYNGZTNxH@N]@"],
					["@@fLKveFib@RVDxELHpN`CFbUf`ZfBPNPMj\\GVD`RZTLhAbh`GXVnFH^XXCN^zXEtYdTL^GPRH^QrPhA`[LeASfKJMMYUBGNeKO]FUOo@sYaAOcQPSSgiGE_gQQJ_OeFeKRsJIKaUBcQIT_@MHJ^O@gMASOSWE@aOCJYSSSSGFcL]QEGX_GBS[HSLxa[MDgOAOcALUCCiIS]H@AH]V"]
				],
				"encodeOffsets": [
					[
						[132163, 35910]
					],
					[
						[131910, 35920]
					],
					[
						[131914, 35941]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Chungcheongbuk-do"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@tbEXd`ZKJLQ^pV|ATUPELXTFOZeVN`c^aHWZkBHpqHCnSRUH\\nQ\\^BbLpbPIdBJTlTa`NZ`B\\NPC|jAh`VvIZPbAz[TLC^XXf@JPdBpFhQXhEnab@RJAZPFDX\\dT@TtNFTV]razHZNh@jV\\EdSN`^GVXDVEhWhvl`FPP\\B\\GfQJeXGNQU[DORGhHbB~TRbRJDRbKXYRERLD\\l\\h@bghFbkbDJJfDVNZOGa[CCScGN]mFOIGULQhQXANP^DTT|AZGNJdSDOOUVCZMXYhJxEfbdajUDOfGPHZSG`XJ[pSOG_iKN]JCSmBeYRSIOWOEMSK{KCSMM}YYUEYeKFUQiSOCY\\EVU@[]]EWUUD][WRgP]CW\\UHmrbQWF[cAOOLoIERiBiZAMkQEQqMeZOAKUDUUU@YYaFQbSHM\\MF]m@wfUFKQgEshYgAY]DA[_BwCFSpGHS\\EHkGs_KMZiL@R]`GYOQ[ABiSIUJUDar]LF\\GRDj]E]NMpMBaJIe]OBDQsR]a{TARWAKP[KU{e]kLQFiKPfZTDavS\\QDShMVHDRT@dR|WRCacRWHWPAD_YK[V_HWCm]PmZ]QOB_MO_KDWUWHYA[qcgHY_eGQYUDY^kI[McCYWkCEVyTUCwT@\\OR]OC[WCKbaXK^[VIfe\\IRHbPTAROP@^NZAXgbWAaKKDFXUFIRaUoEKlD\\TTO\\PJEVP^C\\fVPfCbTRlDWXETyHG[O@Yt\\^CN_EOLL\\WDQaQOYBKNEEXH^QX^FGjHNQfc@Q_DYCS\\aK_@Bh]p@VUCPtdPD\\mR"],
				"encodeOffsets": [
					[130341, 37571]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Chungcheongnam-do"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BMWOE\\\\B"],
					["@@LOZFJ]kIKDIlRB"],
					["@@CZhGAIaG"],
					["@@D`VEYY"],
					["@@R\\`iYI[FDR"],
					["@@I__ATZVH"],
					["@@MRCXXLCT`TlJPILWB__ObOHaGKL]@[ZBNOPRQUU^Q@I\\eaak\\_DSSQHQXJVoFAjLPOLHlQ^FZEKL"],
					["@@_JµVDRjE\\Rf[AOnGEI"],
					["@@ZThRl@^MRHPn`bdpOLL`CPOSdkrY~IJWXOVGTQDmrGGolAXYbGd]M_fUPYSEKWOFSV{BoUR]IKYLc_FWsaSJgGWJOX_HONeVHOGcmTcZDNQQeCgJOGWFelO`c^CKWUCMUBQ_@@OV]UWLahIGQBUXUGabSVWZCTYRRp@GeAMENYckEYDeYIRYx[EWFaf_JJ`YDURAPYTh^XG^LNM\\F\\`DXMGYJURORgjO\\WZNCL^PARnVFHpFbVJQVEEWLCbLXBhaBWMY@]POBQOSGaJQf[Je\\UL][@K]HYbOaOGceLSX_AOP{BDkKgsYQRWSWFONYEMRG\\QDDVIR_OaY_ZWnYXFZM\\AVOLNVSTOX[@QWQNSEEUeKoHSq_\\kBEYMC]TYUQAYNWQBUWOmXUE_\\WJEjH`oZaCMTYHQK[DoT]IwagNUMWsAUY¡_GSkGg@iIKMacgJHSGGpHLOTYTWBEvZLWX]FSJan[RaQkfeHYC][@pt@bdLTONLLOpA`JHLdPLK\\[hUB[nVJLPpHNPIPtsBIHN^DZR^XJj\\@VZAXIEYGoqq[A\\YPF^QTAVFfNHDVOR]RINNZOd@RONl\\BJ]lJnKT@hQRWsDc}WRyJgJENCGPUOU@N[@_Rg[GkcqYWNLRBbPFFbIhW`iDFRG\\TNB^MTQUoB@_MQ]@WOGQ@KrVHNXWhJJXUZ_FW`eJsGV]EUoYGTX\\CVUF@XljfSNJTTEN{\\FFVWP^XHZOZFNYThBLZVYZFKPTjGPIxNLXGNWO[PWQMNYXMCa[uOMEUpIo[OADoh`JCfRKLP`EGW\\B^PBVMRXLnACXPILcBAXZPYRu@AT}NCRWN@@Zo@mHBXjPNBlMFK`NK`nlIJNVTLjKR_^Q^BJKfK¦kXEÄA^M~QUGI^qCMTWVADcLYPIQjPzFG\\"]
				],
				"encodeOffsets": [
					[
						[129178, 37565]
					],
					[
						[129462, 37955]
					],
					[
						[129104, 37091]
					],
					[
						[129288, 37160]
					],
					[
						[129378, 37213]
					],
					[
						[129600, 37349]
					],
					[
						[129354, 37440]
					],
					[
						[129493, 37228]
					],
					[
						[129955, 37790]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Daegu"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@mSBIGkGkL]CaaMSI_B\\F^fATWXeZ]dGhLHjKMV@^Z@\\UR}`SZ^dZpRPfJLGv@TNBTYXgPLg@WH@XLRPvR@blRRfHFPpOQLIh@VKDbTLdlDNK|@X\\KP]NVXJ\\@fR^nxFjBFFzDPKnKRYEK\\WIiJSO_fYHQEUJSIOFWQSaKQKekRceW]GHkTYOgFKaScEWSuIILFROP@ZkKOL«sNeGU"],
				"encodeOffsets": [
					[131616, 36541]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Daejeon"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PB\\PnC^RFZXN@\\PVKPn``KRWG]FWFLMZARPRbXCK[PK`FDM[]ZsP@H\\zGFSXWkCSQDaOeeUD[O]FUOIP[SSC[LkEGmUBQ]ODKYM[XiPQhQPIVHZWN_CE[N[KMH]]WSgOZQBCV_ZIIe`EbFXw\\QZZJCfFZdlMZNFBHf"],
				"encodeOffsets": [
					[130338, 37290]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Gangwon-do"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`RALdJHXNFZSbH°hhHPI²UzH^R^ElVvOcRJbCLOpKhNnbvR@BQvBrEnDJRfDDKvXTMbB`ZXsraR@dRhEZJF\\^@FKG|OVN|IjBbO`CXDlVzffIRR^NnJzf\\|zFVNFFXXbPzARTX@dOLLAf^Fj\\ZJRa^a`_ZgGKVYBaluAOzyWGBYNWjq|yKKJ_b[@Y^[JkZs\\gnsI[QSh@PYEKDqn{NUAMpouCSZ]^UVohePYwG_fixmFY~qLMsR]ji{DaQOGYTaq~iHmQIDUX[EIhszubWNeCML_d]gFgRSP]@[h[V@Da|_A]XOTaSaPYQ_Lq\\YJUe@uYcKMYmDK]aMKMc]NSMgm@eECPYVITO@cXYHQPU@WNiOU[G[qVa@RuMUdoGYsWOAMeB[GcH_`GTwBAPkEQUWEI]RYBM[K[V_HeGWZ[J_DOJoTI\\_WHYTOGeHCPiVcbeawFgIWZYNUDPVCPcTMIYH{BSS]CMOWBgRKRHVPJnEM^dHDT\\DHbYPUMeCIIaCalgEahg@k[C[QKQFWZaLCQQIQa}SaAgGQHCPV\\MRWHIfeR[H[AOO_EukXgFgCUUW]HM_cT[FiUg@YMyGqbU^SJLE`DXThOxd`IjGhHERNPZRHK\\A~SFOZgHJThVX`dR`@ZDN^aNgFGT_ZQOaHcRUGeHWGWJAR}dCJ]B_`]HUNoOGQa@KIm^APbVGLFlXKJ_SaN[UEdlFTKRcj`dY\\L`hL\\RNZ^PhAH^TdIfB^QHEX{RYCaLHTKjSHmCJ_TKf@\\MFDzM|UPQQWEKXoHiSII_E@SkLOduBMR@\\PNFnTPYL]@[c]OMS[Qe`YNGZD`SEOVAdSJJf_HcSaHMnDR[\\"],
				"encodeOffsets": [
					[130147, 39200]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Gwangju"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LDVjTBO^ZVVjdM`PAVVXP\\`JVAQYAOjEPOnKVLdFbJJ`E^XVB^MFWTIRWCKRWPEMUTWVLrBhe]]JyuiDUkKcacDYb[QiA_MSH[WoMGO[@SRaOQ@BbQlsba@HKGsLGNF`ST"],
				"encodeOffsets": [
					[129685, 35990]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Gyeonggi-do"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@WNBPX@A]"],
					["@@E``DYc"],
					["@@VXHVXNDjRHEjO@YVYHHz\\B@lL`JIlK|CHaC_UYLS@SvCrlLeRUFUNEReL@jbZ[lHf`lVPW^DJPTwVQhBBXVAX`XLXG^bXALVRLFTSLUAH\\dvhD@\\QfgQMKO_JDfZ^BpYLPPCZaDCXHVGTJV]RMKReCAYaMDW]UJeSK[ZITSJqYYAEoKQBcIMgGCIqKnSVKEMmMHgFcIORa@utubiHIS_UO_]DKKwWil@NOh_jTHCTYJN^C^OPCRPpATUTfT~E^MlFZZlL^ENZG\\^nfRDJM~@vLXURM\\ApdBVInBZJ^ZT@\\TRCVbjFXPBRbd`PJtLFFfV^bEV`\\Hd\\rDHZgT`XJ`KJZRZdX@\\fVJdh^AXLRZfH\\[CQNmbGdT`GIeTIBcPUTFC_HYZMf_\\RNT^P\\d^@ZKSOEmOM@[NQvAPclK@T`FJJjTpGLWXFRRVON{CyNE@[Le`SInDTGLiGSbKZD|QFWRGA]JeScG]gB]OMY[QgKK_Z[_cdiLQESkFc\\VbM`TLIWEkHKaUBOn]LJb@HRpPVM^G`_^ADI~cBQXIXHfGVHdQbGRP`YHShEbMM]YC_@cQW_gUIShGPYTEB}L[QGYMOFQgGHJic_PwSgCWF_IKMESsS@[cCWOEBYQIa@mbgFRWEgAocIOe@WWD]SKy\\aBYOuJ_UBg{iOD[M_AMYb_kSIScAOJoaaK]AR[[mWPIX}JqZclTOP_DKKoPacm_OQG]Nk@gQSYEX­MWNS|XZ[hI^gL]EUZRLVI FEJBYZ@INFXPNÓ´BNObLZXHYRYISJCVPXq^LZiPEPYPQS@UY@WRQoMGehX@IjdDQVHHG^ONbPX\\jÚjE\\XL"]
				],
				"encodeOffsets": [
					[
						[129426, 37990]
					],
					[
						[129658, 38050]
					],
					[
						[129784, 38296]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Gyeongsangbuk-do"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Y^PhTnBPNfCXPNUIYT[OgLSSKkKQS[AmHULgJOTFf"],
					["@@PI`C\\IXYfH`G\\U\\LANQZJ^XFRVlFBOxAHS`_dG\\HfABNXPZtpHVcvNQb@rUH\\V\\jPXMV@ROZGdWP@JSZUDOfFn@NhMTd^LNbNL^nCNZdLvZf@NSJaAQJWlgv_[_F[KGPSYV{DYK{JUIKHmTi^_\\kJm`kSSBWRgKIHoacaMOMMcSSMcJgKMBUT]heC_PE_UOHY@kGQFYMa£BWS]@G[LSKME]X[GSLOCUYODSXUN@NgC}m@]UQA]_GMMW@UWE]RYp^|OWGWDUOHM|c^ItNA^TDXTLV^^TNbTBXOASTUAOLGS_gUCFemSGGYZmEYQGAOPSMYUyHMSQG]OGFUQD[YqF_SWAWYGEW[DsV{POCgTi[KMmAQ][T[CQHKXLNDfGNqLAJoT_ESN[USDOPSDOY_Ia@u[MUCoZUOGsNM][@cOKOcYuXi^oJoQcHC[eoSOURWCUMQ@GUWWyBZkCOJKVo@MHYGSW]HcKkLWXYLAXkPAQPHTHVMf¬tPKlL@YPOEQJKvJXTdFbTELPhSZGl^HfXQdflRLbLRTEXJPITFVGReZP`ITJj[XFLQZmLOLyCEEiAwE]meQ[@WIMUO^[L@WL{CMckSKCaULg@KJRoPEOeGQQakQ@OuKQ@WXGh@KhOZWASSMu@KHeIQOYo]cTY~_VQ@[]YU@NiLKGHg^cfYXWBS]e[EQDCbITiHXSG_DIKa@YNSECUmBUFSX]D]GCXLRZAbXN@DX]²sVA^UR[CSJM\\Dh]BWRuRgWkLeK]RWfUMqVOKWHBfU`wKQLBbEfv\\Y~A\\a^CnRZfHZ`hGrdB\\GZVXCX`LNPA`RPY^Onn^XD`G\\UZLC`OBGXQXbdQD{XcQS@CQUGgNCT[RuTCbYSOeLEjKR^l|fLVO\\BLQXSBb|Q^RtCPAf^IJAboNMNF^i^QC[HKEq^CbVVITJAj\\BPRHZ^_@QjKNY`LHtGl[FGToHETxD`AB\\^CBZZhtghFLRVExen@E^[NGNaTERZb@ZVVCVLVPBfYrNFRlRBNjYjAQJFKpPPdBE\\RXanqVGX[^DhOXQ^\\CVVFX^^@\\UV[FDZTPRjEVfLFZZV~ZNNDT|LTLFNXPJPQTfZnADT^ILM`jPH"]
				],
				"encodeOffsets": [
					[
						[133945, 38404]
					],
					[
						[131740, 37955]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Gyeongsangnam-do"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@VdNIUWMA"],
					["@@CWLITVVCM[QAYNMM_DcXTLMR`FtQ"],
					["@@]Pc@ANIBS"],
					["@@LUWCY^fC"],
					["@@PHfpV\\GM[SSKeBO^BG\\\\`zeDYS[TQ`IcMYNKEs^EW}C_LSjPX"],
					["@@PGBY]NLT"],
					["@@SPPJVIQO"],
					["@@aEQLTlb\\NKQYBg"],
					["@@@XKLLX\\EHQ]SZYQ[YXLN"],
					["@@mTGVTJ`CPMBWOI"],
					["@@]P@NjGKU"],
					["@@KXRFIVXPJKUWPSWK"],
					["@@NdZGMWYC"],
					["@@FVTAGYQF"],
					["@@OBEZZFHOKQ"],
					["@@AToRUDGR|@XUV@^TVDlY@y[sWMcJ@ZOVsLbR"],
					["@@YMSLY@[NVJPOdFZK"],
					["@@RZj_FedKOWYQgRFPUbC^"],
					["@@YDHP[D`jjHJWpWIQcDFUmJ"],
					["@@Wi_KAV[HATpPVBRM"],
					["@@[NMjC`dlbRh`RC\\[bOJTdLBOnIOncfZVAX¦ELtjTMTR\\AV@NQE[Q@YWDq~wWQBWNWYEUk@UVQ\\dTHTi]WNYUIQP[M@SPGRNNOIKhJLJKXYIqNICAePM_WSHQKCQdmhFB_aTOIUD]OD]gWcPYAP^bFFRyNDjbBGNcLWSURp@hVTULJZ_PUWCSoDUC@US[_^KV"],
					["@@bFZZZNB`ORCV^TDXXbnXR~sFQT@fbNEZcbMfYFMPiVDVPR`ZEPJZ`XQrRhTNN|`XF^CPZTGLT`XfPjAJTRRMXDTRtTZD^VREZ^EPb^fLAaRKxLV_AeXGPLrUVNXe^QfLlKhXvQXQ^ACgN[TI\\DVQB]tU^±CWM@aWYBKQDW^H^CTWVEnADVTFZMb@JL`CTHWjGJSDaRC`ATJNbb^DlKlHJHAnTGSROBlOBWZKXWlKdL^GTXZHNGp@LUPIlDYzAXXHVR@VNXDVQTPfpD\\dGpRpIj]vWdZfKH]K_MAe]oOX[NBRSES\\KnHXHRIdgWF]~zalFZECQbS[uQGHOK]cSsZWF]yDMWWG]mEWU_HaggBSKY_QUCHi[ONOMeA_YVeEa_DoMKGwFUC@QjafELueKGM@[@CP\\^OLoU[CYLIOeHKRSKWLZXCXU^QJQIP_]EIV]BA^[AOUUACjSNO\\GmmLWREf}FbOTSUGCWJIcOf^`{LBVUPg]_@ONqQYNUMn_QUi@YaYN[@Ymg`AZPDXbPFTLKR\\TpG@c[BGIpKGOfQDQgU[[}LkOrGF]YWK[HsUK@cJSxfUTZDXkNAGg[ACsaOcBYMUB_dXVpENLFQ`UUiBKNLCPUJRTAPEP^ULDVIZgEiSCgOM]@SLQn_L]EOHkULQM]LaeBMLoLYI@QQGU`UEQZ@VmFMCcD_\\S`jXCTQ\\@TVZWpC~W[HMG_aS@UVKUqYX]_Q`YHjeZM{q{eQFIfJMGKPgIa[]QBGY\\kF[lILKBabG@RbJ@L^RdEnHXWbALUGWSICWJYDq]OManYiKc@P`YL{]LMdEZNmASM_GN]F]MO]K[D]TU^_BLdTDMdQHAXmGdTbPL@P`bbVI\\bh_RU@QRMUYSQLcGOFOVCRUNfhL^B\\YXQriLS`ePkn@jGNvQBUZ[VKbFXCpQv[LUpQHB\\"]
				],
				"encodeOffsets": [
					[
						[131651, 35464]
					],
					[
						[131348, 35475]
					],
					[
						[131459, 35467]
					],
					[
						[131647, 35909]
					],
					[
						[131041, 35712]
					],
					[
						[131041, 35821]
					],
					[
						[131210, 35660]
					],
					[
						[131735, 35821]
					],
					[
						[131603, 35786]
					],
					[
						[131272, 35519]
					],
					[
						[131382, 35580]
					],
					[
						[131540, 35535]
					],
					[
						[131613, 35641]
					],
					[
						[131580, 35627]
					],
					[
						[131580, 35566]
					],
					[
						[131462, 35641]
					],
					[
						[131646, 35590]
					],
					[
						[131545, 35641]
					],
					[
						[131301, 35641]
					],
					[
						[131288, 35690]
					],
					[
						[131580, 35670]
					],
					[
						[130640, 36157]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Incheon"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@MNBTbPRMU[QG"],
					["@@XHnW]EgV"],
					["@@^FFYkJHJ"],
					["@@WCWVNTRAPS@O"],
					["@@RQtUJKpQkQKSkGGZQCOPMd\\j"],
					["@@DPX@LT`DfENK@YWSKWi_IJg@E\\Jj"],
					["@@SISgHmVZJ"],
					["@@cRRJXOEK"],
					["@@SICX_@AXRJRUDORI"],
					["@@UQQBB`OLzNVOYY"],
					["@@FCKkaTOVxF"],
					["@@IOW@efjJ^_"],
					["@@ULvH@Y_F"],
					["@@JP`CTIhNpJVAXJrMFYZOmIaUOcOSONwFcAKPOpYNCN"],
					["@@cHUTTNT^rPXQWGCMJWOQUE"],
					["@@Aei[aOUNBb[^gNURF\\@z~TZKUUCgFKdWzGTO"],
					["@@UDLTTFL]U@"],
					["@@Zd@\\bXfENH`QbKbA^HLOcqqSiFoC_]sdFL"],
					["@@YV^FC["],
					["@@TOMoFWVEQ[^uGU[EIUUGuNAIaM³Ds`KpfR^HJPMp[TG\\{LIT@pJnGtb\\fNJZPF`ATPVA^cifKPYCObaCQU]B["],
					["@@MJCfQHNfbSTWDicG"],
					["@@qESokooBERk^aKoxRPVErFv@hRDddRcdETQN_eU"],
					["@@xXLL^CP``VJTjGvavsb@PQdJhENGUOKWUQK_@k[AGyZGZUP@FiQGCiWMGUUWoakF{YFWQ»@@P@@OlBZPtIL@PVOF[EBZ`zR@ClKTLiZDFYb"],
					["@@FdKjFESkFsGOG"],
					["@@ZJXVXMBQK[kJaGNZ"],
					["@@YANfRKEW"]
				],
				"encodeOffsets": [
					[
						[129096, 37973]
					],
					[
						[129323, 38062]
					],
					[
						[129278, 38071]
					],
					[
						[129136, 38061]
					],
					[
						[129130, 38161]
					],
					[
						[129471, 38160]
					],
					[
						[129332, 38160]
					],
					[
						[129120, 38170]
					],
					[
						[129219, 38098]
					],
					[
						[128721, 38565]
					],
					[
						[129283, 38558]
					],
					[
						[129240, 38571]
					],
					[
						[127747, 38677]
					],
					[
						[127601, 38880]
					],
					[
						[127694, 38712]
					],
					[
						[129410, 38592]
					],
					[
						[129262, 38622]
					],
					[
						[129240, 38681]
					],
					[
						[129553, 38482]
					],
					[
						[129552, 38616]
					],
					[
						[129451, 38262]
					],
					[
						[129601, 38379]
					],
					[
						[129614, 38489]
					],
					[
						[129359, 38424]
					],
					[
						[129471, 38430]
					],
					[
						[129467, 38432]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Jeju-do"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@pAVXnB`C@RTTJMrGDPZGRHNpC`PzS\\LXED[ZUVAPOZJnGhoC]OQfUDY[E[KEFYsQYiBMssJIge[BmI]JyeBwQYAqBiKQW[KBIiMSPcBKGeEuHYUUDuMQXUHoMSRUBmU_EMJs@aFueGagQQHMX]\\MX[NaFi\\W^SfJLERHXK^HP\\JHZ~bDPVNRA`XT`DhVAJNXBbTL`pCr\\RCbVRI\\B`TRAzVPL^BHNzCdD\\NbD"],
					["@@_HMZ^fRUN_OQ"],
					["@@BOsIWZlC^D"],
					["@@]XZDD["]
				],
				"encodeOffsets": [
					[
						[129601, 34332]
					],
					[
						[130011, 34294]
					],
					[
						[129373, 34769]
					],
					[
						[129330, 34767]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Jeollabuk-do"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@zDESQSWCY[kIM\\`BRfXJ"],
					["@@IZXAMW"],
					["@@[BKTXDPY"],
					["@@LNjJh@lHHT¢`VZBXtVNhMxb^JpS\\CRLZGNSbDpYG_FiXI`[VFnWXPAVXRZMRBZV^SNDFZlA`[TrpGfLFVTFRMRX\\@PWTSMUPKBUN[EYZWXm`YbZ`PJQCURCH[NQZFPMXEXTRQtZLhCl|APO`BTWfKHdbPaPGZL^\\@bWLaXDD\\^PPQ@[xSVDzSFUlDZXdD\\NlJZ]VCDmb]B[Z}u[FeeKa]FOY]QF]UYCsSSQWCQNSQBIieO_WKSSHOYDE]_WM{SMQgRq_WIYFO_YOQCUjUNOZENedaFYaM@eRStEQ}mWWaCW]SDUPQA_YMYYaESTsT|cB[PcMcF]WM[]YAUWQbYGkW_C]P@nUG@YWCcNKVU@qgAOYDaQkF[P_BmZ\\d\\CG`JX]d[KYXERdBLrCNUDEkOQJQoSEEUYDNySGAKVOIIbc`A^[FaX_HOTmLEYqCUHgK[]UC\\[F_eaISAcWU]BKaMFWK[LgiBm^SMQFGQTWMSWRaFoKOLGVMHN\\@PYZYG@beX\\RBbWTPaPp|ªPQTZrTtAVPdD^EbbFZXHpEXWP\\QbiLkQYA}JaKaHWQm@_LIVcNMZLDAbFPVF¦FRnToz[Rk¦^DOc`}\\Sry\\KTVfZXf\\TDLCtGRTZ^SLD°JQp_RELVEZ_^VURs\\YDÕC~LtoLIS­GñAYqogFSfUlvîQbCnÞJ¤DhH`@pXvS`NRlYJ"],
					["@@U][FLTVIPN"],
					["@@_JXVH_"]
				],
				"encodeOffsets": [
					[
						[129317, 36467]
					],
					[
						[129316, 36477]
					],
					[
						[129011, 36981]
					],
					[
						[129786, 36883]
					],
					[
						[129474, 36669]
					],
					[
						[129594, 36896]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Jeollanam-do"
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@XBNGHWmGI\\JJ"],
					["@@QbeTDbZJV[DQlikI"],
					["@@QNDfTMH]vsyPI\\"],
					["@@HVU^hBXokHEM"],
					["@@CtSKM_TkCOUOEES[SNMZD^GJhVAZS"],
					["@@EyaEO\\QEE`NdXRWRBLZ^~cQMgCBOXEH["],
					["@@[FeEUZSEYT^zTThNRKVePKL[KGKa"],
					["@@Q\\^BK]"],
					["@@H`TXPOESU@OS"],
					["@@MRCbZRHKD_SY"],
					["@@bKgWQPXT"],
					["@@SXfCd\\JSWYUJQK"],
					["@@\\RPkGccNYELlNJ"],
					["@@OJVrDVpKHHjUPaWMHUSAKP]BBYOEaJBT"],
					["@@@\\^JZUYM]A"],
					["@@MRfBWS"],
					["@@kL@Pd@H["],
					["@@QHN\\\\KWW"],
					["@@OZXJXlXKSeSFOc"],
					["@@OTPHPKOO"],
					["@@aVKRFVRP@ZPHHbVHXEAUVAHRbBEW]ABOMY_AL]aGGc"],
					["@@YOYBTX`I"],
					["@@IHRdPA\\YiWIH"],
					["@@IbqCN@btlRKC[xAh_@{eL"],
					["@@SJETPZVGZD@_eS"],
					["@@MbhVRO@ekA"],
					["@@WBBXZICO"],
					["@@k`KTWAJZZAXKVoAM"],
					["@@FfTLTwoIBP"],
					["@@HMA]QCM^ZR"],
					["@@EjYG[@OJvbRRvSL]\\O@iYMKJcGC][EPd@X"],
					["@@_ZBJ^JLE@_KG"],
					["@@BZhHia"],
					["@@aMCbf@@S"],
					["@@WDFT^CKS"],
					["@@]VCPXPPYE["],
					["@@fOWgKP]LiB[dXPPIbBXQ"],
					["@@ND^O^ACmXMPsTIM[WW]N[DRpERSHaCOPYKMRcJH\\QNVZpRhQ"],
					["@@`N|REOiAkLgYIDQQGCQuVFVkCDP_VRXXNNC"],
					["@@ntLU_GCWUB"],
					["@@LRVIUSEOWA@RRL"],
					["@@YJ@\\\\VTMMQG["],
					["@@tMSSLmQCgFQ^mEQPrTxDIN"],
					["@@bNBaY@IT"],
					["@@gVTNRQBQ"],
					["@@OXWVcn\\BTRjQX@DPOTR\\pGZOGWSMVMEM[MSJSSR]IWmJ"],
					["@@H_meYXDNdBX^"],
					["@@PhXCHUoM"],
					["@@SLHRbGUU"],
					["@@[N@^ZSBW"],
					["@@OTdLBOUO"],
					["@@R_OWNWCK[BKKaEYJUGEKR]DW``NUlM@QTOT@EcaIWQBMWO]BeXCVaCCPD[J_bFJBlXLINC~VT^fH"],
					["@@[nXALaGI"],
					["@@T[rBb_NiEaSKUHedWJSWWNkI[fFXPFI^T@JRbM`J"],
					["@@VH@^hNLCfLTAtTNEtoEUQO@OS[BwPuHgPLP"],
					["@@YT_IQN_EATl`TdLLTDXLHn]HcSIPm]@AWUO]EUQKP"],
					["@@u\\LVnLb]e_"],
					["@@d]HH^AT_iGI[A[bBlA\\a@[acqJRfITLsD]_SB]NSBJ`RKpBbPAhdIJPQX[RhV"],
					["@@HdRQYQ"],
					["@@aMcHCZTNpRFs"],
					["@@_RBPZDb]]G"],
					["@@QNCPWEIR|FZGFQ[CGQ"],
					["@@STTLTYSE"],
					["@@L\\XETYCQcJOL"],
					["@@PGD]iC@LV^"],
					["@@NHChzhmEW`HDMYC]WOLSAMKgOQb"],
					["@@JVbLIYUBKI"],
					["@@@^RVfD\\[`LDYcLi_UFAVQD@Y"],
					["@@PDP_EokFH`NJC\\"],
					["@@K`JN^W\\FPQXL|gF[SQSBoU@buPbVWJ]B"],
					["@@H@P`n]i_MFMX"],
					["@@iRRHZAAW"],
					["@@ESgBQXgDCR]HY^@TZR^LbEJ]d_DQX]"],
					["@@aJLVZMCQ"],
					["@@MJJhNFbckS"],
					["@@JMUQUTbL"],
					["@@hLNM`ATmIKDSoDSLKzSH"],
					["@@OZ`TFVh[XP^C\\XZFNIbLT@ZaYmGeWMa@mJGMi@eF@JaLCX"],
					["@@E^\\GUU"],
					["@@C`TFHUWO"],
					["@@MQc]UCgR@ZXX\\DRIZDPM"],
					["@@LHXGJOdHTCNU^P@U[AFSQYMV{kAVMZMFk@]O[`\\XZWZFFVNL"],
					["@@MBIhTDL\\\\]zHXiOOgPyCCE"],
					["@@uGUHDVdERRNIjIJSoF"],
					["@@UQqOBK]OGTbRGNcGGVkRTXdBTe^DJNjELU"],
					["@@CMZknSWeWAUTI]YT_BQIQTHNEV_IELgVM|Cn^TdN~CZUVGN_A_LE"],
					["@@KEgZgFG^N`KXYNDVQ\\@ZXAkNIAQgFGUUG"],
					["@@YiUL\\hoBAPZTGRpnTAXRmESbETW}WIKsJaK"],
					["@@PX\\HHLbPVDBVdfCep@[`ZLL^dHZG\\^KX_XVhWfYOQ\\YlLtqLSTCJSKe[AGQ\\I]]P[YQAK]W@WSB]bA_gFHYYCeFIWJMi@IOCPMUGKOHCTSAURNXW@EMWFK\\WRO^Rflb"],
					["@@EVdFGSUG"],
					["@@W^RNZ_SK"],
					["@@PDjKntY@QnIJWCDhhAZSJU`EGQHoMILSaIOYqSoBb\\^PmJEJ"],
					["@@JLpIMcZUP@XeGY}BULMRZR]VLTK\\"],
					["@@LCNWkI[DIJa@af_JMP\\TOVJTbNTPRn@b]^CV`AvYRYAM_JR_KQRSTBFiGKL]MO@e"],
					["@@OXSAa[QfW@aZHZY@OM[NGHUPKpLbEXQNTSXHRRETNn]jAh\\KXLNELb^AXVBdJTfbE`[\\VD\\^hLVGrDFZnKPS`GbW\\EB]d_JaPJLUBTHMzZCFVTFRpRIlPFVCDMKqcAFQZW\\L^cIWH_[D[cnY`A\\OlEbRZCBPrhV@LUdMXD@ZVHm@^O`DlXZHaXRBV^ZN\\^XdEdN\\OdA{tSTSA[RGVo\\KRuDoEWLa\\UVYRAuHM@ilmfOT_jKRqZWA[K]egMOiImmOCWYUTSBSiTOa_`KZgXQOpuo]ZedYbCSSRMtbRMTP^hHKChNZG@mMKBS@K_OOR[K_@W]DEQuQi\\ulSkMMKaeALSBYVICRCAW]EURRYQIX[PBNVPWJ@NZZ_X|tbTQfKIYzOLCVwBKPHPVPJTcHSvsFHUCaOKYHUIMsQcDRWfBPIKQcKMOCS`SCQSOSCOQL]VOBMd_dOLSiBWOILMhCToDa{cePaKYTSIOPSAMOTSOWfG^MKeTU`fVN`EFMK_US~CT[GSaAUFcOQd^RKReLaISJG]oAR[kSKTOAGQcCQQCO`KBUaG]PKhcRSBGR\\TEJgVKPUIqfY[YXaCaKqC]N@TSNBX^^P@T\\@T`KVLBRHNXVJzNJrPDAb\\NDN^BVLBcGwPKxCNHCX\\dD`KfAfmAQW]GQNUSQTMfaEggDQBOROB]SG[]SS_oQ@uWyF\\mIUAW[SVWCkECQwOAI[ZMFWqMOVQKPeOQYJ}Hg@PeOEiNaVSIUBYPDXaCEVTFK@dC~NPSVKZDPIjOBDaMBOGD_JWsUR[GKuCHYW[Y@a[aBa[YAMUa_NWB_a[BWIkUNyFOKOYuOKpZVG~]LMOaNOXDPfJKPHVXEXTStmKQMOZYTZNIZOPVPKJA\\XHclFNcHEXgRBYaEDK[MGVHTKTgCGHuRgKKLJ\\[H_VElJP[DILBTILChKNRLKPVPLT@bPdDX^JXQGKhSJY`[DQSMEWNWbk@WTSJUrWTBTSXFAX_LQPYDedUhDRb\\D`QPZTpMrEnSKYJ[\\_VfTSXOxEhB}bUbY`cVO@V`@PPPHXnLPVBhbPh\\iAQW_OB_YQpuH]OwSGIT[Ph`drRBV\\WbLTYXXTF^YNB^GVTjVPETw[DbMB[kRIHiKUDS_BUOYJEVaFVVYL[`TXBP\\GR[jPVX@L[RnE`KRYC_OIPBVWHNTYd_ACYM_^OO[@@NQfQFLpOLDTXj\\FVUrH@S^A\\lVNBcQiKCDqT@B_h@BUhBZTRUAM][VO@ObCAZLRlTTdaTjJJXUFDc|aLS`ktbNILXZsMAKaCAV[AILcBDrNbdSB`ILN`VN\\EZHZhENF^TbARXbNMZNSXErXblNR@"]
				],
				"encodeOffsets": [
					[
						[129961, 34804]
					],
					[
						[128125, 34865]
					],
					[
						[130345, 34846]
					],
					[
						[130366, 34850]
					],
					[
						[129600, 34990]
					],
					[
						[129713, 34968]
					],
					[
						[129960, 34973]
					],
					[
						[129516, 34998]
					],
					[
						[129528, 34998]
					],
					[
						[129803, 34998]
					],
					[
						[128961, 35069]
					],
					[
						[129060, 35048]
					],
					[
						[130295, 35064]
					],
					[
						[129600, 35010]
					],
					[
						[129637, 35054]
					],
					[
						[128931, 35070]
					],
					[
						[129025, 35084]
					],
					[
						[128478, 35470]
					],
					[
						[128191, 35499]
					],
					[
						[128379, 35499]
					],
					[
						[128418, 35455]
					],
					[
						[128489, 35564]
					],
					[
						[130733, 35747]
					],
					[
						[130833, 35730]
					],
					[
						[129263, 35748]
					],
					[
						[130813, 35772]
					],
					[
						[129235, 35777]
					],
					[
						[129330, 35771]
					],
					[
						[129280, 35821]
					],
					[
						[129241, 35820]
					],
					[
						[129164, 35820]
					],
					[
						[129175, 36118]
					],
					[
						[129211, 35973]
					],
					[
						[129063, 36191]
					],
					[
						[129169, 35924]
					],
					[
						[129052, 35918]
					],
					[
						[129211, 35888]
					],
					[
						[129240, 35947]
					],
					[
						[129096, 35946]
					],
					[
						[130501, 35615]
					],
					[
						[129392, 35600]
					],
					[
						[129351, 35594]
					],
					[
						[129171, 35640]
					],
					[
						[129347, 35641]
					],
					[
						[129093, 35641]
					],
					[
						[129123, 35641]
					],
					[
						[129409, 35543]
					],
					[
						[129202, 35512]
					],
					[
						[130500, 35517]
					],
					[
						[130800, 35532]
					],
					[
						[129129, 35530]
					],
					[
						[129017, 35641]
					],
					[
						[129051, 35557]
					],
					[
						[129151, 35606]
					],
					[
						[129403, 35583]
					],
					[
						[129061, 35691]
					],
					[
						[130785, 35705]
					],
					[
						[129332, 35760]
					],
					[
						[129205, 35718]
					],
					[
						[128880, 35435]
					],
					[
						[130705, 35436]
					],
					[
						[130611, 35425]
					],
					[
						[130150, 35425]
					],
					[
						[128975, 35461]
					],
					[
						[129024, 35461]
					],
					[
						[129150, 35461]
					],
					[
						[130165, 35331]
					],
					[
						[130703, 35386]
					],
					[
						[130863, 35281]
					],
					[
						[130518, 35281]
					],
					[
						[129061, 35308]
					],
					[
						[130887, 35305]
					],
					[
						[130861, 35325]
					],
					[
						[130320, 35208]
					],
					[
						[129319, 35189]
					],
					[
						[130140, 35217]
					],
					[
						[130072, 35281]
					],
					[
						[130157, 35281]
					],
					[
						[130408, 35091]
					],
					[
						[130448, 35102]
					],
					[
						[130061, 35155]
					],
					[
						[129870, 35178]
					],
					[
						[129061, 35106]
					],
					[
						[129060, 35150]
					],
					[
						[130141, 35171]
					],
					[
						[129780, 35174]
					],
					[
						[129960, 35181]
					],
					[
						[129833, 35203]
					],
					[
						[129147, 35281]
					],
					[
						[130778, 35395]
					],
					[
						[130800, 35404]
					],
					[
						[129061, 35393]
					],
					[
						[129036, 35461]
					],
					[
						[130861, 35435]
					],
					[
						[129483, 36280]
					]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Sejong"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nQC[cOOsVD@U^oAg`@bLT[ZD`CRd@ReGMHi]E_Lm_LOOU@[WMEY]QmD[OOAo@QQSZYDUXaTHbWVAVHRgJKbVXU^@P`@ARNVVDLX]D_dkPEfHXIPDhRfMRYCSddnPHGfUPM`GPWXIhHTI"],
				"encodeOffsets": [
					[130341, 37571]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Seoul"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NnLFTUmrLDJhHJNAdLRFpZBrZTIJS\\YTLIf^VCXbNBZfDLQ N^QIUHSGUDWbCDYOOZKAoY]Ce`ILPNhRRe@[gCcuG[VBTKESQKKUWB]aWHWKW_UBAWgAURSxIO]COXkUe_kGY\\iaK@QfMFEVQVKfqkuD@TKTVZD`Gb{DkLIJVRLXVP"],
				"encodeOffsets": [
					[129837, 38484]
				]
			}
		}, {
			"type": "Feature",
			"properties": {
				"name": "Ulsan"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LPdP\\@N^tMPHYVDpNVv\\b@`JPZTCPOTC\\VTM`FpSBIrKHMCeKMLWRG\\D\\SR^nBLNj\\hSPD|OtU\\COKDg\\WN]A[QIHwKSA_QuWGPW[IaSGLHbYPBVS`WB@UVCDWQITWIWk_OAIU^M@[OCIQFMAcQG@]TEPYGGq@COSASaMBINeLBTKf_\\gBqO]R\\vaTDRYFkEyb}E^XchQJWGmG[LFTQTMAW\\pPf^NBL`G^eL"],
				"encodeOffsets": [
					[132100, 36476]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));