// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: B7vckeDNfuhFJFpncT3Qs
// Component: rQM4WIfmTVTH

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import NavigationBar from "../../NavigationBar"; // plasmic-import: XiJ-LYZHpBg1/component
import ProjectHeader from "../../ProjectHeader"; // plasmic-import: gqxBWYm9CUp8/component
import ProjectCard from "../../ProjectCard"; // plasmic-import: Qa3zuWmMQ4_Y/component
import ContactSection from "../../ContactSection"; // plasmic-import: ZnYwa_4S7soe/component
import Footer from "../../Footer"; // plasmic-import: 7KA4r2inJnYl/component

import { useScreenVariants as useScreenVariantswIshgf9Gb3QQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wIshgf9GB3qQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: B7vckeDNfuhFJFpncT3Qs/projectcss
import sty from "./PlasmicPremiumSaaSDesign.module.css"; // plasmic-import: rQM4WIfmTVTH/css

import wallpaperjpg4QhrHt8PkAqO from "./images/wallpaperjpg.jpg"; // plasmic-import: 4qhrHT8PkAqO/picture
import studentGae18422981280Jpg5FUvg6WpzTe2 from "./images/studentGae18422981280Jpg.jpg"; // plasmic-import: 5fUvg6WpzTe2/picture
import laptopG9B1Ff63691280JpgASoa85Db6PbR from "./images/laptopG9B1Ff63691280Jpg.jpg"; // plasmic-import: ASoa85db6PbR/picture
import entrepreneurG23179Fc2C1280JpgMw58KAYiIt66 from "./images/entrepreneurG23179Fc2C1280Jpg.jpg"; // plasmic-import: MW58kAYiIt66/picture
import laptopG9A7A99E251920JpgNeeBgUulMsGe from "./images/laptopG9A7A99E251920Jpg.jpg"; // plasmic-import: NEEBgUulMsGE/picture
import abstractBackgroundJpgGDPRsILq2Q4 from "./images/abstractBackgroundJpg.jpg"; // plasmic-import: gD_PRsILq2Q4/picture

createPlasmicElementProxy;

export type PlasmicPremiumSaaSDesign__VariantMembers = {};
export type PlasmicPremiumSaaSDesign__VariantsArgs = {};
type VariantPropType = keyof PlasmicPremiumSaaSDesign__VariantsArgs;
export const PlasmicPremiumSaaSDesign__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPremiumSaaSDesign__ArgsType = {};
type ArgPropType = keyof PlasmicPremiumSaaSDesign__ArgsType;
export const PlasmicPremiumSaaSDesign__ArgProps = new Array<ArgPropType>();

export type PlasmicPremiumSaaSDesign__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  projectHeader?: Flex__<typeof ProjectHeader>;
  h2?: Flex__<"h2">;
  contactSection?: Flex__<typeof ContactSection>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultPremiumSaaSDesignProps {
  className?: string;
}

const $$ = {};

function PlasmicPremiumSaaSDesign__RenderFunc(props: {
  variants: PlasmicPremiumSaaSDesign__VariantsArgs;
  args: PlasmicPremiumSaaSDesign__ArgsType;
  overrides: PlasmicPremiumSaaSDesign__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswIshgf9Gb3QQ()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            className={classNames("__wab_instance", sty.navigationBar)}
          />

          <ProjectHeader
            data-plasmic-name={"projectHeader"}
            data-plasmic-override={overrides.projectHeader}
            className={classNames("__wab_instance", sty.projectHeader)}
          />

          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__pvzam)}
            id={"Services"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__gOKqQ)}
              displayHeight={"700px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: wallpaperjpg4QhrHt8PkAqO,
                fullWidth: 1921,
                fullHeight: 1081,
                aspectRatio: undefined
              }}
            />
          </Stack__>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section___0MuIv)}
            id={"work"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__lwMtl)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__tQepm
                )}
              >
                {"The Client."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__u4MAn
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__vzumB)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3___7Od6Z
                )}
              >
                {"The Problem."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ar9Vw
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__fa9Yv)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3___4NpCz
                )}
              >
                {"The Solution."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3ObbO
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__kTAj)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__meAzm)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__yFBt)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: studentGae18422981280Jpg5FUvg6WpzTe2,
                    fullWidth: 1280,
                    fullHeight: 853,
                    aspectRatio: undefined
                  }}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns__gnnpN)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__rzEa3)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__uIgD)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: laptopG9B1Ff63691280JpgASoa85Db6PbR,
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__ejTJb)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__wtWb)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: entrepreneurG23179Fc2C1280JpgMw58KAYiIt66,
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___4E3MA)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__bNgJ
                  )}
                >
                  {"The Process."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6R6Qa
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__u5UPy)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__xuMfI)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__gwYdY)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: laptopG9A7A99E251920JpgNeeBgUulMsGe,
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__g8NFq)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__ek3As
                  )}
                >
                  {"The Result."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__d1LWa
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section___84UdE)}
              id={"contact"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__n5Zra)}>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"See my all other \nprojects."}
                </h2>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__ldb7H)}
              >
                <div className={classNames(projectcss.all, sty.column__oAltf)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__eBpCq
                    )}
                    image={{
                      src: abstractBackgroundJpgGDPRsILq2Q4,
                      fullWidth: 1920,
                      fullHeight: 1171,
                      aspectRatio: undefined
                    }}
                    link={`/web-visual-design`}
                    title={"Web Visual Design"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__rZ8Yz)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__yJsia
                    )}
                    link={`/project-relaunch`}
                    title={"Project Relaunch"}
                  />
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <ContactSection
            data-plasmic-name={"contactSection"}
            data-plasmic-override={overrides.contactSection}
            className={classNames("__wab_instance", sty.contactSection)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "projectHeader",
    "h2",
    "contactSection",
    "footer"
  ],
  navigationBar: ["navigationBar"],
  projectHeader: ["projectHeader"],
  h2: ["h2"],
  contactSection: ["contactSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  projectHeader: typeof ProjectHeader;
  h2: "h2";
  contactSection: typeof ContactSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPremiumSaaSDesign__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPremiumSaaSDesign__VariantsArgs;
    args?: PlasmicPremiumSaaSDesign__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPremiumSaaSDesign__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPremiumSaaSDesign__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPremiumSaaSDesign__ArgProps,
          internalVariantPropNames: PlasmicPremiumSaaSDesign__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPremiumSaaSDesign__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPremiumSaaSDesign";
  } else {
    func.displayName = `PlasmicPremiumSaaSDesign.${nodeName}`;
  }
  return func;
}

export const PlasmicPremiumSaaSDesign = Object.assign(
  // Top-level PlasmicPremiumSaaSDesign renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    projectHeader: makeNodeComponent("projectHeader"),
    h2: makeNodeComponent("h2"),
    contactSection: makeNodeComponent("contactSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPremiumSaaSDesign
    internalVariantProps: PlasmicPremiumSaaSDesign__VariantProps,
    internalArgProps: PlasmicPremiumSaaSDesign__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Premium SaaS Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPremiumSaaSDesign;
/* prettier-ignore-end */
