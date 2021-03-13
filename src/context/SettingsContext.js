import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { THEMES } from "../constants";
import { storeSettings } from "../utils/settings";

const SettingsContext = createContext();

const defaultSettings = {
  direction: "ltr",
  responsiveFontSizes: true,
  theme: THEMES.LIGHT,
};

export function SettingsProvider({ settings, children }) {
  const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings);

  const handleSaveSettings = (updatedSettings = {}) => {
    const mergedSettings = _.merge({}, currentSettings, updatedSettings);

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  useEffect(() => {
    document.dir = currentSettings.direction;
  }, [currentSettings]);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
