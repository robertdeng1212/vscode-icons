import { ILangResource } from '../../models/i18n';
import { constants } from '../../constants';

export const langDe: ILangResource = {
  newVersion: `Willkommen zur neuen Version von ${constants.extensionName}.`,
  seeReleaseNotes: 'Informationen über die letzten Änderungen (Englisch)',
  dontShowThis: 'Zeige mir diese Nachricht nicht das nächste Mal',
  seeReadme: 'Erfahren Sie mehr über diese Erweiterung (Englisch)',
  welcome: `Danke für das Installieren von ${constants.extensionName}`,
  activate: 'Aktivieren',
  aboutOfficialApi: 'Erfahren Sie mehr über Datei und Ordner Icons (Englisch)',
  learnMore: 'Wollen Sie mehr erfahren?',
  reload: 'Neu starten',
  autoReload: 'Automatisch neu starten',
  disableDetect: 'Projekterkennung deaktivieren',
  iconCustomization: 'Das Icon-Manifest wird regeneriert.',
  iconRestore: 'Das Icon-Manifest wird zurückgesetzt.',
  ngPresetEnabled: 'Angular Icons wird aktiviert.',
  ngPresetDisabled: 'Angular Icons wird deaktiviert.',
  jsOfficialPresetEnabled: 'Offizielles JS Icon wird aktiviert.',
  jsOfficialPresetDisabled: 'Offizielles JS Icon wird deaktiviert.',
  tsOfficialPresetEnabled: 'Offizielles TS Icon wird aktiviert.',
  tsOfficialPresetDisabled: 'Offizielles TS Icon wird deaktiviert.',
  jsonOfficialPresetEnabled: 'Offizielles JSON Icon wird aktiviert.',
  jsonOfficialPresetDisabled: 'Offizielles JSON Icon wird deaktiviert.',
  hideFoldersPresetEnabled: 'Ordner-Icons werden aktiviert.',
  hideFoldersPresetDisabled: 'Ordner-Icons werden deaktiviert.',
  foldersAllDefaultIconPresetEnabled: 'Spezifischer Ordner-Icons werden aktiviert.',
  foldersAllDefaultIconPresetDisabled: 'Spezifischer Ordner-Icons werden deaktiviert.',
  restart: 'Drücken Sie \'Neu starten\' um die Änderungen zu übernehmen',
  ngDetected: `${constants.extensionName} hat ein Angular Projekt erkannt! ` +
  'Drücken Sie \'Neu starten\', damit die Angular Icons übernommen werden.',
  nonNgDetected: `${constants.extensionName} hat ein nicht Angular Projekt erkannt! ` +
  'Drücken Sie \'Neu starten\', damit die Angular Icons deaktiviert werden.',
  projectDetectionReset: 'Projekterkennung wird zurückgesetzt.',
};
