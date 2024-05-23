import { writeFileSync } from "fs";
import Yang from "yang-js";

/**
 * Repositories:
 * - 3GPP: https://forge.3gpp.org/rep/sa5/MnS/-/tree/Rel-17/yang-models
 * - O-RAN
 *   - WG5 O-DU: https://orandownloadsweb.azurewebsites.net/download?id=593
 *   - WG5 O-CU: https://orandownloadsweb.azurewebsites.net/download?id=596
 */
const URLS = [
  // Ordered
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/external-yams/ietf-inet-types.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/external-yams/ietf-yang-types@2013-07-15.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/external-yams/ietf-yang-schema-mount@2019-01-14.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-top.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-yang-extensions.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-yang-types.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-files.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-measurements.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-ep-rp.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-subscription-control.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-fm.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-trace.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-configurable5qiset.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-ecmconnectioninfo.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-subnetwork.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-managed-element.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-filemanagement.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-managed-function.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-management-node.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-managementdatacollection.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-mnsagent.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-common-mnsregistry.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5g-common-yang-types.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-smffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-FiveQiDscpMappingSet.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-GtpUPathQoSMonitoringControl.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-QFQoSMonitoringControl.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-affunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-amffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-amfregion.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-amfset.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-ausffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-dnfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-dynamic5qiset.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-externalnrffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-externalnssffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-externalseppfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-lmffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-n3iwffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-predefinedpccruleset.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-nfprofile.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-neffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-nfservice.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-ngeirfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-nrffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-nssffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-nwdaffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-pcffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-scpfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-seppfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-smsffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-udmfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-udrfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-udsffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-upffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-5gc-nrm-ep.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-gnbdufunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-nrsectorcarrier.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-commonbeamformingfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-beam.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-bwp.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-gnbcucpfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-nrcellcu.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-cesmanagementfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-nrcelldu.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-cpciconfigurationfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-danrmanagementfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-desmanagementfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-dlbofunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-dmrofunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-dpciconfigurationfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-drachoptimizationfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-gnbcuupfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-ep.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-eutrancellrelation.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-eutranetwork.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-eutranfreqrelation.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-eutranfrequency.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-externalamffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-externalenbfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-externaleutrancell.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-nrnetwork.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-externalgnbcucpfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-externalgnbcuupfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-externalgnbdufunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-externalnrcellcu.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-externalservinggwfunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-externalupffunction.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-nrcellrelation.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-nrfreqrelation.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-nrfrequency.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-operatordu.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-nroperatorcelldu.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-rimrsset.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-nr-nrm-rrmpolicy.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-ns-nrm-common.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-ns-nrm-serviceprofile.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-ns-nrm-networkslice.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-ns-nrm-networkslicesubnet.yang",
  "https://forge.3gpp.org/rep/sa5/MnS/-/raw/Rel-17/yang-models/_3gpp-ns-nrm-sliceprofile.yang",
  // Unordered
];
async function main() {
  const textList = [];
  for (let i = 0; i < URLS.length; i++) {
    const url = URLS[i];
    console.log(`${i + 1}/${URLS.length} ${url}`);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const text = await response.text();
      textList.push(text);
    } catch (e) {
      console.error(`Failed to fetch ${URL}`);
      console.error(e);
    }
  }
  writeFileSync("3gpp.yang", textList.join("\n\n"));
}

main();
