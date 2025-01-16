import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function FeatureCard({ color, title, icon, description }) {
  return (
    <Card className="rounded-lg shadow-lg shadow-gray-500/10">
      <CardBody className="px-8 text-center">
        <div className={`mx-auto mb-6 grid h-12 w-12 place-items-center rounded-lg bg-${color}-500/10`}>
          {icon}
        </div>
        <Typography variant="h5" className="mb-2" color="blue-gray">
          {title}
        </Typography>
        <Typography className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "gray",
};

FeatureCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
