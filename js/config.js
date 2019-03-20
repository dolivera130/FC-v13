window._config = {
    cognito: {
        userPoolId: 'us-east-1_XEgSg1T7B', // us-east-1_XEgSg1T7B e.g. us-east-2_uXboG5pAb
        userPoolClientId: '5dcanmo8fkrajsve3s5inmcose', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'us-east-1', // e.g. us-east-1
        identityPoolId: ''//'us-east-1:e69e0331-0398-4024-8e82-0cb3588f6f24' // e.g. us-east-1:510eda3c-8339-6b01-2238-7de36aab7ca0
    },
    api: {
        invokeUrl: 'https://f8622a3l27.execute-api.us-east-1.amazonaws.com/prod/employees' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod/photos',
    },
    s3: {
      bucket : 'saamwanderlust-example', // e.g. mynewbucket
      hostUrl : 'http://saamwanderlust-example.s3-website-us-east-1.amazonaws.com', // e.g. http://mynewbucket.s3-website-us-east-1.amazonaws.com
      uploadPath : 'uploads/'
    },
    dynamodb: {
      tableName: 'SaamWanderlustPhotos'
    }
};
