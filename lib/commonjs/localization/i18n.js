"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslationProvider = exports.TranslationContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var Localization = _interopRequireWildcard(require("expo-localization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TranslationContext = /*#__PURE__*/_react.default.createContext({});

exports.TranslationContext = TranslationContext;

const TranslationProvider = _ref => {
  let {
    children,
    translations
  } = _ref;
  const [locale, setLocale] = (0, _react.useState)(Localization.locale);
  console.log('setting up translations');
  console.log(`local locale: ${Localization.locale} `);
  console.log(`default locale: ${locale} `);
  _i18nJs.default.locale = locale;
  _i18nJs.default.translations = translations;
  _i18nJs.default.fallbacks = true; // update layout direction

  _reactNative.I18nManager.forceRTL(Localization.isRTL);

  const localized = (0, _react.useCallback)((key, config) => _i18nJs.default.t(key, { ...config,
    locale
  }).includes('missing') ? key : _i18nJs.default.t(key, { ...config,
    locale
  }), [locale]);
  const getLocale = (0, _react.useCallback)(async () => {
    const localeJSON = await _asyncStorage.default.getItem('locale');
    console.log(`getting locale from storage and writing it to memory ${localeJSON}`); // If we have a locale stored in local storage, that is high priority (it overrides the current device locale)

    setLocale(localeJSON !== null ? localeJSON : Localization.locale);
  }, [setLocale]);
  (0, _react.useEffect)(() => {
    getLocale();
  }, [getLocale]);
  (0, _react.useEffect)(() => {
    console.log(`write to storage locale: ${locale}`);

    _asyncStorage.default.setItem('locale', locale);
  }, [locale]);
  const value = {
    localized,
    setAppLocale: setLocale
  };
  return /*#__PURE__*/_react.default.createElement(TranslationContext.Provider, {
    value: value
  }, children);
};

exports.TranslationProvider = TranslationProvider;
//# sourceMappingURL=i18n.js.map