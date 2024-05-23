import { existsSync, mkdirSync, writeFileSync } from "fs";
import { parse } from "path";

/**
 * Repositories:
 * - 3GPP: https://forge.3gpp.org/rep/sa5/MnS/-/tree/Rel-17/yang-models
 * - O-RAN
 *   - WG5 O-DU: https://orandownloadsweb.azurewebsites.net/download?id=593
 *   - WG5 O-CU: https://orandownloadsweb.azurewebsites.net/download?id=596
 */
const _3GPP_BASE_URL =
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models";
const URLS = [
  "_3gpp-5g-common-yang-types.yang",
  "_3gpp-5gc-nrm-FiveQiDscpMappingSet.yang",
  "_3gpp-5gc-nrm-GtpUPathQoSMonitoringControl.yang",
  "_3gpp-5gc-nrm-QFQoSMonitoringControl.yang",
  "_3gpp-5gc-nrm-affunction.yang",
  "_3gpp-5gc-nrm-amffunction.yang",
  "_3gpp-5gc-nrm-amfregion.yang",
  "_3gpp-5gc-nrm-amfset.yang",
  "_3gpp-5gc-nrm-ausffunction.yang",
  "_3gpp-5gc-nrm-configurable5qiset.yang",
  "_3gpp-5gc-nrm-dnfunction.yang",
  "_3gpp-5gc-nrm-dynamic5qiset.yang",
  "_3gpp-5gc-nrm-ecmconnectioninfo.yang",
  "_3gpp-5gc-nrm-ep.yang",
  "_3gpp-5gc-nrm-externalnrffunction.yang",
  "_3gpp-5gc-nrm-externalnssffunction.yang",
  "_3gpp-5gc-nrm-externalseppfunction.yang",
  "_3gpp-5gc-nrm-lmffunction.yang",
  "_3gpp-5gc-nrm-n3iwffunction.yang",
  "_3gpp-5gc-nrm-neffunction.yang",
  "_3gpp-5gc-nrm-nfprofile.yang",
  "_3gpp-5gc-nrm-nfservice.yang",
  "_3gpp-5gc-nrm-ngeirfunction.yang",
  "_3gpp-5gc-nrm-nrffunction.yang",
  "_3gpp-5gc-nrm-nssffunction.yang",
  "_3gpp-5gc-nrm-nwdaffunction.yang",
  "_3gpp-5gc-nrm-pcffunction.yang",
  "_3gpp-5gc-nrm-predefinedpccruleset.yang",
  "_3gpp-5gc-nrm-scpfunction.yang",
  "_3gpp-5gc-nrm-seppfunction.yang",
  "_3gpp-5gc-nrm-smffunction.yang",
  "_3gpp-5gc-nrm-smsffunction.yang",
  "_3gpp-5gc-nrm-udmfunction.yang",
  "_3gpp-5gc-nrm-udrfunction.yang",
  "_3gpp-5gc-nrm-udsffunction.yang",
  "_3gpp-5gc-nrm-upffunction.yang",
  "_3gpp-common-ep-rp.yang",
  "_3gpp-common-filemanagement.yang",
  "_3gpp-common-files.yang",
  "_3gpp-common-fm.yang",
  "_3gpp-common-managed-element.yang",
  "_3gpp-common-managed-function.yang",
  "_3gpp-common-management-node.yang",
  "_3gpp-common-managementdatacollection.yang",
  "_3gpp-common-measurements.yang",
  "_3gpp-common-mnsagent.yang",
  "_3gpp-common-mnsregistry.yang",
  "_3gpp-common-subnetwork.yang",
  "_3gpp-common-subscription-control.yang",
  "_3gpp-common-top.yang",
  "_3gpp-common-trace.yang",
  "_3gpp-common-yang-extensions.yang",
  "_3gpp-common-yang-types.yang",
  "_3gpp-nr-nrm-beam.yang",
  "_3gpp-nr-nrm-bwp.yang",
  "_3gpp-nr-nrm-cesmanagementfunction.yang",
  "_3gpp-nr-nrm-commonbeamformingfunction.yang",
  "_3gpp-nr-nrm-cpciconfigurationfunction.yang",
  "_3gpp-nr-nrm-danrmanagementfunction.yang",
  "_3gpp-nr-nrm-desmanagementfunction.yang",
  "_3gpp-nr-nrm-dlbofunction.yang",
  "_3gpp-nr-nrm-dmrofunction.yang",
  "_3gpp-nr-nrm-dpciconfigurationfunction.yang",
  "_3gpp-nr-nrm-drachoptimizationfunction.yang",
  "_3gpp-nr-nrm-ep.yang",
  "_3gpp-nr-nrm-eutrancellrelation.yang",
  "_3gpp-nr-nrm-eutranetwork.yang",
  "_3gpp-nr-nrm-eutranfreqrelation.yang",
  "_3gpp-nr-nrm-eutranfrequency.yang",
  "_3gpp-nr-nrm-externalamffunction.yang",
  "_3gpp-nr-nrm-externalenbfunction.yang",
  "_3gpp-nr-nrm-externaleutrancell.yang",
  "_3gpp-nr-nrm-externalgnbcucpfunction.yang",
  "_3gpp-nr-nrm-externalgnbcuupfunction.yang",
  "_3gpp-nr-nrm-externalgnbdufunction.yang",
  "_3gpp-nr-nrm-externalnrcellcu.yang",
  "_3gpp-nr-nrm-externalservinggwfunction.yang",
  "_3gpp-nr-nrm-externalupffunction.yang",
  "_3gpp-nr-nrm-gnbcucpfunction.yang",
  "_3gpp-nr-nrm-gnbcuupfunction.yang",
  "_3gpp-nr-nrm-gnbdufunction.yang",
  "_3gpp-nr-nrm-nrcellcu.yang",
  "_3gpp-nr-nrm-nrcelldu.yang",
  "_3gpp-nr-nrm-nrcellrelation.yang",
  "_3gpp-nr-nrm-nrfreqrelation.yang",
  "_3gpp-nr-nrm-nrfrequency.yang",
  "_3gpp-nr-nrm-nrnetwork.yang",
  "_3gpp-nr-nrm-nroperatorcelldu.yang",
  "_3gpp-nr-nrm-nrsectorcarrier.yang",
  "_3gpp-nr-nrm-operatordu.yang",
  "_3gpp-nr-nrm-rimrsset.yang",
  "_3gpp-nr-nrm-rrmpolicy.yang",
  "_3gpp-ns-nrm-common.yang",
  "_3gpp-ns-nrm-networkslice.yang",
  "_3gpp-ns-nrm-networkslicesubnet.yang",
  "_3gpp-ns-nrm-serviceprofile.yang",
  "_3gpp-ns-nrm-sliceprofile.yang",
  "external-yams/ietf-inet-types.yang",
  "external-yams/ietf-yang-schema-mount@2019-01-14.yang",
  "external-yams/ietf-yang-types@2013-07-15.yang",
];

async function main() {
  const BASE_DIR = "models";
  for (let i = 0; i < URLS.length; i++) {
    const url = URLS[i];
    console.log(`${i + 1}/${URLS.length} ${url}`);
    try {
      const response = await fetch(`${_3GPP_BASE_URL}/${url}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const text = await response.text();
      const { dir } = parse(url);
      const dirPath = `${BASE_DIR}/${dir}`;
      if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
      }
      writeFileSync(`${BASE_DIR}/${url}`, text);
    } catch (e) {
      console.error(`Failed to fetch ${URL}`);
      console.error(e);
    }
  }
}

main();
