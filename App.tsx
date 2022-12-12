import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {WebView} from 'react-native-webview';

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta name=“viewport” content=“width=device-width, initial-scale=1" />
    
    <script src="https://embeddables.prod.icanbwell.com/composite-v1/0.1.26/loader/index.js"></script>
    <script type="text/javascript">
      (async function init() {
        const clientKey = "c9o1ec9wvny7f8gl4m1qmkckh7f74psqf45ar97j3h258uup";
        const authenticationJWT =
          "eyJhbGciOiJFQ0RILUVTIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImVwayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IlBWNXU4dkx3aHVReG5LWl9jNmxidzdIWE9kaFVrdWFxWG9UN0l4STFWVkkiLCJ5Ijoic0M1cWl3QzNfT3pKVzNKMUNOMFVxdXhKbnJBeVZqOEdWVDgxREtzLTR1YyJ9fQ..fp_q5Md5kNEphbXVjxf3wg.Vg9SpeRQb69K7M6kdl3WMqg4AeMEtmLHls2146RVhNHW0ZHUHaaGHUUZ1XmhR6M7JMe44LjKopZM_G8EwD7sgBWGiahQ_kn7kcy1_KeTL1tjC9CHdLz33opaxUoKpnOtJL8DNiTG76z7ZIJ3LIcMxGisFkmlvjWbs6-6wfHhQP_rIALMbbNrsgvY2HlNebPbg9rRqzOBKiAsjdkLzxBOpzSHwVZqlSHsJDFC44rSp_O32UbFWV73zSDSzhLEGF2f9dPwYC4lir9EYLmelf4PqDg5O65aeFkz5_qE385O-q_RctkTGhDdKAHvXGe_1rDNxzM8tF4C0oavpf-qxPiCRyIFRQEUexv_6eMT0Fuz0cWCq0CAuKTRhjsyGKbecr1cnnVOVKHK63vVbDFv2SRxR9UZd7-lvuXlhCD45Aemut35Zo_95v2zgrNHZS6uiNDdOpeLrD8YKLWRMcSNds8OEzEPKU8XwzxlHJ6FBd05UtdezFDJNKPTsnN4Bz2yvle5tLGdvs_98GztHUlKdgjPYlTyDD09cIbjxe0nD9j7HLiWhM4Zg4i69gS6dUFyDpzuF1W043cjHiiutgV6J0gZGA.9ESN34oCCWVfoU_heMuAag";
        await bwell.init(clientKey);
        try {
          const jwtContents = await bwell.setUserToken(authenticationJWT);
        } catch (e) {
          window.alert('ERROR: ' + e);
        }
      })();
    </script>
    <title>Client's App</title>
  </head>
  <body style="background-color: #fff; height: 100%; margin: 0;">
    <bwell-composite-v1 />
  </body>
</html>
`;

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#dddddd'}}>
      <StatusBar barStyle={'light-content'} />
      <View style={{height: '100%', width: '100%'}}>
        <WebView
          originWhitelist={['*']}
          source={{baseUrl: 'https://prod.icanbwell.com', html: html}}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
