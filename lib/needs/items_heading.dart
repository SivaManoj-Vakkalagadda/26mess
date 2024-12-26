import 'package:flutter/material.dart';
import 'home_screen_styles.dart';

class MealHeading extends StatelessWidget {
  final String _time;

  MealHeading(this._time);

  @override
  Widget build(BuildContext context) {
    return Container(
      // color: Colors.orangeAccent,
      child: Center(
        child: Text(
          _time,
          style: headerTextStyle,
        ),
      ),
    );
  }
}

class ItemsHeading extends StatelessWidget {
  final String _schedule;

  ItemsHeading(this._schedule);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: cellPadding,
      decoration: headerBoxDecoration.copyWith(
        color: const Color.fromARGB(
            255, 118, 189, 246), // Move the color into the decoration
      ),
      child: Text(
        _schedule,
        textAlign: TextAlign.center,
        style: cellTextStyle,
      ),
    );
  }
}

class Item extends StatelessWidget {
  final String _item;

  Item(this._item);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(8.0),
      decoration: cellBoxDecoration.copyWith(
        color: const Color.fromARGB(
            255, 208, 237, 247), // Move the color into the decoration
      ),
      child: Text(
        _item,
        textAlign: TextAlign.center,
      ),
    );
  }
}
