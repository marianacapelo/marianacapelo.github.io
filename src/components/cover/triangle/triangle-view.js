import React from 'react'
import './triangle-style.css'

const Triangle = ({
    borderLength,
    height,
    topAngle,
    units = "px",
}) => {

    const radians = (d) => d * Math.PI / 180

    const styleRotate = (angle) => ({
        transform: `rotate(${angle})`,
        WebkitTransform: `rotate(${angle})`,
        MozTransform: `rotate(${angle})`,
        OTransform: `rotate(${angle})`,
        MsTransform: `rotate(${angle})`,
    })

    const h = height || 100;
    const border_l = borderLength || 4;
    const total_angle = topAngle || 46;

    const angle = total_angle / 2;
    const rotation_angle = 90 - angle;

    const cos = Math.cos(radians(angle));
    const tan = Math.tan(radians(angle));

    // Define triangle side length - hip - and (half) base length
    const hip = h / cos;
    const b = h * tan;

    const cos_complement_angle = Math.cos(radians(rotation_angle));
    const sin_complement_angle = Math.sin(radians(rotation_angle));

    // Calculate border deltas
    // rotation will cause movement of border corners
    // imagine rectangular triangle sitting on top of border width:
    // rect. angular oposed to border and one end of border will make an angle of (90-angle)
    // work with this to find how much the border moved
    // (lifted by triangle length/2 (delta h) and triangle base/2 to the left (delta x)
    const border_delta_h = (cos_complement_angle * border_l) / 2;
    const border_delta_x = (sin_complement_angle * border_l) / 2;

    // Calculate base deltas
    // Base position should be allign with left side
    // Left side was rotated - imagine circle with raio = half side size.
    // In xx, the side was moved by a bit:
    // delta_x = raio - cos(complementary angle) * raio
    // plus, we wish to overlap the borders a bit, so subtract to x 1/4 of border delta x 
    const raio = hip / 2;
    const delta_x = raio - (cos_complement_angle * raio); // - ( border_delta_x / 2 )
    // delta_h = h/2 - border/2 
    // plus, we need to account for the border delta h, so subtract to top 1/4 of border delta y 
    const delta_h = (h / 2);// - ( border_l / 2 ) + ( border_delta_h / 2 );

    const border_str = border_l + "px";
    const rotation_angle_str = rotation_angle + "deg";

    const side_style = {
        borderTopWidth: border_str,
        borderTopStyle: 'solid',
        borderRadius: border_str + ' ' + border_str,
    };

    const left_style = Object.assign(
        {
            width: '' + hip + units,
            //borderTopColor: color_left,
            zIndex: '1',
        },
        styleRotate("-" + rotation_angle_str),
        side_style
    );

    const right_style = Object.assign(
        {
            width: '' + hip + units,
            left: "calc(" + b + units + " - " + border_delta_x + "px)",
            //borderTopColor: color_right,
            zIndex: '1',
        },
        styleRotate(rotation_angle_str),
        side_style,
    );

    const base_style = Object.assign(
        {
            width: "calc(" + (2 * b) + units + " + " + (border_delta_x / 8) + "px)",
            top: "calc(" + delta_h + units + " - " + (border_l / 2) + "px + " + (border_delta_h / 2) + "px)",
            left: "calc(" + delta_x + units + " - " + (border_delta_x / 2) + "px)",
            //borderTopColor: color_bottom
        },
        side_style,
    );

    const wrapping_style = {
        width: (2 * b) + units,
    };

    return (
        <div className="triangle" style={wrapping_style}>
            <div className="side left" style={left_style}></div>
            <div className="side right" style={right_style}></div>
            <div className="side base" style={base_style}></div>
        </div>
    );
}

export default Triangle