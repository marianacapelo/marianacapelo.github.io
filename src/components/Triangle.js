import React, { Component } from 'react';
import './Triangle.css';

export default class Triangle extends Component {

    radians(d) {
        return d * Math.PI / 180;
    };

    render() {

        var h = this.props.height || 100;
        var border_l = this.props.borderLength || 4 ;
        var total_angle = this.props.topAngle || 46;
        var units = this.props.units || "px";

        var angle = total_angle / 2;
        var rotation_angle = 90 - angle;

        var cos = Math.cos(this.radians(angle));
        var tan = Math.tan(this.radians(angle));

        // Define triangle side length - hip - and (half) base length
        var hip = h / cos;
        var b = h * tan; 

        var cos_complement_angle = Math.cos(this.radians(rotation_angle));
        var sin_complement_angle = Math.sin(this.radians(rotation_angle));

        // Calculate border deltas
        // rotation will cause movement of border corners
        // imagine rectangular triangle sitting on top of border width:
        // rect. angular oposed to border and one end of border will make an angle of (90-angle)
        // work with this to find how much the border moved
        // (lifted by triangle length/2 (delta h) and triangle base/2 to the left (delta x)
        var border_delta_h = (cos_complement_angle * border_l)/2;
        var border_delta_x = (sin_complement_angle * border_l)/2; 

        // Calculate base deltas
        // Base position should be allign with left side
        // Left side was rotated - imagine circle with raio = half side size.
        // In xx, the side was moved by a bit:
        // delta_x = raio - cos(complementary angle) * raio
        // plus, we wish to overlap the borders a bit, so subtract to x 1/4 of border delta x 
        var raio = hip / 2;
        var delta_x = raio - ( cos_complement_angle * raio ) ; // - ( border_delta_x / 2 )
        // delta_h = h/2 - border/2 
        // plus, we need to account for the border delta h, so subtract to top 1/4 of border delta y 
        var delta_h = ( h / 2 ) ;// - ( border_l / 2 ) + ( border_delta_h / 2 );

        var border_str = border_l+"px";
        var rotation_angle_str = rotation_angle+"deg";

        var side_style = {
            borderTopWidth: border_str,
            borderTopStyle: 'solid',
            borderRadius: border_str + ' '+border_str,
        };

        var left_style = Object.assign(
            {
                width: ''+hip+units, 
                //borderTopColor: color_left,
                zIndex: '1',
            },
            this.styleRotate("-"+rotation_angle_str),
            side_style
        );

        var right_style =  Object.assign(
            {
                width: ''+hip+units, 
                left: "calc("+b+units+" - "+border_delta_x+"px)",
                //borderTopColor: color_right,
                zIndex: '1',
            },
            this.styleRotate(rotation_angle_str),
            side_style,
        );

        var base_style = Object.assign(
            {
                width: "calc("+( 2 * b) + units + " + " + (border_delta_x / 8 ) +"px)",
                top: "calc("+delta_h+units+" - "+( border_l / 2 ) + "px + "+( border_delta_h / 2 )+"px)",
                left: "calc("+delta_x+units+ " - "+( border_delta_x / 2 )+"px)",
                //borderTopColor: color_bottom
            },
            side_style,
        );

        var wrapping_style = {
            width: (2*b)+units, 
        };

        return (
            <div className="triangle" style={wrapping_style}>
                <div className="side left" style={left_style}></div>
                <div className="side right" style={right_style}></div>
                <div className="side base" style={base_style}></div>
            </div>
        );
    }

    styleRotate(angle) {
        return {
            transform: 'rotate('+angle+')',
            WebkitTransform: 'rotate('+angle+')',
            MozTransform: 'rotate('+angle+')',
            OTransform: 'rotate('+angle+')',
            MsTransform: 'rotate('+angle+')',
        }
    }
}