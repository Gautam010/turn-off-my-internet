package com.nemesis141.TurnOffMyInternet;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class MobileDataModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    MobileDataModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "MobileDataModule";
    }

    @ReactMethod
    public void toggleMobileData(boolean enable, Callback callback) {
        try {
            ConnectivityManager connectivityManager = (ConnectivityManager) reactContext.getSystemService(Context.CONNECTIVITY_SERVICE);
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
                // Use reflection to access private methods
                Method setMobileDataEnabledMethod = connectivityManager.getClass().getDeclaredMethod("setMobileDataEnabled", boolean.class);
                setMobileDataEnabledMethod.setAccessible(true);
                setMobileDataEnabledMethod.invoke(connectivityManager, enable);
            }
            callback.invoke(null, "Success");
        } catch (Exception e) {
            callback.invoke(e.getMessage(), null);
        }
    }
}