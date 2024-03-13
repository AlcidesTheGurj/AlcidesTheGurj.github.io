'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "49f673fd73a0531774345f81d44e6032",
".git/config": "8c8c19a4ce7043aba16852e3cb2824b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "76ca88290e29dc7ec0af2fb69f0bccd5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3514ab64c159aea38d00f51754ed5ca",
".git/logs/refs/heads/main": "dbd46cc286b9dde75d750d6e741c5213",
".git/logs/refs/remotes/origin/main": "c1493b49494e2880c3f2b64f3cd9491a",
".git/objects/00/758bef341c1a7aa5c3d35011a2b1ac827f68e2": "94c7a6731607637eeaad7f22f0563476",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/03/e3c16468b4ae586d597d3e02ec45d10d0aa966": "450a2d72c4b5df184d791acc85a86273",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/67ed8e6ba6a6a6295a074a67e29e785624f92b": "a286e2d7b4cf92cae6920829e935eec0",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/0d/5fd3fb1f48b4dd5f502aeaced6c07d13a2b55b": "d2ecfaec076e88b4ece87736949545d1",
".git/objects/0d/fbcd3ddb71434220067761d4d39faab65c2fc3": "2ab6b120fadb8ff02935a4cd5cc9c1ce",
".git/objects/10/e961772190675e737c73b0577d85d83eceac7e": "dbc483656f8524f4975b6bc7f8b93646",
".git/objects/11/d79df66bc27e5c72865c0b9961c3e245d24c9b": "578b6242a385d96bff706075488baf0a",
".git/objects/13/ddeebd72850135d1af627aad20f0ff47fbf038": "4a76ec6127d8ef22093779da794becd4",
".git/objects/16/1f13978e8e337a4a8bda4fe1def382beb4fb89": "1d76e3783f8a761c60c6e4f15c336794",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/1d/9c6ee0c66d786a8ce761f5711441db600ca5a9": "51a8aafa2a6c4017b7233dcfec7ef055",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/2b327f5731a28fea1c895df6fe82333bccffa8": "1a822206b2f154dcc3e3695ea3f56145",
".git/objects/22/036ddce00206944202baced3e9c932dc12948b": "c8f0e1de4f9a903c60ac6f6a08295766",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/446bd4bf52d02d3159c7b1b4928bdd73467df8": "9183ff03cbeedcbb3fadeb08c788c54c",
".git/objects/25/c5506fc63f88e7a191e612cf7d198125c82926": "464d9224245ca9d289018fe43a723330",
".git/objects/27/54b0a77d393e6185afdb2fe5edc584563e704b": "b6a1e94f34160b5305c348d9d1fe0427",
".git/objects/27/a99b1f54ef80be10f13e33b1dbbfbdd105fdf1": "810c65c2f02cef062ec8616bd317164f",
".git/objects/28/46357d1d304de47ebdb4444dd0a8f654c87586": "c04da67491c978ca405bd4528080184b",
".git/objects/2a/043b10346d41328670d096284b88e9e3ca87b1": "26c216b6f2986ee1f6c659b6831a5e54",
".git/objects/2c/177f022e696db44258c0d15c3a42ac3128e3d6": "721f86a8647beb81938b2ad5cbab7417",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/30/8415bd6676c483503b05eee8e20a7c2d928073": "ff6fbca91136dbe481a3a8e7c79a7671",
".git/objects/31/3d13c182776a1a772958b726f7897b679fce7c": "2f218ad427573d3eb74ca6a0788b7ada",
".git/objects/31/4fa9d6ff9efbf7fd346b16a05f4a0a47d7c755": "5d8fa5e0ac387da36e87110107224a15",
".git/objects/36/6ead6f7854acbada650c7aa7271fb6352d9afa": "635152226819545f84af209f8c9391f1",
".git/objects/36/8d5f3cc347e57a077bb7ff41cad530d841af88": "ea600e3df2ecd1a373c804abd71e6b91",
".git/objects/37/eecce7010fe62b00ff7d0c3f782609d90795d9": "57e66c18bbbc93e30a7ad2bea1faf4d7",
".git/objects/39/36b9bd6ee45369d2342044027566b6f9658488": "268943f0a3a2cd94789f67e6fa2efc43",
".git/objects/39/ace85d285b2bce8ddde3763268983ac4730351": "7856338a27dc0593ba652e67d5d9ea8b",
".git/objects/3d/ee157c6769836cf2473ee0052511378c8690a0": "824116a4176000f25d08626a7074f5f6",
".git/objects/43/2e67b5dcc3f92a36737a9c7d0e2191b47fda04": "d6282b31a8b102845b4246e840471913",
".git/objects/44/0d31d0e1abcc5b7b46f2b8e38e289aa2a71b50": "25c33ce78db76459e2e16256b3c5bf19",
".git/objects/44/93b90aa39d03696338a12d9bfaaf668fae22fa": "387662deb21e7cac1b52d652c1b8ee69",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/48/d29572610cdf12762f254a8331087b99896a84": "5251c1b6936b9bc915405b03f3304a5e",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/46eff992e6d68556e5ac183820664b885463f5": "21bb2aa8514cb7ffd1d35e9ea46f0afe",
".git/objects/4a/be46d93b7d46fe6a3db06aee6ff652615050ba": "68d91f494ca7529064cbac5035de7076",
".git/objects/4b/4fe60bf4004b1c0698c9f5b917012a14247d70": "eaa3a9e7bc67fbf0b081aa5d43a54a4c",
".git/objects/4d/4ccdeb2155553f27cad32e623ae674663ac009": "60e78b8c9c3d265af69ce0ab7b835821",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/50/1e57fdcab72ab0442701698d469718ec21192b": "b05406db23786b6390cb9ba76c6b8c8d",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/52/ee947aacdd182c2972fe288e4595ecf15342e4": "1dfe0f428d7cbccadda473728f900806",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/a3c74641f0b10372e83522267bb5d86cc2733c": "5ca342cab4b81e833b6f58a219aa0807",
".git/objects/57/d3798cf642af10b89566a122b10d651760112d": "e102134cbf2444b6a6f3543df8a9686b",
".git/objects/57/fad2c3fa341cca9e46fcee2b814bcac52b4ed5": "fcc28cde983360b38957f9974fe04088",
".git/objects/58/2c5b200a92d47868c49ba13dcfeda4e775c1c6": "024a4475b182a831cbdd829df8b17b7d",
".git/objects/59/4b16608e033491dab98334688d3cf3566d0b81": "e0c5cee1db50a9e6183c8094aed7d185",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/395791c920124d6f54e5cb6fbd451be9991e8c": "f3b001cd9d38fcef4d20eadd44160684",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/60/3076f4847c5d86dee36eabf2a6c347024bda4f": "07c60cab38cf4533cfd429b77382ba56",
".git/objects/61/060ee22fd916962766f2e980e4c9b5e1b6b4d9": "785c450638c610f2dee09fdaffad6503",
".git/objects/61/4c9e86b6544adb7556bca6fc4a4da85f362e86": "40d689749923ebd423d21406c180ca8a",
".git/objects/62/d5cc179aff0bd66b911cd9f0a29e514d4bc91c": "2e5e3bd8be4aed28353618420ec2ecc9",
".git/objects/64/fca06634c70891d62e77661d11577e404f0fe9": "b2b852a80e97f3ce32ee19182493880f",
".git/objects/67/22790f47477ed9ba06ff93ec68df689dfd1f9c": "07f9db0f548ab1b0ad35dc171864055b",
".git/objects/67/b141c2170ef620680da09c234ef8ff28b39381": "caf7ece273c295e4400577481945a25f",
".git/objects/6b/c5c1269a6ed2f1ecbcefcc31cc8eee0e756ad2": "093752dfb00fef64d8bf34c5245d105d",
".git/objects/6b/d9a63e5a834d23e554cd5a5b06f8aaf934db00": "710b6c151c49b8bd382cc9dee96bb75f",
".git/objects/6f/884d570e2e4771b2344e3ca7b36ef57d4240bb": "f3c41f42f78106018d9cb02dcac72a47",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/47507dfea32e58686d54e3114f5cad8f8893c3": "10b0bbeaa838b05c208ff55c8c93fc22",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/c6c03e5d1733e47f5467f2d3fa604b886c62af": "1197820456f74c794f85b2bf92ae9c83",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/76/439e1728762f16ba752927c97fd2126a19cc4f": "0ba1a68ae4d05e9303f9a8e025709bec",
".git/objects/76/d7b4cb0209d2fce3c33c870595a6e08152e883": "e4123bc98921afe6c9c82c47e8a1cdbb",
".git/objects/7a/2fe563ec208082fbe8c587bfb44b80cba2ddba": "a55d261c1f281c526c3af73d6baab99e",
".git/objects/7a/45f1016319a2be4b7805c37e20cbb5d605a4c4": "22a608cbf564b4e850224a52e63b9134",
".git/objects/7a/7cd37b4540d0bb662ac4a1286f26dd05fd987b": "efb7cc9e37b0fb902f020d16b1ceeef1",
".git/objects/7f/7a4dac36c52f46804b17030a524fe9d27c9618": "35bcd05f67ba12829f242ad386657ba8",
".git/objects/80/abf28016fb5df9db3a96f8a797d84b44a581b1": "adc90d215ca4870fb24694767214b7b9",
".git/objects/81/0ed06874070c0ab07443f5430da645b48929de": "019fa0c32c178816c7698a98069a9394",
".git/objects/81/6ae3b8732055569171b7990451b03be77261b7": "7e99682f08fa2c286192ae9da61b30b6",
".git/objects/82/6757f0dcd166319a65f794b1be092c7a7f9a25": "0ee48c2cfefacdd2726f0fccca09f1c0",
".git/objects/82/8467b981d868b39f6e0f90a7dc8842726fd86c": "3d25f52f0b8e5e6d158dbe5b695fa274",
".git/objects/84/9d115ce608d63ada449e46563a72a62a198098": "37cdfede7c2888be8e07e6eec2053c1f",
".git/objects/86/575e37bf239e352ef654575fdd26999c0b8230": "86b7d041e238f524a3299eac02405c4c",
".git/objects/86/b0c7fc81448f7134441234027db36935193f41": "75ef023476f4a671039170ad995bbe81",
".git/objects/87/eb4b1801373aceba09ab08fed7e416deb46a92": "b68e9c92538203bc7247b5ba708d5e9d",
".git/objects/88/057193779a62aaee3891f958667873b60157ee": "aab85184e6773757442521a2f621bb3c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e15387cf4322d0c7605e383441e918bf858df3": "c915afebfb97b79d6eeb0b3ad51f8dd9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/160a032b01ca9c8f2fa28fee34cb0c13e0fcea": "81f93b32802c40d1720ba93f00f8aa43",
".git/objects/90/36c46e77638a69ebc5aee3bd85e81087e2e83c": "a03e7ca2d179d68cffe4578c61d1088c",
".git/objects/91/3259f0880ee283e1905aed7ad4af5ede992868": "ce31f58fb19da890dc4a0c8d92c050db",
".git/objects/91/8fb3d0b6863fd2680473e1ce6f7358527bbe9d": "3877ddccf534706af9612725a9068edd",
".git/objects/92/70ff05680bcb96d2a4f3331f68700a21f53455": "3d5850232ad4b407e056f9c7bf3ada5a",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/93/bb18b0618eb173cb8fd3829b098ccb7f916efc": "99dab6a1bfb97e75b36f6b3e45504dec",
".git/objects/94/6966f9242b5d673479c2c83afe9a34ae2eaaff": "e20fe0d4fa5f73d44e9d7832746cc07d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/793af08020f6c889ed9f5c1746f729ead58ea0": "10c31caec60432343aa01355a9b49209",
".git/objects/98/36b228ae3435522bd7c5c2b466abd0fc204860": "ee6e1142ad85fd9ec9576bbbbec11664",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/a2/07cf7efdf888688de5168659d02c08e5091edc": "1f267164fa53830e850455c4eb9b939f",
".git/objects/a2/8353c1acd7a56e3e4532c0dab47518b9f7445a": "27ea4508d385d331a8817721f9c0c39f",
".git/objects/a4/86035970adbf320166a9ba6e9fcc6c80ecf249": "0b599f6db1031df0f19e1df81d4f1ca9",
".git/objects/a5/c41b52ebc96f6000a3427046aa3736255b2479": "cde1d0976e1bba22b5788d02a3b50749",
".git/objects/aa/2b627f8e59050ddfaefab3e4d441a728ce4152": "3f36b4409a2848a81c790a6b46035292",
".git/objects/ac/d9e370dde80abe162407346c753cb972971a62": "ea816ccd63609e669bdd8a5a9bc903d7",
".git/objects/ac/f56dae972702d171ca7f9729c1d6d9bf8e674f": "c3a86e005ec8d3ac9e10d91c0055ebab",
".git/objects/ad/ed04abdedc6480da403eb420d4a7f2d005f20d": "ddcb867fe4c1c317f105eda498ce7e88",
".git/objects/ae/2b12ed0d30b8e454907974b691f5e28c43b77c": "fbe33f0e9f4014deab10a1ddd51a4ba2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/a9bf4703080e410f92c036bc258463861726ca": "b83e542cdd75d425ff467efc3814bb91",
".git/objects/b2/3720c6931e83f0936ede8a412fc666ff7cadb1": "1e4b4e9261f59d2a219e79f571d3d2c8",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b4/ca78eb22bbd909bec8f64654028031d2e8a7cf": "5dfcec8184ae666707cf9d5fa29779a8",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/de5611c397e0628e8bd6714fa82d1e7a3c3542": "bcd679d19aa480027ed1dd92e33d6096",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/adee2876ec1e811dd59874a1753b3c8dd2ea4a": "270d02b9970e189b8c14cf3fc70033c1",
".git/objects/b9/ba486e4b6db8c86eca52d811bdd69643ec3393": "6e2def5353bbd3807241eafb5d1f71cd",
".git/objects/bd/e72dd404dfb41fb870458a8838b0082657b167": "d9a3a3ce045ae53bf997e88a7ff5690f",
".git/objects/c1/05c019a988c2252fe92a7bf00838e28b80dda7": "2ab1f198a844c6071ae1e78ed7c30292",
".git/objects/c1/1a735e944f2342fbc872194005c268c5cb4929": "875bb02623ca2174c55f38e609434296",
".git/objects/c3/8d33fca958fbfe28cedc5c2dbcbb22dd15a04e": "2439276a0b1285add77d268671c2facf",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/8383fdf50859b1444e620bd3d7cb345e983fd4": "07c553d579c99027cf82304b51ef2ebd",
".git/objects/cb/7488c7c77b9598dcceb21bdbd7d881c00c8bb7": "110e4966c39be1acc6b05496dc3904d5",
".git/objects/d1/33c2d95557ac0c76ae4114b0e8e906b21ffb9b": "ee5939e4eb1c22546bf375fca6844fa0",
".git/objects/d1/8df68e927001f60ec265a85583490698386dea": "6cc36c5d26e451b4015b90ba3e128018",
".git/objects/d2/623c1de391fe1b94b197f75010b02c27b9cc87": "08eec21453f13ba70ac5faf531d12e16",
".git/objects/d2/96c825066e7b48256a7036db7082211f5a950f": "27e2f57d1d001f7ec56b826b0b9faa5b",
".git/objects/d3/59c0775587e46a3d6e0d4b7311e46822291d93": "c66690173d37a10714adf03657ed54eb",
".git/objects/d3/dadfe8e30aa551bb0a0c70abe5a2f563259111": "2ab373297855b988188eb621384572fb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3c434017e217e159b87b51863db6d20901b1ac": "4cb84a761f9900c1fa424e1dfbceb865",
".git/objects/d5/3e991ad1b8bc3c54000a016c115fa7957b4669": "cbff1605601e3b236965d599c501a63a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e92d8b4e29dfa8e397d968e575c6d580a4f603": "29e5eec183606ce2dc1305d9661584a8",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/e1e70e6164e8850dd120d6f738871675bf072b": "4393347180a141477fdc9e00dedfcfa0",
".git/objects/d9/0adf6ef3b57303c2df58e48545149f99443ea6": "f4293fc6b55c9f2d4e4fc484de468c95",
".git/objects/d9/5c612533dc21813bee21426bd41765505b6903": "070bb270b5107294466eda76e4b8b648",
".git/objects/d9/be2bd1163490e1b9e2ff7846917dd20537c0bc": "b21830176032348e179c07d2ae68c5c2",
".git/objects/de/0fe6ad7111b25d46fea136aebafa0844ce3a27": "50764752d55f16cb9610100bb40cc7e7",
".git/objects/df/3ada65416e90d3a0f7a9979c2b2706458e73db": "732cd68ad764770369e0378a0525654a",
".git/objects/e2/32cbffb1470b19fa5fc6cc60dd4d11120951b3": "5a3a977882bf2ae41cca39a2dce424ff",
".git/objects/e2/f3ababaf6edbf5dc622eefb5854d9f1bad3571": "1926db6f4c8d5678ed30e565961914c4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/22e2742c4f9037d855738c3a083bcf5f9c28b5": "410975d88b4afd272e685d344c1e827e",
".git/objects/ea/63b8052ef36eea05ce5a218c663320a39a2d9e": "830521e3b8a206a708ddaf3cfcb3185e",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/ee/0d7f4fc7028438e227ffd5d0974dff13fa37be": "0a65eec69da562c845dba0e544afeec2",
".git/objects/f1/3df061f850f3a85b69b65c0aed15b015df99e0": "e2abbea68ecf7beefe4f97307bc2f005",
".git/objects/f1/6c606f1658461e469d14c671712441d43f5f9b": "916565e2266862f550285eac6a339712",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/5039226edf00d7d613e8cc03e4df36a7006431": "55ce218aaec6bbec6283af27f893593f",
".git/objects/f8/d2c3e83996ee3c8562bfe5fb87197a0b42e9ed": "4e3d1ea7d3a085f1faeb0cb44717a2e3",
".git/objects/f9/ce0612fde76571c340fc5c87fa1afba3326b2c": "06f3284cf17ccd36486e39cabdb3576e",
".git/objects/fb/cad857df724ccf286060b570a9ca13af988410": "49a28cc8a727b145fdbee269b36badd3",
".git/objects/fc/4c7b14e6f9ff706927c7882fb3eefb0ba2066e": "5246d86afb81f17dde44d18ef630b6de",
".git/objects/ff/77f85324f2c356bdd7f7d45c29c0aa230a85a0": "1bce91209534768db50b4a9133389e4a",
".git/refs/heads/main": "91ea905ada10851b8f51d635e0bd8f23",
".git/refs/remotes/origin/main": "91ea905ada10851b8f51d635e0bd8f23",
"assets/AssetManifest.bin": "5cc0fa2063eca2bf17a6eeeb85c7dc64",
"assets/AssetManifest.bin.json": "72daa385fa393bbf46e9cb4c01e5d26a",
"assets/AssetManifest.json": "450c03fe7a0b97751686454aede3cfdb",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "851d24371fe27229e5b52ddcac824178",
"assets/images/0.png": "b1bfdd74982d8aaf73f9429375f74db5",
"assets/images/1.png": "44837fffa96fad290688184f46a0b158",
"assets/images/10.png": "6de25e4d7b47bef3ce5019967e43883e",
"assets/images/11.png": "02438e52467b2b68fdb749baffdc0536",
"assets/images/12.png": "40af7279e35d6c57d27685eba28522dc",
"assets/images/13.png": "fcff8458c91617eec5d82c2642576be8",
"assets/images/14.png": "7fdd04d75365e5d6ced2b3f82a94fc80",
"assets/images/15.png": "08cc1db9c13040bf6fc6cd846c06d232",
"assets/images/16.png": "8b78f586fe7c94374d35a60d328b8f3a",
"assets/images/17.png": "60e9a78b873e3b75fb3574142d8ea184",
"assets/images/2.png": "ddbe0c212815dd0f8d9f18e4423604bc",
"assets/images/20240313_204035_0000.png": "19d0addcb0d1843b1516b3e772270266",
"assets/images/20240313_204035_0000_transparent_Craiyon.png": "277edf8809a40173b831f07f442b5357",
"assets/images/3.png": "dc305492961e0f05f4011df51d1f4c0e",
"assets/images/4.png": "f1dd6e4da5cafc793fcc4ebf6032274d",
"assets/images/5.png": "25f8b2d4296cdc1ce9b9d60a1c244963",
"assets/images/6.png": "fbc77d61fe5761cb85bae45474dfeefb",
"assets/images/7.png": "21f0c75f6a338f15ba6ba808ca85202f",
"assets/images/8.png": "85280969b264d6f937b6e708788b5169",
"assets/images/9.png": "c88119c4578fb8f0235d6db371c4954f",
"assets/images/appstore.png": "455abc00ceb416d1ae1e93641a5345b8",
"assets/images/default/0-web.png": "a5de5f5bab8f611e1dc88fa1e69e35b2",
"assets/images/default/0.jpg": "f8faefcad9ee294e984e49dd97c06061",
"assets/images/default/1-web.png": "06ab3f40db60c9a580b6d32e31eb74e8",
"assets/images/default/1.jpg": "06306b16eb0d01f6a6ecdeca8e8acef1",
"assets/images/default/10-web.png": "0006095026ec44bf65dfa1437f03d8e9",
"assets/images/default/10.jpg": "8f45cdff5f98e04b904ceadd14ee7dfe",
"assets/images/default/11-web.png": "01343bf0ef2156949b9b4bada5bf9829",
"assets/images/default/11.jpg": "2163dae724eaeafee44521af493b2451",
"assets/images/default/12-web.png": "8b5de4182e777b15e984e8f34f1f161a",
"assets/images/default/12.jpg": "ca3771331d8cde8510d29b94f70ba2dc",
"assets/images/default/13-web.png": "1c637bd183e9b7183062e8eab61a4f0b",
"assets/images/default/13.jpg": "ce7cc52bb497cee7a55980e50a9622ec",
"assets/images/default/14-web.png": "cac49adc8b513969335ff3863d5d00ba",
"assets/images/default/14.jpg": "5cd0c0a0dc850e087a8b77c561e884a2",
"assets/images/default/15-web.png": "49be380b76f519441b1a578424fa76c4",
"assets/images/default/15.jpg": "3d7142798623ade8bcfadadd944dafe4",
"assets/images/default/16-web.png": "fa21c62fcbe9f904ba172771b401d632",
"assets/images/default/16.jpg": "c78178cd1f787245e2fedec01a2e1bcf",
"assets/images/default/2-web.png": "1cebfd419d31f5cac833d235d526d651",
"assets/images/default/2.jpg": "9a4338432c496cdc3890c8a07bd6c519",
"assets/images/default/3-web.png": "d9c14540d19ebea9b79fcc80f6911fc5",
"assets/images/default/3.jpg": "ae9d7f48ce3f962f13c821740d427b6b",
"assets/images/default/4-web.png": "9da33cf448d08c5c835bd5cfb697f8cd",
"assets/images/default/4.jpg": "eb5b2b88f81e9bfc223da3786f7fb630",
"assets/images/default/5-web.png": "553fdba9674d94a00be7ca1c46c02620",
"assets/images/default/5.jpg": "e79ef3ebe9407dc081e4756c5a9111dd",
"assets/images/default/6-web.png": "73ac8800291fbfe6d2f34a7a22a3030e",
"assets/images/default/6.jpg": "5187120e66e71578511de98577925a77",
"assets/images/default/7-web.png": "6d678190abf4b92daa16a7d01ad7884c",
"assets/images/default/7.jpg": "3fbc225317e8fd465db4a28835a70e54",
"assets/images/default/8-web.png": "b2788404ef0eee1c4b48fa4d96a5ddab",
"assets/images/default/8.jpg": "dc78ff315251da595371f386a11dfbf9",
"assets/images/default/9-web.png": "25b8202fc063223edb1fefb02ab4ea65",
"assets/images/default/9.jpg": "3eff400565d6c7d725b81714eedad56b",
"assets/images/file-gBhBvSjpYbf5QbJapJ7zzCd3.webp": "39cb3c33ce9a8504d1a75ab1d98ea9a3",
"assets/images/file-ipJvTsLtDR1shQ3sBwPaa41S.webp": "8e1b0179d6bcdbbd3cbe6be7f18ae651",
"assets/images/file-ipJvTsLtDR1shQ3sBwPaa41S_transparent_Craiyon.png": "195db933bf0bdd7e4807a6cb9c222483",
"assets/images/google-dark.png": "c93f9b31b2a3fd1ed73187f55226e15f",
"assets/images/google-square-light.png": "9773d89d9315e26a9beb160a70b9a6fa",
"assets/images/google-square-small.png": "8199f4be8fb22e083997fd0ad2e1192c",
"assets/images/google-square.png": "a16fb9d764e176d11f47a8222cf47e82",
"assets/images/googleLogo.png": "7e557f1c0864829c54c300d15bee69f4",
"assets/images/Google__G__logo.svg.png": "027ef96727eb922bfe79136c3f6d7be6",
"assets/images/input.pdf": "28ba27b113622366ae72924be3f947bd",
"assets/images/logo-app.png": "583c88e3d89cddc00cbbc7ac47a18a78",
"assets/images/logo-certificate.jpg": "e538c7ee27fbde7df94624ab677c985a",
"assets/images/logo-certificate.png": "c1eb352b523e067dd78b4b5a48d7dfad",
"assets/images/logo.png": "5fb59311907d866743d4ad56602b4aa3",
"assets/images/logo_transparent%2520-%2520Copy.jpg": "c277b2008462e0650efd3f0584b730bd",
"assets/images/logo_transparent.png": "023b127f5adc49f6a59ab8733b41cc18",
"assets/images/playstore.png": "84f6dd637c7a0d2d90273a2188060256",
"assets/images/SDG%2520Quest%2520Desc.png": "227b5a77644d32f2242113f3531e3ef2",
"assets/images/SDG%2520Quest%2520Logo.png": "32c8c3ffde2d959b9b6514174019747b",
"assets/images/SDG%2520Quest%2520Wheel.png": "41479bc1c4ff5a7a4db988b59ff37a28",
"assets/images/SDG%2520Quest.jpg": "2b9ed356080e77930ca976f78a968ec5",
"assets/images/SDG%2520Quest.png": "2b92e371de46b9ccb66e8561eec72583",
"assets/images/SDG%2520Wheel_PRINT.jpg": "2305dcba51cc0c4247203749acab3f72",
"assets/images/SDG%2520Wheel_PRINT_Transparent.png": "60e9a78b873e3b75fb3574142d8ea184",
"assets/NOTICES": "1765497e6999e717fa9450605edc66e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttermoji/attributeicons/accessories.svg": "0b8839e003a89232edec0e09cb12fa2b",
"assets/packages/fluttermoji/attributeicons/beard.svg": "908ac523ce1c704be65e254aa4a04e31",
"assets/packages/fluttermoji/attributeicons/beardcolor.svg": "8fa1ec767cfa14371ca15a47126049ba",
"assets/packages/fluttermoji/attributeicons/eyebrow.svg": "cf66096dacdfb6af807cd745fc724e9a",
"assets/packages/fluttermoji/attributeicons/eyes.svg": "cfbbbeb9cc3b40c6a561166ad07fc56c",
"assets/packages/fluttermoji/attributeicons/hair.svg": "0044380b1c40c321c8a65da5b8e77a0c",
"assets/packages/fluttermoji/attributeicons/haircolor.svg": "5756eb4c957d15ea7fcc37c1835488ac",
"assets/packages/fluttermoji/attributeicons/mouth.svg": "af3193d2a407e09fa1156f0f3c30ea86",
"assets/packages/fluttermoji/attributeicons/outfit.svg": "f36789fda25e7b3746835daf0ec7c0dc",
"assets/packages/fluttermoji/attributeicons/outfitcolor.svg": "e8f931206db9c6ab01a6b4c22c23bf4d",
"assets/packages/fluttermoji/attributeicons/skin.svg": "5f58e197768b8da582fbe8219daf164d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cd5a2be811cc887efedfd358050fc525",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0e751781eb4fd34042ab1c4ebd848637",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "76769104ee965059719ad1093c77cc39",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ca5f27c2ecf2f74ff8fe77638fa74e5",
"/": "3ca5f27c2ecf2f74ff8fe77638fa74e5",
"main.dart.js": "8978b7b4b266177a30595a24f4d5a9e9",
"manifest.json": "3e4e8fecf55f289e33e0ac8446b064de",
"version.json": "77fed46d941fa7837c12087709b3a4be"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
