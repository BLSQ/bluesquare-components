!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define('bluesquare-components', [], t)
        : 'object' == typeof exports
        ? (exports['bluesquare-components'] = t())
        : (e['bluesquare-components'] = t());
})(self, () =>
    (() => {
        'use strict';
        var e = {
                n: t => {
                    var r = t && t.__esModule ? () => t.default : () => t;
                    return e.d(r, { a: r }), r;
                },
                d: (t, r) => {
                    for (var n in r)
                        e.o(r, n) &&
                            !e.o(t, n) &&
                            Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: r[n],
                            });
                },
                o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                r: e => {
                    'undefined' != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: 'Module',
                        }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                },
                p: '',
            },
            t = {};
        e.d(t, { default: () => Ki });
        var r = {};
        e.r(r),
            e.d(r, {
                chipColors: () => Z,
                getChipColors: () => Q,
                getOtChipColors: () => ee,
                otChipColors: () => X,
            });
        var n = {};
        e.r(n),
            e.d(n, {
                buttonReloadMessageKey: () => oe,
                error: () => ie,
                formErrorMessageKey: () => re,
                formSuccessFullMessageKey: () => te,
                formWarningMessageKey: () => ne,
                reloadPage: () => ce,
                reloadPageMessageKey: () => ae,
                success: () => le,
                warning: () => se,
            });
        var o = {};
        e.r(o),
            e.d(o, {
                MENU_HEIGHT_WITHOUT_TABS: () => pe,
                MENU_HEIGHT_WITH_TABS: () => de,
                SIDEBAR_WIDTH: () => ue,
                textPlaceholder: () => me,
            });
        var a = {};
        e.r(a),
            e.d(a, {
                AddButton: () => Ve,
                AddComment: () => Ya,
                ArrayFieldInput: () => Or,
                BlockPlaceholder: () => sn,
                Checkbox: () => vr,
                ColumnsSelectDrawer: () => vn,
                CommentWithThread: () => nl,
                ConfirmCancelButtons: () => Ra,
                ConfirmCancelModal: () => La,
                CsvSvg: () => j,
                CustomInput: () => xa,
                DHIS2Svg: () => S,
                DatePicker: () => cr,
                DynamicSelect: () => ml,
                DynamicTabs: () => Qt,
                EnrichedTreeItem: () => Cl,
                ErrorBoundary: () => an,
                ErrorBoundaryWithMessage: () => ma,
                ExcellSvg: () => I,
                Expander: () => pa,
                ExportButton: () => Ke,
                FakeInput: () => ri,
                FilesUpload: () => Ia,
                FormControl: () => ar,
                HeaderRowIcon: () => xn,
                IasoChipColors: () => r,
                IasoTreeView: () => ql,
                IasoUiConstants: () => o,
                IconButton: () => At,
                InfoHeader: () => jn,
                InputLabel: () => jr,
                LazyImage: () => Vl,
                LinkContext: () => St,
                LinkProvider: () => Tt,
                LoadingSpinner: () => w,
                MENU_HEIGHT_WITHOUT_TABS: () => pe,
                MENU_HEIGHT_WITH_TABS: () => de,
                NumberInput: () => Sr,
                OrgUnitSvg: () => R,
                PageRowSelect: () => Qo,
                PasswordInput: () => Ir,
                PdfSvg: () => A,
                QueryBuilder: () => Xl,
                QueryBuilderInput: () => ai,
                Radio: () => Br,
                SIDEBAR_WIDTH: () => ue,
                SearchInput: () => Ar,
                Select: () => nn,
                SelectionSpeedDials: () => Mn,
                ShapeSvg: () => V,
                SimpleModal: () => ha,
                SingleComment: () => tl,
                SnackBar: () => n,
                SortableList: () => Ci,
                SortableTable: () => Vi,
                Table: () => ia,
                TextInput: () => on,
                TextSvg: () => $,
                TreeViewResultsCountSelect: () => dl,
                TreeViewWithSearch: () => Sl,
                TruncatedTreeview: () => Ll,
                WordSvg: () => U,
                XmlSvg: () => J,
                addPositionIndex: () => Ut,
                capitalize: () => $t,
                clone: () => Vt,
                commonStyles: () => De,
                createUrl: () => Ui,
                deepEqual: () => _t,
                defaultSelectionActions: () => Jn,
                displayDateFromTimestamp: () => Wi,
                english: () => Nl,
                formatThousand: () => Gt,
                french: () => Al,
                getColumnsHeadersInfos: () => ro,
                getOrderArray: () => Kn,
                getParamsKey: () => Xn,
                getSimplifiedColumns: () => Yn,
                getSort: () => Un,
                getTableParams: () => eo,
                getTableUrl: () => Wn,
                injectIntl: () => Ee,
                makeFullModal: () => za,
                mapPopupStyles: () => Re,
                mapStyles: () => Me,
                patchIntl: () => Oe,
                rawTheme: () => qe,
                removePositionIndex: () => Kt,
                renderTags: () => Wr,
                selectionInitialState: () => Zn,
                setTableSelection: () => Qn,
                substituteVars: () => Ht,
                tableInitialResult: () => to,
                testTS: () => Se,
                textPlaceholder: () => me,
                theme: () => ke,
                translateOptions: () => $i,
                truncateText: () => Wt,
                useHumanReadableJsonLogic: () => pi,
                useKeyPressListener: () => tn,
                useLink: () => Mt,
                useSafeIntl: () => Pe,
                useSkipEffectOnMount: () => Ce,
                useTranslatedOptions: () => Gi,
                withLink: () => It,
            });
        const l = require('@babel/runtime/helpers/defineProperty');
        var i = e.n(l);
        const s = require('react');
        var c = e.n(s);
        const u = require('@material-ui/core/CircularProgress');
        var d = e.n(u);
        const p = require('@material-ui/core'),
            m = require('prop-types');
        var g = e.n(m);
        const b = require('classnames');
        var f = e.n(b);
        function h(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? h(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : h(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const O = {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                top: 0,
                left: 0,
            },
            v = e => {
                const {
                    classes: t,
                    size: r,
                    transparent: n,
                    fixed: o,
                    absolute: a,
                    padding: l,
                } = e;
                return c().createElement(
                    'div',
                    {
                        style: { padding: l },
                        className: f()(
                            o && !a && t.rootFixed,
                            a && t.rootAbsolute,
                            !o && !a && t.root,
                            n && t.rootTransparent,
                        ),
                    },
                    c().createElement(d(), { size: r }),
                );
            };
        (v.defaultProps = {
            size: 40,
            transparent: !1,
            fixed: !0,
            absolute: !1,
            padding: 0,
        }),
            (v.propTypes = {
                size: g().number,
                transparent: g().bool,
                fixed: g().bool,
                absolute: g().bool,
                padding: g().number,
                classes: g().object.isRequired,
            });
        const w = (0, p.withStyles)(() => ({
                rootFixed: y(
                    y({}, O),
                    {},
                    { position: 'fixed', zIndex: '1000' },
                ),
                rootAbsolute: y(
                    y({}, O),
                    {},
                    { position: 'absolute', zIndex: '500' },
                ),
                root: y(y({}, O), {}, { position: 'relative', zIndex: '1' }),
                rootTransparent: { backgroundColor: 'transparent' },
            }))(v),
            x = require('@material-ui/core/SvgIcon');
        var E = e.n(x);
        function P(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? P(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : P(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function j(e) {
            const t = C(C({}, e), {}, { viewBox: '-7 -3 40 40' });
            return c().createElement(
                E(),
                t,
                c().createElement('path', {
                    d: 'M11.184,0,3.021,8.619v22.9H28.498V0Zm-.721,3.624V7.443H6.847ZM26.528,29.55H4.991V9.413h7.443V1.97H26.528Z',
                    transform: 'translate(-3.021)',
                }),
                c().createElement(
                    'g',
                    null,
                    c().createElement('path', {
                        d: 'M15.00336,19.0177a1.22617,1.22617,0,0,1,.42463-.23654,1.59576,1.59576,0,0,1,.48321-.07382,1.848,1.848,0,0,1,1.435.63421l.96642-1.16047a2.7286,2.7286,0,0,0-1.04652-.69533A3.96626,3.96626,0,0,0,15.85349,17.25a3.50467,3.50467,0,0,0-1.06891.16828,2.76253,2.76253,0,0,0-.94488.51991,2.61976,2.61976,0,0,0-.67357.88345,2.92663,2.92663,0,0,0-.25667,1.27557,2.76842,2.76842,0,0,0,.168,1.01839,2.42228,2.42228,0,0,0,.45393.74216,2.97378,2.97378,0,0,0,.65892.5469,6.79238,6.79238,0,0,0,.79845.41831,5.06844,5.06844,0,0,1,1.11285.6747,1.21326,1.21326,0,0,1,.43928.98505,1.301,1.301,0,0,1-.36607.98505,1.27774,1.27774,0,0,1-.92249.35085,2.34342,2.34342,0,0,1-.97417-.2159A2.40505,2.40505,0,0,1,13.465,25.009l-.95178,1.18746a3.36245,3.36245,0,0,0,1.17142.78265,4.04267,4.04267,0,0,0,1.59605.31036,3.43456,3.43456,0,0,0,1.14213-.18892,2.68383,2.68383,0,0,0,.94488-.56039,2.73792,2.73792,0,0,0,.64428-.91044,3.01091,3.01091,0,0,0,.242-1.24144,2.49319,2.49319,0,0,0-.205-1.05252,2.66131,2.66131,0,0,0-.52713-.76915,3.45085,3.45085,0,0,0-.71749-.55325q-.39536-.2298-.77607-.40482a4.64417,4.64417,0,0,1-1.03963-.62786,1.15284,1.15284,0,0,1-.39535-.93743,1.51791,1.51791,0,0,1,.11025-.60722A1.11837,1.11837,0,0,1,15.00336,19.0177Z',
                        transform: 'translate(-3.021)',
                    }),
                    c().createElement('path', {
                        d: 'M7.90166,19.78685a2.21091,2.21091,0,0,1,.65892-.74931,1.57,1.57,0,0,1,.92249-.27622,1.85887,1.85887,0,0,1,1.55212.79613L12.04554,18.424a2.7775,2.7775,0,0,0-1.0982-.87075A3.78071,3.78071,0,0,0,9.38057,17.25a3.35465,3.35465,0,0,0-1.57452.37069,3.54422,3.54422,0,0,0-1.20845,1.039A4.98612,4.98612,0,0,0,5.82929,20.252a7.6351,7.6351,0,0,0,0,4.02832,5.06146,5.06146,0,0,0,.76142,1.58514,3.527,3.527,0,0,0,1.2007,1.04617,3.33459,3.33459,0,0,0,1.58916.37783,3.28915,3.28915,0,0,0,1.60294-.35084A3.14362,3.14362,0,0,0,12.03,26.021l-1.01034-1.093a2.286,2.286,0,0,1-.62189.59373,1.58619,1.58619,0,0,1-.88545.24289,1.6258,1.6258,0,0,1-.94488-.277,2.17538,2.17538,0,0,1-.66667-.74851,3.85061,3.85061,0,0,1-.39535-1.11364,6.71546,6.71546,0,0,1-.13179-1.35574,6.80205,6.80205,0,0,1,.13179-1.37A3.90579,3.90579,0,0,1,7.90166,19.78685Z',
                        transform: 'translate(-3.021)',
                    }),
                    c().createElement('polygon', {
                        points: '19.377 25.157 19.333 25.157 17.605 17.493 15.643 17.493 18.176 27.047 20.402 27.047 22.979 17.493 21.105 17.493 19.377 25.157',
                    }),
                ),
            );
        }
        function q(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function k(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? q(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : q(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function S(e) {
            const t = k(k({}, e), {}, { viewBox: '0 0 200 182' });
            return c().createElement(
                E(),
                t,
                c().createElement(
                    'g',
                    null,
                    c().createElement('path', {
                        d: 'M191.73,60,109,6.34a19.73,19.73,0,0,0-20.32,0L8.31,58.43a12,12,0,0,0-.25,20.63L88.6,134a19.37,19.37,0,0,0,20.37.25l82.76-53.65a11.88,11.88,0,0,0,0-20.59Zm-91,61.45a4.29,4.29,0,0,1-3.49-.05l-77-52.49L97,19.13a4.76,4.76,0,0,1,3.74,0L179.6,70.28Z',
                    }),
                    c().createElement('path', {
                        d: 'M88.66,47.82,45.1,76.06l13.61,9.33L97,60.61a4.76,4.76,0,0,1,3.74,0l39.37,25.52,14-9.06L109,47.82A19.76,19.76,0,0,0,88.66,47.82Z',
                    }),
                    c().createElement('path', {
                        d: 'M191.73,101.46l-8.62-5.59-14.05,9.06,10.53,6.83-78.91,51.15a4.37,4.37,0,0,1-3.49,0l-77-52.5,10-6.47L16.55,94.57,8.31,99.91a12,12,0,0,0-.25,20.63L88.6,175.46a19.34,19.34,0,0,0,20.37.24l82.75-53.65a11.88,11.88,0,0,0,0-20.59Z',
                    }),
                ),
            );
        }
        function T(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function M(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? T(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : T(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function I(e) {
            const t = M(M({}, e), {}, { viewBox: '-7 -3 40 40' });
            return c().createElement(
                E(),
                t,
                c().createElement(
                    'g',
                    null,
                    c().createElement('path', {
                        d: 'M11.15,0L3.011,8.592v22.834h25.403V0H11.15z M10.434,3.613v3.808H6.826L10.434,3.613z M26.449,29.462H4.977V9.385h7.421 V1.964h14.053v27.498H26.449z',
                    }),
                    c().createElement('path', {
                        d: 'M15.004,14.766h0.491v-1.768H9.444v1.768h0.737c0.202,0,0.402,0.055,0.617,0.168c0.203,0.107,0.396,0.306,0.572,0.585 l2.919,4.738l-2.939,4.21c-0.16,0.229-0.306,0.421-0.438,0.576c-0.113,0.133-0.228,0.242-0.337,0.321 c-0.098,0.07-0.198,0.119-0.307,0.148c-0.127,0.034-0.282,0.051-0.462,0.051H9.198v1.769h5.438v-1.276l-0.055-0.49H14.09 c-0.449,0-0.643-0.057-0.724-0.094c0-0.053,0.01-0.115,0.028-0.186c0.024-0.088,0.055-0.176,0.095-0.264 c0.043-0.097,0.087-0.188,0.138-0.279c0.046-0.084,0.091-0.159,0.139-0.229l1.65-2.44l1.769,2.843 c0.068,0.114,0.123,0.209,0.159,0.289c0.036,0.077,0.05,0.121,0.054,0.139l0.013,0.108c0,0-0.112,0.113-0.625,0.113h-0.592v1.768 h6.033v-1.768h-0.729c-0.144,0-0.3-0.052-0.464-0.151c-0.133-0.08-0.35-0.259-0.616-0.613l-3.272-5.259l2.529-3.646 c0.164-0.238,0.314-0.437,0.452-0.594c0.125-0.142,0.246-0.26,0.362-0.349c0.092-0.069,0.182-0.116,0.272-0.142 c0.104-0.03,0.226-0.045,0.361-0.045h0.655v-1.768h-5.074v1.277l0.055,0.491h0.491c0.125,0,0.237,0.006,0.341,0.02 c0.091,0.011,0.145,0.029,0.173,0.029h0.001c0,0.1-0.027,0.213-0.085,0.336c-0.075,0.168-0.176,0.346-0.301,0.535l-1.349,2.051 l-1.287-2.08c-0.095-0.15-0.17-0.276-0.222-0.375c-0.047-0.09-0.083-0.168-0.107-0.231c-0.017-0.046-0.029-0.087-0.033-0.113 c-0.006-0.039-0.009-0.08-0.031-0.089c0.002-0.001,0.042-0.025,0.162-0.049C14.628,14.776,14.775,14.766,15.004,14.766z',
                    }),
                ),
            );
        }
        function B(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function D(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? B(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : B(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function R(e) {
            const t = D(D({}, e), {}, { viewBox: '0 0 85 85' });
            return c().createElement(
                E(),
                t,
                c().createElement('path', {
                    d: 'M17.518403,78.3591 C16.2139001,78.3570957 15.0595734,77.5172438 14.660803,76.28 L0.1493927,31.77603 C-0.249658449,30.5438778 0.191427305,29.1958057 1.242723,28.43453 L39.235803,0.93513 C40.2882476,0.175265921 41.7117584,0.175265921 42.764203,0.93513 L80.757302,28.43453 C81.8085865,29.1958138 82.2496596,30.5438843 81.850602,31.77603 L67.339202,76.28 C66.9404317,77.5172435 65.7861055,78.3570953 64.481603,78.3591 L17.518403,78.3591 L17.518403,78.3591 Z M19.705003,72.3692 L62.295003,72.3692 L75.464602,31.99883 L41.000003,7.07363 L6.535413,31.99883 L19.705003,72.3692 Z',
                }),
            );
        }
        function L(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? L(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : L(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function A(e) {
            const t = N(N({}, e), {}, { viewBox: '-4 -3 40 40' });
            return c().createElement(
                E(),
                t,
                c().createElement(
                    'g',
                    null,
                    c().createElement('path', {
                        d: 'M13.2,12.3c0.2,1.8,0.3,5.1-1.1,7.8c-0.1,0.2-0.2,0.4-0.3,0.6c-2.3,0.7-4.8,2.1-5.2,3.6c-0.2,0.6,0,1.2,0.4,1.6 c0.4,0.5,1,0.7,1.6,0.7c1.4,0,2.9-1.4,4.6-4.2c0.6-0.1,4-0.6,4.7-0.6c2,2,3.6,3,4.9,3c0.8,0,1.5-0.4,1.9-1.1 c0.3-0.5,0.3-1.1,0-1.6c-0.8-1.5-4-2.1-5.9-2.2c-0.2-0.2-0.3-0.4-0.5-0.6c-2-2.2-2.8-5.5-3-7.2c0-0.4-0.1-0.7-0.1-1 c-0.1-0.9-0.7-1-1-1c-0.3,0-0.6,0.1-0.7,0.3c-0.3,0.3-0.3,0.7-0.2,1C13.1,11.7,13.1,12,13.2,12.3z M8.6,24.6 c0.2-0.2,0.6-0.5,1.1-0.8C9.2,24.3,8.8,24.5,8.6,24.6z M22.5,22.9c-0.2,0-0.5-0.1-1-0.4C22,22.6,22.3,22.7,22.5,22.9z M14.9,17.9 c0.4,0.7,0.8,1.4,1.2,2c-0.2,0-1.8,0.2-1.9,0.2C14.5,19.5,14.7,18.7,14.9,17.9z',
                    }),
                    c().createElement('path', {
                        d: 'M11.1,0L3,8.5v22.7h25.3V0H11.1z M10.4,3.6v3.8H6.8L10.4,3.6z M26.3,29.3H4.9v-20h7.4V2h14L26.3,29.3L26.3,29.3z',
                    }),
                ),
            );
        }
        function F(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? F(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : F(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function V(e) {
            const t = z(z({}, e), {}, { viewBox: '-5 -5 55 55' });
            return c().createElement(
                E(),
                t,
                c().createElement('path', {
                    d: 'M46,14V2H34V6H14V2H2V14H6V34H2V46H14V42H34v4H46V34H42V14ZM6,6h4v4H6Zm4,36H6V38h4Zm24-4H14V34H10V14h4V10H34v4h4V34H34Zm8,4H38V38h4ZM38,10V6h4v4Z',
                }),
            );
        }
        function _(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function H(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? _(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : _(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function $(e) {
            const t = H(H({}, e), {}, { viewBox: '-4 -3 40 40' });
            return c().createElement(
                E(),
                t,
                c().createElement(
                    'g',
                    null,
                    c().createElement('path', {
                        d: 'M11.2,0L3,8.6v22.9h25.5V0H11.2z M10.5,3.6v3.8H6.8L10.5,3.6z M26.5,29.5H5V9.4h7.4V2h14.1V29.5z',
                    }),
                    c().createElement('polygon', {
                        points: '19.1,18.6 21,18.6 21,26.8 22.6,26.8 22.6,18.6 24.4,18.6 24.4,17.2 19.1,17.2 ',
                    }),
                    c().createElement('polygon', {
                        points: '7.1,18.6 9,18.6 9,26.8 10.6,26.8 10.6,18.6 12.4,18.6 12.4,17.2 7.1,17.2',
                    }),
                    c().createElement('polygon', {
                        points: '18.9,17.2 17.2,17.2 15.8,20.5 14.3,17.2 12.6,17.2 14.8,21.8 12.4,26.8 14.1,26.8 15.7,23.1 17.3,26.8 19.1,26.8 16.7,21.8',
                    }),
                ),
            );
        }
        function G(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? G(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : G(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function U(e) {
            const t = W(W({}, e), {}, { viewBox: '-7 -3 40 40' });
            return c().createElement(
                E(),
                t,
                c().createElement(
                    'g',
                    null,
                    c().createElement('path', {
                        d: 'M11.184,0,3.021,8.619v22.9H28.498V0Zm-.721,3.624V7.443H6.847ZM26.528,29.55H4.991V9.413h7.443V1.97H26.528Z',
                        transform: 'translate(-3.021)',
                    }),
                    c().createElement('path', {
                        d: 'M13.5,15.211a1.02243,1.02243,0,0,1,.335.197,1.583,1.583,0,0,1,.278.351,4.63323,4.63323,0,0,1,.268.532l.62,1.764-1.68,4.828L11.214,16.88c-.135-.372-.235-.679-.296-.92a2.01149,2.01149,0,0,1-.085-.435.31193.31193,0,0,1,.127-.256.78111.78111,0,0,1,.506-.129h.59V14.061H6.701V15.14h.37a1.50644,1.50644,0,0,1,.688.125.85109.85109,0,0,1,.346.367c.039.072.158.363.502,1.32l3.794,10.6h.852l2.564-7.236,2.579,7.236h.891l3.564-10.303A10.633,10.633,0,0,1,23.4,15.78a1.97318,1.97318,0,0,1,.232-.336.927.927,0,0,1,.209-.179.81631.81631,0,0,1,.244-.095,1.82682,1.82682,0,0,1,.361-.032h.37V14.059H20.355v1.079h.368a2.06347,2.06347,0,0,1,.84.142.25379.25379,0,0,1,.169.271,5.512,5.512,0,0,1-.383,1.462l-2.028,5.868-2.035-5.779a5.26922,5.26922,0,0,1-.394-1.515.40192.40192,0,0,1,.115-.33c.046-.045.174-.117.508-.117h.7V14.061H12.62V15.14h.369A1.61981,1.61981,0,0,1,13.5,15.211Z',
                        transform: 'translate(-3.021)',
                    }),
                ),
            );
        }
        function K(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? K(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : K(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function J(e) {
            const t = Y(Y({}, e), {}, { viewBox: '0 0 40 40' });
            return c().createElement(
                E(),
                t,
                c().createElement(
                    'g',
                    null,
                    c().createElement('path', {
                        d: 'M15.2,3L7,11.6v22.9h25.5V3H15.2z M14.5,6.6v3.8h-3.7L14.5,6.6z M30.5,32.5H9V12.4h7.4V5h14.1V32.5z',
                    }),
                    c().createElement(
                        'g',
                        null,
                        c().createElement('path', {
                            d: 'M12.4,28.1L10.7,31H9.4l2.4-4l-2.2-3.9h1.3l1.6,2.7l1.6-2.7h1.3L13,27l2.5,4h-1.3L12.4,28.1z',
                        }),
                        c().createElement('path', {
                            d: 'M16.4,23.1h1.1l2.2,5.2l2.2-5.2h1.1V31h-1.2v-4.9h0l-1.6,3.8h-1l-1.6-3.8h0V31h-1.2V23.1z',
                        }),
                        c().createElement('path', {
                            d: 'M25,23.1h1.2v6.8H30V31h-5V23.1z',
                        }),
                    ),
                ),
            );
        }
        const Z = [
                '#4dd0e1',
                '#01579b',
                '#607d8b',
                '#ff7043',
                '#e91e63',
                '#9c27b0',
                '#f44336',
                '#2196f3',
                '#009688',
            ],
            Q = (e, t = !1) => {
                const r = t ? Z.reverse() : Z;
                return r[e % r.length];
            },
            X = [
                '#e91e63',
                '#795548',
                '#0277BD',
                '#4CAF50',
                '#607d8b',
                '#ff7043',
                '#01579b',
                '#9E9D24',
                '#9c27b0',
            ],
            ee = e => X[e % X.length],
            te = 'successful',
            re = 'error',
            ne = 'warning',
            oe = 'reload',
            ae = 'reloadPage',
            le = (e = te, t) => ({
                messageKey: e,
                messageObject: t,
                options: { variant: 'success', persist: !1 },
            }),
            ie = (e = re, t, r) => ({
                messageKey: e,
                messageObject: t,
                options: { variant: 'error', persist: Boolean(r) },
                errorLog: r,
                id: `${e}-${Date.now()}`,
            }),
            se = (e = ne, t, r) => ({
                messageKey: e,
                messageObject: t,
                options: { maxsnack: 1, variant: 'warning', persist: !0 },
                id: r || e,
            }),
            ce = (e = oe, t = ae) => ({
                messageKey: t,
                type: 'reload',
                options: { maxsnack: 0, variant: 'warning', persist: !0 },
                buttonMessageKey: e,
                buttonAction: () => window.location.reload(!0),
            }),
            ue = 350,
            de = 112,
            pe = 65,
            me = '--',
            ge = require('@babel/runtime/helpers/extends');
        var be = e.n(ge);
        const fe = require('react-intl');
        function he(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function ye(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? he(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : he(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Oe = e =>
            ye(
                ye({}, e),
                {},
                {
                    formatMessage: (t, r) =>
                        t && t.id
                            ? e.formatMessage(t, r)
                            : (console.warn(
                                  'Warning: Message object is not defined properly!',
                                  t,
                              ),
                              null),
                },
            );
        function ve(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function we(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? ve(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : ve(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const xe = e => {
            const t = we({}, e),
                r = e.component,
                n = Oe((0, fe.useIntl)());
            return (
                delete t.component,
                delete t.ref,
                c().createElement(
                    r,
                    be()({}, t, { intl: n, forwardedRef: e.ref }),
                )
            );
        };
        (xe.defaultProps = { ref: void 0 }),
            (xe.propTypes = { component: g().any.isRequired, ref: g().object });
        const Ee = e =>
                c().forwardRef((t, r) => {
                    const n = we(we({}, t), {}, { component: e, ref: r });
                    return c().createElement(xe, n);
                }),
            Pe = () => {
                const e = (0, fe.useIntl)();
                return (0, s.useMemo)(() => Oe(e), [e]);
            },
            Ce = (e, t) => {
                const r = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    r.current ? e() : (r.current = !0);
                }, t);
            },
            je = require('@material-ui/core/styles'),
            qe = {
                typography: { useNextVariants: !0 },
                textColor: '#333',
                palette: {
                    primary: {
                        main: '#006699',
                        secondary: '#0066cc',
                        background: '#F5F5F5',
                    },
                    gray: {
                        main: '#666',
                        border: 'rgba(0,0,0,0.02)',
                        background: 'rgba(0,0,0,0.03)',
                    },
                    mediumGray: { main: '#A2A2A2' },
                    ligthGray: {
                        main: '#F7F7F7',
                        border: 'rgba(0, 0, 0, 0.12)',
                        background: 'rgba(0, 0, 0, 0.012)',
                    },
                    error: {
                        main: 'rgb(215, 25, 28)',
                        background: 'rgba(215, 25, 28, 0.2)',
                        backgroundHard: 'rgba(215, 25, 28, 0.7)',
                    },
                    success: {
                        main: '#4caf50',
                        background: 'rgba(76,175,80, 0.2)',
                    },
                    border: {
                        main: 'rgba(0,0,0,0.23)',
                        hover: 'rgba(0,0,0,0.87)',
                    },
                    yellow: { main: '#FFD835' },
                },
                props: {
                    MuiTextField: { variant: 'outlined' },
                    MuiSelect: { variant: 'outlined' },
                },
            },
            ke = (0, je.createTheme)(qe),
            Se = (e, t) => `${t}-${e.toString()}`,
            Te = require('@material-ui/core/styles/colorManipulator'),
            Me = e => ({
                mapContainer: {
                    height: '62vh',
                    marginBottom: e.spacing(2),
                    '& .leaflet-container .leaflet-popup-content a': {
                        color: e.palette.primary.main,
                    },
                    '& .marker-cluster.color': { color: 'white' },
                    '& .marker-cluster.color div': {
                        marginLeft: 2,
                        marginTop: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    '& .marker-cluster.color div .border': {
                        position: 'absolute',
                        display: 'block',
                        height: '100%',
                        width: '100%',
                        top: -2,
                        left: -2,
                        borderRadius: '100%',
                        zIndex: -1,
                    },
                    '& .marker-cluster.primary': {
                        backgroundColor: (0, Te.alpha)(
                            e.palette.primary.main,
                            0.6,
                        ),
                    },
                    '& .marker-cluster.primary > div': {
                        backgroundColor: e.palette.primary.main,
                        color: e.palette.primary.contrastText,
                    },
                    '& .marker-custom': { zIndex: '500 !important' },
                    '& .marker-custom.primary span': {
                        position: 'relative',
                        display: 'block',
                        height: '100%',
                        width: '100%',
                    },
                    '& .marker-custom .marker_bg, & .marker-custom.primary .marker_bg':
                        {
                            position: 'absolute',
                            display: 'block',
                            height: '10px',
                            width: '10px',
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            top: 8,
                            left: 8,
                        },
                    '& .marker-custom.color': { zIndex: '300 !important' },
                    '& .marker-custom.color .svg-icon': {
                        display: 'block',
                        height: 'auto',
                        width: 16,
                        position: 'absolute',
                        top: 6,
                        left: 4,
                        zIndex: 200,
                        borderRadius: '5px',
                    },
                    '& .marker-custom.color .marker_shadow': {
                        position: 'absolute',
                        bottom: 2,
                        left: -1,
                        zIndex: -1,
                        pointerEvents: 'none',
                    },
                    '& .marker-custom.color svg': {
                        position: 'absolute',
                        bottom: 0,
                        left: -5,
                        pointerEvents: 'none',
                    },
                    '& .marker-custom.primary svg': {
                        fill: e.palette.primary.main,
                        position: 'absolute',
                        bottom: 0,
                        left: -5,
                        pointerEvents: 'none',
                    },
                    '& path.primary': {
                        fill: (0, Te.alpha)(e.palette.primary.main, 0.6),
                        stroke: e.palette.primary.main,
                    },
                    '& path.secondary': {
                        fill: (0, Te.alpha)(e.palette.secondary.main, 0.6),
                        stroke: e.palette.secondary.main,
                    },
                    '& path.no-pointer-event': {
                        pointerEvents: 'none !important',
                    },
                    '& .marker-custom.primary img': {
                        position: 'absolute',
                        bottom: 2,
                        left: -1,
                        zIndex: -1,
                        pointerEvents: 'none',
                        width: 'auto',
                    },
                    '& .leaflet-draw.leaflet-control': { display: 'none' },
                },
            });
        function Ie(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Be(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Ie(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Ie(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const De = e =>
                Be(
                    Be({}, Me(e)),
                    {},
                    {
                        containerFullHeight: {
                            width: '100%',
                            height: `calc(100vh - ${de}px)`,
                            margin: 0,
                            overflow: 'auto',
                            backgroundColor: 'white',
                        },
                        containerFullHeightPadded: {
                            width: '100%',
                            height: `calc(100vh - ${de}px)`,
                            padding: e.spacing(4),
                            margin: 0,
                            backgroundColor: 'white',
                            overflow: 'auto',
                            [e.breakpoints.down('md')]: {
                                padding: e.spacing(2),
                            },
                        },
                        containerFullHeightNoTabPadded: {
                            width: '100%',
                            height: `calc(100vh - ${pe}px)`,
                            padding: e.spacing(4),
                            margin: 0,
                            overflow: 'auto',
                            backgroundColor: 'white',
                            [e.breakpoints.down('md')]: {
                                padding: e.spacing(2),
                            },
                        },
                        indicator: { backgroundColor: 'white' },
                        buttonIcon: {
                            marginRight: e.spacing(1),
                            width: 15,
                            height: 15,
                        },
                        smallButtonIcon: {
                            marginRight: e.spacing(1),
                            width: 15,
                            height: 15,
                            position: 'relative',
                            top: -1,
                        },
                        listitem: { width: 'auto', paddingLeft: e.spacing(1) },
                        marginY: {
                            marginTop: e.spacing(2),
                            marginBottom: e.spacing(2),
                        },
                        marginBottom: { marginBottom: e.spacing(2) },
                        marginBottomBig: { marginBottom: e.spacing(4) },
                        paddingBottomBig: { marginBottom: e.spacing(4) },
                        marginLeft: { marginLeft: e.spacing(2) },
                        marginRight: { marginRight: e.spacing(2) },
                        marginTop: { marginTop: e.spacing(2) },
                        marginTopBig: { marginTop: e.spacing(4) },
                        justifyFlexEnd: {
                            display: 'flex',
                            justifyContent: 'flex-end',
                        },
                        floatRight: { float: 'right' },
                        tabs: { padding: e.spacing(0, 4) },
                        textAlignLeft: { textAlign: 'left' },
                        textAlignRight: { textAlign: 'right' },
                        dividerMarginNeg: { margin: e.spacing(0, -4, 0, -4) },
                        containerMarginNeg: {
                            margin: e.spacing(0, -4, -4, -4),
                            width: `calc(100% + ${e.spacing(8)})`,
                        },
                        relativeContainer: { position: 'relative' },
                        svgIcon: { width: 24, heigth: 24 },
                        svgChipIcon: { width: 20, heigth: 20, padding: 4 },
                        textError: {
                            color: e.palette.error.main,
                            display: 'flex',
                            alignItems: 'center',
                        },
                        popperFixed: { position: 'fixed !important' },
                        iconButton: { padding: 0 },
                        linkButton: {
                            color: 'inherit',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: e.spacing(6),
                            width: e.spacing(6),
                        },
                        capitalize: {
                            display: 'inline-block',
                            '&:first-letter': { textTransform: 'uppercase' },
                        },
                    },
                ),
            Re = e => ({
                popup: {
                    '& .leaflet-popup-content-wrapper': { padding: 0 },
                    '& .leaflet-popup-content': {
                        margin: 0,
                        minHeight: 100,
                        width: '360px !important',
                        '& p.MuiTypography-root': { margin: 0, fontSize: 12 },
                        '& .MuiGrid-root > div': { top: 1 },
                    },
                    '& a.leaflet-popup-close-button': {
                        color: 'white',
                        backgroundColor: e.palette.primary.main,
                        padding: '1px 0 0 0',
                        top: '8px',
                        right: '8px',
                        borderRadius: '20px',
                        height: '18px',
                    },
                    '& a.leaflet-popup-close-button:hover': {
                        color: e.palette.primary.main,
                        backgroundColor: 'white',
                        border: `1px solid ${e.palette.primary.main}`,
                    },
                },
                popupListItemLabel: {
                    textAlign: 'right',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    paddingRight: e.spacing(1) / 2,
                },
                popuplistItem: { textAlign: 'left' },
                popupCard: {
                    height: '100%',
                    width: '100%',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow: 'none',
                },
                popupCardMedia: { height: 180 },
                popupCardContent: {
                    margin: e.spacing(3, 2, 2, 2),
                    overflow: 'hidden',
                    wordBreak: 'break-all',
                    padding: '0 !important',
                },
            }),
            Le = require('@material-ui/icons/Add');
        var Ne = e.n(Le);
        const Ae = (0, fe.defineMessages)({
            create: {
                id: 'blsq.button.label.create',
                defaultMessage: 'Create',
            },
        });
        function Fe(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function ze({
            classes: e,
            onClick: t,
            message: r,
            id: n,
            dataTestId: o,
            size: a,
        }) {
            const l = Pe();
            return c().createElement(
                p.Button,
                {
                    variant: 'contained',
                    className: e.button,
                    color: 'primary',
                    onClick: t,
                    id: n,
                    'data-test': o,
                    size: a,
                },
                c().createElement(Ne(), { className: e.buttonIcon }),
                l.formatMessage(r),
            );
        }
        (ze.defaultProps = {
            message: Ae.create,
            id: '',
            dataTestId: '',
            size: 'medium',
        }),
            (ze.propTypes = {
                classes: g().object.isRequired,
                onClick: g().func.isRequired,
                message: g().object,
                id: g().string,
                dataTestId: g().string,
                size: g().string,
            });
        const Ve = (0, p.withStyles)(e =>
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? Fe(Object(r), !0).forEach(function (t) {
                                  i()(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r),
                              )
                            : Fe(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(r, t),
                                  );
                              });
                    }
                    return e;
                })({}, De(e)),
            )(ze),
            _e = require('@material-ui/icons/CallMade');
        var He = e.n(_e);
        const $e = (0, fe.defineMessages)({
            export: {
                id: 'blsq.button.label.export',
                defaultMessage: 'Export',
            },
        });
        function Ge(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function We(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Ge(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Ge(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function Ue({
            classes: e,
            intl: t,
            onClick: r,
            message: n,
            isDisabled: o,
            batchExport: a,
            id: l,
        }) {
            return a
                ? c().createElement(
                      p.Button,
                      {
                          variant: 'contained',
                          className: e.button,
                          color: 'primary',
                          onClick: r,
                          disabled: o,
                          id: l,
                      },
                      c().createElement(He(), { className: e.buttonIcon }),
                      t.formatMessage(n),
                  )
                : c().createElement(He(), { onClick: r, disabled: o });
        }
        (Ue.defaultProps = { message: $e.export, isDisabled: !1, id: '' }),
            (Ue.propTypes = {
                intl: g().object.isRequired,
                classes: g().object.isRequired,
                onClick: g().func.isRequired,
                isDisabled: g().bool,
                batchExport: g().bool.isRequired,
                message: g().object,
                id: g().string,
            });
        const Ke = (0, p.withStyles)(e =>
                We(
                    We({}, De(e)),
                    {},
                    {
                        button: {
                            marginLeft: e.spacing(2),
                            '& svg, & i': { marginRight: e.spacing(1) },
                        },
                    },
                ),
            )(Ee(Ue)),
            Ye = require('@material-ui/icons/Delete');
        var Je = e.n(Ye);
        const Ze = require('@material-ui/icons/FilterList');
        var Qe = e.n(Ze);
        const Xe = require('@material-ui/icons/CallMerge');
        var et = e.n(Xe);
        const tt = require('@material-ui/icons/RemoveRedEye');
        var rt = e.n(tt);
        const nt = require('@material-ui/icons/Edit');
        var ot = e.n(nt);
        const at = require('@material-ui/icons/History');
        var lt = e.n(at);
        const it = require('@material-ui/icons/Map');
        var st = e.n(it);
        const ct = require('@material-ui/icons/CachedRounded');
        var ut = e.n(ct);
        const dt = require('@material-ui/icons/StopRounded');
        var pt = e.n(dt);
        const mt = require('@material-ui/icons/GetApp');
        var gt = e.n(mt);
        const bt = require('@material-ui/icons/RestoreFromTrash');
        var ft = e.n(bt);
        const ht = require('@material-ui/icons/Public');
        var yt = e.n(ht);
        const Ot = require('@material-ui/icons/Clear');
        var vt = e.n(Ot);
        const wt = require('@material-ui/icons/ClearAll');
        var xt = e.n(wt);
        const Et = require('@babel/runtime/helpers/objectWithoutProperties');
        var Pt = e.n(Et);
        const Ct = ['href'],
            jt = ['href'];
        function qt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        const kt = e =>
                (e => ({ __forwardRef__: (0, s.forwardRef)(e) }))(
                    (e => (t, r) => {
                        let { href: n } = t;
                        return ((e, t, r) => {
                            let { href: n } = e,
                                o = Pt()(e, Ct);
                            return c().createElement(
                                r,
                                be()({ ref: t, to: n }, o),
                            );
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r =
                                        null != arguments[t]
                                            ? arguments[t]
                                            : {};
                                    t % 2
                                        ? qt(Object(r), !0).forEach(function (
                                              t,
                                          ) {
                                              i()(e, t, r[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(
                                                  r,
                                              ),
                                          )
                                        : qt(Object(r)).forEach(function (t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(
                                                      r,
                                                      t,
                                                  ),
                                              );
                                          });
                                }
                                return e;
                            })({ href: n }, Pt()(t, jt)),
                            r,
                            e,
                        );
                    })(e),
                ),
            St = (0, s.createContext)({}),
            Tt = e => {
                const { linkComponent: t } = e,
                    r = kt(t),
                    n = (0, s.useMemo)(() => ({ Link: r }), [r]);
                return c().createElement(St.Provider, { value: n }, e.children);
            };
        Tt.propTypes = {
            children: m.any.isRequired,
            linkComponent: m.any.isRequired,
        };
        const Mt = () => (0, s.useContext)(St).Link.__forwardRef__,
            It = e => e => {
                const t = (0, s.useContext)(St).Link.__forwardRef__;
                return c().createElement(
                    'component',
                    be()({}, e, { linkComponent: t }),
                );
            };
        function Bt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Dt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Bt(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Bt(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Rt = {
                delete: Je(),
                'filter-list': Qe(),
                'call-merge': et(),
                'remove-red-eye': rt(),
                'restore-from-trash': ft(),
                edit: ot(),
                history: lt(),
                map: st(),
                xml: J,
                dhis: S,
                orgUnit: R,
                refresh: ut(),
                stop: pt(),
                xls: I,
                download: gt(),
                globe: yt(),
                clear: vt(),
                clearAll: xt(),
            },
            Lt = ({
                icon: e,
                color: t,
                onClick: r,
                disabled: n,
                fontSize: o,
            }) => {
                if (void 0 === e) return 'wrong icon';
                const a = null !== r ? { onClick: r } : {},
                    l = {
                        color: 'white' === t ? t : void 0,
                        opacity: n ? 0.5 : 1,
                    };
                return c().createElement(
                    e,
                    be()({}, a, {
                        color: 'white' === t ? 'inherit' : t,
                        style: l,
                        fontSize: o,
                    }),
                );
            };
        function Nt({
            classes: e,
            disabled: t,
            onClick: r,
            url: n,
            icon: o,
            overrideIcon: a,
            tooltipMessage: l,
            color: i,
            size: s,
            id: u,
            dataTestId: d,
            iconSize: m,
        }) {
            (null === r) == (null === n) &&
                console.error(
                    'IconButtonComponent needs either the onClick or the url property',
                ),
                o ||
                    a ||
                    console.error(
                        'IconButtonComponent has to be provided with an icon',
                    );
            const g = Mt(),
                b = null != a ? a : Rt[o];
            return c().createElement(
                p.Tooltip,
                {
                    classes: { popper: e.popperFixed },
                    disableFocusListener: t,
                    disableHoverListener: t,
                    disableTouchListener: t,
                    placement: 'bottom',
                    title: c().createElement(fe.FormattedMessage, l),
                },
                c().createElement(
                    'span',
                    { id: u },
                    c().createElement(
                        p.IconButton,
                        {
                            className: n && e.iconButton,
                            disabled: t,
                            onClick: r,
                            size: s,
                            'data-test': d,
                        },
                        n
                            ? c().createElement(
                                  g,
                                  { to: n, className: e.linkButton },
                                  c().createElement(Lt, {
                                      icon: b,
                                      color: i,
                                      disabled: t,
                                      fontSize: m,
                                  }),
                              )
                            : c().createElement(Lt, {
                                  icon: b,
                                  color: i,
                                  disabled: t,
                                  fontSize: m,
                              }),
                    ),
                ),
            );
        }
        (Lt.defaultProps = { onClick: null, disabled: !1, fontSize: 'medium' }),
            (Lt.propTypes = {
                onClick: g().func,
                icon: g().oneOfType([g().object, g().func]).isRequired,
                color: g().string.isRequired,
                disabled: g().bool,
                fontSize: g().oneOf([
                    'small',
                    'medium',
                    'large',
                    'default',
                    'inherit',
                ]),
            }),
            (Nt.defaultProps = {
                disabled: !1,
                url: null,
                onClick: null,
                color: 'action',
                size: 'medium',
                overrideIcon: null,
                icon: null,
                id: '',
                dataTestId: '',
                iconSize: 'medium',
            }),
            (Nt.propTypes = {
                size: g().string,
                classes: g().object.isRequired,
                onClick: g().func,
                url: g().string,
                disabled: g().bool,
                icon: g().oneOf(Object.keys(Rt)),
                color: g().string,
                overrideIcon: g().any,
                tooltipMessage: g().object.isRequired,
                id: g().string,
                dataTestId: g().string,
                iconSize: g().oneOf([
                    'small',
                    'medium',
                    'large',
                    'default',
                    'inherit',
                ]),
            });
        const At = (0, p.withStyles)(e =>
                Dt(
                    Dt({}, De(e)),
                    {},
                    {
                        white: { color: 'white' },
                        popperFixed: Dt(
                            Dt({}, De(e).popperFixed),
                            {},
                            { marginTop: e.spacing(1) },
                        ),
                    },
                ),
            )(Nt),
            Ft = require('color');
        var zt = e.n(Ft);
        function Vt(e) {
            return JSON.parse(JSON.stringify(e));
        }
        function _t(e, t, r = !1) {
            if ('object' != typeof e) return e === t;
            let n,
                o,
                a = Object.keys(e),
                l = Object.keys(t);
            if (
                (r &&
                    ((a = a.filter(t => null != e[t])),
                    (l = l.filter(e => null != t[e]))),
                a.length !== l.length)
            )
                return !1;
            for (a.sort(), l.sort(), o = a.length - 1; o >= 0; o -= 1)
                if (a[o] !== l[o]) return !1;
            for (o = a.length - 1; o >= 0; o -= 1)
                if (((n = a[o]), !_t(e[n], t[n], r))) return !1;
            return !0;
        }
        function Ht(e, t, r = e => e) {
            return JSON.parse(
                JSON.stringify(e, (e, n) => {
                    if ('string' == typeof n) {
                        const e = n.match(/\$\{([a-zA-Z0-9_-]+)\}/);
                        if (e) {
                            const o = e[1];
                            if (t.hasOwnProperty(o)) return r(t[o]);
                            console.warn(
                                'Cannot find match in substitudes for value:',
                                n,
                            );
                        }
                    }
                    return n;
                }),
            );
        }
        const $t = (e, t = !1) =>
                e
                    .split(' ')
                    .map(
                        e =>
                            e.slice(0, 1).toUpperCase() +
                            (t ? e.slice(1) : e.slice(1).toLowerCase()),
                    )
                    .join(' '),
            Gt = e =>
                e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '0',
            Wt = (e, t) =>
                e.length > t ? `${e.substring(0, t - 4)}...   ` : `${e}   `,
            Ut = e => {
                const t = [];
                return (
                    e &&
                        e.forEach((e, r) => {
                            t.push({ value: e, position: r });
                        }),
                    t
                );
            },
            Kt = e => {
                const t = [];
                return (
                    e &&
                        e.forEach(e => {
                            t.push(e.value);
                        }),
                    t
                );
            };
        function Yt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Jt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Yt(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Yt(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        class Zt extends s.Component {
            constructor(e) {
                super(e),
                    (this.state = {
                        tabIndex: parseInt(e.params[e.tabParamKey], 10) || 0,
                        tabsWidth: [],
                    });
            }
            handleAddTab() {
                const {
                        params: e,
                        defaultItem: t,
                        paramKey: r,
                        tabParamKey: n,
                        onTabsAdded: o,
                    } = this.props,
                    a = Jt({}, this.state),
                    l = JSON.parse(e[r]);
                (a.tabIndex = l.length), l.push(t);
                const i = Jt({}, e);
                (i[n] = a.tabIndex.toString()),
                    (i[r] = JSON.stringify(l)),
                    this.setState(a),
                    o(i);
            }
            handleDeleteTab(e) {
                const {
                        params: t,
                        paramKey: r,
                        tabParamKey: n,
                        onTabsDeleted: o,
                    } = this.props,
                    a = JSON.parse(t[r]);
                a.splice(e, 1);
                const l = Jt({}, t);
                (l[r] = JSON.stringify(a)),
                    this.state.tabIndex > a.length - 1 &&
                        ((l[n] = (a.length - 1).toString()),
                        this.setState({ tabIndex: a.length - 1 })),
                    o(l);
            }
            handleTabChange(e) {
                const {
                        params: t,
                        paramKey: r,
                        tabParamKey: n,
                        onTabChange: o,
                    } = this.props,
                    a = Jt({}, this.state),
                    l = JSON.parse(t[r]);
                a.tabIndex = e;
                const i = Jt({}, t);
                (i[n] = a.tabIndex.toString()),
                    (i[r] = JSON.stringify(l)),
                    o(i),
                    this.setState(a);
            }
            setTabsElement(e, t) {
                const { tabsWidth: r } = this.state,
                    n = e.getBoundingClientRect().width;
                if (n !== r[t]) {
                    const e = [...r];
                    (e[t] = n), this.setState({ tabsWidth: e });
                }
            }
            render() {
                const {
                        classes: e,
                        baseLabel: t,
                        params: r,
                        paramKey: n,
                        maxItems: o,
                        displayCounts: a,
                        counts: l,
                        addMessage: i,
                        deleteMessage: s,
                    } = this.props,
                    { tabIndex: u, tabsWidth: d } = this.state,
                    m = JSON.parse(r[n]);
                return c().createElement(
                    'section',
                    { className: e.mainContainer },
                    c().createElement(
                        'div',
                        { className: e.tabsContainer },
                        m.length > 1 &&
                            c().createElement(
                                'ul',
                                { className: e.removeContainer },
                                m.map((r, n) =>
                                    c().createElement(
                                        'li',
                                        {
                                            className: e.removeContainerItem,
                                            key: n,
                                            style: { width: `${d[n]}px` },
                                        },
                                        c().createElement(
                                            p.Tooltip,
                                            {
                                                size: 'small',
                                                title: c().createElement(
                                                    c().Fragment,
                                                    null,
                                                    c().createElement(
                                                        fe.FormattedMessage,
                                                        s,
                                                    ),
                                                    ` ${t.toLowerCase()}`,
                                                ),
                                            },
                                            c().createElement(
                                                p.IconButton,
                                                {
                                                    onClick: () =>
                                                        this.handleDeleteTab(n),
                                                    className:
                                                        e.removeIconButton,
                                                    size: 'small',
                                                },
                                                c().createElement(vt(), null),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        c().createElement(
                            p.Tabs,
                            {
                                value: u,
                                classes: {
                                    root: e.tabs,
                                    indicator: e.indicator,
                                },
                                onChange: (e, t) => this.handleTabChange(t),
                            },
                            m.map((r, n) =>
                                c().createElement(p.Tab, {
                                    ref: e => {
                                        e && this.setTabsElement(e, n);
                                    },
                                    key: n,
                                    value: n,
                                    label: c().createElement(
                                        'span',
                                        {
                                            className:
                                                m.length > 1
                                                    ? e.tabContent
                                                    : e.tabContentAlone,
                                        },
                                        c().createElement('span', {
                                            style: r.color
                                                ? {
                                                      backgroundColor: `#${r.color}`,
                                                      border: `2px solid ${zt()(
                                                          `#${r.color}`,
                                                      ).darken(0.5)}`,
                                                  }
                                                : {},
                                            className: e.roundColor,
                                        }),
                                        t,
                                        a && l[n] && ` (${Gt(l[n].count)})`,
                                    ),
                                }),
                            ),
                        ),
                    ),
                    m.length < o &&
                        c().createElement(
                            p.Tooltip,
                            {
                                size: 'small',
                                title: c().createElement(
                                    c().Fragment,
                                    null,
                                    c().createElement(fe.FormattedMessage, i),
                                    ` ${t.toLowerCase()}`,
                                ),
                            },
                            c().createElement(
                                p.IconButton,
                                {
                                    onClick: () => this.handleAddTab(),
                                    className: e.iconButton,
                                    size: 'small',
                                },
                                c().createElement(Ne(), null),
                            ),
                        ),
                );
            }
        }
        (Zt.defaultProps = {
            baseLabel: 'tab',
            maxItems: 5,
            onTabsAdded: () => ({}),
            onTabsDeleted: () => ({}),
            onTabChange: () => ({}),
            displayCounts: !1,
            counts: [],
        }),
            (Zt.propTypes = {
                classes: g().object.isRequired,
                baseLabel: g().string,
                params: g().object.isRequired,
                defaultItem: g().object.isRequired,
                paramKey: g().string.isRequired,
                tabParamKey: g().string.isRequired,
                baseUrl: g().string.isRequired,
                redirectTo: g().func.isRequired,
                maxItems: g().number,
                onTabsAdded: g().func,
                onTabsDeleted: g().func,
                onTabChange: g().func,
                displayCounts: g().bool,
                counts: g().array,
                deleteMessage: g().object.isRequired,
                addMessage: g().object.isRequired,
            });
        const Qt = (0, p.withStyles)(e =>
                Jt(
                    Jt({}, De(e)),
                    {},
                    {
                        tabs: Jt(Jt({}, De(e).tabs), {}, { paddingRight: 0 }),
                        mainContainer: {
                            display: 'flex',
                            position: 'relative',
                        },
                        tabsContainer: { position: 'relative' },
                        iconButton: {
                            color: 'white !important',
                            height: 30,
                            position: 'relative',
                            top: 8,
                        },
                        removeIconButton: {
                            color: 'white !important',
                            position: 'relative',
                            top: 19,
                            right: 15,
                            height: 20,
                            '& svg': { width: 14, height: 14 },
                        },
                        removeContainer: {
                            padding: 0,
                            margin: 0,
                            position: 'absolute',
                            left: e.spacing(4),
                            top: -5,
                            minHeight: 0,
                            height: 1,
                            width: `calc(100% - ${e.spacing(4)}px)`,
                            display: 'flex',
                            listStyleType: 'none',
                            zIndex: 1e5,
                        },
                        removeContainerItem: {
                            display: 'inline-flex',
                            justifyContent: 'flex-end',
                            minWidth: 160,
                            fontSize: 5,
                        },
                        roundColor: {
                            display: 'inline-block',
                            width: 15,
                            height: 15,
                            borderRadius: 15,
                            position: 'absolute',
                            top: 16,
                            left: e.spacing(2),
                        },
                        tabContentAlone: {
                            paddingRight: e.spacing(2),
                            paddingLeft: e.spacing(4),
                        },
                        tabContent: {
                            paddingRight: e.spacing(6),
                            paddingLeft: e.spacing(6),
                        },
                    },
                ),
            )(Zt),
            Xt = require('@material-ui/pickers'),
            er = require('@material-ui/icons/Event');
        var tr = e.n(er);
        const rr = require('@material-ui/core/FormControl');
        var nr = e.n(rr);
        function or({
            classes: e,
            children: t,
            errors: r,
            id: n,
            hideError: o,
        }) {
            const a = {};
            return (
                n && (a.id = n),
                c().createElement(
                    nr(),
                    be()({ className: e.formControl, variant: 'outlined' }, a),
                    t,
                    r.length > 0 &&
                        !o &&
                        c().createElement(
                            p.Box,
                            { className: e.errorContainer },
                            r
                                .filter(e => !!e)
                                .map(t =>
                                    c().createElement(
                                        p.Typography,
                                        { key: t, className: e.error },
                                        t,
                                    ),
                                ),
                        ),
                )
            );
        }
        (or.defaultProps = { errors: [], id: null, hideError: !1 }),
            (or.propTypes = {
                classes: g().object.isRequired,
                children: g().node.isRequired,
                errors: g().arrayOf(g().string.isRequired),
                id: g().oneOfType([g().object, g().string]),
                hideError: g().bool,
            });
        const ar = (0, p.withStyles)(e => ({
            formControl: {
                width: '100%',
                '& fieldset': { borderWidth: '1px !important' },
                '&:hover fieldset': {
                    borderColor: `${e.palette.primary.main}`,
                },
                '&:focused label': { color: `${e.palette.primary.main}` },
                zIndex: 'auto',
            },
            errorContainer: {
                paddingLeft: e.spacing(2),
                paddingTop: e.spacing(1),
            },
            error: { color: e.palette.error.main, fontSize: 14, padding: 0 },
        }))(or);
        function lr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function ir(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? lr(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : lr(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const sr = (0, p.makeStyles)(e =>
                ir(
                    ir({}, De(e)),
                    {},
                    {
                        clearDateButton: {
                            marginRight: e.spacing(2),
                            padding: 0,
                            position: 'absolute',
                            right: e.spacing(4),
                            top: 13,
                        },
                        helperTextError: { color: e.palette.error.main },
                    },
                ),
            ),
            cr = ({
                label: e,
                onChange: t,
                currentDate: r,
                clearMessage: n,
                required: o,
                errors: a,
                hideError: l,
            }) => {
                const i = sr(),
                    [u, d] = (0, s.useState)(null),
                    p = a.length > 0 || Boolean(u);
                return c().createElement(
                    ar,
                    { errors: a, hideError: l },
                    c().createElement(Xt.KeyboardDatePicker, {
                        autoOk: !0,
                        disableToolbar: !0,
                        inputVariant: 'outlined',
                        required: o,
                        InputLabelProps: {
                            className: i.label,
                            shrink: Boolean(r),
                            error: p,
                        },
                        KeyboardButtonProps: { size: 'small' },
                        keyboardIcon: c().createElement(tr(), {
                            size: 'small',
                        }),
                        InputProps: { error: p },
                        helperText: null,
                        format: 'DD/MM/YYYY',
                        label: `${e}`,
                        value: r,
                        onChange: t,
                        onError: e => d(e),
                    }),
                    r &&
                        c().createElement(
                            'span',
                            { className: i.clearDateButton },
                            c().createElement(At, {
                                size: 'small',
                                icon: 'clear',
                                tooltipMessage: n,
                                onClick: () => t(null),
                            }),
                        ),
                );
            };
        (cr.defaultProps = {
            currentDate: null,
            required: !1,
            errors: [],
            hideError: !1,
        }),
            (cr.propTypes = {
                label: g().string.isRequired,
                onChange: g().func.isRequired,
                currentDate: g().oneOfType([g().string, g().object]),
                errors: g().array,
                clearMessage: g().object.isRequired,
                required: g().bool,
                hideError: g().bool,
            });
        const ur = require('@material-ui/core/ListItem');
        var dr = e.n(ur);
        const pr = require('@material-ui/core/OutlinedInput');
        var mr = e.n(pr);
        const gr = require('@material-ui/core/Fab');
        var br = e.n(gr);
        function fr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function hr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? fr(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : fr(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        class yr extends s.Component {
            constructor(e) {
                super(e), (this.state = { fieldList: Ut(e.fieldList) });
            }
            UNSAFE_componentWillReceiveProps(e) {
                this.setState({ fieldList: Ut(e.fieldList) });
            }
            updateField(e, t) {
                const r = this.state.fieldList.slice();
                (r[t].value = e), this.props.updateList(Kt(r));
            }
            addField() {
                const e = this.state.fieldList.slice();
                e.push({ value: '', position: this.state.fieldList.length }),
                    this.props.updateList(Kt(e));
            }
            removeField(e) {
                const t = this.state.fieldList.slice();
                t.splice(e, 1), this.props.updateList(Kt(t));
            }
            render() {
                const {
                        baseId: e,
                        label: t,
                        classes: r,
                        autoComplete: n,
                    } = this.props,
                    { fieldList: o } = this.state,
                    a = o.length > 0 && '' === o[o.length - 1].value;
                return c().createElement(
                    p.Grid,
                    { container: !0, spacing: 0, className: r.marginTop },
                    c().createElement(
                        p.Grid,
                        { item: !0, xs: 1 },
                        c().createElement(
                            'span',
                            { className: r.label },
                            t,
                            ':',
                        ),
                    ),
                    c().createElement(
                        p.Grid,
                        { item: !0, xs: 11 },
                        c().createElement(
                            p.Box,
                            { id: `array-input-field-list-${e}` },
                            c().createElement(
                                p.List,
                                { className: r.list },
                                o.map((t, o) =>
                                    c().createElement(
                                        dr(),
                                        {
                                            key: t.position,
                                            className: r.listItem,
                                        },
                                        c().createElement(mr(), {
                                            autoComplete: n,
                                            className: r.input,
                                            id: `${e}-${t.position}`,
                                            value: t.value || '',
                                            onChange: e =>
                                                this.updateField(
                                                    e.currentTarget.value,
                                                    o,
                                                ),
                                        }),
                                        c().createElement(
                                            p.IconButton,
                                            {
                                                className: r.deleteIcon,
                                                color: 'inherit',
                                                onClick: () =>
                                                    this.removeField(o),
                                            },
                                            c().createElement(Je(), null),
                                        ),
                                    ),
                                ),
                                c().createElement(
                                    dr(),
                                    { className: r.addListItem },
                                    c().createElement(
                                        br(),
                                        {
                                            disabled: a,
                                            className: r.Fab,
                                            size: 'small',
                                            color: 'primary',
                                            'aria-label': 'add',
                                            onClick: () => this.addField(),
                                        },
                                        c().createElement(Ne(), null),
                                    ),
                                ),
                            ),
                        ),
                    ),
                );
            }
        }
        (yr.defaultProps = { fieldList: [], label: '', autoComplete: 'off' }),
            (yr.propTypes = {
                fieldList: g().array,
                baseId: g().string.isRequired,
                updateList: g().func.isRequired,
                classes: g().object.isRequired,
                label: g().string,
                autoComplete: g().string,
            });
        const Or = (0, p.withStyles)(e =>
                hr(
                    hr({}, De(e)),
                    {},
                    {
                        label: {
                            top: e.spacing(2),
                            position: 'relative',
                            color: e.textColor,
                            fontSize: 16,
                        },
                        list: { width: '100%', padding: '0' },
                        listItem: {
                            height: 55,
                            width: '100%',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0',
                            marginBottom: e.spacing(1),
                        },
                        addListItem: {
                            height: 55,
                            width: '100%',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            padding: '0',
                            marginBottom: e.spacing(2),
                        },
                        input: { width: '95%', marginLeft: '5%' },
                        deleteIcon: {
                            position: 'absolute',
                            right: e.spacing(1),
                        },
                    },
                ),
            )(yr),
            vr = ({
                value: e,
                disabled: t,
                label: r,
                onChange: n,
                keyValue: o,
            }) =>
                c().createElement(p.FormControlLabel, {
                    disabled: t,
                    control: c().createElement(p.Checkbox, {
                        id: `check-box-${o}`,
                        color: 'primary',
                        checked: !0 === e,
                        onChange: e => n(e.target.checked),
                        value: 'checked',
                        disabled: t,
                    }),
                    label: r,
                });
        (vr.defaultProps = {
            value: !1,
            disabled: !1,
            onChange: () => {},
            label: '',
        }),
            (vr.propTypes = {
                value: g().bool,
                disabled: g().bool,
                label: g().string,
                onChange: g().func,
                keyValue: g().string.isRequired,
            });
        const wr = require('@material-ui/icons/Info');
        var xr = e.n(wr);
        const Er = require('@material-ui/core/InputLabel');
        var Pr = e.n(Er);
        const Cr = (0, je.makeStyles)(e => ({
            inputLabel: {
                color: 'rgba(0, 0, 0, 0.4)',
                paddingLeft: 3,
                paddingRight: 3,
                transition: e.transitions.create(['all'], {
                    easing: e.transitions.easing.sharp,
                    duration: e.transitions.duration.leavingScreen,
                }),
            },
            shrink: { fontSize: 20, marginTop: -2, backgroundColor: 'white' },
            popupIndicator: {
                marginRight: '6px !important',
                marginLeft: '6px !important',
            },
            clearIndicator: { marginTop: -2 },
            hasClearIcon: {
                '& .MuiAutocomplete-inputRoot': {
                    paddingRight: '85px !important',
                },
            },
        }));
        function jr({
            htmlFor: e,
            label: t,
            required: r,
            shrink: n,
            error: o,
        }) {
            const a = Cr();
            return c().createElement(
                Pr(),
                {
                    name: e.replace('input-text-', ''),
                    htmlFor: e,
                    classes: { shrink: a.shrink },
                    className: a.inputLabel,
                    shrink: n,
                    error: o,
                },
                t,
                r && c().createElement('sup', null, ' *'),
            );
        }
        (jr.defaultProps = { shrink: !0, error: !1, label: '' }),
            (jr.propTypes = {
                htmlFor: g().string.isRequired,
                label: g().string,
                required: g().bool.isRequired,
                shrink: g().bool,
                error: g().bool,
            });
        const qr = (0, fe.defineMessages)({
                min: { id: 'blsq.input.label.min', defaultMessage: 'Minimum' },
                max: { id: 'blsq.input.label.max', defaultMessage: 'Maximum' },
            }),
            kr = (e, t, r, n = '') => {
                if ('number' == typeof e) return e;
                if (void 0 === e || null == e) return '';
                const o = e.split(''),
                    a = o.filter(e => '.' === e);
                if (
                    1 === a.length &&
                    '.' === o[o.length - 1] &&
                    !Number.isNaN(parseInt(o[o.length - 2], 10))
                )
                    return e;
                if (
                    1 === a.length &&
                    '.' === o[o.length - 2] &&
                    Number.isNaN(parseInt(o[o.length - 1], 10))
                )
                    return o.pop(), o.join('');
                const l = parseFloat(e);
                return Number.isNaN(l)
                    ? ''
                    : (t && l < t) || (r && l > r)
                    ? n
                    : l;
            },
            Sr = ({
                keyValue: e,
                label: t,
                errors: r,
                required: n,
                value: o,
                disabled: a,
                onChange: l,
                multiline: i,
                autoComplete: u,
                min: d,
                max: m,
            }) => {
                const g = r.length >= 1,
                    [b, f] = (0, s.useState)(kr(o, d, m));
                (0, s.useEffect)(() => {
                    const e = kr(o, d, m, b);
                    e !== b && e < d && e > m && f(e);
                }, [o, b]);
                const h = ((e, t) => {
                    const { formatMessage: r } = Pe();
                    let n = '';
                    return (
                        (e || 0 === e) &&
                            ((n = `${r(qr.min)}: ${e}`), t && (n += ' - ')),
                        (t || 0 === t) && (n += `${r(qr.max)}: ${t}`),
                        n
                    );
                })(d, m);
                return c().createElement(
                    ar,
                    { errors: r },
                    c().createElement(jr, {
                        htmlFor: `input-text-${e}`,
                        label: t,
                        required: n,
                        error: g,
                        shrink: '' !== o,
                    }),
                    c().createElement(p.OutlinedInput, {
                        autoComplete: u,
                        size: 'small',
                        multiline: i,
                        disabled: a,
                        id: `input-text-${e}`,
                        value: b,
                        type: 'text',
                        endAdornment:
                            '' !== h &&
                            c().createElement(
                                p.Tooltip,
                                { title: h },
                                c().createElement(xr(), { color: 'action' }),
                            ),
                        onChange: e => {
                            const t = kr(e.target.value, d, m, b);
                            t !== b && (f(t), l(t));
                        },
                        error: g,
                    }),
                );
            };
        (Sr.defaultProps = {
            value: '',
            errors: [],
            multiline: !1,
            disabled: !1,
            required: !1,
            onChange: () => {},
            label: '',
            autoComplete: 'off',
            min: void 0,
            max: void 0,
        }),
            (Sr.propTypes = {
                errors: g().arrayOf(g().string),
                keyValue: g().string.isRequired,
                label: g().string,
                required: g().bool,
                disabled: g().bool,
                multiline: g().bool,
                value: g().oneOfType([g().string, g().number]),
                onChange: g().func,
                autoComplete: g().string,
                min: g().number,
                max: g().number,
            });
        const Tr = (0, fe.defineMessages)({
                displayPassword: {
                    id: 'blsq.button.label.displayPassword',
                    defaultMessage: 'Display the pasword',
                },
            }),
            Mr = ({
                keyValue: e,
                label: t,
                errors: r,
                required: n,
                value: o,
                disabled: a,
                onChange: l,
                multiline: i,
                displayPassword: u,
                classes: d,
                autoComplete: m,
            }) => {
                const g = r.length >= 1,
                    [b, f] = (0, s.useState)(u),
                    h = Pe();
                return c().createElement(
                    ar,
                    { errors: r },
                    c().createElement(jr, {
                        htmlFor: `input-text-${e}`,
                        label: t,
                        required: n,
                        error: g,
                        shrink: '' !== o,
                    }),
                    c().createElement(p.OutlinedInput, {
                        size: 'small',
                        autoComplete: m,
                        multiline: i,
                        disabled: a,
                        id: `input-text-${e}`,
                        value: o,
                        type: b ? 'text' : 'password',
                        onChange: e => l(e.target.value),
                        error: g,
                        className: d.passwordInput,
                    }),
                    c().createElement(
                        p.Tooltip,
                        {
                            className: d.displayPassword,
                            disableFocusListener: a,
                            disableHoverListener: a,
                            disableTouchListener: a,
                            placement: 'bottom',
                            title: h.formatMessage(Tr.displayPassword),
                        },
                        c().createElement(
                            'span',
                            null,
                            c().createElement(
                                p.IconButton,
                                {
                                    color: b ? 'primary' : 'inherit',
                                    onClick: () => {
                                        f(e => !e);
                                    },
                                },
                                c().createElement(ot(), null),
                            ),
                        ),
                    ),
                );
            };
        (Mr.defaultProps = {
            value: '',
            errors: [],
            multiline: !1,
            disabled: !1,
            required: !1,
            onChange: () => {},
            displayPassword: !1,
            label: '',
            autoComplete: 'new-password',
        }),
            (Mr.propTypes = {
                errors: g().arrayOf(g().string),
                keyValue: g().string.isRequired,
                label: g().string,
                required: g().bool,
                disabled: g().bool,
                multiline: g().bool,
                value: g().string,
                onChange: g().func,
                displayPassword: g().bool,
                classes: g().object.isRequired,
                autoComplete: g().string,
            });
        const Ir = (0, p.withStyles)(e => ({
                displayPassword: {
                    position: 'absolute',
                    top: 4,
                    right: e.spacing(2),
                },
                passwordInput: { paddingRight: e.spacing(8) },
            }))(Mr),
            Br = ({
                options: e,
                name: t,
                onChange: r,
                value: n,
                label: o,
                errors: a,
                className: l,
            }) =>
                c().createElement(
                    p.FormControl,
                    {
                        component: 'fieldset',
                        error: a.length > 0,
                        variant: 'outlined',
                    },
                    c().createElement(
                        p.FormLabel,
                        { component: 'legend', style: { fontSize: 12 } },
                        o,
                    ),
                    c().createElement(
                        p.RadioGroup,
                        {
                            className: l,
                            name: t,
                            value: n,
                            onChange: e => {
                                r(e.target.value);
                            },
                        },
                        e.map(e =>
                            c().createElement(p.FormControlLabel, {
                                key: e.value,
                                value: e.value,
                                control: c().createElement(p.Radio, {
                                    color: 'primary',
                                }),
                                label: e.label,
                                disabled: e.disabled,
                            }),
                        ),
                    ),
                );
        (Br.defaultProps = {
            options: [],
            onChange: () => {},
            value: '',
            label: '',
            errors: [],
            className: '',
        }),
            (Br.propTypes = {
                options: g().array,
                name: g().string.isRequired,
                onChange: g().func,
                value: (0, m.oneOfType)([g().string, g().bool]),
                label: g().string,
                errors: g().arrayOf(g().string),
                className: g().string,
            });
        const Dr = require('@material-ui/icons/Search');
        var Rr = e.n(Dr);
        const Lr = (0, fe.defineMessages)({
                clear: {
                    id: 'blsq.treeview.search.options.label.clear',
                    defaultMessage: 'clear',
                },
                search: {
                    id: 'blsq.table.filter.search',
                    defaultMessage: 'search',
                },
            }),
            Nr = ({
                label: e,
                required: t,
                keyValue: r,
                disabled: n,
                clearable: o,
                value: a,
                onEnterPressed: l,
                onChange: i,
                classes: u,
                uid: d,
                errors: m = [],
                autoComplete: g,
            }) => {
                const b = m.length >= 1,
                    [f, h] = (0, s.useState)(a || ''),
                    y = (0, s.useMemo)(() => '' !== a, [a]);
                return (
                    Ce(() => {
                        i(f);
                    }, [f]),
                    Ce(() => {
                        a !== f && h(a);
                    }, [a]),
                    c().createElement(
                        ar,
                        { errors: m },
                        c().createElement(jr, {
                            htmlFor: `search-${r}`,
                            label: e,
                            required: t,
                            shrink: null != a && '' !== a,
                            error: b,
                        }),
                        c().createElement(p.OutlinedInput, {
                            autoComplete: g,
                            disabled: n,
                            error: b,
                            id: d ? `search-${d}` : `search-${r}`,
                            value: f,
                            placeholder: '',
                            onKeyPress: e => {
                                (13 !== e.which &&
                                    13 !== e.keyCode &&
                                    'Enter' !== e.key) ||
                                    l();
                            },
                            classes: { root: u.inputRoot, input: u.inputInput },
                            endAdornment: c().createElement(
                                c().Fragment,
                                null,
                                o &&
                                    y &&
                                    c().createElement(At, {
                                        size: 'small',
                                        onClick: () => {
                                            h('');
                                        },
                                        icon: 'clear',
                                        tooltipMessage: Lr.clear,
                                    }),
                                c().createElement(
                                    'div',
                                    {
                                        className: u.searchIconWrapper,
                                        tabIndex: 0,
                                        role: 'button',
                                        onClick: () => l(),
                                    },
                                    c().createElement(Rr(), null),
                                ),
                            ),
                            inputProps: { 'aria-label': 'search' },
                            onChange: e => h(e.target.value),
                        }),
                    )
                );
            };
        (Nr.defaultProps = {
            value: '',
            disabled: !1,
            clearable: !0,
            required: !1,
            onEnterPressed: () => {},
            onChange: () => {},
            uid: '',
            label: '',
            errors: [],
            autoComplete: 'off',
        }),
            (Nr.propTypes = {
                keyValue: g().string.isRequired,
                label: g().string,
                required: g().bool,
                disabled: g().bool,
                clearable: g().bool,
                value: g().string,
                onEnterPressed: g().func,
                onChange: g().func,
                uid: g().string,
                classes: g().object.isRequired,
                errors: g().arrayOf(g().string),
                autoComplete: g().string,
            });
        const Ar = (0, p.withStyles)(e => ({
                icon: { right: e.spacing(2) },
                search: {
                    position: 'relative',
                    borderRadius: e.shape.borderRadius,
                    marginLeft: 0,
                    width: '100%',
                    [e.breakpoints.up('sm')]: {
                        marginLeft: e.spacing(1),
                        width: 'auto',
                    },
                },
                inputRoot: {
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                },
                inputInput: { paddingRight: e.spacing(7), width: '100%' },
                searchIconWrapper: {
                    width: e.spacing(3),
                    height: e.spacing(3),
                },
            }))(Nr),
            Fr = require('@material-ui/core/Box');
        var zr = e.n(Fr);
        const Vr = require('@material-ui/lab/Autocomplete');
        var _r = e.n(Vr);
        const Hr = (0, fe.defineMessages)({
                noOptions: {
                    id: 'blsq.button.label.noOptions',
                    defaultMessage: 'No results found',
                },
                valueNotFound: {
                    id: 'blsq.button.label.valueNotFound',
                    defaultMessage: 'Value not found in possible options',
                },
                oneValueNotFound: {
                    id: 'blsq.button.label.oneValueNotFound',
                    defaultMessage:
                        'Value "{value}" not found in possible options',
                },
                loadingOptions: {
                    id: 'blsq.select.label.loadingText',
                    defaultMessage: 'Loading...',
                },
            }),
            $r = require('@material-ui/core/Chip');
        var Gr = e.n($r);
        const Wr = e => (t, r) =>
                t.map((t, n) =>
                    c().createElement(
                        Gr(),
                        be()(
                            {
                                color: 'secondary',
                                style: {
                                    backgroundColor: t.color,
                                    color: 'white',
                                },
                                label: e(t),
                            },
                            r({ index: n }),
                        ),
                    ),
                ),
            Ur = (e, t, r) => {
                const n = {
                    getOptionLabel:
                        e ||
                        (e => {
                            var t;
                            return null !==
                                (t = null == e ? void 0 : e.label) &&
                                void 0 !== t
                                ? t
                                : e.toString();
                        }),
                    getOptionSelected:
                        t ||
                        ((e, t) =>
                            null != t && t.value
                                ? `${e.value}` == `${t.value}`
                                : !!t && `${e.value}` == `${t}`),
                };
                return r && (n.renderOption = r), n;
            },
            Kr = (e, t) => t.find(t => `${t.value}` == `${e}`),
            Yr = require('@material-ui/core/TextField');
        var Jr = e.n(Yr);
        function Zr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Qr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Zr(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Zr(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Xr = ({
            params: e,
            renderOption: t,
            disabled: r,
            label: n,
            required: o,
            onBlur: a,
            errors: l,
            helperText: i,
            loading: s,
            autoComplete: u,
        }) => {
            const d = Cr(),
                m = Qr({}, e);
            let g = {};
            return (
                t &&
                    e.inputProps.value &&
                    ((g = {
                        startAdornment: c().createElement(
                            'div',
                            { className: d.startAdornment },
                            t({ label: e.inputProps.value }),
                        ),
                        style: { color: 'transparent' },
                    }),
                    (m.inputProps.value = '')),
                c().createElement(
                    ar,
                    { errors: l },
                    c().createElement(
                        Jr(),
                        be()({}, m, {
                            variant: 'outlined',
                            disabled: r,
                            label: `${n}${o ? '*' : ''}`,
                            onBlur: a,
                            error: l.length > 0,
                            InputLabelProps: {
                                classes: { shrink: d.shrink },
                                className: d.inputLabel,
                            },
                            helperText: i,
                            InputProps: Qr(
                                Qr({}, e.InputProps),
                                {},
                                {
                                    autoComplete: u,
                                    endAdornment: c().createElement(
                                        c().Fragment,
                                        null,
                                        s
                                            ? c().createElement(
                                                  p.CircularProgress,
                                                  {
                                                      color: 'inherit',
                                                      size: 20,
                                                  },
                                              )
                                            : null,
                                        e.InputProps.endAdornment,
                                    ),
                                },
                                g,
                            ),
                        }),
                    ),
                )
            );
        };
        (Xr.defaultProps = {
            helperText: null,
            renderOption: null,
            autoComplete: 'off',
        }),
            (Xr.propTypes = {
                renderOption: g().oneOfType([g().object, g().func]),
                params: g().object.isRequired,
                disabled: g().bool.isRequired,
                label: g().string.isRequired,
                required: g().bool.isRequired,
                onBlur: g().func.isRequired,
                errors: g().array.isRequired,
                helperText: g().oneOfType([g().object, g().string]),
                loading: g().bool.isRequired,
                autoComplete: g().string,
            });
        const en = ({
            value: e,
            keyValue: t,
            label: r,
            errors: n,
            onChange: o,
            options: a,
            onBlur: l,
            disabled: i,
            clearable: u,
            required: d,
            noOptionsText: p,
            getOptionLabel: m,
            getOptionSelected: g,
            loading: b,
            loadingText: f,
            renderOption: h,
            renderTags: y,
            returnFullObject: O,
            helperText: v,
        }) => {
            const { formatMessage: w } = Pe(),
                x = Cr(),
                E = (0, s.useMemo)(() => {
                    const t = [...n],
                        r = !Kr(e, a);
                    return e && !b && r && t.push(w(Hr.valueNotFound)), t;
                }, [e, a, n, b]),
                P = (0, s.useMemo)(() => {
                    var t;
                    return e
                        ? null !== (t = Kr(e, a)) && void 0 !== t
                            ? t
                            : e
                        : null;
                }, [e, a]),
                C = (0, s.useCallback)(
                    (e, t) => {
                        var r;
                        return o(
                            null !== (r = null == t ? void 0 : t.value) &&
                                void 0 !== r
                                ? r
                                : null,
                        );
                    },
                    [o, O],
                ),
                j = Ur(m, g, h);
            return c().createElement(
                zr(),
                null,
                c().createElement(
                    _r(),
                    be()(
                        {
                            disabled: i,
                            noOptionsText: w(p),
                            multiple: !1,
                            id: t,
                            disableClearable: !u,
                            options: a,
                            value: P,
                            onChange: C,
                            loading: b,
                            loadingText: w(f),
                            closeIcon: c().createElement(vt(), null),
                            renderTags: y,
                            renderInput: e =>
                                c().createElement(Xr, {
                                    params: e,
                                    renderOption: h,
                                    disabled: i,
                                    label: r,
                                    required: d,
                                    onBlur: l,
                                    errors: E,
                                    helperText: v,
                                    loading: b,
                                }),
                            classes: {
                                popupIndicator: x.popupIndicator,
                                clearIndicator: x.clearIndicator,
                                hasClearIcon: x.hasClearIcon,
                            },
                        },
                        j,
                    ),
                ),
            );
        };
        (en.defaultProps = {
            value: void 0,
            errors: [],
            label: '',
            disabled: !1,
            clearable: !0,
            required: !1,
            loading: !1,
            options: [],
            onBlur: () => {},
            getOptionSelected: null,
            getOptionLabel: null,
            renderOption: null,
            noOptionsText: Hr.noOptions,
            loadingText: Hr.loadingOptions,
            helperText: void 0,
            renderTags: Wr(e => (null != e && e.label ? e.label : '')),
            returnFullObject: !1,
        }),
            (en.propTypes = {
                errors: g().arrayOf(g().string),
                keyValue: g().string.isRequired,
                label: g().string,
                required: g().bool,
                disabled: g().bool,
                clearable: g().bool,
                value: g().any,
                onBlur: g().func,
                loadingText: g().oneOfType([g().object, g().string]),
                noOptionsText: g().oneOfType([g().object, g().string]),
                helperText: g().oneOfType([g().object, g().string]),
                options: g().array,
                loading: g().bool,
                onChange: g().func.isRequired,
                getOptionLabel: g().oneOfType([g().object, g().func]),
                getOptionSelected: g().oneOfType([g().object, g().func]),
                renderOption: g().oneOfType([g().object, g().func]),
                renderTags: g().func,
                returnFullObject: g().bool,
            });
        const tn = e => {
                const [t, r] = (0, s.useState)(!1);
                return (
                    (0, s.useEffect)(() => {
                        const t = (t, n) => {
                                t.key === e && r(n);
                            },
                            n = e => {
                                t(e, !0);
                            },
                            o = e => {
                                t(e, !1);
                            };
                        return (
                            document.addEventListener('keydown', n),
                            document.addEventListener('keyup', o),
                            document.addEventListener('blur', o),
                            () => {
                                document.removeEventListener('keydown', n),
                                    document.removeEventListener('keyup', o),
                                    document.removeEventListener('blur', o);
                            }
                        );
                    }, [t]),
                    t
                );
            },
            rn = ({
                value: e,
                keyValue: t,
                label: r,
                errors: n,
                onChange: o,
                options: a,
                onBlur: l,
                disabled: i,
                clearable: u,
                required: d,
                noOptionsText: p,
                getOptionLabel: m,
                getOptionSelected: g,
                loading: b,
                renderOption: f,
                renderTags: h,
                returnFullObject: y,
                helperText: O,
                loadingText: v,
            }) => {
                const { formatMessage: w } = Pe(),
                    x = Cr(),
                    E = tn('Shift'),
                    P = (0, s.useMemo)(
                        () => (e ? (Array.isArray(e) ? e : e.split(',')) : []),
                        [e],
                    ),
                    C = Ur(m, g, f),
                    j = (0, s.useMemo)(() => {
                        const t = [...n];
                        return (
                            e &&
                                !b &&
                                P.forEach(e => {
                                    const r = !((e, t, r) =>
                                        t.find(t => r(t, e)))(
                                        e,
                                        a,
                                        C.getOptionSelected,
                                    );
                                    r &&
                                        t.push(
                                            w(Hr.oneValueNotFound, {
                                                value: `${C.getOptionLabel(e)}`,
                                            }),
                                        );
                                }),
                            t
                        );
                    }, [e, a, n, b]),
                    q = (0, s.useMemo)(
                        () =>
                            e
                                ? y
                                    ? P
                                    : P.map(e => Kr(e, a)).filter(e => e)
                                : [],
                        [e, a],
                    ),
                    k = (0, s.useCallback)(
                        (e, t) =>
                            0 === t.length
                                ? o(null)
                                : o(
                                      y
                                          ? t
                                          : t
                                                .map(e =>
                                                    null == e
                                                        ? void 0
                                                        : e.value,
                                                )
                                                .join(','),
                                  ),
                        [o, y],
                    );
                return c().createElement(
                    zr(),
                    null,
                    c().createElement(
                        _r(),
                        be()(
                            {
                                disabled: i,
                                noOptionsText: w(p),
                                multiple: !0,
                                disableCloseOnSelect: E,
                                id: t,
                                disableClearable: !u,
                                options: a,
                                value: q,
                                onChange: k,
                                loading: b,
                                loadingText: w(v),
                                closeIcon: c().createElement(vt(), null),
                                renderTags: h,
                                renderInput: e =>
                                    c().createElement(Xr, {
                                        params: e,
                                        renderOption: f,
                                        disabled: i,
                                        label: r,
                                        required: d,
                                        onBlur: l,
                                        errors: j,
                                        helperText: O,
                                        loading: b,
                                    }),
                                classes: {
                                    popupIndicator: x.popupIndicator,
                                    clearIndicator: x.clearIndicator,
                                    hasClearIcon: x.hasClearIcon,
                                },
                            },
                            C,
                        ),
                    ),
                );
            };
        (rn.defaultProps = {
            value: void 0,
            errors: [],
            label: '',
            disabled: !1,
            clearable: !0,
            required: !1,
            loading: !1,
            options: [],
            onBlur: () => {},
            getOptionSelected: null,
            getOptionLabel: null,
            renderOption: null,
            loadingText: Hr.loadingOptions,
            noOptionsText: Hr.noOptions,
            helperText: void 0,
            renderTags: Wr(e => (null != e && e.label ? e.label : '')),
            returnFullObject: !1,
        }),
            (rn.propTypes = {
                errors: g().arrayOf(g().string),
                keyValue: g().string.isRequired,
                label: g().string,
                required: g().bool,
                disabled: g().bool,
                clearable: g().bool,
                value: g().any,
                onBlur: g().func,
                loadingText: g().oneOfType([g().object, g().string]),
                noOptionsText: g().oneOfType([g().object, g().string]),
                helperText: g().oneOfType([g().object, g().string]),
                options: g().array,
                loading: g().bool,
                onChange: g().func.isRequired,
                getOptionLabel: g().oneOfType([g().object, g().func]),
                getOptionSelected: g().oneOfType([g().object, g().func]),
                renderOption: g().oneOfType([g().object, g().func]),
                renderTags: g().func,
                returnFullObject: g().bool,
            });
        const nn = e =>
            e.multi ? c().createElement(rn, e) : c().createElement(en, e);
        (nn.defaultProps = { multi: !1 }), (nn.propTypes = { multi: g().bool });
        const on = ({
            keyValue: e,
            label: t,
            errors: r,
            required: n,
            value: o,
            disabled: a,
            onChange: l,
            multiline: i,
            autoComplete: s,
        }) => {
            const u = r.length >= 1;
            return c().createElement(
                ar,
                { errors: r },
                c().createElement(jr, {
                    htmlFor: `input-text-${e}`,
                    label: t,
                    required: n,
                    error: u,
                    shrink: '' !== o,
                }),
                c().createElement(p.OutlinedInput, {
                    size: 'small',
                    autoComplete: s,
                    multiline: i,
                    disabled: a,
                    id: `input-text-${e}`,
                    value: o,
                    type: 'text',
                    onChange: e => l(e.target.value),
                    error: u,
                }),
            );
        };
        (on.defaultProps = {
            value: '',
            errors: [],
            multiline: !1,
            disabled: !1,
            required: !1,
            onChange: () => {},
            label: '',
            autoComplete: 'off',
        }),
            (on.propTypes = {
                errors: g().arrayOf(g().string),
                keyValue: g().string.isRequired,
                label: g().string,
                required: g().bool,
                disabled: g().bool,
                multiline: g().bool,
                value: g().string,
                onChange: g().func,
                autoComplete: g().string,
            });
        class an extends c().Component {
            constructor(e) {
                super(e), (this.state = { hasError: !1 });
            }
            static getDerivedStateFromError(e) {
                return { hasError: !0, error: e };
            }
            componentDidCatch(e, t) {
                console.error('BOUNDARY ERROR', e, t);
            }
            render() {
                return this.state.hasError
                    ? this.props.message
                        ? c().createElement(
                              'h1',
                              {
                                  style: this.props.className
                                      ? {}
                                      : { textAlign: 'center' },
                                  className: this.props.className,
                              },
                              this.props.message,
                          )
                        : c().createElement(
                              'h1',
                              null,
                              'An exception occurred: ',
                              this.state.error.toString(),
                          )
                    : this.props.children;
            }
        }
        (an.propTypes = {
            children: g().node.isRequired,
            message: g().string,
            className: g().string,
        }),
            (an.defaultProps = { message: null, className: null });
        const ln = ({ classes: e, width: t }) =>
            c().createElement('div', {
                className: e.placeholder,
                style: { width: t },
            });
        (ln.defaultProps = { width: '50%' }),
            (ln.propTypes = {
                classes: g().object.isRequired,
                width: g().string,
            });
        const sn = (0, p.withStyles)(e => ({
                placeholder: {
                    height: 15,
                    backgroundColor: e.palette.ligthGray.main,
                    borderRadius: 5,
                    marginRight: e.spacing(1),
                    width: '50%',
                },
            }))(ln),
            cn = require('react-intersection-observer'),
            un = require('@material-ui/icons/Close');
        var dn = e.n(un);
        const pn = require('@material-ui/icons/ArrowBack');
        var mn = e.n(pn);
        const gn = (0, fe.defineMessages)({
            search: { id: 'blsq.table.label.search', defaultMessage: 'Search' },
            close: { id: 'blsq.table.label.close', defaultMessage: 'Close' },
            resetSearch: {
                id: 'blsq.table.label.resetSearch',
                defaultMessage: 'Empty search',
            },
            columnSelectTooltip: {
                id: 'blsq.table.columnSelect.tooltip',
                defaultMessage: 'Select visible columns',
            },
        });
        function bn(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function fn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? bn(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : bn(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        function hn(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function yn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? hn(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : hn(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const On = ({
            classes: e,
            options: t,
            setOptions: r,
            minColumns: n,
            intl: { formatMessage: o },
        }) => {
            const [a, l] = c().useState({ open: !1, searchString: '' }),
                i = e => () => {
                    l(yn(yn({}, a), {}, { open: e }));
                },
                s = e => t => {
                    l(
                        yn(
                            yn({}, a),
                            {},
                            { searchString: e ? '' : t.target.value },
                        ),
                    );
                },
                u = e => n => {
                    const o = [...t];
                    (o[e] = yn(yn({}, o[e]), {}, { active: n.target.checked })),
                        r(o);
                },
                d = t.filter(e => e.active).length,
                m = ((e, t) => {
                    let r = [...t];
                    if (
                        ((r = r.map((e, t) => yn(yn({}, e), {}, { index: t }))),
                        '' !== e)
                    ) {
                        const t = e.toLowerCase();
                        r = r.filter(
                            e =>
                                (e.key && e.key.toLowerCase().includes(t)) ||
                                (e.label && e.label.toLowerCase().includes(t)),
                        );
                    }
                    return r;
                })(a.searchString, t);
            return c().createElement(
                c().Fragment,
                null,
                c().createElement(At, {
                    onClick: i(!0),
                    icon: 'filter-list',
                    color: 'white',
                    tooltipMessage: gn.columnSelectTooltip,
                }),
                c().createElement(
                    p.Drawer,
                    { anchor: 'right', open: a.open, onClose: i(!1) },
                    c().createElement(
                        'div',
                        { className: e.root },
                        c().createElement(
                            'div',
                            { className: e.toolbar },
                            c().createElement(
                                p.Tooltip,
                                { title: o(gn.close) },
                                c().createElement(
                                    p.IconButton,
                                    { onClick: i(!1) },
                                    c().createElement(mn(), null),
                                ),
                            ),
                            c().createElement(
                                'div',
                                { className: e.search },
                                c().createElement(p.InputBase, {
                                    value: a.searchString,
                                    onChange: s(),
                                    className: e.input,
                                    placeholder: o(gn.search),
                                    inputProps: {
                                        'aria-label': o(gn.search),
                                        className: e.input,
                                    },
                                }),
                            ),
                            '' !== a.searchString &&
                                c().createElement(
                                    p.Tooltip,
                                    { title: o(gn.resetSearch) },
                                    c().createElement(
                                        p.IconButton,
                                        { onClick: s(!0) },
                                        c().createElement(dn(), null),
                                    ),
                                ),
                        ),
                        c().createElement(p.Divider, null),
                        c().createElement(
                            'div',
                            { className: e.list },
                            c().createElement(
                                p.List,
                                null,
                                m.map(t =>
                                    c().createElement(
                                        cn.InView,
                                        { key: t.key },
                                        ({ inView: r, ref: o }) =>
                                            c().createElement(
                                                'div',
                                                { ref: o, id: t.key },
                                                c().createElement(
                                                    p.ListItem,
                                                    { className: e.listItem },
                                                    r &&
                                                        c().createElement(
                                                            c().Fragment,
                                                            null,
                                                            c().createElement(
                                                                p.Switch,
                                                                {
                                                                    disabled:
                                                                        d ===
                                                                            n &&
                                                                        t.active,
                                                                    size: 'small',
                                                                    checked:
                                                                        t.active,
                                                                    onChange: u(
                                                                        t.index,
                                                                    ),
                                                                    color: 'primary',
                                                                    inputProps:
                                                                        {
                                                                            'aria-label':
                                                                                t.label,
                                                                        },
                                                                    className:
                                                                        e.switch,
                                                                },
                                                            ),
                                                            c().createElement(
                                                                p.ListItemText,
                                                                {
                                                                    primary:
                                                                        t.label ||
                                                                        t.key,
                                                                },
                                                            ),
                                                        ),
                                                    !r &&
                                                        c().createElement(
                                                            c().Fragment,
                                                            null,
                                                            c().createElement(
                                                                sn,
                                                                {
                                                                    width: '30px',
                                                                },
                                                            ),
                                                            c().createElement(
                                                                sn,
                                                                null,
                                                            ),
                                                        ),
                                                ),
                                            ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
            );
        };
        (On.defaultProps = { minColumns: 2 }),
            (On.propTypes = {
                classes: g().object.isRequired,
                options: g().array.isRequired,
                setOptions: g().func.isRequired,
                minColumns: g().number,
                intl: g().object.isRequired,
            });
        const vn = (0, p.withStyles)(e => ({
            root: { width: 400, overflow: 'hidden' },
            toolbar: fn(
                fn({}, e.mixins.toolbar),
                {},
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingLeft: e.spacing(2),
                    paddingRight: e.spacing(2),
                    height: e.spacing(8),
                },
            ),
            search: {
                marginLeft: e.spacing(1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
            },
            list: {
                height: `calc(100vh - ${e.spacing(8)}px)`,
                overflowY: 'auto',
                overflowX: 'hidden',
            },
            listItem: { height: e.spacing(6) },
            switch: { marginRight: e.spacing(1) },
            placeholder: {
                height: 15,
                backgroundColor: e.palette.ligthGray.main,
                borderRadius: 5,
                marginRight: e.spacing(1),
                width: '50%',
            },
            input: { width: '100%', padding: 0 },
        }))(Ee(On));
        function wn({ IconComponent: e, title: t, classes: r }) {
            return c().createElement(
                'div',
                { className: r.root },
                c().createElement(
                    p.Tooltip,
                    { title: t },
                    c().createElement(e, null),
                ),
            );
        }
        wn.propTypes = {
            title: g().string.isRequired,
            classes: g().object.isRequired,
            IconComponent: g().object.isRequired,
        };
        const xn = (0, p.withStyles)(() => ({
            root: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }))(wn);
        function En(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Pn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? En(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : En(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Cn = (0, p.makeStyles)(e =>
                Pn(
                    Pn({}, De(e)),
                    {},
                    {
                        root: {
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            top: 0,
                            left: 0,
                            overflow: 'hidden',
                        },
                        icon: {
                            cursor: 'pointer',
                            position: 'relative',
                            top: -1,
                        },
                    },
                ),
            ),
            jn = ({ message: e, children: t }) => {
                const r = Cn();
                return c().createElement(
                    p.Box,
                    {
                        className: r.root,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    c().createElement(p.Box, { display: 'inline', mr: 1 }, t),
                    c().createElement(
                        p.Tooltip,
                        {
                            classes: { popper: r.popperFixed },
                            placement: 'bottom',
                            title: e,
                        },
                        c().createElement(xr(), {
                            fontSize: 'small',
                            color: 'primary',
                            className: r.icon,
                        }),
                    ),
                );
            };
        jn.propTypes = {
            message: g().string.isRequired,
            children: g().oneOfType([g().node, g().string]).isRequired,
        };
        const qn = require('@material-ui/lab'),
            kn = require('@material-ui/icons/CheckBox');
        var Sn = e.n(kn);
        const Tn = (0, je.makeStyles)(e => ({
                speedDial: {
                    position: 'absolute',
                    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft':
                        { bottom: e.spacing(2), right: e.spacing(2) },
                    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight':
                        { top: e.spacing(2), left: e.spacing(2) },
                },
            })),
            Mn = ({
                hidden: e,
                actions: t,
                selection: r,
                reset: n,
                actionMessage: o,
            }) => {
                const a = Tn(),
                    [l, i] = c().useState(!1),
                    s = t.filter(e => !e.disabled);
                return c().createElement(
                    p.ClickAwayListener,
                    {
                        onClickAway: () => {
                            i(!1);
                        },
                    },
                    c().createElement(
                        qn.SpeedDial,
                        {
                            ariaLabel: o,
                            className: a.speedDial,
                            hidden: e,
                            icon: c().createElement(Sn(), null),
                            onOpen: () => {
                                i(!0);
                            },
                            open: l,
                            direction: 'up',
                        },
                        s.map(e =>
                            c().createElement(qn.SpeedDialAction, {
                                key: e.label,
                                icon:
                                    'function' == typeof e.icon
                                        ? e.icon(r, n)
                                        : e.icon,
                                tooltipTitle: e.label,
                                onClick: () =>
                                    e.onClick ? e.onClick(r) : () => null,
                            }),
                        ),
                    ),
                );
            };
        (Mn.defaultProps = { hidden: !1, actions: [], reset: () => null }),
            (Mn.propTypes = {
                hidden: g().bool,
                actions: g().array,
                selection: g().object.isRequired,
                reset: g().func,
                actionMessage: g().string.isRequired,
            });
        const In = require('@material-ui/core/Table');
        var Bn = e.n(In);
        const Dn = require('@material-ui/core/Paper');
        var Rn = e.n(Dn);
        const Ln = require('@material-ui/core/TableContainer');
        var Nn = e.n(Ln);
        const An = require('lodash/isEqual');
        var Fn = e.n(An);
        const zn = require('react-table'),
            Vn = [5, 10, 20, 30, 40, 50],
            _n = require('@material-ui/icons/Remove');
        var Hn = e.n(_n);
        function $n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Gn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? $n(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : $n(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Wn = (e, t, r = !1, n = 'csv', o = !1, a = !1) => {
                let l = `/api/${e}/?`;
                const i = Gn({}, t);
                r && (i[n] = !0),
                    o &&
                        ((i.asLocation = !0),
                        (i.limit = i.locationLimit),
                        delete i.page),
                    a && ((i.limit = i.locationLimit), delete i.page),
                    delete i.locationLimit;
                const s = [];
                return (
                    Object.keys(i).forEach(e => {
                        const t = i[e];
                        t && !s.includes(e) && (s.push(e), (l += `&${e}=${t}`));
                    }),
                    l
                );
            },
            Un = e => {
                let t;
                return (
                    e.forEach((e, r) => {
                        var n;
                        t = `${t || ''}${r > 0 ? ',' : ''}${
                            ((n = e), n.desc ? `-${n.id}` : n.id)
                        }`;
                    }),
                    t
                );
            },
            Kn = e =>
                e
                    .split(',')
                    .map(e => ({
                        id: e.replace('-', ''),
                        desc: -1 !== e.indexOf('-'),
                    })),
            Yn = e =>
                e.map(e =>
                    e.columns
                        ? { id: e.accessor, columns: Yn(e.columns) }
                        : { id: e.accessor },
                ),
            Jn = (e, t, r) => [
                {
                    icon: c().createElement(Ne(), null),
                    label: r({
                        id: 'iaso.label.selectAll',
                        defaultMessage: 'Select all',
                    }),
                    onClick: () => e(),
                },
                {
                    icon: c().createElement(Hn(), null),
                    label: r({
                        id: 'iaso.label.unSelectAll',
                        defaultMessage: 'Unselect all',
                    }),
                    onClick: () => t(),
                },
            ],
            Zn = {
                selectedItems: [],
                unSelectedItems: [],
                selectAll: !1,
                selectCount: 0,
            },
            Qn = (e, t, r = [], n = 0) => {
                switch (t) {
                    case 'select':
                        return Gn(
                            Gn({}, e),
                            {},
                            { selectedItems: r, selectCount: r.length },
                        );
                    case 'unselect':
                        return Gn(
                            Gn({}, e),
                            {},
                            { unSelectedItems: r, selectCount: n - r.length },
                        );
                    case 'selectAll':
                        return Gn(
                            Gn({}, e),
                            {},
                            {
                                selectAll: !0,
                                selectedItems: [],
                                unSelectedItems: [],
                                selectCount: n,
                            },
                        );
                    case 'reset':
                        return Zn;
                    default:
                        return Gn({}, e);
                }
            },
            Xn = (e, t) => ('' === e ? t : `${e}${$t(t, !0)}`),
            eo = (e, t, r, n, o = [{ id: 'name', desc: !1 }], a = 10) => {
                const l = Gn(
                    Gn({}, n),
                    {},
                    {
                        limit: parseInt(e[Xn(t, 'pageSize')], 10) || a,
                        page: parseInt(e[Xn(t, 'page')], 10) || 0,
                        order: Un(
                            e[Xn(t, 'order')] ? Kn(e[Xn(t, 'order')]) : o,
                        ),
                    },
                );
                return (
                    r.forEach(t => {
                        var r;
                        l[t.apiUrlKey] =
                            null !== (r = e[t.urlKey]) && void 0 !== r
                                ? r
                                : t.defaultValue;
                    }),
                    l
                );
            },
            to = { data: [], pages: 0, count: 0 },
            ro = e => {
                const t = [...e];
                return (
                    e.forEach((e, r) => {
                        e.headerInfo &&
                            (t[r] = Gn(
                                Gn({}, t[r]),
                                {},
                                {
                                    Header: c().createElement(
                                        jn,
                                        { message: e.headerInfo },
                                        t[r].Header,
                                    ),
                                },
                            ));
                    }),
                    t
                );
            },
            no = require('@material-ui/core/TableHead');
        var oo = e.n(no);
        const ao = require('@material-ui/core/TableRow');
        var lo = e.n(ao);
        const io = require('@material-ui/core/TableCell');
        var so = e.n(io);
        const co = require('@material-ui/core/TableSortLabel');
        var uo = e.n(co);
        const po = (0, fe.defineMessages)({
            previousText: {
                defaultMessage: 'Previous',
                id: 'blsq.table.previous',
            },
            nextText: { defaultMessage: 'Next', id: 'blsq.table.next' },
            lastText: { defaultMessage: 'Last page', id: 'blsq.table.last' },
            firstText: { defaultMessage: 'First page', id: 'blsq.table.first' },
            noDataText: {
                defaultMessage: 'No result',
                id: 'blsq.table.noResult',
            },
            pageText: { defaultMessage: 'Page', id: 'blsq.table.page' },
            ofText: { defaultMessage: 'of', id: 'blsq.table.of' },
            rowsText: { defaultMessage: 'results', id: 'blsq.table.results' },
            selectionAction: {
                defaultMessage: 'With',
                id: 'blsq.table.labels.selectionAction',
            },
            results: {
                id: 'blsq.table.label.resultsLower',
                defaultMessage: 'result(s)',
            },
            selection: {
                id: 'blsq.table.label.selection',
                defaultMessage: 'Selection',
            },
            selected: {
                id: 'blsq.table.label.selected',
                defaultMessage: 'selected',
            },
            loading: { id: 'blsq.table.loading', defaultMessage: 'Loading...' },
            details: { defaultMessage: 'Details', id: 'blsq.table.details' },
            sortAsc: {
                defaultMessage: 'Sort ascending',
                id: 'blsq.table.sortAsc',
            },
            sortDesc: {
                defaultMessage: 'Sort descending',
                id: 'blsq.table.sortDesc',
            },
            unSort: { defaultMessage: 'Remove sort', id: 'blsq.table.unSort' },
        });
        function mo(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        const go = (0, je.makeStyles)(e => ({
                resizer: {
                    display: 'inline-block',
                    width: '15px',
                    height: '100%',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    transform: 'translateX(50%)',
                    zIndex: 1,
                    touchAction: 'none',
                    cursor: 'col-resize',
                },
                headerCell: {
                    borderRight: `2px solid ${e.palette.ligthGray.border}`,
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                    backgroundColor: 'white',
                },
                lastHeaderCell: { borderRight: 'none' },
                sortLabel: { display: 'inline-block', width: '80%' },
                icon: {
                    color: `${e.palette.primary.main}!important`,
                    position: 'absolute',
                    left: '100%',
                    top: 3,
                },
                cell: { cursor: 'default' },
            })),
            bo = ({
                column: e,
                columnsProps: t,
                setSortBy: r,
                multiSortEnabled: n,
                sortBy: o,
                isLastCell: a,
            }) => {
                var l;
                const s = go(),
                    { formatMessage: u } = Pe(),
                    d = !1 !== e.sortable && !e.isResizing;
                let p,
                    m = po.sortAsc;
                e.isSorted &&
                    (e.isSortedDesc
                        ? (p = 'desc')
                        : ((p = 'asc'), (m = po.sortDesc)));
                const g = {
                        width:
                            null !== (l = e.width) && void 0 !== l ? l : 'auto',
                    },
                    b = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                                ? mo(Object(r), !0).forEach(function (t) {
                                      i()(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                      e,
                                      Object.getOwnPropertyDescriptors(r),
                                  )
                                : mo(Object(r)).forEach(function (t) {
                                      Object.defineProperty(
                                          e,
                                          t,
                                          Object.getOwnPropertyDescriptor(r, t),
                                      );
                                  });
                        }
                        return e;
                    })({}, e.getSortByToggleProps());
                return (
                    (b.onClick = () => {
                        let t = [];
                        const a = { desc: 'asc' === p, id: e.id };
                        n
                            ? (t = [...o.filter(t => t.id !== e.id), a])
                            : t.push(a),
                            r(t);
                    }),
                    c().createElement(
                        so(),
                        be()({}, t, {
                            style: g,
                            className: f()(s.headerCell, a && s.lastHeaderCell),
                            key: t.key,
                        }),
                        d &&
                            c().createElement(
                                'div',
                                b,
                                c().createElement(
                                    uo(),
                                    {
                                        active: e.isSorted,
                                        direction: p,
                                        title: u(m),
                                        classes: {
                                            root: s.sortLabel,
                                            icon: s.icon,
                                        },
                                    },
                                    e.render('Header'),
                                ),
                            ),
                        !d &&
                            c().createElement(
                                'div',
                                { className: s.cell },
                                e.render('Header'),
                            ),
                        !1 !== e.resizable &&
                            c().createElement(
                                'div',
                                be()({}, e.getResizerProps(), {
                                    className: s.resizer,
                                }),
                            ),
                    )
                );
            };
        bo.propTypes = {
            column: g().object.isRequired,
            columnsProps: g().object.isRequired,
            setSortBy: g().func.isRequired,
            multiSortEnabled: g().bool.isRequired,
            sortBy: g().array.isRequired,
            isLastCell: g().bool.isRequired,
        };
        const fo = ({
            headerGroups: e,
            setSortBy: t,
            multiSortEnabled: r,
            sortBy: n,
        }) =>
            c().createElement(
                oo(),
                null,
                e.map(e => {
                    const o = e.getHeaderGroupProps();
                    return c().createElement(
                        lo(),
                        be()({}, o, { key: o.key }),
                        e.headers.map((o, a) => {
                            const l = o.getHeaderProps();
                            return c().createElement(bo, {
                                column: o,
                                key: o.id,
                                columnsProps: l,
                                setSortBy: t,
                                multiSortEnabled: r,
                                sortBy: n,
                                isLastCell: a + 1 === e.headers.length,
                            });
                        }),
                    );
                }),
            );
        (fo.defaultProps = {
            headerGroups: [],
            sortBy: [],
            setSortBy: () => null,
        }),
            (fo.propTypes = {
                headerGroups: g().array,
                setSortBy: g().func,
                sortBy: g().array,
                multiSortEnabled: g().bool.isRequired,
            });
        const ho = require('@material-ui/core/TableBody');
        var yo = e.n(ho);
        const Oo = (0, je.makeStyles)(e => ({
                row: {
                    '&:nth-of-type(odd)': {
                        backgroundColor: e.palette.gray.background,
                    },
                    '&:nth-of-type(even)': { backgroundColor: 'transparent' },
                },
                rowClickable: {
                    cursor: 'pointer',
                    '&:hover': {
                        '&:nth-of-type(odd)': {
                            backgroundColor: e.palette.grey[300],
                        },
                        '&:nth-of-type(even)': {
                            backgroundColor: e.palette.grey[300],
                        },
                    },
                },
                cell: { padding: e.spacing(1, 2) },
            })),
            vo = ({
                row: e,
                rowProps: t,
                subComponent: r,
                sortBy: n,
                onRowClick: o,
            }) => {
                const a = Oo(),
                    [l, i] = (0, s.useState)(!1);
                return (
                    (0, s.useEffect)(() => {
                        i(!1);
                    }, [n]),
                    c().createElement(
                        c().Fragment,
                        null,
                        c().createElement(
                            lo(),
                            be()({}, t, {
                                onClick: t => (o ? o(e.original, t) : null),
                                className: f()(
                                    a.row,
                                    Boolean(o) && a.rowClickable,
                                ),
                                key: t.key,
                            }),
                            e.cells.map(e => {
                                const t = e.getCellProps(),
                                    r = e.column.align || 'center';
                                return c().createElement(
                                    so(),
                                    be()({}, t, {
                                        key: t.key,
                                        className: a.cell,
                                        align:
                                            'actions' === e.column.id
                                                ? 'center'
                                                : r,
                                    }),
                                    !e.column.expander && e.render('Cell'),
                                    e.column.expander &&
                                        e.render('Expander', {
                                            isExpanded: l,
                                            setIsExpanded: i,
                                        }),
                                );
                            }),
                        ),
                        l &&
                            r &&
                            c().createElement(
                                lo(),
                                be()({}, t, {
                                    key: `${t.key}-expand`,
                                    className: a.row,
                                }),
                                c().createElement(
                                    so(),
                                    { colSpan: e.cells.length },
                                    r(e.original),
                                ),
                            ),
                    )
                );
            };
        (vo.defaultProps = {
            subComponent: void 0,
            sortBy: [],
            onRowClick: void 0,
        }),
            (vo.propTypes = {
                sortBy: g().array,
                row: g().object.isRequired,
                rowProps: g().object.isRequired,
                subComponent: g().oneOfType([g().object, g().func]),
                onRowClick: g().oneOfType([g().func, g().object]),
            });
        const wo = ({
            page: e,
            getTableBodyProps: t,
            prepareRow: r,
            subComponent: n,
            sortBy: o,
            onRowClick: a,
        }) =>
            c().createElement(
                yo(),
                t,
                e.map(e => {
                    r(e);
                    const t = e.getRowProps();
                    return c().createElement(vo, {
                        row: e,
                        rowProps: t,
                        key: t.key,
                        subComponent: n,
                        sortBy: o,
                        onRowClick: a,
                    });
                }),
            );
        (wo.defaultProps = {
            page: [],
            sortBy: [],
            rowsPerPage: 10,
            subComponent: void 0,
            onRowClick: void 0,
        }),
            (wo.propTypes = {
                page: g().array,
                sortBy: g().array,
                getTableBodyProps: g().func.isRequired,
                prepareRow: g().func.isRequired,
                rowsPerPage: g().number,
                subComponent: g().oneOfType([g().object, g().func]),
                onRowClick: g().oneOfType([g().func, g().object]),
            });
        const xo = require('@material-ui/core/TableFooter');
        var Eo = e.n(xo);
        const Po = (0, je.makeStyles)(e => ({
                cell: { padding: e.spacing(1, 2) },
            })),
            Co = ({ footerGroups: e }) => {
                const t = Po();
                return c().createElement(
                    Eo(),
                    null,
                    e.map(e => {
                        const r = e.getFooterGroupProps();
                        return c().createElement(
                            lo(),
                            be()({}, r, { key: r.key }),
                            e.headers.map(e => {
                                const r = e.getFooterProps(),
                                    n = e.align || 'center';
                                return e.Footer && !e.placeholderOf
                                    ? c().createElement(
                                          so(),
                                          be()({}, r, {
                                              className: t.cell,
                                              key: r.key,
                                              align: n,
                                          }),
                                          e.render('Footer'),
                                      )
                                    : null;
                            }),
                        );
                    }),
                );
            };
        (Co.defaultProps = { footerGroups: [] }),
            (Co.propTypes = { footerGroups: g().array });
        const jo = require('@material-ui/core/Checkbox');
        var qo = e.n(jo);
        const ko = (e, t, r = 'id') => {
                const {
                    selectedItems: n,
                    unSelectedItems: o,
                    selectAll: a,
                } = t;
                return a
                    ? !o.find(t => t[r] === e[r])
                    : Boolean(n.find(t => t[r] === e[r]));
            },
            So = ({
                count: e,
                multiSelect: t,
                selectionActions: r,
                setTableSelection: n,
                selection: o,
                selectionActionMessage: a,
            }) => {
                const { formatMessage: l } = Pe();
                let i = [
                    ...Jn(
                        () => n('selectAll', [], e),
                        () => n('reset'),
                        l,
                    ),
                ];
                return (
                    (i = i.concat(r)),
                    c().createElement(Mn, {
                        selection: o,
                        hidden: !t,
                        actions: i,
                        reset: () => n('reset'),
                        actionMessage: null != a ? a : l(po.selectionAction),
                    })
                );
            };
        (So.defaultProps = {
            count: 0,
            multiSelect: !1,
            selectionActions: [],
            selection: Zn,
            setTableSelection: () => null,
            selectionActionMessage: null,
        }),
            (So.propTypes = {
                count: g().number,
                multiSelect: g().bool,
                selectionActions: g().array,
                setTableSelection: g().func,
                selection: g().object,
                selectionActionMessage: g().string,
            });
        const To = (0, je.makeStyles)(e => ({
                box: {
                    width: '100%',
                    height: e.spacing(10),
                    backgroundColor: e.palette.gray.background,
                },
            })),
            Mo = ({ loading: e }) => {
                const t = To();
                return c().createElement(
                    zr(),
                    {
                        className: t.box,
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    },
                    !e && c().createElement(fe.FormattedMessage, po.noDataText),
                );
            };
        (Mo.defaultProps = { loading: !1 }),
            (Mo.propTypes = { loading: g().bool });
        const Io = ({ count: e, selectCount: t }) =>
            c().createElement(
                zr(),
                {
                    py: 2,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    className: 'pagination-count',
                },
                t > 0 &&
                    c().createElement(
                        c().Fragment,
                        null,
                        c().createElement(
                            zr(),
                            { display: 'inline-block', mr: 1 },
                            `${Gt(t)} `,
                            c().createElement(fe.FormattedMessage, po.selected),
                        ),
                        '-',
                    ),
                e > 0 &&
                    c().createElement(
                        zr(),
                        { display: 'inline-block', ml: 1 },
                        `${Gt(e)} `,
                        c().createElement(fe.FormattedMessage, po.results),
                    ),
            );
        (Io.defaultProps = { count: 0, selectCount: 0 }),
            (Io.propTypes = { count: g().number, selectCount: g().number });
        const Bo = require('@material-ui/core/TablePagination');
        var Do = e.n(Bo);
        const Ro = require('@material-ui/core/IconButton');
        var Lo = e.n(Ro);
        const No = require('@material-ui/icons/FirstPage');
        var Ao = e.n(No);
        const Fo = require('@material-ui/icons/KeyboardArrowLeft');
        var zo = e.n(Fo);
        const Vo = require('@material-ui/icons/KeyboardArrowRight');
        var _o = e.n(Vo);
        const Ho = require('@material-ui/icons/LastPage');
        var $o = e.n(Ho);
        const Go = (0, je.makeStyles)(() => ({
                input: { width: 80 },
                mediumInput: { width: 90 },
                largeInput: { width: 100 },
                XLInput: { width: 110 },
            })),
            Wo = ({ pageIndex: e, pages: t, onPageChange: r }) => {
                const n = Go(),
                    [o, a] = (0, s.useState)(e);
                return c().createElement(
                    zr(),
                    {
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        ml: 8,
                    },
                    c().createElement(
                        zr(),
                        { display: 'inline-block', mr: 1 },
                        c().createElement(fe.FormattedMessage, po.pageText),
                    ),
                    c().createElement(Jr(), {
                        className: f()(
                            n[
                                ((l = o),
                                l <= 999
                                    ? 'input'
                                    : l <= 9999
                                    ? 'mediumInput'
                                    : l <= 99999
                                    ? 'largeInput'
                                    : 'XLInput')
                            ],
                            'pagination-page-select',
                        ),
                        size: 'small',
                        label: '',
                        type: 'number',
                        value: o,
                        disabled: t < 2,
                        variant: 'outlined',
                        onChange: e => {
                            a(
                                (e => {
                                    const t = parseInt(e, 10);
                                    return Number.isNaN(t) ? '' : t;
                                })(e.currentTarget.value),
                            );
                        },
                        onKeyPress: e => {
                            'Enter' === e.key && r(o);
                        },
                    }),
                    c().createElement(
                        zr(),
                        { display: 'inline-block', ml: 1 },
                        c().createElement(fe.FormattedMessage, po.ofText),
                    ),
                    c().createElement(
                        zr(),
                        { display: 'inline-block', ml: 1 },
                        t,
                    ),
                );
                var l;
            };
        (Wo.defaultProps = { pages: 0, pageIndex: 0 }),
            (Wo.propTypes = {
                pages: g().number,
                pageIndex: g().number,
                onPageChange: g().func.isRequired,
            });
        const Uo = require('@material-ui/core/MenuItem');
        var Ko = e.n(Uo);
        const Yo = require('@material-ui/core/Select');
        var Jo = e.n(Yo);
        const Zo = (0, je.makeStyles)(e => ({
                select: { height: 40, marginLeft: e.spacing(10) },
            })),
            Qo = ({
                rowsPerPage: e,
                rowsPerPageOptions: t,
                selectRowsPerPage: r,
            }) => {
                const n = Zo(),
                    { formatMessage: o } = Pe();
                return c().createElement(
                    zr(),
                    {
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr: 8,
                    },
                    c().createElement(
                        nr(),
                        { variant: 'outlined' },
                        c().createElement(
                            Jo(),
                            {
                                className: f()(
                                    n.select,
                                    'pagination-row-select',
                                ),
                                value: e,
                                onChange: e => {
                                    r(e.target.value);
                                },
                            },
                            t.map(e =>
                                c().createElement(
                                    Ko(),
                                    {
                                        key: e,
                                        value: e,
                                        className: `row-option-${e}`,
                                    },
                                    `${e} ${o(po.rowsText)}`,
                                ),
                            ),
                        ),
                    ),
                );
            };
        Qo.propTypes = {
            rowsPerPage: g().number.isRequired,
            rowsPerPageOptions: g().array.isRequired,
            selectRowsPerPage: g().func.isRequired,
        };
        const Xo = (0, je.makeStyles)(e => ({
                root: { width: '100%', position: 'relative' },
                withCount: { marginRight: '130px' },
                count: { position: 'absolute', right: e.spacing(2) },
            })),
            ea = ({
                count: e,
                pageIndex: t,
                rowsPerPage: r,
                onPageChange: n,
                pages: o,
                rowsPerPageOptions: a,
                selectRowsPerPage: l,
                countOnTop: i,
                selectCount: s,
            }) => {
                const u = Xo(),
                    { formatMessage: d } = Pe(),
                    p = 0 === t,
                    m = t >= Math.ceil(e / r) - 1;
                return c().createElement(
                    zr(),
                    {
                        py: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        className: u.root,
                    },
                    c().createElement(
                        Lo(),
                        {
                            className: 'pagination-first',
                            variant: 'outlined',
                            onClick: () => {
                                n(1);
                            },
                            disabled: p,
                            'aria-label': d(po.firstText),
                        },
                        c().createElement(Ao(), {
                            color: p ? 'inherit' : 'primary',
                        }),
                    ),
                    c().createElement(
                        Lo(),
                        {
                            className: 'pagination-previous',
                            variant: 'outlined',
                            onClick: () => {
                                n(t);
                            },
                            disabled: p,
                            'aria-label': d(po.previousText),
                        },
                        c().createElement(zo(), {
                            color: p ? 'inherit' : 'primary',
                        }),
                    ),
                    c().createElement(Wo, {
                        pages: o,
                        pageIndex: t + 1,
                        onPageChange: e => {
                            n(e);
                        },
                    }),
                    c().createElement(Qo, {
                        rowsPerPage: r,
                        rowsPerPageOptions: a,
                        selectRowsPerPage: l,
                    }),
                    c().createElement(
                        Lo(),
                        {
                            className: 'pagination-next',
                            variant: 'outlined',
                            onClick: () => {
                                n(t + 2);
                            },
                            disabled: m,
                            'aria-label': d(po.nextText),
                        },
                        c().createElement(_o(), {
                            color: m ? 'inherit' : 'primary',
                        }),
                    ),
                    c().createElement(
                        Lo(),
                        {
                            variant: 'outlined',
                            onClick: () => {
                                n(Math.max(0, Math.ceil(e / r)));
                            },
                            disabled: m,
                            'aria-label': d(po.lastText),
                            className: f()(
                                !i && u.withCount,
                                'pagination-last',
                            ),
                        },
                        c().createElement($o(), {
                            color: m ? 'inherit' : 'primary',
                        }),
                    ),
                    !i &&
                        c().createElement(
                            'div',
                            { className: u.count },
                            c().createElement(Io, { count: e, selectCount: s }),
                        ),
                );
            };
        ea.propTypes = {
            pages: g().number.isRequired,
            count: g().number.isRequired,
            onPageChange: g().func.isRequired,
            pageIndex: g().number.isRequired,
            rowsPerPage: g().number.isRequired,
            rowsPerPageOptions: g().array.isRequired,
            selectRowsPerPage: g().func.isRequired,
            countOnTop: g().bool.isRequired,
            selectCount: g().number.isRequired,
        };
        const ta = (0, je.makeStyles)(() => ({
                spacer: { display: 'none' },
                caption: { display: 'none' },
                input: { display: 'none' },
            })),
            ra = ({
                count: e,
                rowsPerPage: t,
                pageIndex: r,
                onTableParamsChange: n,
                pages: o,
                countOnTop: a,
                selectCount: l,
            }) => {
                const i = ta(),
                    s = r + 1 > o ? o - 1 : r;
                return c().createElement(Do(), {
                    classes: {
                        spacer: i.spacer,
                        caption: i.caption,
                        input: i.input,
                    },
                    rowsPerPageOptions: Vn,
                    component: 'div',
                    count: e,
                    rowsPerPage: t,
                    page: s,
                    onPageChange: (e, t) => {
                        n('page', t + 1);
                    },
                    onRowsPerPageChange: e => {
                        n('pageSize', e.target.value);
                    },
                    ActionsComponent: () =>
                        c().createElement(ea, {
                            rowsPerPageOptions: Vn,
                            count: e,
                            rowsPerPage: t,
                            onPageChange: e => {
                                n('page', e);
                            },
                            selectRowsPerPage: e => n('pageSize', e),
                            pageIndex: s,
                            pages: o,
                            countOnTop: a,
                            selectCount: l,
                        }),
                    labelDisplayedRows: () => null,
                });
            };
        function na(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function oa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? na(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : na(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        (ra.defaultProps = {
            count: 0,
            rowsPerPage: 0,
            pageIndex: 0,
            pages: 0,
            selectCount: 0,
        }),
            (ra.propTypes = {
                count: g().number,
                rowsPerPage: g().number,
                pageIndex: g().number,
                pages: g().number,
                onTableParamsChange: g().func.isRequired,
                countOnTop: g().bool.isRequired,
                selectCount: g().number,
            });
        const aa = (0, je.makeStyles)(() => ({
                tableContainer: { overflowY: 'hidden' },
                paper: { position: 'relative' },
            })),
            la = e => {
                const {
                        params: t,
                        count: r,
                        extraProps: n,
                        paramsPrefix: o,
                        redirectTo: a,
                        baseUrl: l,
                        pages: i,
                        countOnTop: u,
                        marginTop: d,
                        marginBottom: p,
                        multiSelect: m,
                        selectionActions: g,
                        setTableSelection: b,
                        selection: f,
                        selectionActionMessage: h,
                        showPagination: y,
                        showFooter: O,
                        onTableParamsChange: v,
                        defaultSorted: x,
                        resetPageToOne: E,
                        elevation: P,
                        onRowClick: C,
                    } = e,
                    { formatMessage: j } = Pe(),
                    q = aa(),
                    k = tn('Shift'),
                    S = (0, s.useMemo)(() => {
                        const t = [...e.columns];
                        return (
                            m &&
                                !e.columns.find(
                                    e => 'selected' === e.accessor,
                                ) &&
                                t.push(
                                    ((e, t, r, n) => ({
                                        Header: n(po.selection),
                                        accessor: 'selected',
                                        width: 100,
                                        sortable: !1,
                                        Cell: n =>
                                            c().createElement(qo(), {
                                                color: 'primary',
                                                checked: ko(
                                                    n.cell.row.original,
                                                    e,
                                                ),
                                                onChange: o =>
                                                    (({
                                                        isSelected: e,
                                                        item: t,
                                                        selection: r,
                                                        setTableSelection: n,
                                                        count: o,
                                                    }) => {
                                                        const a = [
                                                                ...r.selectedItems,
                                                            ],
                                                            l = [
                                                                ...r.unSelectedItems,
                                                            ],
                                                            { selectAll: i } =
                                                                r;
                                                        if (i) {
                                                            if (e) {
                                                                const e =
                                                                    l.findIndex(
                                                                        e =>
                                                                            Fn()(
                                                                                e,
                                                                                t,
                                                                            ),
                                                                    );
                                                                -1 !== e &&
                                                                    l.splice(
                                                                        e,
                                                                        1,
                                                                    );
                                                            } else l.push(t);
                                                            n('unselect', l, o);
                                                        } else {
                                                            if (e) a.push(t);
                                                            else {
                                                                const e =
                                                                    a.findIndex(
                                                                        e =>
                                                                            Fn()(
                                                                                e,
                                                                                t,
                                                                            ),
                                                                    );
                                                                a.splice(e, 1);
                                                            }
                                                            n('select', a);
                                                        }
                                                    })({
                                                        isSelected:
                                                            o.target.checked,
                                                        item: n.cell.row
                                                            .original,
                                                        selection: e,
                                                        setTableSelection: t,
                                                        count: r,
                                                    }),
                                            }),
                                    }))(f, b, r, j),
                                ),
                            ro(t)
                        );
                    }, [e.columns, m, f]),
                    T = (0, s.useMemo)(() => e.data, [e.data]),
                    M = t[Xn(o, 'order')],
                    I = t[Xn(o, 'page')],
                    B = t[Xn(o, 'pageSize')],
                    { loading: D } = n,
                    R = (0, s.useMemo)(() => {
                        const e = parseInt(B, 10),
                            t = M && Kn(M);
                        return {
                            pageIndex: I ? parseInt(I, 10) - 1 : 0,
                            pageSize:
                                e ||
                                (null == n ? void 0 : n.defaultPageSize) ||
                                10,
                            sortBy: t || x,
                        };
                    }, []),
                    {
                        getTableProps: L,
                        getTableBodyProps: N,
                        headerGroups: A,
                        footerGroups: F,
                        prepareRow: z,
                        gotoPage: V,
                        setPageSize: _,
                        setSortBy: H,
                        page: $,
                        state: { pageSize: G, pageIndex: W, sortBy: U },
                    } = (0, zn.useTable)(
                        {
                            columns: S,
                            data: T,
                            initialState: R,
                            disableMultiSort: !0,
                            manualPagination: !0,
                            manualSortBy: !0,
                            pageCount: i,
                            autoResetPage: !1,
                        },
                        zn.useSortBy,
                        zn.useResizeColumns,
                        zn.usePagination,
                    ),
                    K = (e, r) => {
                        const n = oa({}, t);
                        'order' === e && r.length > 0
                            ? (H(r), (n[Xn(o, 'order')] = Un(r)))
                            : 'order' !== e && (n[Xn(o, e)] = r),
                            'pageSize' === e && ((n[Xn(o, 'page')] = 1), _(r)),
                            'page' === e && V(r - 1),
                            a(l, n),
                            v(n);
                    },
                    Y = oa(oa({}, L()), {}, { size: 'small' });
                Ce(() => {
                    V(0);
                }, [E]),
                    Ce(() => {
                        M && Un(U) !== M && H(Kn(M));
                    }, [M]),
                    Ce(() => {
                        B !== G && _(B);
                    }, [B]),
                    Ce(() => {
                        const e = parseInt(I, 10) - 1;
                        Number.isNaN(e) || W === e || V(e);
                    }, [I]);
                const J = parseInt(G, 10);
                return c().createElement(
                    zr(),
                    { mt: d ? 4 : 0, mb: p ? 4 : 0 },
                    c().createElement(So, {
                        count: r,
                        multiSelect: m,
                        selectionActions: g,
                        selection: f,
                        setTableSelection: b,
                        selectionActionMessage: h,
                    }),
                    u &&
                        c().createElement(Io, {
                            count: r,
                            selectCount: f.selectCount,
                        }),
                    c().createElement(
                        Rn(),
                        { elevation: P, className: q.paper },
                        D && c().createElement(w, { absolute: !0 }),
                        c().createElement(
                            Nn(),
                            { className: q.tableContainer },
                            c().createElement(
                                Bn(),
                                be()({}, Y, { stickyHeader: !0 }),
                                c().createElement(fo, {
                                    headerGroups: A,
                                    setSortBy: e => K('order', e),
                                    multiSortEnabled: k,
                                    sortBy: U,
                                }),
                                c().createElement(wo, {
                                    page: $,
                                    getTableBodyProps: N,
                                    prepareRow: z,
                                    subComponent: n.SubComponent,
                                    sortBy: U,
                                    onRowClick: C,
                                }),
                                O && c().createElement(Co, { footerGroups: F }),
                            ),
                        ),
                        0 === (null == $ ? void 0 : $.length) &&
                            c().createElement(Mo, { loading: D }),
                        (null == $ ? void 0 : $.length) > 0 &&
                            y &&
                            c().createElement(ra, {
                                count: r,
                                rowsPerPage: J,
                                pageIndex: W,
                                onTableParamsChange: K,
                                pages: i,
                                countOnTop: u,
                                selectCount: f.selectCount,
                            }),
                    ),
                );
            };
        (la.defaultProps = {
            count: 0,
            pages: 0,
            baseUrl: '',
            countOnTop: !0,
            marginTop: !0,
            marginBottom: !0,
            multiSelect: !1,
            selectionActions: [],
            selection: Zn,
            setTableSelection: () => null,
            redirectTo: () => null,
            extraProps: { loading: !1 },
            paramsPrefix: '',
            params: { pageSize: 10, page: 1, order: '-created_at' },
            selectionActionMessage: null,
            showPagination: !0,
            showFooter: !1,
            onTableParamsChange: () => null,
            defaultSorted: Kn('-created_at'),
            resetPageToOne: '',
            elevation: 3,
            onRowClick: void 0,
        }),
            (la.propTypes = {
                params: g().object,
                count: g().number,
                pages: g().number,
                data: g().array.isRequired,
                columns: g().array.isRequired,
                baseUrl: g().string,
                countOnTop: g().bool,
                marginTop: g().bool,
                marginBottom: g().bool,
                multiSelect: g().bool,
                selectionActions: g().array,
                redirectTo: g().func,
                setTableSelection: g().func,
                selection: g().object,
                extraProps: g().object,
                paramsPrefix: g().string,
                selectionActionMessage: g().string,
                showPagination: g().bool,
                showFooter: g().bool,
                onTableParamsChange: g().func,
                defaultSorted: g().array,
                resetPageToOne: g().string,
                elevation: g().number,
                onRowClick: g().func,
            });
        const ia = c().memo(la, (e, t) => {
                const r = Yn(e.columns),
                    n = Yn(t.columns);
                return !!(
                    Fn()(e.data, t.data) &&
                    Fn()(r, n) &&
                    Fn()(
                        e.selection.selectedItems,
                        t.selection.selectedItems,
                    ) &&
                    Fn()(e.selection.selectAll, t.selection.selectAll) &&
                    Fn()(
                        e.selection.unSelectedItems,
                        t.selection.unSelectedItems,
                    ) &&
                    Fn()(e.extraProps, t.extraProps)
                );
            }),
            sa = require('@material-ui/icons/Visibility');
        var ca = e.n(sa);
        const ua = require('@material-ui/icons/VisibilityOff');
        var da = e.n(ua);
        const pa = ({ isExpanded: e, setIsExpanded: t }) => {
            const { formatMessage: r } = Pe();
            return e
                ? c().createElement(
                      p.IconButton,
                      { onClick: () => t(!e) },
                      c().createElement(da(), null),
                  )
                : c().createElement(
                      p.Tooltip,
                      { title: r(po.details) },
                      c().createElement(
                          p.IconButton,
                          { onClick: () => t(!e) },
                          c().createElement(ca(), null),
                      ),
                  );
        };
        (pa.defaultProps = { isExpanded: !1, setIsExpanded: () => null }),
            (pa.propTypes = { isExpanded: g().bool, setIsExpanded: g().func });
        const ma = e => {
            const { formatMessage: t } = Pe();
            return c().createElement(an, { message: t(e.message) }, e.children);
        };
        function ga(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function ba(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? ga(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : ga(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const fa = (0, p.makeStyles)(e =>
                ba(
                    ba({}, De(e)),
                    {},
                    {
                        paper: { overflow: 'visible' },
                        title: { paddingBottom: 0 },
                        content: {
                            overflow: 'visible',
                            paddingBottom: e.spacing(2),
                        },
                        action: {
                            paddingBottom: e.spacing(2),
                            paddingRight: e.spacing(2),
                        },
                    },
                ),
            ),
            ha = ({
                open: e = !1,
                maxWidth: t = 'sm',
                onClose: r,
                id: n,
                dataTestId: o,
                titleMessage: a,
                children: l,
                closeDialog: i,
                buttons: s,
            }) => {
                const u = fa();
                return c().createElement(
                    c().Fragment,
                    null,
                    c().createElement(
                        p.Dialog,
                        {
                            fullWidth: !0,
                            maxWidth: t,
                            open: e,
                            classes: { paper: u.paper },
                            onClose: r,
                            scroll: 'body',
                            id: n,
                            'data-test': o,
                        },
                        a &&
                            c().createElement(
                                p.DialogTitle,
                                { className: u.title },
                                (d = a)
                                    ? d.id
                                        ? c().createElement(
                                              fe.FormattedMessage,
                                              ba({}, d),
                                          )
                                        : d
                                    : '',
                            ),
                        c().createElement(
                            p.DialogContent,
                            { className: u.content },
                            l,
                        ),
                        c().createElement(
                            p.DialogActions,
                            { className: u.action },
                            s({ closeDialog: i }),
                        ),
                    ),
                );
                var d;
            },
            ya = (0, je.makeStyles)(e => ({
                textStyle: {
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 1,
                    paddingTop: 0.5,
                    paddingBottom: 0.5,
                    flex: '1',
                    marginLeft: e.spacing(1.5),
                },
            })),
            Oa = (0, je.makeStyles)(e => ({
                placeholder: {
                    alignItems: 'center',
                    fontSize: '16px',
                    flex: '1',
                    marginLeft: '14px',
                    cursor: 'default',
                    color: 'transparent',
                    paddingTop: 0.5,
                    paddingBottom: 0.5,
                },
                treeviews: {
                    alignItems: 'center',
                    fontSize: '16px',
                    flex: '1',
                    marginLeft: '10px',
                },
                paper: {
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid rgba(0,0,0,0.23)',
                },
                paperWithIcon: {
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingRight: e.spacing(2),
                },
                inputLabel: {
                    backgroundColor: 'white',
                    color: e.palette.mediumGray.main,
                    paddingLeft: '1px',
                },
                shrinkInputLabel: { fontSize: '20px' },
                enabled: {
                    '&:hover': { border: '1px solid rgba(0,0,0,0.87)' },
                },
                pointer: { cursor: 'pointer' },
                clearButton: { marginRight: 5 },
                error: {
                    '&:hover': { border: `1px solid ${e.palette.error.main}` },
                    border: `1px solid ${e.palette.error.main}`,
                },
                errorLabel: { color: e.palette.error.main },
            })),
            va = () => null,
            wa = ({ text: e, disabled: t = !1 }) => {
                const r = Oa(),
                    n = t ? r.placeholder : `${r.placeholder} ${r.pointer}`;
                return c().createElement(p.Box, { className: n }, e);
            },
            xa = ({
                placeholder: e,
                disabled: t = !1,
                required: r = !1,
                errors: n = [],
                children: o,
                onClick: a = va,
                icon: l,
            }) => {
                const i = Oa(),
                    s = n.length > 0,
                    u = s && !t ? i.error : '',
                    d = s && !t ? i.errorLabel : '',
                    m = t ? '' : i.enabled,
                    g = l ? i.paperWithIcon : 'MuiOutlinedInput-multiline';
                return c().createElement(
                    ar,
                    { errors: n },
                    c().createElement(
                        p.InputLabel,
                        {
                            shrink: Boolean(o),
                            required: r,
                            className: `${f()(
                                i.inputLabel,
                                Boolean(o) && i.shrinkInputLabel,
                                'input-label',
                            )} ${d}`,
                        },
                        e,
                    ),
                    c().createElement(
                        p.Paper,
                        {
                            variant: 'outlined',
                            elevation: 0,
                            className: f()(i.paper, m, u, g),
                            onClick: t ? va : a,
                        },
                        !o && c().createElement(wa, { text: e, disabled: t }),
                        o,
                        l,
                    ),
                );
            },
            Ea = require('react-dropzone'),
            Pa = require('@material-ui/icons/Attachment');
        var Ca = e.n(Pa);
        const ja = (0, fe.defineMessages)({
            clickOrDragFile: {
                id: 'blsq.label.clickOrDragFile',
                defaultMessage: 'Drag files or click to select',
            },
            clicktoOpenFileSelect: {
                id: 'blsq.label.clicktoOpenFileSelect',
                defaultMessage: 'Click to open file selection',
            },
            files: { id: 'blsq.label.Files', defaultMessage: 'Files' },
            dropHere: {
                id: 'blsq.label.dropHere',
                defaultMessage: 'Drop files here',
            },
        });
        function qa(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function ka(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? qa(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : qa(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Sa = c().createElement(
                p.Tooltip,
                {
                    title: c().createElement(
                        fe.FormattedMessage,
                        ka({}, ja.clickOrDragFile),
                    ),
                },
                c().createElement(Ca(), { color: 'action' }),
            ),
            Ta = (0, p.makeStyles)(e => ({
                outlined: {
                    border: `2px dashed ${e.palette.mediumGray.main}`,
                    height: '100px',
                    backgroundColor: e.palette.ligthGray.main,
                },
                text: { color: e.palette.mediumGray.main },
            })),
            Ma = () => {
                const { formatMessage: e } = Pe(),
                    t = Ta();
                return c().createElement(
                    p.Paper,
                    {
                        elevation: 0,
                        variant: 'outlined',
                        classes: { outlined: t.outlined },
                    },
                    c().createElement(
                        p.Grid,
                        {
                            container: !0,
                            item: !0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            style: { height: '100%' },
                        },
                        c().createElement(
                            p.Typography,
                            { className: t.text },
                            e(ja.dropHere),
                        ),
                    ),
                );
            },
            Ia = ({
                placeholder: e,
                multi: t = !0,
                onFilesSelect: r = () => null,
                files: n = [],
                required: o = !1,
                errors: a = [],
            }) => {
                const [l, i] = (0, s.useState)(!1),
                    { getRootProps: u, getInputProps: d } = (0, Ea.useDropzone)(
                        {
                            onDrop: r,
                            multiple: t,
                            onDragLeave: () => {
                                i(!1);
                            },
                            onDragEnter: () => {
                                i(!0);
                            },
                            onDropAccepted: () => {
                                i(!1);
                            },
                        },
                    ),
                    { formatMessage: m } = Pe(),
                    g = null != e ? e : m(ja.files),
                    b = ya();
                return c().createElement(
                    'div',
                    ka({}, u()),
                    c().createElement('input', ka({}, d())),
                    !l &&
                        c().createElement(
                            xa,
                            {
                                placeholder: g,
                                icon: Sa,
                                required: o,
                                errors: a,
                            },
                            n.length > 0 &&
                                c().createElement(
                                    p.Box,
                                    { className: b.textStyle },
                                    `${n.length} files selected`,
                                ),
                        ),
                    l && c().createElement(Ma, null),
                );
            };
        function Ba(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Da(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Ba(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Ba(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Ra = ({
                closeDialog: e,
                allowConfirm: t = !0,
                onConfirm: r,
                confirmMessage: n,
                onCancel: o,
                cancelMessage: a,
                additionalButton: l = !1,
                additionalMessage: i,
                onAdditionalButtonClick: s,
                allowConfirmAdditionalButton: u = !0,
            }) =>
                c().createElement(
                    c().Fragment,
                    null,
                    c().createElement(
                        p.Button,
                        {
                            onClick: () => {
                                o(), e();
                            },
                            color: 'primary',
                            'data-test': 'cancel-button',
                        },
                        c().createElement(fe.FormattedMessage, Da({}, a)),
                    ),
                    c().createElement(
                        p.Button,
                        {
                            'data-test': 'confirm-button',
                            onClick: () => {
                                r(), e();
                            },
                            disabled: !t,
                            color: 'primary',
                            autoFocus: !0,
                        },
                        c().createElement(fe.FormattedMessage, Da({}, n)),
                    ),
                    l &&
                        i &&
                        s &&
                        c().createElement(
                            p.Button,
                            {
                                'data-test': 'additional-button',
                                onClick: () => {
                                    s(), e();
                                },
                                color: 'primary',
                                disabled: null != u ? !u : !t,
                            },
                            c().createElement(fe.FormattedMessage, Da({}, i)),
                        ),
                ),
            La = ({
                open: e = !1,
                maxWidth: t = 'sm',
                onClose: r,
                id: n,
                dataTestId: o,
                titleMessage: a,
                children: l,
                closeDialog: i,
                allowConfirm: s = !0,
                onConfirm: u,
                confirmMessage: d,
                onCancel: p,
                cancelMessage: m,
                additionalButton: g = !1,
                additionalMessage: b,
                onAdditionalButtonClick: f,
                allowConfirmAdditionalButton: h = !0,
            }) =>
                c().createElement(
                    ha,
                    {
                        open: e,
                        maxWidth: t,
                        onClose: r,
                        id: n,
                        dataTestId: o,
                        titleMessage: a,
                        closeDialog: i,
                        buttons: ({ closeDialog: e }) =>
                            c().createElement(Ra, {
                                closeDialog: e,
                                allowConfirm: s,
                                onConfirm: u,
                                confirmMessage: d,
                                onCancel: p,
                                cancelMessage: m,
                                additionalButton: g,
                                additionalMessage: b,
                                onAdditionalButtonClick: f,
                                allowConfirmAdditionalButton: h,
                            }),
                    },
                    l,
                ),
            Na = ['iconProps', 'defaultOpen'];
        function Aa(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Fa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Aa(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Aa(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const za = (e, t) => r => {
                const { iconProps: n, defaultOpen: o } = r,
                    a = Pt()(r, Na),
                    [l, i] = (0, s.useState)(null != o && o);
                return c().createElement(
                    c().Fragment,
                    null,
                    c().createElement(
                        t,
                        Fa({}, Fa(Fa({}, n), {}, { onClick: () => i(!0) })),
                    ),
                    l &&
                        c().createElement(
                            e,
                            Fa(
                                {},
                                Fa(
                                    Fa({}, a),
                                    {},
                                    { closeDialog: () => i(!1), isOpen: l },
                                ),
                            ),
                        ),
                );
            },
            Va = (0, fe.defineMessages)({
                reply: {
                    id: 'blsq.comment.button.reply',
                    defaultMessage: 'Reply',
                },
            });
        function _a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Ha(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? _a(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : _a(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const $a = (0, je.makeStyles)(e => {
                var t, r;
                return Ha(
                    Ha({}, De(e)),
                    {},
                    {
                        commentRoot: {
                            padding: '10px 20px',
                            margin: '0px 5px 5px 5px',
                        },
                        commentAuthor: { margin: 0, textAlign: 'left' },
                        commentPostingTime: {
                            textAlign: 'end',
                            color:
                                null !==
                                    (t =
                                        null === (r = e.mediumGray) ||
                                        void 0 === r
                                            ? void 0
                                            : r.main) && void 0 !== t
                                    ? t
                                    : '#A2A2A2',
                        },
                        commentGrid: {
                            justifyContent: 'left',
                            padding: '0px 10px',
                        },
                        replyToComment: { textAlign: 'end' },
                        commentText: {
                            textAlign: 'justify',
                            marginTop: '10px',
                        },
                        toggleCommentText: {
                            alignSelf: 'end',
                            cursor: 'default',
                            color: '#3f51b5',
                            '&:hover': { textDecoration: 'underline' },
                        },
                        expandThread: { textAlign: 'end' },
                        button: { backgroundColor: '#fff', color: '#3f51b5' },
                        childComment: { paddingLeft: '20px' },
                    },
                );
            }),
            Ga = (0, fe.defineMessages)({
                textAreaPlaceholder: {
                    id: 'blsq.comment.textArea.placeholder',
                    defaultMessage: 'Leave a comment here',
                },
                confirmComment: {
                    id: 'blsq.comment.confirmComment',
                    defaultMessage: 'Confirm',
                },
            });
        function Wa(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Ua(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Wa(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Wa(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Ka = (0, je.makeStyles)(e =>
                Ua(
                    Ua({}, De(e)),
                    {},
                    {
                        textAreaContainer: { width: '100%', marginTop: '20px' },
                        textArea: {
                            width: '100%',
                            borderRadius: '6px',
                            borderColor: '#A2A2A2',
                            padding: '8px',
                            resize: 'vertical',
                        },
                        left: { textAlign: 'left' },
                        right: { textAlign: 'right' },
                        center: { textAlign: 'center' },
                        commentConfirmButton: {
                            marginBottom: '20px',
                            marginLeft: 'auto',
                        },
                        button: { color: '#fff', backgroundColor: '#3f51b5' },
                    },
                ),
            ),
            Ya = ({
                placeholder: e,
                minRows: t,
                maxRows: r,
                onChange: n,
                className: o,
                buttonText: a,
                onConfirm: l,
                position: i,
                inline: u,
            }) => {
                const [d, m] = (0, s.useState)(''),
                    g = Ka(),
                    b = Pe(),
                    f = (0, s.useCallback)(() => {
                        l(d), m('');
                    }, [d]);
                return c().createElement(
                    p.Grid,
                    {
                        container: !0,
                        direction: u ? 'row' : 'column',
                        alignItems: 'center',
                        spacing: 2,
                        className: i ? g[i] : null,
                    },
                    c().createElement(
                        p.Grid,
                        { item: !0, className: g.textAreaContainer },
                        c().createElement(p.TextareaAutosize, {
                            className: null != o ? o : g.textArea,
                            minRows: t,
                            maxRows: r,
                            'aria-label': 'write comment here',
                            placeholder:
                                null != e
                                    ? e
                                    : b.formatMessage(Ga.textAreaPlaceholder),
                            onChange: e => {
                                m(e.target.value), n(e.target.value);
                            },
                            value: d,
                            autoFocus: !0,
                        }),
                    ),
                    c().createElement(
                        p.Grid,
                        { item: !0, className: g.commentConfirmButton },
                        c().createElement(
                            p.Button,
                            {
                                onClick: f,
                                variant: 'contained',
                                color: 'primary',
                            },
                            null != a ? a : b.formatMessage(Ga.confirmComment),
                        ),
                    ),
                );
            };
        (Ya.propTypes = {
            placeholder: g().string,
            className: g().string,
            minRows: g().number,
            maxRows: g().number,
            onChange: g().func,
            onConfirm: g().func,
            buttonText: g().string,
            position: g().string,
            inline: g().bool,
        }),
            (Ya.defaultProps = {
                placeholder: null,
                minRows: 3,
                maxRows: 5,
                onChange: () => {},
                className: null,
                buttonText: null,
                onConfirm: () => {},
                position: '',
                inline: !0,
            });
        const Ja = require('moment');
        var Za = e.n(Ja);
        const Qa = (0, fe.defineMessages)({
                textExpand: {
                    id: 'blsq.comment.button.textExpand',
                    defaultMessage: 'See more',
                },
                textCollapse: {
                    id: 'blsq.comment.button.textCollapse',
                    defaultMessage: 'See less',
                },
                postingTime: {
                    id: 'blsq.comment.postingTime',
                    defaultMessage: 'Posted:',
                },
            }),
            Xa = ({
                text: e,
                hideOverflow: t,
                toggle: r,
                maxLength: n,
                textExpand: o,
                textCollapse: a,
            }) => {
                const l = $a(),
                    i = Pe();
                return c().createElement(
                    'div',
                    { className: l.commentText },
                    c().createElement(
                        'p',
                        null,
                        t && e.length > n ? Wt(e, 150) : e,
                        ' ',
                    ),
                    t &&
                        c().createElement(
                            'span',
                            {
                                onClick: r,
                                className: l.toggleCommentText,
                                role: 'button',
                                tabIndex: 0,
                            },
                            null != o ? o : i.formatMessage(Qa.textExpand),
                        ),
                    !t &&
                        e.length > n &&
                        c().createElement(
                            'span',
                            {
                                onClick: r,
                                className: l.toggleCommentText,
                                role: 'button',
                                tabIndex: 0,
                            },
                            null != a ? a : i.formatMessage(Qa.textCollapse),
                        ),
                );
            };
        (Xa.propTypes = {
            text: g().string.isRequired,
            hideOverflow: g().bool.isRequired,
            toggle: g().func.isRequired,
            maxLength: g().number.isRequired,
            textExpand: g().string,
            textCollapse: g().string,
        }),
            (Xa.defaultProps = { textExpand: null, textCollapse: null });
        const el = ({
            avatar: e,
            author: t,
            content: r,
            postingTime: n,
            classNames: o,
        }) => {
            const a = Pe(),
                l = $a(),
                [i, u] = (0, s.useState)(r.length > 150),
                d = (0, s.useCallback)(() => u(!i), [i]),
                m = null != o ? o : l,
                g = `${a.formatMessage(Qa.postingTime)}  ${Za()(n).fromNow()}`;
            return c().createElement(
                p.Grid,
                { container: !0, wrap: 'nowrap', spacing: 4 },
                c().createElement(
                    p.Grid,
                    { item: !0 },
                    c().createElement(p.Avatar, { alt: t, src: e }),
                ),
                c().createElement(
                    p.Grid,
                    {
                        className: m.commentGrid,
                        item: !0,
                        xs: !0,
                        zeroMinWidth: !0,
                    },
                    c().createElement('h4', { className: m.commentAuthor }, t),
                    c().createElement(Xa, {
                        text: r,
                        hideOverflow: i,
                        toggle: d,
                        maxLength: 150,
                    }),
                    c().createElement(
                        p.Typography,
                        {
                            variant: 'body2',
                            className: m.commentPostingTime,
                            component: 'div',
                        },
                        g,
                    ),
                ),
            );
        };
        (el.propTypes = {
            avatar: g().string,
            author: g().string.isRequired,
            content: g().string.isRequired,
            postingTime: g().string,
            classNames: g().arrayOf(g().string),
        }),
            (el.defaultProps = {
                avatar: null,
                postingTime: '',
                classNames: null,
            });
        const tl = ({
            avatar: e,
            author: t,
            content: r,
            postingTime: n,
            classNames: o,
            actionText: a,
            onAddComment: l,
            id: i,
        }) => {
            const u = Pe(),
                d = $a(),
                [m, g] = (0, s.useState)(!1),
                b = null != o ? o : d,
                f = (0, s.useCallback)(
                    e => {
                        g(!1), l(e, i);
                    },
                    [i, l],
                );
            return c().createElement(
                p.Paper,
                { variant: 'outlined', className: b.commentRoot },
                c().createElement(el, {
                    avatar: e,
                    author: t,
                    postingTime: n,
                    content: r,
                }),
                !m &&
                    c().createElement(
                        'div',
                        { className: b.replyToComment },
                        c().createElement(
                            p.Button,
                            {
                                className: b.button,
                                size: 'small',
                                onClick: () => {
                                    g(!0);
                                },
                            },
                            null != a ? a : u.formatMessage(Va.reply),
                        ),
                    ),
                m && c().createElement(Ya, { position: 'right', onConfirm: f }),
            );
        };
        (tl.propTypes = {
            avatar: g().string,
            author: g().string.isRequired,
            content: g().string.isRequired,
            postingTime: g().string,
            classNames: g().arrayOf(g().string),
            actionText: g().string,
            onAddComment: g().func,
            id: g().number,
        }),
            (tl.defaultProps = {
                avatar: null,
                postingTime: '',
                classNames: null,
                actionText: null,
                onAddComment: () => {},
                id: null,
            });
        const rl = (0, fe.defineMessages)({
                collapse: {
                    id: 'blsq.comment.button.label.collapse',
                    defaultMessage: 'Hide thread',
                },
                expand: {
                    id: 'blsq.comment.button.label.expand',
                    defaultMessage: 'Show thread',
                },
                addReply: {
                    id: 'blsq.comment.button.label.addReply',
                    defaultMessage: 'Add reply',
                },
            }),
            nl = ({
                comments: e,
                actionText: t,
                onAddComment: r,
                parentId: n,
            }) => {
                const o = $a(),
                    a = Pe(),
                    [l, i] = (0, s.useState)(!1),
                    [u, d] = (0, s.useState)(!1),
                    m = (0, s.useCallback)(() => {
                        u && i(!1), d(!u);
                    }, [u]),
                    g = () => {
                        i(!0), d(!0);
                    },
                    b = (0, s.useCallback)(
                        e => {
                            i(!1), r(e, n);
                        },
                        [r, n],
                    ),
                    f = (0, s.useCallback)(
                        (e, t) => {
                            i(!1), d(!0), r(e, t);
                        },
                        [r],
                    );
                return 1 === e.length
                    ? c().createElement(tl, {
                          onAddComment: f,
                          author: e[0].author,
                          content: e[0].comment,
                          postingTime: e[0].dateTime,
                          id: e[0].id,
                      })
                    : c().createElement(
                          p.Paper,
                          {
                              className: o.commentRoot,
                              variant: 'outlined',
                              elevation: 1,
                          },
                          ((h = u ? e : [e[0]]).length,
                          h.map((r, n) => {
                              var i, s;
                              return c().createElement(
                                  'div',
                                  {
                                      key:
                                          null !==
                                              (i = `Fragment${r.author}${r.dateTime}${r.id}`) &&
                                          void 0 !== i
                                              ? i
                                              : '',
                                      className: 0 === n ? '' : o.childComment,
                                  },
                                  c().createElement(el, {
                                      avatar: r.avatar,
                                      author: r.author,
                                      postingTime: r.dateTime,
                                      content: r.comment,
                                  }),
                                  0 === n &&
                                      c().createElement(
                                          'div',
                                          { className: o.expandThread },
                                          c().createElement(
                                              p.Button,
                                              {
                                                  onClick: m,
                                                  className: o.button,
                                                  size: 'small',
                                              },
                                              a.formatMessage(
                                                  u ? rl.collapse : rl.expand,
                                              ),
                                          ),
                                      ),
                                  !l &&
                                      c().createElement(
                                          'div',
                                          { className: o.replyToComment },
                                          c().createElement(
                                              p.Button,
                                              {
                                                  className: o.button,
                                                  size: 'small',
                                                  onClick: g,
                                              },
                                              null != t
                                                  ? t
                                                  : a.formatMessage(
                                                        rl.addReply,
                                                    ),
                                          ),
                                      ),
                                  n === e.length - 1 &&
                                      l &&
                                      c().createElement(Ya, { onConfirm: b }),
                                  n < e.length - 1 &&
                                      u &&
                                      c().createElement(p.Divider, {
                                          variant: 'fullWidth',
                                          style: { margin: '30px 0' },
                                          key:
                                              null !==
                                                  (s = `divider${r.author}${r.dateTime}${r.id}`) &&
                                              void 0 !== s
                                                  ? s
                                                  : '',
                                      }),
                              );
                          })),
                      );
                var h;
            };
        (nl.propTypes = {
            comments: g().array,
            actionText: g().string,
            onAddComment: g().func,
            parentId: g().number,
        }),
            (nl.defaultProps = {
                comments: [],
                actionText: null,
                onAddComment: () => {},
                parentId: null,
            });
        const ol = require('@material-ui/icons/InfoOutlined');
        var al = e.n(ol);
        const ll = (0, fe.defineMessages)({
                loading: {
                    id: 'blsq.treeview.loading',
                    defaultMessage: 'Loading',
                },
                confirm: {
                    id: 'blsq.treeview.search.confirm',
                    defaultMessage: 'Confirm',
                },
                cancel: {
                    id: 'blsq.treeview.search.cancel',
                    defaultMessage: 'Cancel',
                },
                selectSingle: {
                    id: 'blsq.treeview.label.selectSingle',
                    defaultMessage: 'Select an org unit',
                },
                selectMultiple: {
                    id: 'blsq.treeview.label.selectMultiple',
                    defaultMessage: 'Select org unit(s)',
                },
                display: {
                    id: 'blsq.treeview.search.results.label.display',
                    defaultMessage: 'Display',
                },
                resultsLower: {
                    id: 'blsq.treeview.search.results.label.resultsLower',
                    defaultMessage: 'result(s)',
                },
                noOptions: {
                    id: 'blsq.treeview.search.options.label.noOptions',
                    defaultMessage: 'No result found',
                },
                clear: {
                    id: 'blsq.treeview.search.options.label.clear',
                    defaultMessage: 'Clear',
                },
                search: {
                    id: 'blsq.treeview.search.inputLabelObject',
                    defaultMessage: 'Enter search term',
                },
            }),
            il = require('react-query');
        function sl(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function cl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? sl(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : sl(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const ul = [5, 10, 20, 30, 40, 50],
            dl = ({ resultsCount: e, handleSelect: t, countOptions: r }) =>
                c().createElement(Qo, {
                    rowsPerPageOptions: r,
                    rowsPerPage: e,
                    selectRowsPerPage: t,
                });
        (dl.propTypes = {
            countOptions: (0, m.arrayOf)(m.number),
            resultsCount: m.number,
            handleSelect: m.func,
        }),
            (dl.defaultProps = {
                countOptions: ul,
                handleSelect: () => null,
                resultsCount: ul[2],
            });
        const pl = ({
            classes: e,
            onSelect: t,
            minResultCount: r,
            inputLabelObject: n,
            withSearchButton: o,
            request: a,
            makeDropDownText: l,
            toolTip: i,
        }) => {
            const { formatMessage: u } = Pe(),
                [d, m] = (0, s.useState)(''),
                [g, b] = (0, s.useState)(r),
                [f, h] = (0, s.useState)(!1),
                [y, O] = (0, s.useState)(!1),
                [v, x] = (0, s.useState)(!1),
                {
                    data: E,
                    isLoading: P,
                    isFetching: C,
                } = (({
                    request: e,
                    searchValue: t,
                    resultsCount: r,
                    options: n,
                }) =>
                    (0, il.useQuery)(
                        ['TreeviewSearch', e, t, r],
                        async () => await e(t, r),
                        cl(
                            cl({ initialData: [], retry: !1 }, n),
                            {},
                            { keepPreviousData: !0 },
                        ),
                    ))({
                    request: a,
                    searchValue: d,
                    resultsCount: g,
                    options: { enabled: f && y },
                }),
                j = (0, s.useCallback)(() => {
                    '' !== d && O(!0);
                }, [d]),
                q = c().createElement(al(), {
                    fontSize: 'small',
                    style: { color: qe.palette.mediumGray.main },
                });
            return c().createElement(
                p.Box,
                { className: e.root },
                c().createElement(
                    p.ClickAwayListener,
                    {
                        onClickAway: () => {
                            v || h(!1);
                        },
                    },
                    c().createElement(
                        p.Box,
                        { className: e.container, onFocus: () => h(!0) },
                        c().createElement(
                            p.Box,
                            { className: e.searchBar },
                            c().createElement(Ar, {
                                disabled: P,
                                keyValue: 'orgUnitSearch',
                                onChange: e => {
                                    m(e), O(!1);
                                },
                                value: d,
                                type: 'search',
                                label: u(n),
                                onEnterPressed: () => j(),
                            }),
                            o &&
                                c().createElement(
                                    p.Button,
                                    {
                                        variant: 'contained',
                                        className: e.searchButton,
                                        color: 'primary',
                                        onClick: j,
                                    },
                                    c().createElement(
                                        fe.FormattedMessage,
                                        ll.search,
                                    ),
                                ),
                        ),
                        P &&
                            c().createElement(
                                'div',
                                { className: e.loadingContainer },
                                c().createElement(w, {
                                    fixed: !1,
                                    transparent: !0,
                                    padding: 4,
                                    size: 25,
                                }),
                            ),
                        0 === E.length &&
                            f &&
                            y &&
                            !C &&
                            c().createElement(
                                p.Typography,
                                {
                                    variant: 'body2',
                                    align: 'center',
                                    className: e.noResult,
                                },
                                c().createElement(
                                    fe.FormattedMessage,
                                    ll.noOptions,
                                ),
                            ),
                        E.length > 0 &&
                            f &&
                            c().createElement(
                                p.Box,
                                { className: e.listContainer },
                                c().createElement(
                                    p.List,
                                    { className: e.list },
                                    E.map(e =>
                                        c().createElement(
                                            p.ListItem,
                                            {
                                                key: e.id,
                                                button: !0,
                                                onClick: () =>
                                                    (e => {
                                                        t(e), h(!1);
                                                    })(e),
                                                className: 'org-unit-item',
                                            },
                                            c().createElement(p.ListItemText, {
                                                primary: c().createElement(
                                                    p.Typography,
                                                    { type: 'body2' },
                                                    l(e),
                                                ),
                                            }),
                                            i && i(e, q),
                                        ),
                                    ),
                                ),
                                c().createElement(p.Divider, null),
                                c().createElement(
                                    p.Box,
                                    { className: e.resultInfos },
                                    c().createElement(
                                        p.ClickAwayListener,
                                        { onClickAway: () => x(!1) },
                                        c().createElement(
                                            'div',
                                            {
                                                className: e.countContainer,
                                                onFocus: () => x(!0),
                                            },
                                            c().createElement(dl, {
                                                handleSelect: e => {
                                                    b(parseInt(e, 10));
                                                },
                                                resultsCount: g,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                    ),
                ),
            );
        };
        (pl.defaultProps = {
            minResultCount: 50,
            inputLabelObject: ll.search,
            withSearchButton: !1,
            toolTip: null,
            onSelect: () => {},
        }),
            (pl.propTypes = {
                classes: g().object.isRequired,
                onSelect: g().func,
                minResultCount: g().number,
                inputLabelObject: g().object,
                withSearchButton: g().bool,
                request: g().func.isRequired,
                makeDropDownText: g().func.isRequired,
                toolTip: g().func,
            });
        const ml = (0, p.withStyles)(e => ({
                root: { height: e.spacing(9), overflow: 'visible' },
                container: { position: 'relative', zIndex: 1e3 },
                loadingContainer: {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    zIndex: 10,
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                },
                listContainer: {
                    border: `1px solid ${e.palette.ligthGray.border}`,
                    backgroundColor: 'white',
                    borderBottomLeftRadius: e.shape.borderRadius,
                    borderBottomRightRadius: e.shape.borderRadius,
                    boxShadow: '0px 9px 29px -5px rgba(0,0,0,0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                },
                list: { maxHeight: '50vh', overflow: 'auto' },
                noResult: {
                    backgroundColor: 'white',
                    border: `1px solid ${e.palette.ligthGray.border}`,
                    borderBottomLeftRadius: e.shape.borderRadius,
                    borderBottomRightRadius: e.shape.borderRadius,
                    color: e.palette.error.main,
                    height: e.spacing(9),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 9px 29px -5px rgba(0,0,0,0.3)',
                },
                resultInfos: {
                    fontSize: 12,
                    height: e.spacing(6),
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    padding: e.spacing(0, 4),
                },
                countContainer: { marginTop: '7px' },
                iconButton: { height: 25, marginLeft: e.spacing(1) },
                resultsCountInput: {
                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button':
                        { '-webkit-appearance': 'none', margin: 0 },
                    '-moz-appearance': 'textfield',
                    textAlign: 'center',
                },
                searchBar: { display: 'flex', alignItems: 'center' },
                searchButton: { marginLeft: '10px' },
            }))(pl),
            gl = require('@material-ui/icons/ArrowRight');
        var bl = e.n(gl);
        const fl = require('@material-ui/icons/ArrowDropDown');
        var hl = e.n(fl);
        const yl = require('@material-ui/icons/CheckBoxOutlineBlankOutlined');
        var Ol = e.n(yl);
        const vl = require('@material-ui/icons/IndeterminateCheckBox');
        var wl = e.n(vl);
        function xl(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function El(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? xl(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : xl(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Pl = (0, je.makeStyles)(e => ({
                treeItem: {
                    '&.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label':
                        {
                            backgroundColor: e.palette.primary.background,
                            alignItems: 'center',
                            color: e.palette.primary.main,
                        },
                },
                unselectableTreeItem: {
                    '&.MuiTreeItem-root > .MuiTreeItem-content .MuiTreeItem-label':
                        {
                            alignItems: 'center',
                            color: e.palette.mediumGray.main,
                        },
                },
                checkbox: {
                    color: e.palette.mediumGray.main,
                    fontSize: '16px',
                    marginRight: '5px',
                },
            })),
            Cl = ({
                label: e,
                id: t,
                fetchChildrenData: r,
                expanded: n,
                toggleOnLabelClick: o,
                onLabelClick: a,
                data: l,
                withCheckbox: i,
                ticked: u,
                parentsTicked: d,
                scrollIntoView: p,
                allowSelection: m,
                queryOptions: g = {},
            }) => {
                const b = Pl(),
                    f = n.includes(t),
                    h = u.includes(t),
                    y = d.includes(t),
                    O = m(l),
                    { data: v, isLoading: w } = (({
                        request: e,
                        id: t,
                        options: r,
                    }) =>
                        (0, il.useQuery)(
                            ['getChildrenData', e, t],
                            async () => e(t),
                            cl({ retry: !1 }, r),
                        ))({
                        request: r,
                        id: t,
                        options: El(El({}, g), {}, { enabled: f }),
                    }),
                    x = (0, s.useRef)(),
                    E = l.has_children,
                    P = (e, t, r, n) =>
                        c().createElement(
                            'div',
                            {
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    verticalAlign: 'middle',
                                },
                            },
                            ((e, t, r) =>
                                e
                                    ? t
                                        ? c().createElement(Sn(), {
                                              className: b.checkbox,
                                          })
                                        : r
                                        ? c().createElement(wl(), {
                                              className: b.checkbox,
                                          })
                                        : c().createElement(Ol(), {
                                              className: b.checkbox,
                                          })
                                    : null)(t, r, n),
                            e,
                        ),
                    C = (0, s.useCallback)(
                        e => {
                            o || e.preventDefault(), a(t, l, O);
                        },
                        [l, t, a, o, O],
                    );
                return (
                    (0, s.useEffect)(() => {
                        p === t && x.current.scrollIntoView();
                    }, [p, t, x]),
                    f && w
                        ? c().createElement(qn.TreeItem, {
                              classes: {
                                  root: O ? b.treeItem : b.unselectableTreeItem,
                              },
                              ref: x,
                              label: P(e(l), i, h, y),
                              nodeId: t,
                              icon: c().createElement(hl(), {
                                  style: { fontSize: 'large' },
                              }),
                          })
                        : E
                        ? c().createElement(
                              'div',
                              { style: { display: 'flex' } },
                              c().createElement(
                                  qn.TreeItem,
                                  {
                                      classes: {
                                          root: O
                                              ? b.treeItem
                                              : b.unselectableTreeItem,
                                      },
                                      ref: x,
                                      label: P(e(l), i, h, y),
                                      nodeId: t,
                                      collapseIcon: c().createElement(hl(), {
                                          style: { fontSize: '24px' },
                                      }),
                                      expandIcon: c().createElement(bl(), {
                                          style: { fontSize: '24px' },
                                      }),
                                      onLabelClick: C,
                                  },
                                  v &&
                                      f &&
                                      ((j = v)
                                          ? j.map(t =>
                                                c().createElement(Cl, {
                                                    key: `TreeItem ${t.id}`,
                                                    label: e,
                                                    id: t.id,
                                                    fetchChildrenData: r,
                                                    expanded: n,
                                                    toggleOnLabelClick: o,
                                                    onLabelClick: a,
                                                    data: t,
                                                    withCheckbox: i,
                                                    ticked: u,
                                                    parentsTicked: d,
                                                    scrollIntoView: p,
                                                    allowSelection: m,
                                                    queryOptions: g,
                                                }),
                                            )
                                          : null),
                                  !f && c().createElement('div', null),
                              ),
                          )
                        : E || O
                        ? c().createElement(
                              'div',
                              { style: { display: 'flex' } },
                              c().createElement(qn.TreeItem, {
                                  classes: {
                                      root: O
                                          ? b.treeItem
                                          : b.unselectableTreeItem,
                                  },
                                  ref: x,
                                  label: P(e(l), i, h),
                                  nodeId: t,
                                  collapseIcon: c().createElement(hl(), {
                                      style: { fontSize: '24px' },
                                  }),
                                  expandIcon: c().createElement(bl(), {
                                      style: { fontSize: '24px' },
                                  }),
                                  onLabelClick: C,
                              }),
                          )
                        : null
                );
                var j;
            };
        (Cl.propTypes = {
            label: m.func.isRequired,
            id: m.string.isRequired,
            fetchChildrenData: m.func,
            expanded: (0, m.arrayOf)(m.string),
            toggleOnLabelClick: m.bool,
            data: m.object.isRequired,
            onLabelClick: m.func,
            withCheckbox: m.bool,
            ticked: (0, m.oneOfType)([m.string, m.array]),
            parentsTicked: m.array,
            scrollIntoView: m.string,
            allowSelection: m.func,
            queryOptions: m.object,
        }),
            (Cl.defaultProps = {
                fetchChildrenData: () => {},
                expanded: [],
                toggleOnLabelClick: !0,
                onLabelClick: () => {},
                withCheckbox: !1,
                ticked: [],
                parentsTicked: [],
                scrollIntoView: null,
                allowSelection: () => !0,
                queryOptions: {},
            });
        const jl = (0, je.makeStyles)(e => ({
                root: {
                    color: e.palette.gray.main,
                    backgroundColor: e.palette.ligthGray.main,
                    borderRadius: '7px',
                    maxHeight: '60vh',
                    overflowY: 'scroll',
                },
                isFetching: {
                    color: e.palette.gray.main,
                    backgroundColor: e.palette.ligthGray.main,
                    borderRadius: '7px',
                    maxHeight: '60vh',
                    overflowY: 'scroll',
                },
            })),
            ql = ({
                getChildrenData: e,
                getRootData: t,
                label: r,
                multiselect: n,
                expanded: o,
                selected: a,
                onToggle: l,
                toggleOnLabelClick: i,
                onSelect: u,
                onCheckBoxClick: d,
                onLabelClick: m,
                ticked: g,
                parentsTicked: b,
                scrollIntoView: f,
                allowSelection: h,
                queryOptions: y = {},
                childrenQueryOptions: O = {},
            }) => {
                const v = jl(),
                    w = (0, s.useCallback)(e, [e]),
                    { data: x, isFetching: E } = ((e, t = {}) =>
                        (0, il.useQuery)(
                            ['getRootData', e],
                            async () => e(),
                            cl(
                                cl({ retry: !1 }, t),
                                {},
                                { keepPreviousData: !1 },
                            ),
                        ))(t, y),
                    P = (0, s.useCallback)(
                        e =>
                            e
                                ? e.map(e =>
                                      c().createElement(Cl, {
                                          label: r,
                                          id: e.id,
                                          data: e,
                                          key: `RootTreeItem ${e.id}`,
                                          fetchChildrenData: w,
                                          expanded: o,
                                          selected: a,
                                          toggleOnLabelClick: i,
                                          onCheckBoxClick: d,
                                          onLabelClick: m,
                                          withCheckbox: n,
                                          ticked: g,
                                          parentsTicked: b,
                                          scrollIntoView: f,
                                          allowSelection: h,
                                          queryOptions: O,
                                      }),
                                  )
                                : null,
                        [r, w, o, a, i, d, m, n, g, b, f],
                    );
                return c().createElement(
                    qn.TreeView,
                    {
                        classes: E ? { root: v.isFetching } : { root: v.root },
                        expanded: o,
                        selected: a,
                        multiSelect: n,
                        onNodeSelect: (e, t) => {
                            u(t);
                        },
                        onNodeToggle: (e, t) => {
                            l(t);
                        },
                    },
                    !E && x && P(x),
                    E &&
                        c().createElement(
                            p.Box,
                            {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 100,
                            },
                            c().createElement(p.CircularProgress, null),
                        ),
                );
            };
        (ql.propTypes = {
            getChildrenData: m.func,
            getRootData: m.func,
            label: m.func.isRequired,
            multiselect: m.bool,
            toggleOnLabelClick: m.bool,
            expanded: (0, m.arrayOf)(m.string).isRequired,
            onToggle: m.func.isRequired,
            onSelect: m.func,
            onCheckBoxClick: m.func,
            onLabelClick: m.func,
            selected: (0, m.oneOfType)([m.string, (0, m.arrayOf)(m.string)]),
            ticked: (0, m.oneOfType)([m.string, (0, m.arrayOf)(m.string)]),
            parentsTicked: m.array,
            scrollIntoView: m.string,
            allowSelection: m.func,
            queryOptions: m.object,
            childrenQueryOptions: m.object,
        }),
            (ql.defaultProps = {
                getChildrenData: () => {},
                getRootData: () => {},
                multiselect: !1,
                toggleOnLabelClick: !0,
                onSelect: () => {},
                onCheckBoxClick: () => {},
                onLabelClick: () => {},
                selected: void 0,
                ticked: [],
                parentsTicked: [],
                scrollIntoView: null,
                allowSelection: () => !0,
                queryOptions: {},
                childrenQueryOptions: {},
            });
        const kl = e =>
                e
                    ? Array.from(e.entries())
                          .map(e => Array.from(e[1].keys()))
                          .map(e =>
                              e
                                  .map(e => e.toString())
                                  .filter((e, t, r) => e !== r[r.length - 1]),
                          )
                          .flat()
                    : null,
            Sl = ({
                label: e,
                getChildrenData: t,
                getRootData: r,
                toggleOnLabelClick: n,
                onSelect: o,
                minResultCount: a,
                inputLabelObject: l,
                withSearchButton: i,
                request: u,
                makeDropDownText: d,
                toolTip: p,
                parseNodeIds: m,
                onUpdate: g,
                multiselect: b,
                preselected: f,
                preexpanded: h,
                selectedData: y,
                allowSelection: O,
            }) => {
                var v;
                const [w, x] = (0, s.useState)(
                        (e => (e ? (Array.isArray(e) ? e : [e]) : []))(y),
                    ),
                    [E, P] = (0, s.useState)(f || (b ? [] : '')),
                    [C, j] = (0, s.useState)(
                        null !== (v = kl(h)) && void 0 !== v ? v : [],
                    ),
                    [q, k] = (0, s.useState)(null != f ? f : []),
                    [S, T] = (0, s.useState)(null != h ? h : new Map()),
                    [M, I] = (0, s.useState)(Array.isArray(f) ? null : f),
                    B = (0, s.useCallback)(
                        e => {
                            P(e), b && o(e);
                        },
                        [o, b],
                    ),
                    D = (0, s.useCallback)(
                        (e, t, r) => {
                            let n, o, a;
                            var l;
                            r &&
                                ((n = b
                                    ? q.includes(e)
                                        ? q.filter(t => t !== e)
                                        : [...q, e]
                                    : [e]),
                                k(n)),
                                (o = b ? new Map(S) : new Map()),
                                S.has(e)
                                    ? (o.delete(e),
                                      (a =
                                          null !==
                                              (l =
                                                  null == w
                                                      ? void 0
                                                      : w.filter(
                                                            t =>
                                                                t.id !==
                                                                parseInt(e, 10),
                                                        )) && void 0 !== l
                                              ? l
                                              : []))
                                    : (o.set(e, m(t)),
                                      (a = b
                                          ? n.includes(t.id)
                                              ? [...w, t]
                                              : w.filter(
                                                    e =>
                                                        e.id !==
                                                        parseInt(t.id, 10),
                                                )
                                          : [t])),
                                g(n, o, a),
                                T(o),
                                x(a);
                        },
                        [g, q, S, b, w, m],
                    ),
                    R = (0, s.useCallback)(
                        e => {
                            const t = m(e),
                                r = Array.from(t.keys()).map(e => e.toString()),
                                n = r[r.length - 1];
                            if ((r.pop(), b)) {
                                j([...C, ...r]);
                                const e = [...E, n];
                                B(e);
                            } else {
                                j(r);
                                const o = new Map();
                                o.set(n, t), B(n), x([e]), g(n, o, [e]);
                            }
                            I(n);
                        },
                        [m, B, E, g, C, b],
                    );
                return c().createElement(
                    c().Fragment,
                    null,
                    c().createElement(ml, {
                        onSelect: R,
                        minResultCount: a,
                        inputLabelObject: l,
                        withSearchButton: i,
                        request: u,
                        makeDropDownText: d,
                        toolTip: p,
                    }),
                    c().createElement(ql, {
                        label: e,
                        getChildrenData: t,
                        getRootData: r,
                        toggleOnLabelClick: n,
                        selected: E,
                        onSelect: B,
                        expanded: C,
                        onToggle: j,
                        onLabelClick: D,
                        multiselect: b,
                        ticked: q,
                        parentsTicked: kl(S),
                        scrollIntoView: M,
                        allowSelection: O,
                    }),
                );
            };
        function Tl(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Ml(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Tl(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Tl(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        (Sl.propTypes = {
            getChildrenData: m.func,
            getRootData: m.func,
            toggleOnLabelClick: m.bool,
            onSelect: m.func,
            minResultCount: m.number,
            inputLabelObject: m.object,
            withSearchButton: m.bool,
            request: m.func.isRequired,
            makeDropDownText: m.func.isRequired,
            toolTip: m.func,
            parseNodeIds: m.func.isRequired,
            onUpdate: m.func,
            multiselect: m.bool,
            preselected: (0, m.oneOfType)([m.string, m.array]),
            preexpanded: m.any,
            selectedData: (0, m.oneOfType)([m.object, m.array]),
            label: m.func.isRequired,
            allowSelection: m.func,
        }),
            (Sl.defaultProps = {
                getChildrenData: () => {},
                getRootData: () => {},
                toggleOnLabelClick: !0,
                onSelect: () => {},
                minResultCount: 50,
                inputLabelObject: ll.search,
                withSearchButton: !1,
                toolTip: null,
                onUpdate: () => {},
                multiselect: !1,
                preselected: null,
                preexpanded: null,
                selectedData: [],
                allowSelection: () => !0,
            });
        const Il = { display: 'flex', alignItems: 'center' },
            Bl = {
                '&.MuiTreeItem-root:focus > .MuiTreeItem-content .MuiTreeItem-label':
                    { backgroundColor: 'white' },
            },
            Dl = Ml(
                {
                    '& .MuiTreeItem-label': Ml(
                        Ml({}, Il),
                        {},
                        { paddingLeft: '0px' },
                    ),
                },
                Bl,
            ),
            Rl = (0, je.makeStyles)(e => ({
                truncatedTreeview: { color: e.palette.mediumGray.main },
                singleTreeItem: Ml(
                    Ml({}, Dl),
                    {},
                    { color: e.palette.gray.main },
                ),
                truncatedTreeviewItem: Ml(
                    Ml({}, Dl),
                    {},
                    { color: e.palette.mediumGray.main },
                ),
                lastTreeItem: Ml(
                    Ml({ '& .MuiTreeItem-label': Ml({}, Il) }, Bl),
                    {},
                    { color: e.palette.gray.main },
                ),
                removeIconContainer: {
                    paddingLeft: '5px',
                    '& .MuiTreeItem-iconContainer': { display: 'none' },
                },
            })),
            Ll = ({ selectedItems: e, label: t, redirect: r }) => {
                var n;
                const o = Rl(),
                    a = (0, s.useRef)(),
                    l = (e, n) => {
                        if (0 === e.size) return null;
                        const i = new Map(e),
                            s = i.entries().next().value;
                        i.delete(s[0]);
                        const u = ((e, t, r) =>
                            1 === e.size
                                ? r.singleTreeItem
                                : 0 === t.size
                                ? r.lastTreeItem
                                : r.truncatedTreeviewItem)(n, i, o);
                        return c().createElement(
                            qn.TreeItem,
                            {
                                key: s[0].toString() + i.size.toString(),
                                className: u,
                                onIconClick: e => e.preventDefault(),
                                onLabelClick:
                                    ((d = s[0]),
                                    e => {
                                        e.preventDefault(),
                                            new Date() - a.current < 150 &&
                                                r(d);
                                    }),
                                collapseIcon: c().createElement(hl(), {
                                    style: { fontSize: 'large' },
                                }),
                                expandIcon: c().createElement(bl(), {
                                    style: { fontSize: 'large' },
                                }),
                                label: t(s[1]),
                                nodeId: s[0],
                                disabled: !0,
                            },
                            e.size >= 1 ? l(i, n) : null,
                        );
                        var d;
                    },
                    i =
                        null !==
                            (n = Array.from(e.keys()).map(e => e.toString())) &&
                        void 0 !== n
                            ? n
                            : [];
                return c().createElement(
                    qn.TreeView,
                    {
                        onMouseDown: () => {
                            a.current = new Date();
                        },
                        disableSelection: !0,
                        expanded: i,
                        classes: {
                            root: 1 === i.length && o.removeIconContainer,
                        },
                        className: o.truncatedTreeview,
                    },
                    l(e, e),
                );
            };
        (Ll.propTypes = {
            selectedItems: m.any,
            label: m.func.isRequired,
            redirect: m.func,
        }),
            (Ll.defaultProps = { selectedItems: null, redirect: () => null });
        const Nl = e.p + 'locale/en.json',
            Al = e.p + 'locale/fr.json',
            Fl = require('react-visibility-sensor');
        var zl = e.n(Fl);
        class Vl extends s.Component {
            constructor(e) {
                super(e),
                    (this.image = null),
                    (this.state = {
                        image: e.placeholder,
                        isVisible: !1,
                        loading: !0,
                    }),
                    (this.handleVisibilityChange =
                        this.handleVisibilityChange.bind(this)),
                    (this.onLoad = this.onLoad.bind(this)),
                    (this.onError = this.onError.bind(this)),
                    (this.loadImage = this.loadImage.bind(this));
            }
            componentDidUpdate(e) {
                const { src: t, placeholder: r } = this.props;
                t !== e.src &&
                    (this.state.isVisible
                        ? this.loadImage(t)
                        : this.setState({ image: r, loading: !0 }));
            }
            componentWillUnmount() {
                this.image &&
                    ((this.image.onload = null), (this.image.onerror = null));
            }
            handleVisibilityChange(e) {
                this.setState({ isVisible: e }, () => {
                    this.state.loading &&
                        this.state.isVisible &&
                        this.loadImage(this.props.src);
                });
            }
            onLoad() {
                this.setState({ image: this.image.src, loading: !1 });
            }
            onError(e) {
                const { onError: t } = this.props;
                t && t(e);
            }
            loadImage(e) {
                this.image &&
                    ((this.image.onload = null), (this.image.onerror = null));
                const t = new Image();
                (this.image = t),
                    (t.onload = this.onLoad),
                    (t.onerror = this.onError),
                    (t.src = e);
            }
            render() {
                const { image: e, loading: t, isVisible: r } = this.state,
                    { children: n, visibilitySensorProps: o } = this.props;
                if (!n || 'function' != typeof n)
                    throw new Error(
                        'LazyProgressiveImage requires a function as its only child',
                    );
                return c().createElement(
                    zl(),
                    be()({}, o, { onChange: this.handleVisibilityChange }),
                    n(e, t, r),
                );
            }
        }
        (Vl.propTypes = {
            children: g().func,
            onError: g().func,
            placeholder: g().string,
            src: g().string,
            visibilitySensorProps: g().any,
        }),
            (Vl.defaultProps = {
                children: void 0,
                onError: void 0,
                placeholder: void 0,
                src: void 0,
                visibilitySensorProps: void 0,
            });
        const _l = require('react-awesome-query-builder'),
            Hl = require('react-awesome-query-builder/lib/config/material');
        var $l = e.n(Hl);
        const Gl = (0, fe.defineMessages)({
            and: { id: 'blsq.queryBuilder.and', defaultMessage: 'And' },
            or: { id: 'blsq.queryBuilder.or', defaultMessage: 'Or' },
            contains: {
                id: 'blsq.queryBuilder.contains',
                defaultMessage: 'Contains',
            },
            notLike: {
                id: 'blsq.queryBuilder.notLike',
                defaultMessage: 'Not contains',
            },
            startsWith: {
                id: 'blsq.queryBuilder.startsWith',
                defaultMessage: 'Starts with',
            },
            endsWith: {
                id: 'blsq.queryBuilder.endsWith',
                defaultMessage: 'Ends with',
            },
            between: {
                id: 'blsq.queryBuilder.between',
                defaultMessage: 'Between',
            },
            notBetween: {
                id: 'blsq.queryBuilder.notBetween',
                defaultMessage: 'Not between',
            },
            isEmpty: {
                id: 'blsq.queryBuilder.isEmpty',
                defaultMessage: 'Is empty',
            },
            isNotEmpty: {
                id: 'blsq.queryBuilder.isNotEmpty',
                defaultMessage: 'Is not empty',
            },
            isNull: {
                id: 'blsq.queryBuilder.isNull',
                defaultMessage: 'Is null',
            },
            isNotNull: {
                id: 'blsq.queryBuilder.isNotNull',
                defaultMessage: 'Is not null',
            },
            anyIn: { id: 'blsq.queryBuilder.anyIn', defaultMessage: 'Any in' },
            notAnyIn: {
                id: 'blsq.queryBuilder.notAnyIn',
                defaultMessage: 'Not in',
            },
            equals: {
                id: 'blsq.queryBuilder.equals',
                defaultMessage: 'Equals',
            },
            notEquals: {
                id: 'blsq.queryBuilder.notEquals',
                defaultMessage: 'Not equals',
            },
            proximity: {
                id: 'blsq.queryBuilder.proximity',
                defaultMessage: 'Proximity search',
            },
            proximityValueLabel1: {
                id: 'blsq.queryBuilder.proximityValueLabel1',
                defaultMessage: 'Word 1',
            },
            proximityValuePLaceholder1: {
                id: 'blsq.queryBuilder.proximityValuePLaceholder1',
                defaultMessage: 'Enter first word',
            },
            proximityValueLabel2: {
                id: 'blsq.queryBuilder.proximityValueLabel2',
                defaultMessage: 'Word 2',
            },
            proximityValuePLaceholder2: {
                id: 'blsq.queryBuilder.proximityValuePLaceholder2',
                defaultMessage: 'Enter second word',
            },
            proximityOptionsLabel: {
                id: 'blsq.queryBuilder.proximityOptionsLabel',
                defaultMessage: 'Near',
            },
            proximityOptionsPlaceholder: {
                id: 'blsq.queryBuilder.proximityOptionsPlaceholder',
                defaultMessage: 'Select words between',
            },
            some: { id: 'blsq.queryBuilder.some', defaultMessage: 'Some' },
            all: { id: 'blsq.queryBuilder.all', defaultMessage: 'All' },
            none: { id: 'blsq.queryBuilder.none', defaultMessage: 'None' },
            textLabel: {
                id: 'blsq.queryBuilder.textLabel',
                defaultMessage: 'String',
            },
            textPlaceholder: {
                id: 'blsq.queryBuilder.textPlaceholder',
                defaultMessage: 'Enter string',
            },
            texareaLabel: {
                id: 'blsq.queryBuilder.texareaLabel',
                defaultMessage: 'Text',
            },
            textareaPlaceholder: {
                id: 'blsq.queryBuilder.textareaPlaceholder',
                defaultMessage: 'Enter text',
            },
            numberLabel: {
                id: 'blsq.queryBuilder.numberLabel',
                defaultMessage: 'Number',
            },
            numberPlaceholder: {
                id: 'blsq.queryBuilder.numberPlaceholder',
                defaultMessage: 'Enter number',
            },
            numberFromLabel: {
                id: 'blsq.queryBuilder.numberFromLabel',
                defaultMessage: 'Number from',
            },
            numberFromPlaceholder: {
                id: 'blsq.queryBuilder.numberFromPlaceholder',
                defaultMessage: 'Enter number from',
            },
            numberToLabel: {
                id: 'blsq.queryBuilder.numberToLabel',
                defaultMessage: 'Number to',
            },
            numberToPlaceholder: {
                id: 'blsq.queryBuilder.numberToPlaceholder',
                defaultMessage: 'Enter number to',
            },
            sliderPlaceholder: {
                id: 'blsq.queryBuilder.sliderPlaceholder',
                defaultMessage: 'Enter number or move slider',
            },
            date: { id: 'blsq.queryBuilder.date', defaultMessage: 'Date' },
            datePlaceholder: {
                id: 'blsq.queryBuilder.datePlaceholder',
                defaultMessage: 'Enter date',
            },
            dateFrom: {
                id: 'blsq.queryBuilder.dateFrom',
                defaultMessage: 'Date from',
            },
            dateFromPlaceholder: {
                id: 'blsq.queryBuilder.dateFromPlaceholder',
                defaultMessage: 'Enter date from',
            },
            dateTo: {
                id: 'blsq.queryBuilder.dateTo',
                defaultMessage: 'Date to',
            },
            dateToPlaceholder: {
                id: 'blsq.queryBuilder.dateToPlaceholder',
                defaultMessage: 'Enter date to',
            },
            time: { id: 'blsq.queryBuilder.time', defaultMessage: 'Time' },
            timePlaceholder: {
                id: 'blsq.queryBuilder.timePlaceholder',
                defaultMessage: 'Enter time',
            },
            timeFrom: {
                id: 'blsq.queryBuilder.timeFrom',
                defaultMessage: 'Time from',
            },
            timeFromPlaceholder: {
                id: 'blsq.queryBuilder.timeFromPlaceholder',
                defaultMessage: 'Enter time from',
            },
            timeTo: {
                id: 'blsq.queryBuilder.timeTo',
                defaultMessage: 'Time to',
            },
            timeToPlaceholder: {
                id: 'blsq.queryBuilder.timeToPlaceholder',
                defaultMessage: 'Enter time to',
            },
            datetime: {
                id: 'blsq.queryBuilder.datetime',
                defaultMessage: 'Datetime',
            },
            datetimePlaceholder: {
                id: 'blsq.queryBuilder.datetimePlaceholder',
                defaultMessage: 'Enter datetime',
            },
            datetimeFrom: {
                id: 'blsq.queryBuilder.datetimeFrom',
                defaultMessage: 'Datetime from',
            },
            datetimeFromPlaceholder: {
                id: 'blsq.queryBuilder.datetimeFromPlaceholder',
                defaultMessage: 'Enter datetime from',
            },
            datetimeTo: {
                id: 'blsq.queryBuilder.datetimeTo',
                defaultMessage: 'Datetime to',
            },
            datetimeToPlaceholder: {
                id: 'blsq.queryBuilder.datetimeToPlaceholder',
                defaultMessage: 'Enter datetime to',
            },
            yes: { id: 'blsq.queryBuilder.yes', defaultMessage: 'Yes' },
            no: { id: 'blsq.queryBuilder.no', defaultMessage: 'No' },
            fieldCompare: {
                id: 'blsq.queryBuilder.fieldCompare',
                defaultMessage: 'Field to compare',
            },
            fieldPlaceholder: {
                id: 'blsq.queryBuilder.fieldPlaceholder',
                defaultMessage: 'Select field to compare',
            },
            range: { id: 'blsq.queryBuilder.range', defaultMessage: 'Range' },
            rangePlaceholder: {
                id: 'blsq.queryBuilder.rangePlaceholder',
                defaultMessage: 'Select range',
            },
            rangeFrom: {
                id: 'blsq.queryBuilder.rangeFrom',
                defaultMessage: 'Number from',
            },
            rangeFromPlaceholder: {
                id: 'blsq.queryBuilder.rangeFromPlaceholder',
                defaultMessage: 'Enter number from',
            },
            rangeTo: {
                id: 'blsq.queryBuilder.rangeTo',
                defaultMessage: 'Number to',
            },
            rangeToPlaceholder: {
                id: 'blsq.queryBuilder.rangeToPlaceholder',
                defaultMessage: 'Enter number to',
            },
            countEqual: {
                id: 'blsq.queryBuilder.countEqual',
                defaultMessage: 'Count ==',
            },
            countNotEqual: {
                id: 'blsq.queryBuilder.countNotEqual',
                defaultMessage: 'Count !=',
            },
            countLess: {
                id: 'blsq.queryBuilder.countLess',
                defaultMessage: 'Count <',
            },
            countLessOrEqual: {
                id: 'blsq.queryBuilder.countLessOrEqual',
                defaultMessage: 'Count <=',
            },
            countGreater: {
                id: 'blsq.queryBuilder.countGreater',
                defaultMessage: 'Count >',
            },
            countGreaterOrEqual: {
                id: 'blsq.queryBuilder.countGreaterOrEqual',
                defaultMessage: 'Count >=',
            },
            countBetween: {
                id: 'blsq.queryBuilder.countBetween',
                defaultMessage: 'Count between',
            },
            countNotBetween: {
                id: 'blsq.queryBuilder.countNotBetween',
                defaultMessage: 'Count not between',
            },
            selectValue: {
                id: 'blsq.queryBuilder.selectValue',
                defaultMessage: 'Select value',
            },
            values: {
                id: 'blsq.queryBuilder.values',
                defaultMessage: 'Values',
            },
            selectValues: {
                id: 'blsq.queryBuilder.selectValues',
                defaultMessage: 'Select values',
            },
            value: { id: 'blsq.queryBuilder.value', defaultMessage: 'Value' },
            field: { id: 'blsq.queryBuilder.field', defaultMessage: 'Field' },
            function: {
                id: 'blsq.queryBuilder.function',
                defaultMessage: 'Function',
            },
            operator: {
                id: 'blsq.queryBuilder.operator',
                defaultMessage: 'Operator',
            },
            selectField: {
                id: 'blsq.queryBuilder.selectField',
                defaultMessage: 'Select field',
            },
            selectFunction: {
                id: 'blsq.queryBuilder.selectFunction',
                defaultMessage: 'Select function',
            },
            selectOperator: {
                id: 'blsq.queryBuilder.selectOperator',
                defaultMessage: 'Select operator',
            },
            lock: { id: 'blsq.queryBuilder.lock', defaultMessage: 'Lock' },
            locked: {
                id: 'blsq.queryBuilder.locked',
                defaultMessage: 'Locked',
            },
            addGroup: {
                id: 'blsq.queryBuilder.addGroup',
                defaultMessage: 'Add group',
            },
            addCondition: {
                id: 'blsq.queryBuilder.addCondition',
                defaultMessage: 'Add condition',
            },
            addDefaultCase: {
                id: 'blsq.queryBuilder.addDefaultCase',
                defaultMessage: 'Add default condition',
            },
            defaultCase: {
                id: 'blsq.queryBuilder.defaultCase',
                defaultMessage: 'Default:',
            },
            addRule: {
                id: 'blsq.queryBuilder.addRule',
                defaultMessage: 'Add rule',
            },
            addSubRule: {
                id: 'blsq.queryBuilder.addSubRule',
                defaultMessage: 'Add sub rule',
            },
            not: { id: 'blsq.queryBuilder.not', defaultMessage: 'Not' },
            valueSourcesPopupTitle: {
                id: 'blsq.queryBuilder.valueSourcesPopupTitle',
                defaultMessage: 'Select value source',
            },
            cancel: {
                id: 'blsq.queryBuilder.cancel',
                defaultMessage: 'Cancel',
            },
            confirm: {
                id: 'blsq.queryBuilder.confirm',
                defaultMessage: 'Confirm',
            },
            queryTab: {
                id: 'blsq.queryBuilder.queryTab',
                defaultMessage: 'Query',
            },
            jsonTab: {
                id: 'blsq.queryBuilder.jsonTab',
                defaultMessage: 'Json',
            },
            apply: { id: 'blsq.queryBuilder.apply', defaultMessage: 'Apply' },
            invalidJson: {
                id: 'blsq.queryBuilder.invalidJson',
                defaultMessage: 'Invalid JSON',
            },
        });
        function Wl(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Ul(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Wl(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Wl(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Kl = () => {
                const { formatMessage: e } = Pe();
                return (0, s.useMemo)(
                    () =>
                        Ul(
                            Ul({}, $l()),
                            {},
                            {
                                conjunctions: Ul(
                                    Ul({}, $l().conjunctions),
                                    {},
                                    {
                                        AND: Ul(
                                            Ul({}, $l().conjunctions.AND),
                                            {},
                                            { label: 'And' },
                                        ),
                                        OR: Ul(
                                            Ul({}, $l().conjunctions.OR),
                                            {},
                                            { label: 'Or' },
                                        ),
                                    },
                                ),
                                operators: Ul(
                                    Ul({}, $l().operators),
                                    {},
                                    {
                                        like: Ul(
                                            Ul({}, $l().operators.like),
                                            {},
                                            { label: e(Gl.contains) },
                                        ),
                                        not_like: Ul(
                                            Ul({}, $l().operators.not_like),
                                            {},
                                            { label: e(Gl.notLike) },
                                        ),
                                        starts_with: Ul(
                                            Ul({}, $l().operators.starts_with),
                                            {},
                                            { label: e(Gl.startsWith) },
                                        ),
                                        ends_with: Ul(
                                            Ul({}, $l().operators.ends_with),
                                            {},
                                            { label: e(Gl.endsWith) },
                                        ),
                                        between: Ul(
                                            Ul({}, $l().operators.between),
                                            {},
                                            { label: e(Gl.between) },
                                        ),
                                        not_between: Ul(
                                            Ul({}, $l().operators.not_between),
                                            {},
                                            { label: e(Gl.notBetween) },
                                        ),
                                        is_empty: Ul(
                                            Ul({}, $l().operators.is_empty),
                                            {},
                                            { label: e(Gl.isEmpty) },
                                        ),
                                        is_not_empty: Ul(
                                            Ul({}, $l().operators.is_not_empty),
                                            {},
                                            { label: e(Gl.isNotEmpty) },
                                        ),
                                        is_null: Ul(
                                            Ul({}, $l().operators.is_null),
                                            {},
                                            { label: e(Gl.isNull) },
                                        ),
                                        is_not_null: Ul(
                                            Ul({}, $l().operators.is_not_null),
                                            {},
                                            { label: e(Gl.isNotNull) },
                                        ),
                                        select_any_in: Ul(
                                            Ul(
                                                {},
                                                $l().operators.select_any_in,
                                            ),
                                            {},
                                            { label: e(Gl.anyIn) },
                                        ),
                                        select_not_any_in: Ul(
                                            Ul(
                                                {},
                                                $l().operators
                                                    .select_not_any_in,
                                            ),
                                            {},
                                            { label: e(Gl.notAnyIn) },
                                        ),
                                        multiselect_equals: Ul(
                                            Ul(
                                                {},
                                                $l().operators
                                                    .multiselect_equals,
                                            ),
                                            {},
                                            { label: e(Gl.equals) },
                                        ),
                                        multiselect_not_equals: Ul(
                                            Ul(
                                                {},
                                                $l().operators
                                                    .multiselect_not_equals,
                                            ),
                                            {},
                                            { label: e(Gl.notEquals) },
                                        ),
                                        proximity: Ul(
                                            Ul({}, $l().operators.proximity),
                                            {},
                                            {
                                                label: e(Gl.proximity),
                                                valueLabels: [
                                                    {
                                                        label: e(
                                                            Gl.proximityValueLabel1,
                                                        ),
                                                        placeholder: e(
                                                            Gl.proximityValuePLaceholder1,
                                                        ),
                                                    },
                                                    {
                                                        label: e(
                                                            Gl.proximityValueLabel2,
                                                        ),
                                                        placeholder: e(
                                                            Gl.proximityValuePLaceholder2,
                                                        ),
                                                    },
                                                ],
                                                options: Ul(
                                                    Ul(
                                                        {},
                                                        $l().operators.proximity
                                                            .options,
                                                    ),
                                                    {},
                                                    {
                                                        optionLabel: e(
                                                            Gl.proximityOptionsLabel,
                                                        ),
                                                        optionTextBefore: e(
                                                            Gl.proximityOptionsLabel,
                                                        ),
                                                        optionPlaceholder: e(
                                                            Gl.proximityOptionsPlaceholder,
                                                        ),
                                                    },
                                                ),
                                            },
                                        ),
                                        some: Ul(
                                            Ul({}, $l().operators.some),
                                            {},
                                            { label: e(Gl.some) },
                                        ),
                                        all: Ul(
                                            Ul({}, $l().operators.all),
                                            {},
                                            { label: e(Gl.all) },
                                        ),
                                        none: Ul(
                                            Ul({}, $l().operators.none),
                                            {},
                                            { label: e(Gl.none) },
                                        ),
                                    },
                                ),
                                widgets: Ul(
                                    Ul({}, $l().widgets),
                                    {},
                                    {
                                        text: Ul(
                                            Ul({}, $l().widgets.text),
                                            {},
                                            {
                                                valueLabel: e(Gl.textLabel),
                                                valuePlaceholder: e(
                                                    Gl.textPlaceholder,
                                                ),
                                            },
                                        ),
                                        textarea: Ul(
                                            Ul({}, $l().widgets.textarea),
                                            {},
                                            {
                                                valueLabel: e(Gl.texareaLabel),
                                                valuePlaceholder: e(
                                                    Gl.textareaPlaceholder,
                                                ),
                                            },
                                        ),
                                        number: Ul(
                                            Ul({}, $l().widgets.number),
                                            {},
                                            {
                                                valueLabel: e(Gl.numberLabel),
                                                valuePlaceholder: e(
                                                    Gl.numberPlaceholder,
                                                ),
                                                valueLabels: [
                                                    {
                                                        label: e(
                                                            Gl.numberFromLabel,
                                                        ),
                                                        placeholder: e(
                                                            Gl.numberFromPlaceholder,
                                                        ),
                                                    },
                                                    {
                                                        label: e(
                                                            Gl.numberToLabel,
                                                        ),
                                                        placeholder: e(
                                                            Gl.numberToPlaceholder,
                                                        ),
                                                    },
                                                ],
                                            },
                                        ),
                                        slider: Ul(
                                            Ul({}, $l().widgets.slider),
                                            {},
                                            {
                                                valueLabel: e(Gl.numberLabel),
                                                valuePlaceholder: e(
                                                    Gl.sliderPlaceholder,
                                                ),
                                            },
                                        ),
                                        select: Ul(
                                            Ul({}, $l().widgets.select),
                                            {},
                                            {
                                                valueLabel: e(Gl.value),
                                                valuePlaceholder: e(
                                                    Gl.selectValue,
                                                ),
                                            },
                                        ),
                                        multiselect: Ul(
                                            Ul({}, $l().widgets.multiselect),
                                            {},
                                            {
                                                valueLabel: e(Gl.values),
                                                valuePlaceholder: e(
                                                    Gl.selectValues,
                                                ),
                                            },
                                        ),
                                        date: Ul(
                                            Ul({}, $l().widgets.date),
                                            {},
                                            {
                                                dateFormat: 'DD.MM.YYYY',
                                                valueFormat: 'YYYY-MM-DD',
                                                valueLabel: e(Gl.date),
                                                valuePlaceholder: e(
                                                    Gl.datePlaceholder,
                                                ),
                                                valueLabels: [
                                                    {
                                                        label: e(Gl.dateFrom),
                                                        placeholder: e(
                                                            Gl.dateFromPlaceholder,
                                                        ),
                                                    },
                                                    {
                                                        label: e(Gl.dateTo),
                                                        placeholder: e(
                                                            Gl.dateToPlaceholder,
                                                        ),
                                                    },
                                                ],
                                            },
                                        ),
                                        time: Ul(
                                            Ul({}, $l().widgets.time),
                                            {},
                                            {
                                                timeFormat: 'HH:mm',
                                                valueFormat: 'HH:mm:ss',
                                                valueLabel: e(Gl.time),
                                                valuePlaceholder: e(
                                                    Gl.timePlaceholder,
                                                ),
                                                valueLabels: [
                                                    {
                                                        label: e(Gl.timeFrom),
                                                        placeholder: e(
                                                            Gl.timeFromPlaceholder,
                                                        ),
                                                    },
                                                    {
                                                        label: e(Gl.timeTo),
                                                        placeholder: e(
                                                            Gl.timeToPlaceholder,
                                                        ),
                                                    },
                                                ],
                                            },
                                        ),
                                        datetime: Ul(
                                            Ul({}, $l().widgets.datetime),
                                            {},
                                            {
                                                timeFormat: 'HH:mm',
                                                dateFormat: 'DD.MM.YYYY',
                                                valueFormat:
                                                    'YYYY-MM-DD HH:mm:ss',
                                                valueLabel: e(Gl.datetime),
                                                valuePlaceholder: e(
                                                    Gl.datetimePlaceholder,
                                                ),
                                                valueLabels: [
                                                    {
                                                        label: e(
                                                            Gl.datetimeFrom,
                                                        ),
                                                        placeholder: e(
                                                            Gl.datetimeFromPlaceholder,
                                                        ),
                                                    },
                                                    {
                                                        label: e(Gl.datetimeTo),
                                                        placeholder: e(
                                                            Gl.datetimeToPlaceholder,
                                                        ),
                                                    },
                                                ],
                                            },
                                        ),
                                        boolean: Ul(
                                            Ul({}, $l().widgets.boolean),
                                            {},
                                            {
                                                labelYes: e(Gl.yes),
                                                labelNo: e(Gl.no),
                                            },
                                        ),
                                        field: Ul(
                                            Ul({}, $l().widgets.field),
                                            {},
                                            {
                                                valueLabel: e(Gl.fieldCompare),
                                                valuePlaceholder: e(
                                                    Gl.fieldPlaceholder,
                                                ),
                                            },
                                        ),
                                        func: Ul(
                                            Ul({}, $l().widgets.func),
                                            {},
                                            {
                                                valueLabel: e(Gl.function),
                                                valuePlaceholder: e(
                                                    Gl.selectFunction,
                                                ),
                                            },
                                        ),
                                        rangeslider: Ul(
                                            Ul({}, $l().widgets.rangeslider),
                                            {},
                                            {
                                                valueLabel: e(Gl.function),
                                                valuePlaceholder: e(
                                                    Gl.selectFunction,
                                                ),
                                                valueLabels: [
                                                    {
                                                        label: e(Gl.rangeFrom),
                                                        placeholder: e(
                                                            Gl.rangeFromPlaceholder,
                                                        ),
                                                    },
                                                    {
                                                        label: e(Gl.rangeTo),
                                                        placeholder: e(
                                                            Gl.rangeToPlaceholder,
                                                        ),
                                                    },
                                                ],
                                            },
                                        ),
                                    },
                                ),
                                types: Ul(
                                    Ul({}, $l().types),
                                    {},
                                    {
                                        '!group': Ul(
                                            Ul({}, $l().types['!group']),
                                            {},
                                            {
                                                widgets: Ul(
                                                    Ul(
                                                        {},
                                                        $l().types['!group']
                                                            .widgets,
                                                    ),
                                                    {},
                                                    {
                                                        number: Ul(
                                                            Ul(
                                                                {},
                                                                $l().types[
                                                                    '!group'
                                                                ].widgets
                                                                    .number,
                                                            ),
                                                            {},
                                                            {
                                                                opProps: {
                                                                    equal: {
                                                                        label: e(
                                                                            Gl.countEqual,
                                                                        ),
                                                                    },
                                                                    not_equal: {
                                                                        label: e(
                                                                            Gl.countNotEqual,
                                                                        ),
                                                                    },
                                                                    less: {
                                                                        label: e(
                                                                            Gl.countLess,
                                                                        ),
                                                                    },
                                                                    less_or_equal:
                                                                        {
                                                                            label: e(
                                                                                Gl.countLessOrEqual,
                                                                            ),
                                                                        },
                                                                    greater: {
                                                                        label: e(
                                                                            Gl.countGreater,
                                                                        ),
                                                                    },
                                                                    greater_or_equal:
                                                                        {
                                                                            label: e(
                                                                                Gl.countGreaterOrEqual,
                                                                            ),
                                                                        },
                                                                    between: {
                                                                        label: e(
                                                                            Gl.countBetween,
                                                                        ),
                                                                    },
                                                                    not_between:
                                                                        {
                                                                            label: e(
                                                                                Gl.countNotBetween,
                                                                            ),
                                                                        },
                                                                },
                                                            },
                                                        ),
                                                    },
                                                ),
                                            },
                                        ),
                                    },
                                ),
                                settings: Ul(
                                    Ul({}, $l().settings),
                                    {},
                                    {
                                        valueSourcesInfo: Ul(
                                            Ul(
                                                {},
                                                $l().settings.valueSourcesInfo,
                                            ),
                                            {},
                                            {
                                                value: { label: e(Gl.value) },
                                                field: {
                                                    label: e(Gl.field),
                                                    widget: 'field',
                                                },
                                                func: {
                                                    label: e(Gl.function),
                                                    widget: 'func',
                                                },
                                            },
                                        ),
                                        locale: Ul(
                                            Ul({}, $l().settings.locale),
                                            {},
                                            { moment: Za().locale() },
                                        ),
                                        valueLabel: e(Gl.value),
                                        valuePlaceholder: e(Gl.value),
                                        fieldLabel: e(Gl.field),
                                        operatorLabel: e(Gl.operator),
                                        funcLabel: e(Gl.function),
                                        fieldPlaceholder: e(Gl.selectField),
                                        funcPlaceholder: e(Gl.selectFunction),
                                        operatorPlaceholder: e(
                                            Gl.selectOperator,
                                        ),
                                        lockLabel: e(Gl.lock),
                                        lockedLabel: e(Gl.locked),
                                        addGroupLabel: e(Gl.addGroup),
                                        addCaseLabel: e(Gl.addCondition),
                                        addDefaultCaseLabel: e(
                                            Gl.addDefaultCase,
                                        ),
                                        defaultCaseLabel: e(Gl.defaultCase),
                                        addRuleLabel: e(Gl.addRule),
                                        addSubRuleLabel: e(Gl.addSubRule),
                                        valueSourcesPopupTitle: e(
                                            Gl.valueSourcesPopupTitle,
                                        ),
                                    },
                                ),
                            },
                        ),
                    [e],
                );
            },
            Yl = (0, je.makeStyles)(e => ({
                root: {
                    '& .query-builder-container': { padding: '0 !important' },
                    '& .qb-drag-handler, .qb-draggable, .query-builder': {
                        WebkitUserSelect: 'none',
                        KhtmlUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        userSelect: 'none',
                    },
                    '& .rule--header:after': {
                        content: '""',
                        display: 'table',
                        clear: 'both',
                    },
                    '& .group--header,\n.group--footer': {
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        marginTop: '10px',
                        marginBottom: '10px',
                    },
                    '& .query-builder': {
                        overflow: 'hidden',
                        fontFamily:
                            '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontSize: '14px',
                        lineHeight: 1.25,
                        margin: 0,
                    },
                    '& .query-builder *, .query-builder *::before, .query-builder *::after':
                        { boxSizing: 'border-box' },
                    '& body.qb-dragging .ant-tooltip': { display: 'none' },
                    '& .query-builder.qb-dragging': {
                        cursor: [
                            '-webkit-grabbing !important',
                            'grabbing !important',
                        ],
                    },
                    '& .query-builder.qb-dragging button': {
                        pointerEvents: 'none',
                    },
                    '& .group': {
                        background: e.palette.gray.background,
                        border: `1px solid ${e.palette.border.main}`,
                    },
                    '& .rule': {
                        backgroundColor: 'white',
                        border: '1px solid transparent',
                        padding: '10px',
                        flex: 1,
                        display: 'flex',
                    },
                    '& .rule-with-error .rule': { border: '1px solid #e0a1a1' },
                    '& .rule--body--wrapper': {
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    },
                    '& .rule--error': {
                        color: 'red',
                        marginBottom: '-5px',
                        marginTop: '5px',
                    },
                    '& .group-or-rule': {
                        borderRadius: '5px',
                        position: 'relative',
                    },
                    '& .rule_group': {
                        background: 'rgba(255, 252, 242, 0.5)',
                        border: '1px solid #f9f1dd',
                        display: 'flex',
                        paddingLeft: '10px',
                    },
                    '& .qb-draggable': {
                        pointerEvents: 'none',
                        position: 'absolute',
                        opacity: 0.7,
                        zIndex: 1e3,
                    },
                    '& .qb-placeholder': { border: '1px dashed gray' },
                    '& .locked': { border: '1px dashed red' },
                    '& .ant-tooltip-inner': { minHeight: '18px' },
                    '& .ant-slider': { marginBottom: '4px', marginTop: '4px' },
                    '& .ant-slider-with-marks': {
                        marginBottom: '10px',
                        marginTop: '4px',
                    },
                    '& .ant-slider-track': { visibility: 'visible !important' },
                    '& .ant-select-tree-dropdown > div[role=listbox]': {
                        outline: 'none',
                    },
                    '& ul.ant-select-selection__rendered': {
                        marginRight: '11px',
                    },
                    '& .ant-select-item': { minHeight: '22px' },
                    '& .group--children': {
                        paddingLeft: '24px',
                        marginTop: '10px',
                        marginBottom: '10px',
                    },
                    '& .group--children > .group-or-rule-container > .group-or-rule:before':
                        { top: '-4px', borderWidth: '0 0 2px 2px' },
                    '& .group--children > .group-or-rule-container > .group-or-rule::after':
                        { top: '50%', borderWidth: '0 0 0 2px' },
                    '& .group--children > .group-or-rule-container > .group-or-rule::before, .group--children > .group-or-rule-container > .group-or-rule::after':
                        {
                            content: '""',
                            position: 'absolute',
                            left: '-14px',
                            width: '14px',
                            height: 'calc(50% + 8px)',
                            borderColor: '#CCC',
                            borderStyle: 'solid',
                            WebkitBoxSizing: 'border-box',
                            MozBoxSizing: 'border-box',
                            boxSizing: 'border-box',
                        },
                    '& .group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::before':
                        { display: 'none' },
                    '& .group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::after':
                        {
                            borderRadius: '4px 0 0 0',
                            borderWidth: '2px 0 0 2px',
                        },
                    '& .group--children.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::before':
                        { display: 'none' },
                    '& .group--children.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::after':
                        {
                            borderRadius: '4px 0 0 0',
                            borderWidth: '2px 0 0 2px',
                        },
                    '& .group--children > .group-or-rule-container:first-child > .group-or-rule::before':
                        { top: '-12px', height: 'calc(50% + 14px)' },
                    '& .group--children > .group-or-rule-container:last-child > .group-or-rule::before':
                        { borderRadius: '0 0 0 4px' },
                    '& .group--children > .group-or-rule-container:last-child > .group-or-rule::after':
                        { display: 'none' },
                    '& .group--children.hide--line > .group-or-rule-container > .group-or-rule::before, .group--children.hide--line > .group-or-rule-container > .group-or-rule::after':
                        { borderColor: 'rgba(128, 128, 128, 0.1)' },
                    '& .qb-draggable::before, .qb-draggable::after': {
                        display: 'none',
                    },
                    '& .qb-drag-handler': {
                        cursor: ['-webkit-grabbing', 'grabbing'],
                    },
                    '& .group--drag-handler': {
                        marginRight: '8px',
                        position: 'relative',
                        top: '3px',
                    },
                    '& .group--conjunctions .group--drag-handler': {
                        marginLeft: '10px',
                    },
                    '& .group--conjunctions.hide--conj': { opacity: 0.3 },
                    '& .group--actions': {
                        marginLeft: '10px',
                        flex: 1,
                        display: 'flex',
                    },
                    '& .group--actions--tl, .group--actions--bl': {
                        justifyContent: 'flex-start',
                    },
                    '& .group--actions--tl': { marginLeft: '20px' },
                    '& .group--actions--tc, .group--actions--bc': {
                        justifyContent: 'center',
                    },
                    '& .group--actions--tr, .group--actions--br': {
                        justifyContent: 'flex-end',
                    },
                    '& .group--actions .action--DELETE': { marginTop: '-1px' },
                    '& .case_group': { borderWidth: '2px' },
                    '& .switch_group > .group--children > .group-or-rule-container > .group-or-rule::before, .switch_group > .group--children > .group-or-rule-container > .group-or-rule::after':
                        { height: 'calc(50% + 12px)' },
                    '& .case_group--body': {
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '10px',
                        marginBottom: '10px',
                    },
                    '& .case_group--body .case_group--children': {
                        flex: 'auto',
                        marginTop: '0 !important',
                        marginBottom: '0 !important',
                    },
                    '& .case_group--body .case_group--value': {
                        marginTop: '0',
                        marginBottom: '0',
                        marginRight: '10px',
                    },
                    '& .rule_group .group--drag-handler': {
                        alignSelf: 'center',
                    },
                    '& .rule_group .group--field': { alignSelf: 'center' },
                    '& .rule_group .group--actions': {
                        alignSelf: 'center',
                        flex: 0,
                    },
                    '& .rule_group .rule_group--children': {
                        flex: 1,
                        marginTop: '5px',
                        marginBottom: '5px',
                        paddingLeft: '18px',
                    },
                    '& .rule_group .rule_group--children .group-or-rule-container':
                        {
                            marginBottom: '5px',
                            marginTop: '5px',
                            paddingRight: '5px',
                        },
                    '& .rule_group .rule_group--children.one--child': {
                        paddingLeft: '10px',
                    },
                    '& .rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::before, .rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::after':
                        {
                            left: '-10px',
                            width: '10px',
                            height: 'calc(50% + 8px)',
                        },
                    '& .group--header.hide--drag.with--conjs > .group--field--count--rule':
                        { marginLeft: '20px' },
                    '& .rule--header': {
                        marginLeft: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '10px',
                    },
                    '& .rule--drag-handler': {
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '8px',
                    },
                    '& .rule--field, .group--field, .rule--operator, .rule--value, .rule--operator-options, .rule--widget, .widget--widget, .widget--valuesrc, .widget--sep, .operator--options--sep, .rule--before-widget, .rule--after-widget':
                        { display: 'inline-block' },
                    '& .mui .widget--sep, .mui .operator--options--sep, .mui .rule--func--bracket-before, .mui .rule--func--bracket-after, .mui .rule--func--arg-sep':
                        {
                            verticalAlign: 'bottom',
                            alignSelf: 'flex-end',
                            marginBottom: '8px',
                        },
                    '& .mui .rule--operator-options': {
                        verticalAlign: 'bottom',
                    },
                    '& .mui .widget--valuesrc': { verticalAlign: 'bottom' },
                    '& .rule--operator, .widget--widget, .widget--valuesrc, .widget--sep':
                        { marginLeft: '10px' },
                    '& .widget--valuesrc': { marginRight: '-8px' },
                    '& .widget--valuesrc span i': {
                        transform: 'rotate(90deg)',
                    },
                    '& .operator--options--sep': { marginRight: '10px' },
                    '& div.tooltip-inner': { maxWidth: '500px' },
                    '& .rule--field label, .group--field label, .rule--operator label, .widget--widget label':
                        { display: 'block', fontWeight: 'bold' },
                    '& .conjunction': { display: 'inline-block' },
                    '& .conjunction label': {
                        display: 'inline-block',
                        border: '1px solid',
                        cursor: 'pointer',
                        color: 'white',
                        textTransform: 'uppercase',
                        padding: '0.2rem 0.4rem',
                    },
                    '& .conjunction input': { display: 'none' },
                    '& .conjunction[data-state=active] label': {
                        backgroundColor: '#3276b1',
                        borderColor: '#285e8e',
                    },
                    '& .conjunction[data-state=inactive] label': {
                        backgroundColor: '#428bca',
                        borderColor: '#357ebd',
                    },
                    '& .conjunction[data-state=inactive] label:hover': {
                        backgroundColor: '#3276b1',
                        borderColor: '#285e8e',
                    },
                    '& .conjunction:first-child label': {
                        borderRadius: '3px 0 0 3px',
                    },
                    '& .conjunction:last-child label': {
                        borderRadius: '0 3px 3px 0',
                    },
                    '& .conjunction:first-child:last-child': {
                        borderRadius: '3px',
                    },
                    '& .rule--func--wrapper, .rule--func, .rule--func--args, .rule--func--arg, .rule--func--arg-value, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep, .rule--func--arg-label, .rule--func--arg-label-sep':
                        { display: 'inline-block' },
                    '& .rule--func--bracket-before, .rule--func--bracket-after':
                        { marginLeft: '3px', marginRight: '3px' },
                    '& .rule--func--bracket-before': { marginLeft: '5px' },
                    '& .rule--func--arg-value > .rule--widget': {
                        marginLeft: '-10px',
                    },
                    '& .rule--func--arg-sep': {
                        marginLeft: '3px',
                        marginRight: '6px',
                    },
                    '& .rule--func--arg-label-sep': {
                        marginLeft: '1px',
                        marginRight: '6px',
                    },
                    '& .qb-lite .group--drag-handler, .qb-lite .group--actions':
                        { transition: 'opacity 0.2s' },
                    '& .qb-lite .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite .rule_group_ext--drag-handler':
                        { transition: 'padding 0.2s' },
                    '& .qb-lite .group--header:hover .group--header .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite .group--header:hover .group--header .rule_group_ext--drag-handler,\n.qb-lite .group--header:not(:hover) .group--conjunctions .ant-btn:not(.ant-btn-primary),\n.qb-lite .group--header:not(:hover) .rule_group_ext--drag-handler,\n.qb-lite .rule_group:not(:hover) .group--conjunctions .ant-btn:not(.ant-btn-primary),\n.qb-lite .rule_group:not(:hover) .rule_group_ext--drag-handler':
                        {
                            width: '0',
                            padding: '0',
                            overflow: 'hidden',
                            opacity: 0,
                        },
                    '& .qb-lite .widget--valuesrc, .qb-lite .rule--drag-handler, .qb-lite .rule--header':
                        { transition: 'opacity 0.2s' },
                    '& .qb-lite .rule:hover .rule .widget--valuesrc, .qb-lite .rule:hover .rule .rule--drag-handler, .qb-lite .rule:hover .rule .rule--header,\n.qb-lite .rule:not(:hover) .widget--valuesrc,\n.qb-lite .rule:not(:hover) .rule--drag-handler,\n.qb-lite .rule:not(:hover) .rule--header':
                        { opacity: 0 },
                    '& .qb-lite.qb-dragging .widget--valuesrc, .qb-lite.qb-dragging .rule--drag-handler, .qb-lite.qb-dragging .rule--header, .qb-lite.qb-dragging .group--drag-handler, .qb-lite.qb-dragging .group--actions':
                        { opacity: '0 !important' },
                    '& .qb-lite.qb-dragging .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite.qb-dragging .rule_group_ext--drag-handler':
                        {
                            width: '0 !important',
                            padding: '0 !important',
                            overflow: 'hidden !important',
                            opacity: '0 !important',
                        },
                    '& .group-or-rule-container': {
                        marginTop: '10px',
                        marginBottom: '10px',
                        paddingRight: '10px',
                    },
                    '& .group-or-rule-container:first-child': {
                        marginTop: '0px !important',
                    },
                    '& .group-or-rule-container:last-child': {
                        marginBottom: '0px !important',
                    },
                    '& .rule--body.can--shrink--value': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                    '& .rule--body.can--shrink--value .rule--value': {
                        flex: 1,
                    },
                    '& .rule--body.can--shrink--value .rule--value > .rule--widget':
                        { display: 'flex' },
                    '& .rule--body.can--shrink--value .rule--value > .rule--widget .widget--widget':
                        { flex: 1 },
                    '& .rule--body.can--shrink--value .rule--value > .rule--widget > .widget--valuesrc':
                        { display: 'flex', alignItems: 'center' },
                    '& .rule--value > .rule--widget > .widget--valuesrc .anticon':
                        { height: '100%' },
                    '& .rule--value > .rule--widget > .widget--valuesrc .anticon svg':
                        { height: '100%' },
                    '& .svg-inline--fa': { pointerEvents: 'none' },
                    '& .MuiFormControl-root fieldset legend': {
                        fontSize: 0,
                        padding: 0,
                        width: 0,
                    },
                    '& .MuiFormControl-root .MuiSelect-select': {
                        padding: e.spacing(1, 5, 1, 1),
                    },
                    '& .MuiFormControl-root .MuiAutocomplete-inputRoot': {
                        padding: e.spacing(1, 5, 1, 1),
                    },
                    '& .MuiFormControl-root .MuiAutocomplete-endAdornment': {
                        top: 5,
                    },
                    '& .MuiFormControl-root .MuiSelect-icon': { top: 7 },
                    '& .MuiOutlinedInput-input': { padding: '17.5px 14px' },
                    '& .MuiAutocomplete-root': {
                        width: '300px !important',
                        minWidth: '300px !important',
                    },
                },
            }));
        function Jl(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Zl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Jl(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : Jl(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Ql = { id: _l.Utils.uuid(), type: 'group' },
            Xl = ({ logic: e, fields: t, onChange: r }) => {
                const n = Kl(),
                    o = (0, s.useMemo)(
                        () => Zl(Zl({}, n), {}, { fields: t }),
                        [t, n],
                    ),
                    [a, l] = (0, s.useState)(
                        _l.Utils.checkTree(
                            _l.Utils.loadFromJsonLogic(e, o) ||
                                _l.Utils.loadTree(Ql),
                            o,
                        ),
                    ),
                    i = (0, s.useCallback)(
                        (e, t) => {
                            l(e), r(_l.Utils.jsonLogicFormat(e, t));
                        },
                        [r],
                    ),
                    u = Yl();
                return c().createElement(
                    'section',
                    { className: u.root },
                    c().createElement(
                        _l.Query,
                        Zl(
                            Zl({}, o),
                            {},
                            {
                                value: a,
                                onChange: i,
                                renderBuilder: e =>
                                    c().createElement(
                                        'div',
                                        {
                                            className:
                                                'query-builder-container',
                                            style: { padding: '10px' },
                                        },
                                        c().createElement(
                                            'div',
                                            {
                                                className:
                                                    'query-builder qb-lite',
                                            },
                                            c().createElement(
                                                _l.Builder,
                                                Zl({}, e),
                                            ),
                                        ),
                                    ),
                            },
                        ),
                    ),
                );
            },
            ei = (0, fe.defineMessages)({
                clear: {
                    id: 'blsq.treeview.search.options.label.clear',
                    defaultMessage: 'clear',
                },
            }),
            ti = (0, p.makeStyles)(e => ({
                input: {
                    display: 'flex',
                    alignItems: 'center',
                    border: `1px solid ${e.palette.border.main}`,
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingRight: e.spacing(2),
                    paddingLeft: e.spacing(2),
                    borderRadius: e.shape.borderRadius,
                    minHeight: 54,
                    cursor: 'pointer',
                    '&:hover': { borderColor: e.palette.border.hover },
                },
                fixedHeightValue: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '92%',
                },
                value: { paddingRight: '8%' },
                inputLabel: {
                    backgroundColor: 'white',
                    color: e.palette.mediumGray.main,
                },
                clear: {
                    position: 'absolute',
                    right: e.spacing(2),
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
            })),
            ri = ({
                value: e,
                onClick: t,
                dataTestId: r,
                errors: n,
                required: o,
                label: a,
                onClear: l,
                fixedHeight: i = !0,
            }) => {
                const s = ti();
                return c().createElement(
                    p.Box,
                    { mt: 2 },
                    c().createElement(
                        ar,
                        { errors: n },
                        c().createElement(
                            p.InputLabel,
                            {
                                shrink: Boolean(e),
                                required: o,
                                className: s.inputLabel,
                            },
                            a,
                        ),
                        c().createElement(
                            p.Box,
                            { className: s.input, onClick: t, 'data-test': r },
                            c().createElement(
                                p.Typography,
                                {
                                    className: f()(
                                        i && s.fixedHeightValue,
                                        !i && s.value,
                                    ),
                                    component: 'span',
                                },
                                e,
                            ),
                        ),
                        e &&
                            '' !== e &&
                            c().createElement(
                                p.Box,
                                { className: s.clear },
                                c().createElement(At, {
                                    size: 'small',
                                    onClick: l,
                                    icon: 'clear',
                                    tooltipMessage: ei.clear,
                                }),
                            ),
                    ),
                );
            },
            ni = (0, je.makeStyles)(e => ({
                textArea: {
                    width: '100%',
                    minWidth: '100%',
                    minHeight: '100px',
                    padding: e.spacing(2),
                    outline: 'none',
                },
                textAreaError: {
                    borderColor: `${e.palette.error.main} !important`,
                },
            })),
            oi = ({ initialLogic: e, changeLogic: t }) => {
                const { formatMessage: r } = Pe(),
                    n = ni(),
                    [o, a] = (0, s.useState)(JSON.stringify(e)),
                    [l, i] = (0, s.useState)([]);
                return c().createElement(
                    p.Box,
                    { mt: 2, mb: -2 },
                    c().createElement(
                        ar,
                        { errors: l },
                        c().createElement('textarea', {
                            className: f()(
                                n.textArea,
                                l.length > 0 && n.textAreaError,
                            ),
                            onChange: e => {
                                const { value: t } = e.target;
                                a(t);
                                try {
                                    JSON.parse(t), i([]);
                                } catch (e) {
                                    i([r(Gl.invalidJson)]);
                                }
                            },
                            value: o,
                        }),
                    ),
                    c().createElement(
                        p.Box,
                        { mt: 2, display: 'flex', justifyContent: 'flex-end' },
                        c().createElement(
                            p.Button,
                            {
                                disabled:
                                    !o ||
                                    l.length > 0 ||
                                    o === JSON.stringify(e),
                                onClick: () => o && t(JSON.parse(o)),
                                color: 'primary',
                                'data-test': 'apply-button',
                            },
                            r(Gl.apply),
                        ),
                    ),
                );
            },
            ai = za(
                ({
                    label: e,
                    closeDialog: t,
                    isOpen: r,
                    id: n,
                    dataTestId: o,
                    initialLogic: a,
                    fields: l,
                    onChange: i,
                }) => {
                    const { formatMessage: u } = Pe(),
                        [d, m] = (0, s.useState)(a),
                        [g, b] = (0, s.useState)('query');
                    return c().createElement(
                        La,
                        {
                            allowConfirm: !0,
                            titleMessage: e,
                            onConfirm: () => {
                                t(), i(d);
                            },
                            onCancel: () => {
                                t();
                            },
                            maxWidth: 'md',
                            cancelMessage: Gl.cancel,
                            confirmMessage: Gl.confirm,
                            open: r,
                            closeDialog: t,
                            dataTestId: o || '',
                            id: n || '',
                            onClose: () => null,
                        },
                        c().createElement(
                            p.Tabs,
                            {
                                value: g,
                                onChange: (e, t) => {
                                    b(t);
                                },
                            },
                            c().createElement(p.Tab, {
                                value: 'query',
                                label: u(Gl.queryTab),
                            }),
                            c().createElement(p.Tab, {
                                value: 'json',
                                label: u(Gl.jsonTab),
                            }),
                        ),
                        'query' === g &&
                            c().createElement(
                                p.Box,
                                { mt: 2 },
                                c().createElement(Xl, {
                                    logic: d,
                                    fields: l,
                                    onChange: e => {
                                        m(null == e ? void 0 : e.logic);
                                    },
                                }),
                            ),
                        'json' === g &&
                            c().createElement(oi, {
                                initialLogic: d,
                                changeLogic: e => m(e),
                            }),
                    );
                },
                ({
                    label: e,
                    value: t,
                    onClick: r,
                    dataTestId: n,
                    onClear: o,
                }) => {
                    const { formatMessage: a } = Pe();
                    return c().createElement(ri, {
                        onClick: r,
                        value: t,
                        dataTestId: `open-query-builder-${n || 'default'}`,
                        label: a(e),
                        onClear: o,
                        fixedHeight: !1,
                    });
                },
            ),
            li = require('lodash/isEmpty');
        var ii = e.n(li);
        function si(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function ci(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? si(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : si(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const ui = { id: _l.Utils.uuid(), type: 'group' },
            di = (e, t) => {
                var r;
                return (
                    (null === (r = t.find(t => t.items.some(t => t === e))) ||
                    void 0 === r
                        ? void 0
                        : r.color) || 'inherit'
                );
            },
            pi = (e, t) => {
                const r = Kl(),
                    n = (0, s.useCallback)(
                        n => {
                            if (ii()(e) || !n) return '';
                            const o = ci(ci({}, r), {}, { fields: e }),
                                a = _l.Utils.checkTree(
                                    _l.Utils.loadFromJsonLogic(n, o) ||
                                        _l.Utils.loadTree(ui),
                                    o,
                                ),
                                l = (e => {
                                    let t = '';
                                    return (
                                        (t = e
                                            ? JSON.stringify(e, void 0, 2)
                                            : ''),
                                        (t = t.substring(1, t.length - 1)),
                                        '(' === t.charAt(0) &&
                                            ')' === t.charAt(t.length - 1) &&
                                            (t = t.substring(1, t.length - 1)),
                                        t
                                    );
                                })(_l.Utils.queryString(a, o, !0));
                            return t && l
                                ? ((e, t) => {
                                      const r = t.flatMap(e => e.items),
                                          n = new RegExp(
                                              `(\\b${r.join('|')}+\\b)`,
                                              'g',
                                          );
                                      return e
                                          .split(n)
                                          .map((e, r) =>
                                              r % 2 == 0
                                                  ? c().createElement(
                                                        s.Fragment,
                                                        { key: r },
                                                        e,
                                                    )
                                                  : c().createElement(
                                                        'span',
                                                        {
                                                            style: {
                                                                color: di(
                                                                    `${e}`,
                                                                    t,
                                                                ),
                                                            },
                                                            key: r,
                                                        },
                                                        e,
                                                    ),
                                          );
                                  })(l, t)
                                : l;
                        },
                        [e, t, r],
                    );
                return n;
            },
            mi = require('@dnd-kit/core'),
            gi = require('@dnd-kit/sortable'),
            bi = require('@dnd-kit/modifiers'),
            fi = require('@dnd-kit/utilities');
        function hi(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function yi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? hi(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : hi(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Oi = (0, je.makeStyles)(e => ({
                item: {
                    padding: e.spacing(1),
                    backgroundColor: 'white',
                    border: `1px solid ${e.palette.grey[200]}`,
                    borderRadius: 5,
                    marginBottom: e.spacing(1),
                },
                lastItem: { marginBottom: e.spacing(0) },
            })),
            vi = ({ id: e, handle: t, children: r, isLast: n = !1 }) => {
                const o = Oi(),
                    {
                        attributes: a,
                        listeners: l,
                        setNodeRef: i,
                        transform: s,
                        transition: u,
                    } = (0, gi.useSortable)({ id: e }),
                    d = {
                        transform: fi.CSS.Transform.toString(s),
                        transition: u,
                    },
                    p = yi(yi({}, a), l),
                    m = t ? void 0 : p;
                return c().createElement(
                    'li',
                    yi(
                        {
                            ref: i,
                            style: d,
                            className: f()(o.item, n && o.lastItem),
                        },
                        m,
                    ),
                    r(t ? p : void 0),
                );
            },
            wi = (0, fe.defineMessages)({
                noResult: {
                    defaultMessage: 'No result',
                    id: 'blsq.table.noResult',
                },
            }),
            xi = (0, je.makeStyles)(e => ({
                root: {
                    padding: e.spacing(2),
                    textAlign: 'center',
                    backgroundColor: e.palette.gray.background,
                },
            })),
            Ei = () => {
                const { formatMessage: e } = Pe(),
                    t = xi();
                return c().createElement(
                    p.Box,
                    { className: t.root },
                    e(wi.noResult),
                );
            },
            Pi = (0, je.makeStyles)(e => ({
                list: {
                    padding: e.spacing(1),
                    margin: 0,
                    listStyleType: 'none',
                    backgroundColor: e.palette.gray.background,
                },
                draggablelist: {
                    padding: e.spacing(0),
                    margin: 0,
                    listStyleType: 'none',
                },
                draggableItem: {
                    padding: e.spacing(1),
                    backgroundColor: e.palette.grey[200],
                    border: `1px solid ${e.palette.grey[400]}`,
                    borderRadius: 5,
                    boxShadow: '-2px 8px 3px -3px rgba(0,0,0,0.15)',
                },
            })),
            Ci = e => {
                const {
                        items: t,
                        onChange: r,
                        handle: n = !1,
                        disabled: o,
                        RenderItem: a,
                    } = e,
                    [l, i] = (0, s.useState)(),
                    u = Pi(),
                    d = (0, mi.useSensors)(
                        (0, mi.useSensor)(mi.PointerSensor),
                        (0, mi.useSensor)(mi.KeyboardSensor, {
                            coordinateGetter: gi.sortableKeyboardCoordinates,
                        }),
                    ),
                    p = (0, s.useCallback)(
                        e => {
                            i(void 0);
                            const { active: n, over: o } = e;
                            if (o && n.id !== (null == o ? void 0 : o.id)) {
                                const e = t.findIndex(e => e.id === n.id),
                                    a = t.findIndex(e => e.id === o.id),
                                    l = (0, gi.arrayMove)(t, e, a);
                                r(l);
                            }
                        },
                        [t, r],
                    );
                return c().createElement(
                    c().Fragment,
                    null,
                    0 === t.length && c().createElement(Ei, null),
                    t.length > 0 &&
                        c().createElement(
                            mi.DndContext,
                            {
                                sensors: d,
                                collisionDetection: mi.closestCenter,
                                onDragEnd: p,
                                onDragStart: ({ active: e }) => {
                                    i(e);
                                },
                                modifiers: [bi.restrictToVerticalAxis],
                            },
                            c().createElement(
                                gi.SortableContext,
                                {
                                    disabled: o,
                                    items: t,
                                    strategy: gi.verticalListSortingStrategy,
                                },
                                c().createElement(
                                    'ul',
                                    { className: u.list },
                                    t.map((e, r) =>
                                        c().createElement(
                                            vi,
                                            {
                                                handle: n,
                                                key: e.id,
                                                id: e.id,
                                                isLast: r + 1 === t.length,
                                            },
                                            t =>
                                                c().createElement(a, {
                                                    item: e,
                                                    index: r,
                                                    handleProps: t,
                                                }),
                                        ),
                                    ),
                                ),
                            ),
                            c().createElement(
                                mi.DragOverlay,
                                null,
                                c().createElement(
                                    'ul',
                                    { className: u.draggablelist },
                                    c().createElement(
                                        'li',
                                        { className: u.draggableItem },
                                        c().createElement(a, {
                                            item: l,
                                            index: -1,
                                        }),
                                    ),
                                ),
                            ),
                        ),
                );
            },
            ji = require('@material-ui/icons/DragIndicator');
        var qi = e.n(ji);
        function ki(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Si(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? ki(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : ki(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const Ti = (0, je.makeStyles)(e => ({
                sortCell: { padding: e.spacing(1), width: 20 },
            })),
            Mi = e => {
                const t = Ti(),
                    {
                        attributes: r,
                        listeners: n,
                        setNodeRef: o,
                        transform: a,
                        transition: l,
                    } = (0, gi.useSortable)({ id: e.id }),
                    i = {
                        transform: fi.CSS.Transform.toString(a),
                        transition: l,
                    };
                return c().createElement(
                    p.TableRow,
                    { ref: o, style: i },
                    c().createElement(
                        p.TableCell,
                        { align: 'center', className: t.sortCell },
                        c().createElement(
                            p.IconButton,
                            Si(
                                Si(
                                    {
                                        size: 'small',
                                        component: 'span',
                                        disableRipple: !0,
                                    },
                                    r,
                                ),
                                n,
                            ),
                            c().createElement(qi(), null),
                        ),
                    ),
                    e.children,
                );
            },
            Ii = ({ columns: e, item: t }) =>
                c().createElement(
                    c().Fragment,
                    null,
                    e.map(e => {
                        const r = t[e.accessor];
                        return e.Cell
                            ? c().createElement(
                                  p.TableCell,
                                  { key: e.accessor, align: 'center' },
                                  c().createElement(
                                      c().Fragment,
                                      null,
                                      e.Cell({ value: r }),
                                  ),
                              )
                            : c().createElement(
                                  p.TableCell,
                                  { key: e.accessor, align: 'center' },
                                  c().createElement(c().Fragment, null, r),
                              );
                    }),
                ),
            Bi = (0, je.makeStyles)(e => ({
                sortCell: { padding: e.spacing(1), width: 20 },
                headerCell: {
                    borderRight: `2px solid ${e.palette.ligthGray.border}`,
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                    backgroundColor: 'white',
                },
                lastHeaderCell: { borderRight: 'none' },
                hiddenRow: { visibility: 'collapse' },
            })),
            Di = ({ columns: e, hidden: t }) => {
                const r = Bi();
                return c().createElement(
                    p.TableHead,
                    null,
                    c().createElement(
                        p.TableRow,
                        { className: f()(t && r.hiddenRow) },
                        c().createElement(p.TableCell, {
                            className: f()(r.headerCell, r.sortCell),
                        }),
                        e.map((t, n) =>
                            c().createElement(
                                p.TableCell,
                                {
                                    key: t.accessor,
                                    className: f()(
                                        r.headerCell,
                                        n + 1 === e.length && r.lastHeaderCell,
                                    ),
                                },
                                t.Header,
                            ),
                        ),
                    ),
                );
            },
            Ri = (0, je.makeStyles)(e => ({
                draggableRow: {
                    backgroundColor: e.palette.grey[200],
                    boxShadow: '-2px 8px 3px -3px rgba(0,0,0,0.15)',
                },
                hiddenRow: { visibility: 'collapse' },
                sortCell: { padding: e.spacing(1), width: 20 },
            })),
            Li = ({ items: e, activeItem: t, columns: r }) => {
                const n = Ri();
                return c().createElement(
                    p.Table,
                    { size: 'small' },
                    c().createElement(Di, { columns: r, hidden: !0 }),
                    c().createElement(
                        p.TableBody,
                        null,
                        e.map(e =>
                            c().createElement(
                                p.TableRow,
                                {
                                    key: e.id,
                                    className: f()(
                                        n.draggableRow,
                                        (null == t ? void 0 : t.id) !== e.id &&
                                            n.hiddenRow,
                                    ),
                                },
                                c().createElement(
                                    p.TableCell,
                                    { align: 'center', className: n.sortCell },
                                    c().createElement(
                                        p.Box,
                                        { px: '3px', py: '6px' },
                                        c().createElement(qi(), null),
                                    ),
                                ),
                                c().createElement(Ii, { columns: r, item: e }),
                            ),
                        ),
                    ),
                );
            },
            Ni = (0, fe.defineMessages)({
                noResult: {
                    defaultMessage: 'No result',
                    id: 'blsq.table.noResult',
                },
            }),
            Ai = (0, je.makeStyles)(e => ({
                root: { padding: e.spacing(2), textAlign: 'center' },
                cell: { padding: '0 !important' },
            })),
            Fi = ({ colSpan: e }) => {
                const { formatMessage: t } = Pe(),
                    r = Ai();
                return c().createElement(
                    p.TableRow,
                    null,
                    c().createElement(
                        p.TableCell,
                        { colSpan: e, className: r.cell },
                        c().createElement(
                            p.Box,
                            { className: r.root },
                            t(Ni.noResult),
                        ),
                    ),
                );
            },
            zi = (0, je.makeStyles)(e => ({
                table: {
                    '& tr': { backgroundColor: 'rgba(244,244,244,1)' },
                    '& tr:nth-of-type(even)': { backgroundColor: 'white' },
                },
                headerCell: {
                    borderRight: `2px solid ${e.palette.ligthGray.border}`,
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                    backgroundColor: 'white',
                },
                lastHeaderCell: { borderRight: 'none' },
                sortCell: { padding: e.spacing(1), width: 20 },
            })),
            Vi = e => {
                const { items: t, onChange: r, disabled: n, columns: o } = e,
                    [a, l] = (0, s.useState)(),
                    i = zi(),
                    u = (0, mi.useSensors)(
                        (0, mi.useSensor)(mi.PointerSensor),
                        (0, mi.useSensor)(mi.KeyboardSensor, {
                            coordinateGetter: gi.sortableKeyboardCoordinates,
                        }),
                    ),
                    d = (0, s.useCallback)(
                        e => {
                            l(void 0);
                            const { active: n, over: o } = e;
                            if (o && n.id !== (null == o ? void 0 : o.id)) {
                                const e = t.findIndex(e => e.id === n.id),
                                    a = t.findIndex(e => e.id === o.id),
                                    l = (0, gi.arrayMove)(t, e, a);
                                r(l);
                            }
                        },
                        [t, r],
                    );
                return c().createElement(
                    mi.DndContext,
                    {
                        sensors: u,
                        collisionDetection: mi.closestCenter,
                        onDragEnd: d,
                        onDragStart: ({ active: e }) => {
                            l(e);
                        },
                        modifiers: [bi.restrictToVerticalAxis],
                    },
                    c().createElement(
                        gi.SortableContext,
                        {
                            disabled: n,
                            items: t,
                            strategy: gi.verticalListSortingStrategy,
                        },
                        c().createElement(
                            p.Table,
                            { size: 'small', className: i.table },
                            c().createElement(Di, { columns: o }),
                            c().createElement(
                                p.TableBody,
                                null,
                                0 === t.length &&
                                    c().createElement(Fi, {
                                        colSpan: o.length + 1,
                                    }),
                                t.map(e =>
                                    c().createElement(
                                        Mi,
                                        { key: e.id, id: e.id },
                                        c().createElement(Ii, {
                                            columns: o,
                                            item: e,
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    c().createElement(
                        mi.DragOverlay,
                        null,
                        c().createElement(Li, {
                            activeItem: a,
                            columns: o,
                            items: t,
                        }),
                    ),
                );
            };
        function _i(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function Hi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? _i(Object(r), !0).forEach(function (t) {
                          i()(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                      )
                    : _i(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                          );
                      });
            }
            return e;
        }
        const $i = (e, t) =>
                e.map(e =>
                    'object' == typeof e.label && 'id' in e.label
                        ? Hi(Hi({}, e), {}, { label: t(e.label) })
                        : e,
                ),
            Gi = e => {
                const { formatMessage: t } = Pe();
                return $i(e, t);
            },
            Wi = e => Za().unix(e).format('LTS');
        function Ui(e, t = '/charts') {
            return (
                Object.keys(e).forEach(r => {
                    const n = e[r];
                    null != n && '' !== n && (t += `/${r}/${n}`);
                }),
                t
            );
        }
        const Ki = a;
        return t.default;
    })(),
);
//# sourceMappingURL=index.js.map
