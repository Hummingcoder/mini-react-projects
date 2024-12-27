import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "./data";

export const FeatureFlag = createContext(null);

const FeatureFlagProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [enabledFlags, setEnabledFlags] = useState(null);

  const fetchData = async () => {
    try {
      const res = await featureFlagsDataServiceCall();

      setEnabledFlags(res);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FeatureFlag.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlag.Provider>
  );
};

export default FeatureFlagProvider;
