import React from "react"

import useMediaQuery from "@material-ui/core/useMediaQuery"

import Layout from "../structure/Layout"
import PageHeader from "../components/PageHeader"
import TextButton from "../components/buttons/TextButton"

import Paths from "../constants/Paths"

import { RollOff, FrontEnd, Toter, JunkRemoval } from "../assets/icons/services"

const services = [
  {
    label: "Temporary Roll Off Rental",
    icon: RollOff,
    more: Paths.rollOffDetails,
    schedule: Paths.orderRollOff,
    scheduleText: "Schedule",
  },
  {
    label: "Recurring Commercial Waste Service",
    icon: FrontEnd,
    more: Paths.commDumpsterDetails,
    schedule: Paths.quoteCommercial,
    scheduleText: "Set up service",
  },
  {
    label: "Recurring Residential Waste Service",
    icon: Toter,
    more: Paths.resiDetails,
    schedule: Paths.quoteResi,
    scheduleText: "Set up service",
  },
  {
    label: "Junk Removal",
    icon: JunkRemoval,
    more: Paths.junkRemovalDetails,
    schedule: Paths.quoteJunkRemoval,
    scheduleText: "Receive a quote",
  },
]

const ScheduleAService = (props) => {
  const breakPoint = useMediaQuery("(min-width: 768px)")

  return (
    <Layout
      mainStyles={{ maxWidth: 768, margin: "0 auto" }}
      hideMobileBtns
      title="Schedule A Waste Service"
      description="Schedule A Dumpster Rental, Recurring Commercial Trash And Recycling Dumpster Pickup Or Residential Trash And Recycling Pickup Online."
      pageContext={props.pageContext}
      canonicalPath={props.location.pathname}
    >
      <div>
        <PageHeader
          title="Select A Service"
          subTitle="Experience the difference"
        />

        <div style={styles.headerBreaker} />

        <div
          style={{
            marginBottom: 200,
            padding: breakPoint ? "0 7px" : "0 20px",
            display: breakPoint ? "flex" : null,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {services.map((service) => (
            <div
              key={service.label}
              style={{
                margin: breakPoint ? "0 0 37px" : "0 auto 22px",
                padding: breakPoint ? 10 : "0 0 22px",
                borderRadius: breakPoint ? 4 : 0,
                width: breakPoint ? "50%" : null,
                borderWidth: breakPoint ? 1 : "0 0 1px 0",
                ...styles.itemWrapper,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <div style={styles.iconWrapper}>
                  <service.icon size={39} />
                </div>
                <h3 style={{ margin: 0, flex: 1, paddingRight: 10 }}>
                  {service.label}
                </h3>
              </div>

              <div
                style={{ marginTop: 17, width: "100%", textAlign: "center" }}
              >
                <TextButton to={service.more} styles={{ marginRight: 30 }}>
                  Learn more
                </TextButton>

                <TextButton to={service.schedule}>
                  {service.scheduleText}
                </TextButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

const styles = {
  headerBreaker: {
    height: 12,
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginBottom: 37,
  },
  itemWrapper: {
    maxWidth: 365,
    borderStyle: "solid",
    borderColor: "#D8D8D8",
    display: "flex",
    flexDirection: "column",
  },
  iconWrapper: {
    height: 39,
    width: 71,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
}

export default ScheduleAService
