import Button from "../../../Components/Common/Button";

export default function StatisticsButton({paragraphOne, paragraphTwo, noHover}) {
  return (
    <Button buttonStyle="secondStyle" noHover={noHover}>
        <p dir="rtl">{paragraphOne}</p>
        <p>{paragraphTwo}</p>
    </Button>
  )
}